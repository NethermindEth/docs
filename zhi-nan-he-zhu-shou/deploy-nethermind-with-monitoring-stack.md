---
description: 快速简便地部署Nethermind客户端和监视堆栈的配方（Grafana / Prometheus / Seq）
---

# 部署Nethermind以太坊客户端带有监控堆栈

下面的教程将指导您完成Nethermind节点部署，以及完整的监视堆栈，其中包括：

* Grafana有一个漂亮的、预加载的仪表板来监视你的Nethermind节点的性能
* Prometheus/Pushgateway用于推送Nethermind客户端生成的度量
* Seq提供一个简单的、可查询的Nethermind客户端日志视图

## 先决条件

* [x] [Terraform v0.12.7](https://www.terraform.io/downloads.html) &lt; 
* [x] [云提供商](cloud-providers/) \(in this tutorial we will be using **Digital Ocean**, the terraform recipe can be configured to use any other provider of your choice UpCloud/AWS/Google etc.\)

## 🛠 配置

首先，下载包含必要文件的存储库

```text
git clone https://github.com/NethermindEth/terraform-nethermind
```

然后转到克隆的目录

```text
cd terraform-nethermind/
```

创建一个`terraform.tfvars` 文件并添加这两个变量

{% tabs %}
{% tab title="terraform.tfvars" %}
```bash
do_token = "Your DigitalOcean token goes here"
pvt_key = "path/to/your/private_ssh_key"
```
{% endtab %}
{% endtabs %}

确保`main.tf` 文件中的`public_key`变量指向您的公钥路径

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

### 如何获得这些变量？ \([跳过此部分](deploy-nethermind-with-monitoring-stack.md#run-the-stack)若已知\)，

#### do\_token

可以在DigitalOcean面板上生成。 首先转到 **API** 管理\（左侧导航面板的底部\）

![](../.gitbook/assets/image%20%2843%29.png)

点击 `Generate New Token`（生成新令牌）按钮

![](../.gitbook/assets/image%20%2847%29.png)

给它一个名称并生成

![](../.gitbook/assets/image%20%2842%29.png)

复制令牌并将其放置在`terraform.tfvars` 文件中

#### pvt\_key

生成ssh密钥，我们将在示例中使用 **ed25519** 算法

```bash
ssh-keygen -t ed25519 -a 100 -f private.key
```

`pvt_key`变量现在将如下所示：

```bash
pvt_key = "./private.key"
```

## 运行堆栈

确认terraform可以初始化，在terraform-templates目录中运行此命令

```bash
terraform init
```

您应该在控制台中看到绿灯

![](../.gitbook/assets/image%20%2850%29.png)

我们在应用和保存之前预览一下我们的计划，以便将来可以使用

```bash
terraform plan -out myplan
```

现在可以为VM / Nethermind节点提供一些基本配置

![](../.gitbook/assets/image%20%2855%29.png)

可在 [此处](../yi-tai-fang-ke-hu-duan/networks.md)找到可用`配置` 的列表

{% hint style="warning" %}
🧯 If you chose to enable JsonRpc \(it will run on port `8545` by default\) make sure that you set up [Firewall rules](../shi-yong-nethermind-de-yi-kai-shi/firewall-configuration.md) either in DigitalOcean or by using Linux `iptables`
{% endhint %}

我们应用以下计划吧，开始部署整个堆栈 \(不应该会超过3分钟\)

```bash
terraform apply myplan
```

等待terraform部署完成，如果一切顺利，您应该会看到

![](../.gitbook/assets/image%20%2854%29.png)

## 探索堆栈

从DigitalOcean面板中获取新Droplet的IP

![](../.gitbook/assets/image%20%2852%29.png)

### Grafana 仪表板

转到`YOUR_DROPLET_IP:3000`

使用 `admin:admin` 凭据登录到Grafana，并根据需要更改密码

![](../.gitbook/assets/image%20%2841%29.png)

转到`YOUR_DROPLET_IP:3000/dashboards`端点

![](../.gitbook/assets/image%20%2840%29.png)

单击**Nethermind**仪表板，您应该会看到含有Nethermind指标的图表

![](../.gitbook/assets/image%20%2848%29.png)

### Prometheus

转到`YOUR_DROPLET_IP:9090`

探索Nethermind度量，使用prometheus syntax进行可视化和分析，在此处找可用度量及其描述的列表:

{% page-ref page="../yi-tai-fang-ke-hu-duan/metrics/modules/" %}

![](../.gitbook/assets/image%20%2851%29.png)

### Pushgateway

转到`YOUR_DROPLET_IP:9091`并验证指标是否正在流入

![](../.gitbook/assets/image%20%2849%29.png)

### Seq

转到 `YOUR_DROPLET_IP:5341`,您将可以查询您的Nethermind客户日志。随意创建一些有用的`信号、查询`或`仪表板`

![](../.gitbook/assets/image%20%2839%29%20%282%29.png)

## 销毁堆栈

使用以下命令销毁您的Terraform堆栈\(由于我们没有为它们设置任何默认值，需要再次提供可变的变量，可以是随机的。希望将来会有所更改。\)

```bash
terraform destroy --auto-approve
```

