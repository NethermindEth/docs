# FAQ

## How do I upgrade my node prior to the upcoming Ethereum Berlin fork?

All details regarding the upgrade can be found on the official EF announcement [https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/](https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/)

### Upgrading Nethermind for Docker users

Pull the latest version of Nethermind using the `latest` or `1.10.58` version tag.

```text
docker pull nethermind/nethermind:1.10.58
```

or pull with docker-compose if the `nethermind/nethermind` base image is specified

```text
docker-compose pull
```

### Upgrading Nethermind for Systemd users

Simply download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and make sure that the package is extracted in the `WorkingDirectory` path defined in your `systemd` service.

```text
WorkingDirectory=/home/nethermind/nethermind
```

### Upgrading Nethermind when running as a background process

Download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and extract the package in the folder you currently use for running Nethermind.

## What is the minimum viable config to serve ETH2 validator requests?

This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the deposit contract deployment. It also enables JSON RPC \(**important - make sure that you do not open firewall to the outside world!**\)

./Nethermind.Runner --config mainnet --JsonRpc.Enabled true --Sync.DownloadBodiesInFastSync true --Sync.DownloadReceiptsInFastSync true --Sync.AncientBodiesBarrier 11052984 --Sync.AncientReceiptsBarrier 11052984 --Init.BaseDbPath /your/db/path

**If you synced with versions before 1.9.39:**

Update to 1.9.39 and launch it once with '--Sync.FixReceipts true' and this should heal your database if it is missing any logs / receipts. Please make sure that you follow the Upgrade guidelines:

{% page-ref page="upgrades.md" %}

If you have any issues, please reach out to us on Discord: [https://discord.gg/X539yhn](https://discord.gg/X539yhn)

## Can I disable logging to file?

{% page-ref page="../ethereum-client/logging-configuration.md" %}

## Can I disable logging of JSON RPC calls?

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

_In blockchain, any node can never be 100% sure it is synced because there is no central source of truth - so your node is generally not able to tell you that it is synced but, it is able to tell you that it believes it is synced based on what it knows from the peers that it talks to\)._

