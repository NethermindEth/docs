---
description: Running the Provider
---

# Proveedor

* [x] Download the NDM package from the discord
* [x] Run Consumer node:

  `ndm.launcher.exe` \(Windows\)  
  `ndm.launcher.command` \(MacOs\)  
  `ndm.launcher` \(Linux\).

* [x] Select `Provider`

![](https://github.com/NethermindEth/docs/tree/e7dcca48f72221e633ca307fe7c357d79c42a082/.gitbook/assets/image%20%28157%29.png)

* [x] Select the network

## Connect to the network

### Ropsten

#### VIA Proxy

* [x] Select **Ropsten \[VIA Proxy\]** and enter the proxy endpoint.

for example: [`https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190`](https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190)\`\`

![](../../.gitbook/assets/image%20%28159%29.png)

### xDai

#### Sincronizar

* [x] Select  **xDai** network. Default sync type is **fast sync**.

![](../../.gitbook/assets/image%20%28165%29.png)

* [x] Wait for the sync to complete \(~1 hour\)

#### VIA Proxy

* [x] Select **xDai \[VIA Proxy\]** and enter the proxy endpoint

![](../../.gitbook/assets/image%20%28160%29.png)

## Account

If you don't have an account, you can create one using the modal that will appear at the start. Or you can use your existing account. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-already-have-an-account-can-i-use-it).

### Ropsten

If you can use Get ETH contact with us on Discord.

### xDai

If you can use Get ETH using Ramp Network. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-created-the-account-but-i-still-have-no-money-on-it-what-should-i-do).

## Creating the data asset

* [x] To create a data asset click ‘+’ button.

![](../../.gitbook/assets/image%20%28155%29.png)

* [x] Complete all the fields with correct data.

![](../../.gitbook/assets/image%20%28153%29.png)

* [x] Example

![](../../.gitbook/assets/image%20%2810%29%20%281%29%20%284%29%20%284%29%20%283%29.png)

* [x] Click "Create" button and create the data asset.

![](https://github.com/NethermindEth/docs/tree/e7dcca48f72221e633ca307fe7c357d79c42a082/.gitbook/assets/image%20%2810%29.png)

* [x] Remember to change data asset state from "Unpublished" to "Publish" if you want it to be visible to consumers.

![](../../.gitbook/assets/image%20%28154%29.png)

## [Connecting with consumers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-consumers)

{% hint style="info" %}
You can also test the whole flow of NDM by yourself. All you need to do is:

* Run Provider with nethermind.launcher.
* Run Consumer with nethermind.launcher.
* You will have two consoles and two UIs \(one for provider and one for consumer\).
* If needed - change client type - select the correct button in the right top corner on UI.
* Connect them with each other. See[ connecting with consumers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-consumers) and [connecting with providers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-providers).
* Create data asset as provider.
* Make a deposit as consumer
* Consume the data as consumer.

Voilà! :\)
{% endhint %}

