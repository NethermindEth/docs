# FAQ

## How do I upgrade my node?

### Upgrading Nethermind for Docker users

Pull the latest version of Nethermind using the `latest` tag. You can find specific tag at [Docker Hub](https://hub.docker.com/r/nethermind/nethermind/tags).

```sh
docker pull nethermind/nethermind:latest
```

or pull with docker-compose if the `nethermind/nethermind:latest` base image is specified

```sh
docker-compose pull
```

### Upgrading Nethermind for Systemd users

Simply download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and make sure that the package is extracted in the `WorkingDirectory` path defined in your `systemd` service. Make sure to stop the service before the upgrade and start it after.

```systemd
WorkingDirectory=/home/nethermind/nethermind
```

### Upgrading Nethermind when running as a background process

Download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and extract the package in the folder you currently use for running Nethermind. Make sure the service is down before the update. Make sure to stop the service before the upgrade and start it after.

## What is the minimum viable config to serve ETH2 validator requests?

This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the deposit contract deployment. It also enables JSON RPC (**important - make sure that you do not open firewall to the outside world!**)

```sh
nethermind --config mainnet --Init.BaseDbPath /your/db/path
```

If you have any issues, please reach out to us on Discord: [https://discord.gg/X539yhn](https://discord.gg/X539yhn).

## Can I disable logging to file?

{% content-ref url="../ethereum-client/logging-configuration.md" %}
[logging-configuration.md](../ethereum-client/logging-configuration.md)
{% endcontent-ref %}

## Can I disable logging of JSON RPC calls?

{% content-ref url="../ethereum-client/logging-configuration.md" %}
[logging-configuration.md](../ethereum-client/logging-configuration.md)
{% endcontent-ref %}

## How can I configure validator on AuRa / Clique?

You can find more details on running validators in the docs -> for [AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) and for [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain).

{% content-ref url="validator-setup/aura-validator.md" %}
[aura-validator.md](validator-setup/aura-validator.md)
{% endcontent-ref %}

{% content-ref url="../ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md" %}
[how-to-setup-a-nethermind-only-clique-based-chain.md](../ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md)
{% endcontent-ref %}

## My network bandwidth is used up by the Nethermind node

Try changing the config to a lower number (`--Network.ActivePeersMaxCount 25`)

## Is my node synced?

Your node is synced when it shows log lines starting with:

`Processed ...`

And the block numbers shown are at the head of the chain.

_In blockchain, any node can never be 100% sure it is synced because there is no central source of truth - so your node is generally not able to tell you that it is synced but, it is able to tell you that it believes it is synced based on what it knows from the peers that it talks to)._

## I want to run two or more nodes on one machine. How can I achieve this?

You have to configure a few ports used by Nethermind.

<table><thead><tr><th>Settings</th><th width="145.33333333333331">Default Value</th><th>Comment</th></tr></thead><tbody><tr><td>JsonRpc.EnginePort</td><td>8551</td><td>Remember to change it on your Consensus client.</td></tr><tr><td>JsonRpc.Port</td><td>8545</td><td>Only needed if you are using standard JsonRpc</td></tr><tr><td>JsonRpc.WebSocketsPort</td><td>8545</td><td>By default same as the JsonRpc port. Only relevant when you use WebSockets</td></tr><tr><td>Network.P2PPort</td><td>30303</td><td></td></tr><tr><td>Network.DiscoveryPort</td><td>30303</td><td></td></tr></tbody></table>

The example of parameters that you have to pass to your second node when the first has been running with default settings:\
`--JsonRpc.EnginePort 8552 --JsonRpc.Port 8546 --Network.P2PPort 30304 --Network.DiscoveryPort 30304`
