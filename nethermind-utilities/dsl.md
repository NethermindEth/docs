# DSL

DSL application provides a way of creating your own plugin to extract the data with the usage of Domain Specific Language \(DSL\)**.**

{% hint style="info" %}
If you have any problems with running Nethermind with DSL - please contact our developers on the [discord channel](https://discord.com/invite/PaCMRFdvWT).
{% endhint %}

{% hint style="info" %}
For now, there is one plugin used for demo purposes that streams blocks from a Block Processor mined by a given miner and publishes data through web sockets.
{% endhint %}

* [ ] [Download Nethermind](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started#downloading-nethermind)
* [ ] After sync and running example plugin should be available in directory `/DSL`with the **GetBlocksFromMiner.txt** name.
* [ ] This is the sample plugin. If you want - you can change the address of the miner.

```csharp
SOURCE BlockProcessor
WATCH Blocks
WHERE Author == 0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
PUBLISH WebSockets
```

* [ ] Once the node is synchronized you can connect through the web sockets to get the data.

{% hint style="info" %}
Make sure that in the config file you are using - web sockets are enabled.
{% endhint %}

```csharp
"WebSocketsEnabled": true
```

For example: [**wscat**](https://github.com/websockets/wscat) can be used to get the data - by entering this command in console:

```csharp
wscat -c http://127.0.0.1:8545/dsl
```

Every WebSocketPublisher created with DSL will have `/dsl` at the end of the connection URI.

## How to build own plugin

Plugin appearance:

```csharp
SOURCE [BlockProcessor|TxPool]
WATCH [Block|Transactions|NewPending]
WHERE [condition]
PUBLISH [WebSockets|LogPublisher]
```

For example:

```csharp
SOURCE BlockProcessor
WATCH Blocks
WHERE Author == 0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
PUBLISH WebSockets
```

{% hint style="info" %}
You have to use the word casing the same as in the example. \(e.g. SOURCE and not ~~Source~~ or ~~source~~\)
{% endhint %}

Join discord channel at the [Nethermind discord server](https://discord.com/invite/PaCMRFdvWT) to be up to date with every new update to the DSL.



