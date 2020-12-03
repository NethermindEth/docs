# 烟雾测试示例

## 引言

用于生产的软件版本通常包括整个CI / CD流程的一系列测试和构建步骤。在本文中，展示如何结合使用各种监视/基础架构构建工具的潜力，以及如何为项目使用烟雾测试。请注意，本文只是简单的概述，不会涉及特定细节，而是使您可以选择满足项目需要的技术堆栈。

此项目中使用的工具和技术：‌

* [Terraform](https://www.terraform.io/) \(to design the smoke tests infrastructure\)
* [Terragrunt](https://terragrunt.gruntwork.io/) \(to quickly deploy every module with a single command\)
* [Node.js](https://nodejs.org/en/) \(to build backend scripts for smoke tests management\)
* Bash\(为了能够基础设施管理构建简单的脚本\)
* [Svelte/Sapper](https://sapper.svelte.dev/) \(to build a handy UI and keep everything in place\)
* [Portainer ](https://www.portainer.io/)\(to manage dockers from a single point\)
* [Pushgateway/Prometheus](https://prometheus.io/)/[Grafana](https://grafana.com/) \(to consume the node's metrics and monitor them\)

在_Nethermind_中，验证我们应用程序正确运行的核心测试之一是与以太坊主网和许多其他[网络](https://docs.nethermind.io/nethermind/ethereum-client/networks) 的同步测试。由_Nethermind_提供支持，例如Rinkeby，Ropsten，xDai，Sokol等。如果要访问网络的当前状态，通常需要同步以太坊节点。在这示例中，我将测试默认的同步方法`快速同步`，有关更多信息，就在[这里](https://docs.nethermind.io/nethermind/ethereum-client/sync-modes#fast-sync).

## 组件

为了实现这一目标，我们将使用诸如_terraform_及其包装_terragrunt_之类的工具来创建完整的基础架构。每个网络都将在_DigitalOcean_托管的单独虚拟机上进行单独测试，DigitalOcean提供了一个非常容易使用的API。我们还将所有内容打包到一个简单的UI中，该UI可以管理和监视烟雾测试的状态。

首先，我们将为每个网络创建包含 _terraform_ 和 _terragrunt_ 文件的文件夹。在您的app中可能会有一些不同的配置，您应该在单独的环境中测试这些行为。

```text
module/
├── goerli
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── goerli_archive
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── mainnet
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── poacore
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── rinkeby
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── ropsten
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── sokol
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── sokol_archive
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── xdai
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
└── xdai_archive
    ├── main.tf
    ├── terraform.tfvars
    ├── terragrunt.hcl
    └── variables.tf
```

在上述每个文件夹的 [`main.tf`](https://gist.github.com/matilote/c1ec9955edc3c2140f6e52eb092376f8) 文件中，我们描述了 [digitalocean\_droplet ](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/droplet)资源，该资源基本上定义了 `名称，图像，区域，大小`和连接详细信息，这些资源将用于连接和远程执行虚拟机上的命令。我们还定义了在创建时包含一个droplet IP地址的输出，稍后将用于查询和验证同步状态。每个文件夹还包含一个[`terragrunt.hcl`](https://gist.github.com/matilote/18e09273b939d87235babd8e63f1d7eb), [`variables.tf`](https://gist.github.com/matilote/897bbf5ed7bf27e4f1b9dccfb0dbbb40) 和`terraform.tfvars`文件。要了解有关如何配置这些文件的更多信息，请查看以下链接：

* [https://terragrunt.gruntwork.io/docs/getting-started/configuration/](https://terragrunt.gruntwork.io/docs/getting-started/configuration/)
* [https://www.terraform.io/docs/configuration-0-11/variables.html](https://www.terraform.io/docs/configuration-0-11/variables.html)

一旦我们准备好terraform模板，我们将需要一个脚本来为我们创建整个基础架构，这样我们就不必手动进行操作。

首先，我们需要在每个模块中准备好 `terraform.tfvars` 文件。我们可以使用下面的脚本自动实现。您还可以将参数传递给脚本，然后脚本将遍历所有模块并将数据写入文件。

```bash
#!/bin/bash
cd module/

for D in *; do
    if [ -d "${D}" ]; then
        cd "${D}/"
        cat > terraform.tfvars <<EOF 
do_token = "$1"
hostname = "$2"
pvt_key = "$3"
ssh_fingerprint = "$4"
gateway = "$5"
EOF
        cd ..
    fi
done
```

接下来，我们可以使用以下脚本，该脚本也遍历每个模块\(在我们的示例中为以太坊链\)，并设置 `TF_VAR_tag` 变量，该变量定义将运行烟雾测试的Nethermind版本，然后使用 _terragrunt_ 的力量开始创建已经运行了Nethermind节点的虚拟机。

```bash
#!/bin/bash

echo "Running smoke tests for tag $1"
# Run tests for each instance
cd module/
for D in *; do
    if [ -d "${D}" ]; then
        cd "${D}/"
        sed -i '3s/.*/    TF_VAR_tag = "'"$1"'"/' terragrunt.hcl
        cd ..
    fi
done

# Go back to the main dir
cd ..

# Apply to terraform modules
echo "Y" | terragrunt apply-all

echo "Infrastructure created"
```

如果要销毁基础设施，可以使用以下bash脚本：

```bash
#!/bin/bash

echo "Finishing smoke tests for tag $1"

echo "Y" | terragrunt destroy-all

echo "Infrastructure destroyed"
```

## 终极烟雾测试应用

这个项目的UI/后端使用了_Svelte_/_Sapper_,非常强大的Javascript框架来设计。让我们来看看UI。

![](../.gitbook/assets/smoke-ultimate-ui.gif)

该应用程序本身是一个简单的单页应用程序，包含5条路由。主页是一个简易的仪表板，显示每个网络同步进度。稍后我们将查看运行烟雾测试时它如何变化。

在第二个选项卡中，可以设置terraform变量，此格式将触发我们先前描述的脚本，该脚本生成建构`terraform.tfvars`。只需运行一次，因为此数据变化不大。‌

在第三个选项卡是用来管理基础设施。正在进行烟雾测试的当前版本以及应用程序的核心点，即运行同步检查器的按钮\(这将更改状态并更新首页上的仪表板\)。

在第四个选项卡也是一种表单，该表单保存清除Pushgateway指标，查询Etherscan API所需的数据，以获取当前的头部块编号以及在`terraform.tfvars` 中使用的私钥的路径，因为我们将在同步完成或请求时连接到每个VM以获取日志。

太棒了! 我们已经对烟雾测试应用程序的内容有了一些概述。现在让我们一步一步地去看。

创建基础架构可以通过一个按钮触发。适用于我们上面描述的所有_terraform_配置，准备了运行 _Nethermind_ 节点的docker容器，这些容器还被配置为公开JSON RPC协议并将指标推送到我们的Grafana仪表板，以便我们可以在同步期间更详细地控制性能 \(更多内容可以在\[这里\]找到\([https://docs.nethermind.io/nethermind/ethereum-client/metrics/setting-up-local-metrics-infrastracture\)\](https://docs.nethermind.io/nethermind/ethereum-client/metrics/setting-up-local-metrics-infrastracture%29\)\)

![](../.gitbook/assets/creation-infra.gif)

一旦我们的基础架构开始运行，我们就可以启动同步检查器并观察烟雾测试的进度。_node.js_脚本通过JSON RPC，[Etherscan](https://etherscan.io/) 和 [Blockscout](https://blockscout.com/poa/sokol/) 进行查询。

![](../.gitbook/assets/sync-checker.gif)

当同步完成后，这个网络的测试将完成，日志将被提取到运行该应用程序的服务器上，并且虚拟机将被销毁。相应的状态也将显示在仪表板上。

![](../.gitbook/assets/image%20%2879%29.png)

在Tools选项卡上，我们还可以运行 [_Portainer_](https://www.portainer.io/) _\_docker 实例。使用\_Portainer_ ，我们可以管理每台机器上的docker容器，停止、重启，甚至查看日志，所有这些都能从一个地方管理。

![](../.gitbook/assets/portainer.gif)

![](../.gitbook/assets/image%20%2882%29.png)

![](../.gitbook/assets/image%20%2878%29.png)

所有测试通过时，整个基础设施将被自动清理，然后如果需要，我们可以在服务器端检查日志，并查看 _Grafana_ 仪表板以查看节点在整个测试过程中的性能。

![](../.gitbook/assets/image%20%2877%29.png)

如果出现问题并且一个或多个链无法正确同步，我们可以在找到断点后从Tools选项卡快速下载日志以进行进一步调查，从“控制面板”中销毁基础结构，并从Pushgateway清除度量日志。

## 总结

您可以使用许多有用的工具来充分利用快速部署的强大功能，并在预发布阶段监视应用程序。这个项目中使用的工具是我经常使用的不同项目的组合，例如[ 这个项目](https://docs.nethermind.io/nethermind/guides-and-helpers/deploy-nethermind-with-monitoring-stack) 。在我们的案例中，我使用_DigitalOcean_ 作为 _terraform_ 提供商，显然，您可以选择另一种，例如_UpCloud, Google,_或 _AWS_。‌

最具挑战性的事情是设计一个脚本，以正确检查每个链的同步阶段。但是，要不是_node.js_ 和 _Svelte/Sapper_，我们就不能在仪表板上实时显示这些阶段。如果我们不能看到节点上实际发生了什么，那么所有这些都不会那么有用，而这正是监视工具的用武之地 ---通过在指定的 _Grafana_ 仪表板上查看应用程序性能和同步状态，可以从web上的单一点查看实时日志。

拥有UI并不是必须的因为所有操作都可以通过您习惯使用的语言编写的脚本来运行。在此项目中，我们仍然缺少一件事，那就是适当的警报系统，当后端发生问题时，该系统会通过 _Slack,_ 电子邮件, \_\_甚至电话来通知我们。

