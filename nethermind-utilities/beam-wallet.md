# Beam钱包

## 说明

Beam Wallet是以太坊钱包的概念证明，它具有一个控制台UI，使用户可以利用Beam同步的力量。 Beam Wallet运行时没有任何外部依赖项 \(它会在后台自动启动Nethermind节点\)，并允许在启动后仅5分钟即可检查帐户余额并在主网上进行简单的交易。

## 下载并运行

您可以在**此处**找到Beam钱包 \(包含在标准的Nethermind软件包中\)  [https://downloads.nethermind.io/](https://downloads.nethermind.io/).

根据操作系统选择合适的软件包并下载。

### **先决条件**

#### Linux

#### **- Ubuntu**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_已在Ubuntu 20.04 LTS和18.04 LTS上测试_

#### **- Debian**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/debian/$(lsb_release -rs | cut -d. -f1)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_在Debian 10上测试\（9不起作用\）_

#### **- CentOS**

```text
# Install dependencies
sudo yum install --enablerepo=PowerTools -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so 
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_在CentOS 8上测试_

#### **- Fedora**

```text
# Install dependencies
sudo dnf install -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_在Fedora 32上测试_

#### Mac

* 安装 deps `brew install gmp snappy lz4 zstd`
* 此外，如果您在启动`brew install rocksdb`时遇到问题

## 运行应用程序

要运行应用程序，请打开** Nethermind.BeamWallet **文件。

{% hint style="warning" %}
**Mac**

如果您的操作系统是macOS，您将被要求在您的**系统首选项-&gt;安全和隐私**中**两次对于Nethermind.BeamWallet和Nethermind.Runner允许访问**
{% endhint %}

启动后，您应该可以看到以下窗口：

\(应用程序的颜色可能与图片中显示的颜色有所不同-这取决于您的命令行设置。\)

* 第一步，选择网络。

![](../.gitbook/assets/image%20%28129%29.png)

* 使用TAB键或上下箭头键从**Create new account** （建立新帐户）或 **Provide an address**（提供地址）两个选项中选一个。

![](../.gitbook/assets/image%20%28131%29.png)

### 已经有帐户了吗？

若已有帐户，就可以使用它，选择 **Provide an address** （提供地址）- 在这种情况下，您将需要：

* **地址**
* **密码**
* **密钥库文件**

{% hint style="warning" %}
**Copy keystore file**

在开始之前，请先将您钱包的密钥库文件复制到** keystore **文件夹中。\(密钥库文件夹的目录在下图中显示\)。 在发送交易之前，必须复制， 否则，解锁您的帐户将失败。
{% endhint %}

### **建立新帐户**

如果您没有帐户，可以使用**Beam钱包**应用程序创建一个。

创建一个新帐户将创建一个密钥库文件。 您可以在** keystore **文件夹中找到密钥库文件。

如果希望将来使用这个帐户，请复制密钥库文件。

![](../.gitbook/assets/image%20%28118%29.png)

### 设定地址

{% tabs %}
{% tab title="Create new account" %}
* 要创建一个帐户，在第一个输入中设置密码，在第二个输入中输入确认密码。

![](../.gitbook/assets/image%20%28123%29.png)

{% hint style="warning" %}
**Passphrase**

**保持安全**

不要丢失密码。 我们无权访问您的密码，因此没有机会找回密码。

**请勿共享**

为了避免您的资金被盗，请勿将您的密码告诉任何人。

**写下来**

设置强密码。 我们建议将其记录在纸上。 如果您丢失了密码，我们将无法为您提供帮助。 您的全部金钱都将消失。
{% endhint %}

* 使用TAB键，移至**OK** 按钮，然后按Enter。
{% endtab %}

{% tab title="Provide an address" %}
* 选择 "Provide an address" （提供地址）选项后，您将看到该窗口：

![](../.gitbook/assets/image%20%28107%29.png)

* 使用TAB键，移至**OK** 按钮，然后按Enter。

![](../.gitbook/assets/image%20%28100%29.png)
{% endtab %}
{% endtabs %}

### 同步

* 片刻之后，标题为 "Syncing... Please wait for the balance." （正在同步...请等待余额。） 应该会更改为您的钱包余额，并且还会出现** BACK **和** TRANSFER **按钮。 此过程可能需要几分钟的时间。

![](../.gitbook/assets/image%20%28124%29.png)

* 首先出现的是您的以太币余额。 如果您对令牌\\(DAI, USDT, USDC\)的余额不感兴趣，可以跳过并继续进行转移。

![](../.gitbook/assets/image%20%28132%29.png)

![](../.gitbook/assets/image%20%28121%29.png)

* 使用TAB键，移至**TRANSFER** 按钮，然后按Enter。

## 进行交易

您将看到另一个窗口，您可以在其中提供进行传输的数据。

* 在第一个输入中，提供要将以太币发送到的**地址**。
* 在下面的输入中，输入您想要转移的以太币的**值**。
* 在最后一个输入中，输入您钱包的**密码**。
* 移至** TRANSFER **按钮，然后按ENTER键。 \(这不是最后一步，系统将要求您确认交易\)

![](../.gitbook/assets/image%20%28122%29.png)

\(示例数据\)

![](../.gitbook/assets/image%20%28116%29.png)

* 在** Transfer **按钮上按Enter之后，，将出现一个带有事务摘要的模式。确认（或不确认）发送事务。

![](../.gitbook/assets/image%20%28130%29.png)

* 下面将列出发送事务的步骤。

![](../.gitbook/assets/image%20%28126%29.png)

## 数据库

在下载的软件包的 **nethermind\_db** 文件夹中找到数据库：

![](../.gitbook/assets/image%20%28113%29.png)

在**nethermind\_db**目录中，您会发现使用Netherming包运行的网络文件夹。

选择您感兴趣的一个。

![](../.gitbook/assets/image%20%28110%29.png)

在里面您将找到示例文件夹

![](../.gitbook/assets/image%20%28108%29.png)





