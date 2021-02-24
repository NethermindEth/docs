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

NDM is currently available in beta. Due to the fact that this is not the final version, please contact us on [discord](https://discord.com/invite/zZC8CthuzA) if you have any problems.

## What are the risks of using a beta version of NDM? 

Most of the risks are in the refunds and payment claims area, you have to be aware that bugs with processing transactions may occur. With that in mind keep your logs and when something unexpected happens contact our team through the contact tab.

## Where can I find technical assistance?

We have a separate channel for NDM on our Discord server, feel free to ask any questions there. You can find us at [Nethermind Discord](https://discord.gg/732jyuNjph).

## Can data providers also join NDM?

Yes, NDM is built for consumers as well as for providers.

## Do I need to wait for sync before using NDM?

Yes, with the package you will get ready to use configs for each of the supported chains. For Ethereum testnets estimated time before you will be able to place your first deposits depends on the testnet - 1 to few hours.   
For xDai chain 1 - 2 hours. 

## How does the Process of buying data look like?

First of all, you will need to connect to a provider, after that you will be able to make a deposit for a data asset of your choice. Payment for the data will be charged from the deposit you made and not from your wallet.

For example - you connected to a provider which provides data asset with units 1 ETH/xDai per each. You make a deposit for 100 units, so 100 ETH/xDai is transferred from wallet to NDM smart contract, each time you use a single unit, 1 ETH/xDai \(plus fee\) will be transferred from the deposit on contract to the provider account.

## What cryptocurrency can I use to pay with NDM?

It depends on the package you are using - right now we are supporting testnets ETH and xDai.

## Do I need a wallet to start using NDM?

No, NDM is able to create a wallet for the sake of using NDM the first time you run a client.

## Can I use my own account?

Yes, you can. Copy your keystore file info`keystore` folder and that's it. After running the application the prompt window to unlock the account will appear.

## **I created the account but still have no money on it, what should I do?** 

You can use [Ramp Network](https://ramp.network) services without leaving NDM, simply click the “ Get ETH “ button which is located next to your address and go through the procedure. The money will be in your account in just a few seconds. In case you have any questions or problems with the transfer you can contact [support.ramp.network](https://discord.com/invite/qv8Zprw%20) on discord. 

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

## Where can I change the account?

In the account tab, you have the option to change your current account.

## I have a problem connecting with Ethereum node. What should I do?

Try to save settings. Go to "**Advanced**" -&gt; "**Connection settings**" and past default settings and save settings:

JSON RPC URL: [http://localhost:8545](http://localhost:8545)

WebSockets URL: [ws://localhost:8545/ndm](ws://localhost:8545/ndm)

## I'm having some issues with NDM on MacOs

We have a separate documentation for MacOs issues.

{% page-ref page="../running-ndm-on-macos-problems-and-fixes.md" %}



