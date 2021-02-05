# Beam Wallet

## Description

Beam Wallet is a proof of concept Ethereum Wallet with a console UI that lets users harness the power of beam sync. Beam Wallet is running without any external dependencies \(it automatically launches a Nethermind Node in the background\) and allows to check account balances and make simple transactions on mainnet just 5 minutes after launching.

## Download and run

You can find Beam wallet \(which is included in the standard Nethermind package\) **here**: [https://downloads.nethermind.io/](https://downloads.nethermind.io/).

Select the appropriate package based on operating system and download it.

### **Prerequisites**

#### Linux

#### **- Ubuntu**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_Tested on Ubuntu 20.04 LTS and 18.04 LTS_

#### **- Debian**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/debian/$(lsb_release -rs | cut -d. -f1)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_Tested on Debian 10 \(9 not working\)_

#### **- CentOS**

```text
# Install dependencies
sudo yum install --enablerepo=PowerTools -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so 
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_Tested on CentOS 8_

#### **- Fedora**

```text
# Install dependencies
sudo dnf install -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_Tested on Fedora 32_

#### Mac

* Install deps `brew install gmp snappy lz4 zstd`
* Additionally, if you have problems with startup `brew install rocksdb`

## Running application

To run application open **Nethermind.BeamWallet** file.

{% hint style="warning" %}
**Mac**

If your operating system is a macOS you will be asked to **Allow access** in your **System Preferences-&gt;Security & Privacy,** twice - for Nethermind.BeamWallet and Nethermind.Runner.
{% endhint %}

After starting the application you should be able to see this window:

\(Colors of the application may vary from those shown in the pictures - it depends on your command line settings.\)

* The first step is to select a network. 

![](../.gitbook/assets/image%20%28129%29.png)

* Then choose one of the two options **Create new account**  or **Provide an address** using TAB key or Up and Down arrows.

![](../.gitbook/assets/image%20%28131%29.png)

### Already have an account

If you already have and account you can use it by selecting a **Provide an address** option - in that case you will need:

* **your address**
* **your passphrase**
* **your keystore file**

{% hint style="warning" %}
**Copy keystore file**

Before we start, please, copy keystore file of your wallet into the **keystore** folder. \(directory of the keystore folder will be shown in the image below\). It is necessary to properly unlock your account before sending the transaction. Otherwise unlocking your account will be failed.
{% endhint %}

### **Create new account**

If you don't have an account, you can create one using **Beam wallet** application.

Creating a new account creates a keystore file. You can find it in the **keystore** folder.

Copy your keystore file if you wish to use an account in the future.

![](../.gitbook/assets/image%20%28118%29%20%281%29%20%281%29%20%281%29.png)

### Set an address

{% tabs %}
{% tab title="Create new account" %}
* Create an account by providing the passphrase in the first input and confirmation passphrase in the second one.

![](../.gitbook/assets/image%20%28117%29%20%282%29%20%283%29%20%283%29%20%282%29%20%282%29.png)

{% hint style="warning" %}
**Passphrase**

**Keep it safe**

Do not lose your passphrase. We don't have an access to your passphrase so there is no chance of getting it back.

**Do not share it**

Never give your passphrase to anyone. Your founds can be stolen.

**Write it down**

Set a strong passphrase. We recommend writing it down on a paper. If you lose your passphrase we will not be able to help you. Your whole money will be gone.
{% endhint %}

* Using the TAB key, move to the **OK** button and press Enter. 
{% endtab %}

{% tab title="Provide an address" %}
* After choosing "Provide an address" option you will see that window. Provide your wallet address.

![](../.gitbook/assets/image%20%28107%29.png)

* Using the TAB key, move to the **OK** button and press Enter. 

![](../.gitbook/assets/image%20%28100%29.png)
{% endtab %}
{% endtabs %}

### Syncing

* After a while caption "Syncing... Please wait for the balance." should change to your wallet balance and also the **BACK** and **TRANSFER** buttons will appear. This may take a few minutes.

![](../.gitbook/assets/image%20%28124%29.png)

* The first comes your ETH balance. If you are not interested in the balance of your tokens \(DAI, USDT, USDC\), you can skip it and proceed to the transfer.

![](../.gitbook/assets/image%20%28132%29.png)

![](../.gitbook/assets/image%20%28121%29.png)

* Use the TAB key, move to the **TRANSFER** button and press Enter.

## Making transaction

You will see a different window where you can provide data to make a transfer.

* In the first input provide the **address** to which you want to send ETH.
* In the input below enter the **value** of ETH that you want to transfer.
* And in the last input enter the **passphrase** of your wallet.
* Move to the **TRANSFER** button and press ENTER. \(This is not the last step, you will be asked to confirm the transaction.\)

![](../.gitbook/assets/image%20%28122%29.png)

\(Example data\)

![](../.gitbook/assets/image%20%28116%29.png)

* After you press Enter on **Transfer** button, a modal with summary of the transaction will appear. Confirm \(or not\) sending the transaction.

![](../.gitbook/assets/image%20%28130%29.png)

* The steps that will be taken to send the transaction will be listed below.

![](../.gitbook/assets/image%20%28126%29.png)

## Database

You can find database in the folder **nethermind\_db** in the downloaded package:

![](../.gitbook/assets/image%20%28113%29.png)

In **nethermind\_db** directory you will find folders with networks that were run using Netherming package.

Choose the one that interests you.

![](../.gitbook/assets/image%20%28110%29.png)

Inside you will find example folders:

![](../.gitbook/assets/image%20%28108%29.png)





