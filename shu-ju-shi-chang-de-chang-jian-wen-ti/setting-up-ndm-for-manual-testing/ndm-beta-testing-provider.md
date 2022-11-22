---
description: Running the Provider
---

# 提供商

* [x] Download the NDM package from the discord
*   [x] Run Consumer node:

    `ndm.launcher.exe` (Windows)\
    `ndm.launcher.command` (MacOs)\
    `ndm.launcher` (Linux).
* [x] Select `Provider`

![](<../../.gitbook/assets/image (157) (1) (3) (3) (3) (1).png>)

* [x] Select the network

## Connect to the network

### Ropsten

#### VIA Proxy

* [x] Select **Ropsten \[VIA Proxy]** and enter the proxy endpoint.

for example: [`https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190`](https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190)\`\`

![](<../../.gitbook/assets/image (159).png>)

### xDai

#### Sync

* [x] Select  **xDai** network. Default sync type is **fast sync**.

![](<../../.gitbook/assets/image (165).png>)

* [x] Wait for the sync to complete (\~1 hour)

#### VIA Proxy

* [x] Select **xDai \[VIA Proxy]** and enter the proxy endpoint

![](<../../.gitbook/assets/image (160).png>)

## Account

If you don't have an account, you can create one using the modal that will appear at the start. Or you can use your existing account. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-already-have-an-account-can-i-use-it).

### Ropsten

If you can use Get ETH contact with us on Discord.

### xDai

If you can use Get ETH using Ramp Network. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-created-the-account-but-i-still-have-no-money-on-it-what-should-i-do).

## Creating the data asset

* [x] To create a data asset click ‘+’ button.

![](<../../.gitbook/assets/image (155).png>)

* [x] Complete all the fields with correct data.

![](<../../.gitbook/assets/image (153).png>)

* [x] Example

![](<../../.gitbook/assets/image (10) (1) (4) (4) (4).png>)

* [x] Click "Create" button and create the data asset.

![](<../../.gitbook/assets/image (10) (1) (4) (4) (4) (2).png>)

* [x] Remember to change data asset state from "Unpublished" to "Publish" if you want it to be visible to consumers.

![](<../../.gitbook/assets/image (154).png>)

## [Connecting with consumers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-consumers)

{% hint style="info" %}
You can also test the whole flow of NDM by yourself. All you need to do is:

* Run Provider with nethermind.launcher.
* Run Consumer with nethermind.launcher.
* You will have two consoles and two UIs (one for provider and one for consumer).
* If needed - change client type - select the correct button in the right top corner on UI.
* Connect them with each other. See[ connecting with consumers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-consumers) and [connecting with providers](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/connecting-with-providers).
* Create data asset as provider.
* Make a deposit as consumer
* Consume the data as consumer.

Voilà! :)
{% endhint %}
