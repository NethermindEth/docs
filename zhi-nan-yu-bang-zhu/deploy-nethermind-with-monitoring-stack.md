---
description: 如何通过 Terraform 快速而简单地部署 Nethermind 客户端和监控堆栈（Grafana/Prometheus/Seq）
---

# 部署带有监控堆栈的 Nethermind 客户端

以下教程将引导您部署 Nethermind 节点及完整的监控堆栈。该监控堆栈包括：

* Grafana 系统，有一个预先加载好的显示面板，可用来监控您的 Nethermind 节点性能。
* Prometheus/Pushgateway 系统，可用来拉取和推送 Nethermind 客户端生成的指标。
* Seq 系统，可用来查看和查询 Nethermind 客户端日志。

## 必备条件

* [x] [Terraform v0.12.7](https://www.terraform.io/downloads.html) &lt; 
* [\[x\] 云提供商](cloud-providers/) \(in this tutorial we will be using **Digital Ocean**, the terraform recipe can be configured to use any other provider of your choice UpCloud/AWS/Google etc.\)

## 🛠 设置

首先，下载包含必要文件的存储库

```text
git clone https://github.com/NethermindEth/terraform-nethermind
```

打开克隆目录

```text
cd terraform-nethermind/
```

创建一个 `terraform.tfvars` 文件并添加以下两个变量

{% tabs %}
{% tab title="terraform.tfvars" %}
```bash
do_token = "Your DigitalOcean token goes here"
pvt_key = "path/to/your/private_ssh_key"
```
{% endtab %}
{% endtabs %}

确保 `main.tf` 文件中的 `public_key` 变量指向您的公钥路径

{% tabs %}
{% tab title="main.tf" %}
```bash
resource "digitalocean_ssh_key" "key" {
  name       = "SSH Key Example for "
  public_key = file("./private.key.pub")
}
```
{% endtab %}
{% endtabs %}

### 如何获得这些变量？（如果您已经了解，可[跳过该部分](deploy-nethermind-with-monitoring-stack.md#run-the-stack)。）

#### do\_token

该变量可以在 DigitalOcean 面板上生成。首先打开 **API**管理（位于左侧导航面板底部）。

![](../.gitbook/assets/image%20%2843%29.png)

点击 `Generate New Token`（生成新令牌）按钮。

![](../.gitbook/assets/image%20%2847%29.png)

赋予其名称并生成令牌。

![](../.gitbook/assets/image%20%2842%29.png)

复制该令牌并将其放入 `terraform.tfvars` 文件。

#### pvt\_key

生成 ssh 密钥（在本例中，我们使用 **ed25519** 算法）。

```bash
ssh-keygen -t ed25519 -a 100 -f private.key
```

`pvt_key` 变量将如下所示：

```bash
pvt_key = "./private.key"
```

## 运行堆栈

确认 Terraform 可以初始化，在 terraform-templates 目录中运行以下命令。

```bash
terraform init
```

您会在控制台中看到一段绿色提示。

![](../.gitbook/assets/image%20%2850%29.png)

在应用和保存前，请先预览您的 Terraform 计划，以便将来使用。

```bash
terraform plan -out myplan
```

现在，您可以为您的 VM/Nethermind 节点提供一些基本配置。

![](../.gitbook/assets/image%20%2855%29.png)

点击[此处](../yi-tai-fang-ke-hu-duan/networks.md)，即可查看可用 `configs` 列表。

{% hint style="warning" %}
🧯 If you chose to enable JsonRpc \(it will run on port `8545` by default\) make sure that you set up [Firewall rules](../nethermind-de-ru-men-zhi-nan/firewall-configuration.md) either in DigitalOcean or by using Linux `iptables`
{% endhint %}

现在您可以应用您的 Terraform 计划，并开始部署整个堆栈（应该不会超过 3 分钟）。

```bash
terraform apply myplan
```

等待 Terraform 部署完成。如果一切顺利，您会看到以下提示：

![](../.gitbook/assets/image%20%2854%29.png)

## 探索堆栈

从 DigitalOcean 面板上获取您的 Droplet 的 IP 地址。

![](../.gitbook/assets/image%20%2852%29.png)

### Grafana 显示面板

前往 `YOUR_DROPLET_IP:3000`。

使用 `admin:admin` 凭证登录到 Grafana。如有需要，可修改密码。

![](../.gitbook/assets/image%20%2841%29.png)

打开 `YOUR_DROPLET_IP:3000/dashboards` 端点。

![](../.gitbook/assets/image%20%2840%29.png)

单击 **Nethermind** 面板。您会看到含有 Nethermind 指标的图表。

![](../.gitbook/assets/image%20%2848%29.png)

### Prometheus

前往 `YOUR_DROPLET_IP:9090`。

探索 Nethermind 指标，并使用 prometheus 语法对其进行可视化分析。点击下方链接，即可查看带有描述的可用指标列表：

{% page-ref page="../yi-tai-fang-ke-hu-duan/metrics/" %}

![](../.gitbook/assets/image%20%2851%29.png)

### Pushgateway

前往 `YOUR_DROPLET_IP:9091` 并验证是否有指标流入。

![](../.gitbook/assets/image%20%2849%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%281%29.png)

### Seq

前往 `YOUR_DROPLET_IP:5341`，即可查询您的Nethermind 客户端日志。您可以随意创建一些有用的 `Signals（标志）、Queries`（查询）或 `Dashboards`（面板）。

![](../.gitbook/assets/image%20%2839%29%20%282%29%20%283%29%20%283%29.png)

## 销毁堆栈

您可以使用以下命令销毁您的 Terraform 堆栈。我们需要提供一些变量（可能是随机的），因为我们还没有为其设置任何默认值。希望将来会有所改变。

```bash
terraform destroy --auto-approve
```

