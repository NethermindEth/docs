# FAQ

## How do I upgrade my node?

### Upgrading Nethermind for Docker users

Pull the latest version of Nethermind using the `latest` tag. You can find specific tag
at [Docker Hub](https://hub.docker.com/r/nethermind/nethermind/tags).

```sh
docker pull nethermind/nethermind:latest
```

or pull with docker-compose if the `nethermind/nethermind:latest` base image is specified

```sh
docker-compose pull
```

### Upgrading Nethermind for Systemd users

Simply download the latest Nethermind package either
from [https://downloads.nethermind.io](https://downloads.nethermind.io/)
or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and make
sure that the package is extracted in the `WorkingDirectory` path defined in your `systemd` service. Make sure to stop
the service before the upgrade and start it after.

```systemd
WorkingDirectory=/home/nethermind/nethermind
```

### Upgrading Nethermind when running as a background process

Download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/)
or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and
extract the package in the folder you currently use for running Nethermind. Make sure the service is down before the
update. Make sure to stop the service before the upgrade and start it after.

## What is the minimum viable config to serve ETH2 validator requests?

This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the
deposit contract deployment. It also enables JSON RPC (**important - make sure that you do not open firewall to the
outside world!**)

```sh
nethermind --config mainnet --Init.BaseDbPath /your/db/path
```

If you have any issues, please reach out to us on Discord: [https://discord.gg/X539yhn](https://discord.gg/X539yhn).

## Can I disable logging to file?

You can find more details on the logging config page [here](../ethereum-client/logging-configuration.md)

## Can I disable logging of JSON RPC calls?

You can find more details on the logging config page [here](../ethereum-client/logging-configuration.md)

## How can I configure validator on AuRa / Clique?

You can find more details on running validators in the docs ->
for [AuRa](../guides-and-helpers/validator-setup/aura-validator) and
for [Clique](../ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain).

You can learn more about how to setup a aura validator [here](validator-setup/aura-validator.md)

## My network bandwidth is used up by the Nethermind node

Try changing the config to a lower number (`--Network.ActivePeersMaxCount 25`)

## Is my node synced?

Your node is synced when it shows log lines starting with:

`Processed ...`

And the block numbers shown are at the head of the chain.

Also, to check if your node is synced, you may execute `eth_syncing` call check its result

```text
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

If the result shows `false` it means that your node is **synced**

```text
{"jsonrpc":"2.0","result":false,"id":1}
```

:::info
In blockchain, any node can never be 100% sure it is synced because there is no central source of truth - so your node
is generally not able to tell you that it is synced but, it is able to tell you that it believes it is synced based on
what it knows from the peers that it talks to).
:::

## I want to run two or more nodes on one machine. How can I achieve this?

You have to configure a few ports used by Nethermind.

| Settings               | Default Value | Comment                                                                    |
|------------------------|---------------|----------------------------------------------------------------------------|
| JsonRpc.EnginePort     | 8551          | Remember to change it on your Consensus client.                            |
| JsonRpc.Port           | 8545          | Only needed if you are using standard JsonRpc                              |
| JsonRpc.WebSocketsPort | 8545          | By default same as the JsonRpc port. Only relevant when you use WebSockets |
| Network.P2PPort        | 30303         |                                                                            |
| Network.DiscoveryPort  | 30303         |                                                                            |

The example of parameters that you have to pass to your second node when the first has been running with default
settings:\
`--JsonRpc.EnginePort 8552 --JsonRpc.Port 8546 --Network.P2PPort 30304 --Network.DiscoveryPort 30304`
