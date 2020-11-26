# FAQs

## What is the minimum viable config to serve ETH2 validator requests?

./Nethermind.Runner  --config mainnet --JsonRpc.Enabled true  --Sync.DownloadBodiesInFastSync true  --Sync.DownloadReceiptsInFastSync true  --Sync.AncientBodiesBarrier 11052984 --Sync.AncientReceiptsBarrier 11052984  --Init.BaseDbPath /your/db/path

This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the deposit contract deployment. It also enables JSON RPC \(make sure that you do not open firewall to the outside world!\)

## Can I disable logging to file?

{% page-ref page="../ethereum-client/logging-configuration.md" %}

## Can I disable logging of JSON RPC calls

{% page-ref page="../ethereum-client/logging-configuration.md" %}

## How can I configure validator on AuRa / Clique?

You can find more details on running validators in the docs -&gt; for [AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) and for [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain).

{% page-ref page="validator-setup/aura-validator.md" %}

{% page-ref page="../ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md" %}

## My network bandwidth is used up by the Nethermind node

Try changing the config to a lower number \(`--Network.ActivePeersMaxCount 25`\)

## Is my node synced?

Your node is synced when it shows log lines starting with:

`Processed ...`

And the block numbers shown are at the head of the chain.

_In blockchain any node can never be 100% sure it is synced because there is no central source of truth - so your node is generally not able to tell you that it is synced but it is able to tell you that it believes it is synced based on what it know from the peers that it talks to\)._

