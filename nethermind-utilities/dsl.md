# DSL

### Please note that the dsl source code is still a work in progress and there will be significant changes in the coming weeks!  

Nethermind under `Nethermind.Dsl` project provides a way of creating your own plugin to extract the data with the usage of Domain Specific Language \(DSL\)**.**

{% hint style="info" %}
As the code is constantly developed, some unexpected errors can occur. If you have any problems with running Nethermind with DSL - please contact our developers on the [discord channel](https://discord.com/invite/PaCMRFdvWT).
{% endhint %}

{% hint style="info" %}
For now, there is one plugin used for demo purposes that streams blocks from a Block Processor mined by a given miner and publishes data through web sockets.
{% endhint %}

* [ ] The DSL source code is available on separate branch at the moment. The first step is to checkout to the branch **feature/dsl** with the command below in Nethermind repository.

```csharp
git checkout feature/dsl
```

* [ ] Build Nethermind solution in the same directory with the command

```csharp
dotnet build Nethermind.sln
```

* [ ] The folder containing an example plugin will be created while building solution. In directory `/nethermind/src/Nethermind/Nethermind.Runner/bin/Debug/net5.0/DSL`with the **GetBlocksFromMiner.txt** name.
* [ ] The source code of the sample plugin. If you want - you can change the address of the miner.

```csharp
SOURCE BlockProcessor
WATCH Blocks
WHERE Author == 0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
PUBLISH WebSockets
```

* [ ] Run Nethermind node with the right config and wait for mainnet sync.
* [ ] Once the node is synchronized you can connect through the web sockets to get the data.

{% hint style="info" %}
Make sure that in the config file you are using - web sockets are enabled.
{% endhint %}

For example: [**wscat**](https://github.com/websockets/wscat) can be used to get the data - by entering this command in console:

```csharp
wscat -c http://127.0.0.1:8545/dsl
```

Every WebSocketPublisher created with DSL will have `/dsl` at the end of the connection URI.

## Syntax

Right now supported syntax of DSL script is:

```csharp
SOURCE <BlockProcessor/TxPool>
WATCH <Block/Transactions/NewPending>
WHERE <condition>
PUBLISH <WebSockets/LogPublisher>
```

Every DSL keyword needs to be **uppercase** in order to be parsed correctly.

For the time being, DSL support `SOURCE` only as `BlockProcessor`. Since the DSL feature will be rolling release there will be new additions to the language daily \(be sure to connect with us through DSL discord channel at the [Nethermind discord server](https://discord.com/invite/PaCMRFdvWT) to be up to date with every new update to the DSL\). 



