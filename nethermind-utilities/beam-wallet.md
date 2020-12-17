# Beam 钱包

## 描述

Beam 钱包是概念证明以太坊钱包，带有一个控制台用户界面，可以让用户使用 Beam 同步。Beam 钱包在运行时没有任何外部依赖项（它会在后台自动启动Nethermind 节点）。Beam 钱包启动 5 分钟后，用户即可检查帐户余额并在主网上进行简单的交易。

## 下载和运行

如需安装 Beam 钱包（包含在标准的 Nethermind 软件包内），请点击**这里**：[https://downloads.nethermind.io/](https://downloads.nethermind.io/)。

请根据操作系统选择合适的软件包下载。

### **必备条件**

#### Linux

#### **- Ubuntu**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_在 Ubuntu 20.04 LTS 和 18.04 LTS 上测试_

#### **- Debian**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/debian/$(lsb_release -rs | cut -d. -f1)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_在 Debian 10 上测试（不适用于 Debian 9）_

#### **- CentOS**

```text
# Install dependencies
sudo yum install --enablerepo=PowerTools -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so 
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_在CentOS 8 上测试_

#### **- Fedora**

```text
# Install dependencies
sudo dnf install -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_在 Fedora 32 上测试_

#### Mac

* 安装依赖项 `brew install gmp snappy lz4 zstd`
* 此外，如果您在启动时遇到问题，请执行 `brew install rocksdb` 命令

## 运行应用程序

如需运行应用程序，请打开 **Nethermind.BeamWallet** 文件。

{% hint style="warning" %}
**Mac**

如果您使用的是 macOS 操作系统，您需要在**系统偏好设置-&gt;安全性与隐私**中**授予 Nethermind.BeamWallet 和 Nethermind.Runner 访问权限**。
{% endhint %}

启动应用程序后，您应该可以看到以下窗口：

（应用程序的颜色可能与图片中所示不同。这取决于您的命令行设置。）

* 首先选择一个网络。

![](../.gitbook/assets/image%20%28129%29.png)

* 使用 Tab 键或上下箭头键，从 **Create new account（创建新账户）**和 **Provide an address（提供地址）**这两个选项中选择一个。

![](../.gitbook/assets/image%20%28131%29.png)

### 已创建账户

如果您之前创建过账户，可选择 **Provide an address（提供地址）**来使用该账户。在这种情况下，您需要提供：

* **您的地址**
* **您的密码**
* **您的密钥库文件**

{% hint style="warning" %}
**Copy keystore file**

在开始之前，请先将您的钱包的密钥库文件复制到**密钥库**文件夹中。（密钥库文件夹的目录如下图所示。）在发送交易之前，必须先完成该操作，否则无法解锁您的帐户。
{% endhint %}

### **创建新帐户**

如果您没有帐户，可以使用**Beam钱包**应用来创建账户。

创建新帐户会创建密钥库文件。您可以在**密钥库**文件夹中找到该密钥库文件。

如果您将来想要使用这个帐户，请复制密钥库文件。

![](../.gitbook/assets/image%20%28118%29%20%281%29.png)

### 设置地址

{% tabs %}
{% tab title="Create new account" %}
* 创建帐户时，请在第一个输入中设置密码，在第二个输入中确认密码。

![](../.gitbook/assets/image%20%28117%29%20%282%29%20%282%29.png)

{% hint style="warning" %}
**Passphrase**

**安全保管**

请保管好您的密码。我们无权访问您的密码。如果您的密码丢失，我们无法帮您找回。

**请勿共享**

为了避免您的资金被盗，请勿将您的密码告诉任何人。

**书面记录**

设置安全系数高的密码。我们建议将密码记录在纸上。 如果您的密码丢失，我们将无法为您提供帮助。您的资金将无法找回。
{% endhint %}

* 使用 Tab 键切换至 **OK** 按钮，然后按回车键。
{% endtab %}

{% tab title="Provide an address" %}
* 选择 “Provide an address（提供地址）”选项后，您将看到以下窗口。请提供您的钱包地址。

![](../.gitbook/assets/image%20%28107%29.png)

* 使用 Tab 键切换至 **OK** 按钮，然后按回车键。

![](../.gitbook/assets/image%20%28100%29.png)
{% endtab %}
{% endtabs %}

### 同步

* 片刻之后，说明文字会从 “Syncing... Please wait for the balance.（正在同步中……请等待余额显示。）” 更改为您的钱包余额，还会出现 **BACK（返回）** 和 **TRANSFER（转账）** 按钮。这一过程可能需要几分钟的时间。

![](../.gitbook/assets/image%20%28124%29.png)

* 首先出现的是您的 ETH 余额。 如果您对您的代币（DAI、USDT、USDC）的余额不感兴趣，可以跳过并继续进行转账。

![](../.gitbook/assets/image%20%28132%29.png)

![](../.gitbook/assets/image%20%28121%29.png)

* 使用 Tab 键切换至 **TRANSFER（转账）** 按钮，然后按回车键。

## 进行交易

您将看到另一个窗口，用来提供转账所需的数据。

* 在第一个输入中，提供用来接收您的 ETH 的**地址**。
* 在第二个输入中，输入您想要转出的 ETH 的**数量**。
* 在最后一个输入中，输入您的钱包的**密码**。
* 切换至 **TRANSFER（转账）**按钮，然后按回车键。（这不是最后一步，您还需要确认交易。）

![](../.gitbook/assets/image%20%28122%29.png)

（示例数据）

![](../.gitbook/assets/image%20%28116%29.png)

* 切换至 **Transfer（转账）**按钮并按回车键后，将出现交易摘要模式框。请确认（或拒绝）发送交易。

![](../.gitbook/assets/image%20%28130%29.png)

* 发送交易的步骤如下所示。

![](../.gitbook/assets/image%20%28126%29.png)

## 数据库

在已下载软件包的 **nethermind\_db** 文件夹中找到数据库：

![](../.gitbook/assets/image%20%28113%29.png)

在 **nethermind\_db** 目录中，您可以找到使用Nethermind 软件包运行的网络的文件夹。

选择一个您感兴趣的。

![](../.gitbook/assets/image%20%28110%29.png)

在该文件夹中，您可以找到示例文件夹：

![](../.gitbook/assets/image%20%28108%29.png)





