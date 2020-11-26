---
description: Frequently asked questions about the Nethermind Data Marketplace
---

# FAQ

## What is the minimum viable config to serve ETH2 validator requests?

./Nethermind.Runner  --config mainnet --JsonRpc.Enabled true  --Sync.DownloadBodiesInFastSync true  --Sync.DownloadReceiptsInFastSync true  --Sync.AncientBodiesBarrier 11052984 --Sync.AncientReceiptsBarrier 11052984  --Init.BaseDbPath /your/db/path

This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the deposit contract deployment. It also enables JSON RPC \(make sure that you do not open firewall to the outside world!\)

## How do I import my wallet into MetaMask?

NDM wallets can be imported into MetaMask as a Keystore file.  To do so, follow the instructions at [https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account](https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account), choose JSON File as the type, and then when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

## How do I import my wallet into MyEtherWallet?

NDM wallets can be imported into MyEtherWallet as a Keystore file.  To do so, follow the instructions at [https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/\#Keystore-JSON-Password](https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/#Keystore-JSON-Password) and when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

## How do I import my wallet into MyCrypto?

Consumer and provider wallets in NDM can be imported into MyCrypto as a Keystore file.  To do so, follow the instructions at [https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-keystore-file](https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-keystore-file) and when prompted to select your Keystore file:

1. locate your NDM installation folder
2. navigate to the `keystore` folder
3. select the file that has your Ethereum address in the name

