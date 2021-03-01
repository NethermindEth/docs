---
description: Frequently asked questions about Nethermind Data Marketplace
---

# FAQ

## What is NDM?

Nethermind Data Marketplace is a protocol that creates a subnetwork within Ethereum to handle data delivery directly between parties who are running NDM-supporting nodes. NDM allows data consumers to discover data providers and uses a smart contract to facilitate on-chain, secure payments in exchange for data. The unique built-in reputation and data delivery protocol minimizes the amount of on-chain transactions.

## Where can I download NDM?

You can download up to date packages on [Nethermind downloads page](https://downloads.nethermind.io/).

## Is NDM a finished project?

No, we are constantly working on the final version.

NDM is currently available in **beta**. Due to the fact that this is not the final version, please contact us on [discord](https://discord.com/invite/zZC8CthuzA) if you have any problems.

## What are the risks of using a beta version of NDM? 

Most risks come with refunds and payment claims, so please be aware that there may be some issues with processing transactions. With that in mind, **keep your logs** and **database** and if anything unexpected happens, get in touch with out team via [discord](https://discord.com/invite/zZC8CthuzA) or contact tab in NDM application.

## Where can I find support?

We have a separate channel for NDM on our [discord](https://discord.com/invite/zZC8CthuzA) server, feel free to ask any questions there.

## Can I also join as a provider?

Yes, NDM is built for consumers as well as for providers. If you want to join as a provider, please contact us on [discord](https://discord.com/invite/zZC8CthuzA).

## What networks are supported?

For now we support **xDai** network and testnets networks like **Ropsten**, **Goerli**.

## Do I need to wait for sync and how long?

Yes, but don't worry everything is prepared. With the package you will get ready to use configs. After run NDM, you will be asked to select the client type \(consumer or provider\) and then type of the network. After that the sync will start.

* Ethereum testnets estimated time depends on the network type - 1 to several hours.
* **xDai** chain \(default fast sync\) 1 - 2 hours. 

## What cryptocurrency can I use in NDM?

It depends on the package you are using - right now we are supporting testnets **ETH** and **xDai**.

## Do I need a wallet to start using NDM?

No, you can create your own wallet by using NDM.

## I already have an account, can I use it?

Yes, you can. Just copy your keystore file info`keystore` folder and that's it. After running the application a window will appear asking you to unlock your account.

## **I created the account but I still have no money on it, what should I do?** 

You can use [Ramp Network](https://ramp.network) services without leaving NDM, simply click the “Get ETH “ button which is located next to your address and go through the procedure. The money will be in your account in just a few minutes. In case you have any questions or problems with the transfer you can contact [support.ramp.network](https://discord.com/invite/qv8Zprw%20).

\*When you buying ETH/xDai for EUR - procedure can take up to 30 minutes.

## Where can I change the account?

In the **Accounts** tab, you have the option to change your current account.

## How can I unlock my account?

Right after starting NDM, you will be asked to input passphrase to your account. You can also unlock your account in "**Accounts**" -&gt; "**Unlock account**" tab.

## How do I import my wallet into MetaMask?

NDM wallets can be imported into MetaMask as a Keystore file. To do so, follow the instructions at [https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account](https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account), choose JSON File as the type, and then when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

## How do I import my wallet into MyEtherWallet?

NDM wallets can be imported into MyEtherWallet as a Keystore file. To do so, follow the instructions at [https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/\#Keystore-JSON-Password](https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/#Keystore-JSON-Password) and when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

## How do I import my wallet into MyCrypto?

Consumer and provider wallets in NDM can be imported into MyCrypto as a Keystore file. To do so, follow the instructions at [https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-keystore-file](https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-keystore-file) and when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

## I'm having some issues with NDM on MacOs

We have a separate documentation for MacOs issues.

{% page-ref page="../running-ndm-on-macos-problems-and-fixes.md" %}

## I have a problem connecting with Ethereum node. What should I do?



![Connection with Ethereum node has been lost - warning information.](../../.gitbook/assets/image%20%28146%29.png)

Maybe somehow the settings did not save at the start. We are working on solving this problem.

Try to save settings. Go to "**Advanced**" -&gt; "**Connection settings**", past default settings given below and save settings:

For **consumer**:

JSON RPC URL: [http://localhost:8545](http://localhost:8545)

WebSockets URL: [ws://localhost:8545/ndm](ws://localhost:8545/ndm)

For **provider**:

JSON RPC URL: [http://localhost:8546](http://localhost:8546)

WebSockets URL: [ws://localhost:8546/ndm](ws://localhost:8546/ndm)

