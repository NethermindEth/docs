# Beam wallet

## Download

You can find Beam wallet **here**: [https://downloads.nethermind.io/](https://downloads.nethermind.io/).

Select the appropriate package based on operating system and download it.

## Description

**Beam wallet** is a simple console application that allows you easily **make transactions** between two wallets.

### Already have a wallet

You can use your own wallet - in that case you will need your wallet data:

* **address**
* **passphrase**
* **keystore file**

{% hint style="warning" %}
**Copy keystore file**

Before we start, please, copy keystore file of your wallet into the **keystore** folder. It is necessary to properly unlock your account before sending the transaction. Otherwise unlocking your account will be failed.
{% endhint %}

### **Create new wallet**

If you don't have a wallet, you can create one using **Beam wallet** application.

Creating a new wallet creates a keystore file. You can find it in the **keystore** folder.

![](../.gitbook/assets/image%20%28114%29.png)

Copy your keystore file if you wish to use your account in the future.

## Running application

To run application open **Nethermind.BeamWallet** file.

After that you should be able to see this window:

\(Colors of the application may vary from those shown in the pictures - it depends on your command line settings.\)

![](../.gitbook/assets/image%20%2898%29.png)

* Choose one of the two options using TAB key or Up and Down arrows.

### Set an address

{% tabs %}
{% tab title="Create new wallet" %}
**Create new wallet**

![](../.gitbook/assets/image%20%2897%29.png)

* Create a wallet by providing the passphrase in the first input and confirmation passphrase in the second one.

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
### Provide an address

* After choosing "Provide an address" option you will see that window:

![](../.gitbook/assets/image%20%28107%29.png)

* Provide your wallet address then move to the **OK** button and press Enter

![](../.gitbook/assets/image%20%28100%29.png)
{% endtab %}
{% endtabs %}

### Syncing

* After a while caption "Syncing... Please wait for the balance." should change to your wallet balance and also the **BACK** and **TRANSFER** buttons will appear. This may take a few minutes.

![](../.gitbook/assets/image%20%28103%29.png)

* The first comes your ETH balance. If you are not interested in the balance of your tokens \(DAI, USDT, USDC\), you can skip it and proceed to the transfer.

![](../.gitbook/assets/image%20%2899%29.png)

![](../.gitbook/assets/image%20%2896%29.png)

* Use the TAB key, move to the **TRANSFER** button \(or **SKIP GETTING TOKEN BALANCE AND TRANSFER**\) and press Enter.

## Making transaction

You will see a different window where you can provide data to make a transfer.

![](../.gitbook/assets/image%20%2895%29.png)

* In the first input provide the **address** to which you want to send ETH.
* In the input below enter the **value** of ETH that you want to transfer.
* And in the last input enter the **passphrase** of your wallet.
* Move to the **TRANSFER** button and press ENTER. \(This is not the last step, you will be asked to confirm the transaction.\)

![](../.gitbook/assets/image%20%28106%29.png)

* After that, a modal with summary of the transaction will appear. Confirm \(or not\) sending the transaction.

![](../.gitbook/assets/image%20%2894%29.png)

* The steps that will be taken to send the transaction will be listed below.

![](../.gitbook/assets/image%20%28101%29.png)

## Database

You can find database in the folder **nethermind\_db** in the downloaded package:

![](../.gitbook/assets/image%20%28113%29.png)

In **nethermind\_db** directory you will find folders with networks that were run using Netherming package.

Choose the one that interests you

![](../.gitbook/assets/image%20%28110%29.png)

Inside you will find example folders:

![](../.gitbook/assets/image%20%28108%29.png)





