# Beam wallet

## Description 

**Beam wallet** is a simple console application that allows you in the simple way **make a transaction** between two wallets.

To get started you will need:

* **node address** that you want to connect to,
* your wallet **address**,
* **passphrase** to your wallet,
* wallet **address** to which you want to transfer ETH.

## Running application 

To run application enter in the command line:

```
$ dotnet run
```

After that you should be able to see this window: 

\(Colors of the application may vary from those shown in the pictures - it depends on your command line settings.\)

![](../.gitbook/assets/image%20%2874%29.png)

1\) In the first input you must provide address of the **node** that you want to connect to:

**`http://localhost:8545`**

2\) And in the second input provide **address** of your wallet - the one you want to transfer ETH from.

![](../.gitbook/assets/image%20%2869%29.png)

3\) Using the TAB key, move to the **OK** button and press enter.

![](../.gitbook/assets/image%20%2870%29.png)

After a while caption "Syncing..." should change to your wallet balance and the QUIT and TRANSFER buttons will appear.

![](../.gitbook/assets/image%20%2875%29.png)

4\) And again, using the TAB key, move to the **TRANSFER** and press enter.

## Making transaction

You will see a different window where you can provide data to make the transfer.

![](../.gitbook/assets/image%20%2868%29.png)

5\) In the first input provide the **address** to which you want to send ETH.

6\) Below enter the **value** of ETH that you want to transfer.

7\) And in the last input enter the **passphrase** of your wallet.

8\) Move to the **TRANSFER** button and press ENTER. \(This is not the last step, you will be asked to confirm the transaction.\)

![](../.gitbook/assets/image%20%2867%29.png)

9\) After that, a modal with summary of the transaction will appear. Confirm \(or not\) sending the transaction.

![](../.gitbook/assets/image%20%2872%29.png)

The steps that will be taken to send the transaction will be listed below.

![](../.gitbook/assets/image%20%2871%29.png)

{% hint style="info" %}
If unlocking your account failed - make sure that your Keystore file is located in the **keystore** folder. It is necessary to properly unlock your account before sending the transaction.

In the package with Nethermind.Runner the path of the keystore folder is: **Nethermind.Runner/bin/Debug/netcoreapp3.1/keystore** 
{% endhint %}



\*\*\*\*



\*\*\*\*







