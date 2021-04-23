# DSL

### Please note that the dsl source code is still a work in progress and there will be significant changes in the coming weeks!  

Nethermind under `Nethermind.Dsl` project provides couple of interfaces and classes used in creating your own plugin to extract the data with the usage of library **ANTLR.**

{% hint style="warning" %}
As the code is constantly developed, some unexpected errors can occur. If you have any problems with running Nethermind with dsl - please contact with our developers on [discord channel](https://discord.com/invite/PaCMRFdvWT).
{% endhint %}

{% hint style="info" %}
For now, there is one plugin that streams blocks from a Block Processor mined by a given miner and publishes data through web sockets.
{% endhint %}

* [ ] The dsl source code is available on separate branch at the moment. The first step is to checkout to suitable branch **feature/dsl** with the command below in directory `../nethermind/src/Nethermind`

```csharp
git checkout feature/dsl
```

* [ ] Build Nethermind solution in the same directory with the command

```csharp
dotnet build Nethermind.sln
```

* [ ] The folder contains an example plugin should create itself while building solution file. In directory `../nethermind/src/Nethermind/Nethermind.Runner/bin/Debug/net5.0/DSL`with the **GetBlocksFromMiner.txt** name.
* [ ] The source code of the sample plugin. If you want - you can change the address of the miner.

```csharp
SOURCE BlockProcessor
WATCH Blocks
WHERE Author == 0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
PUBLISH WebSockets
```

* [ ] Run Nethermind node with the right config and wait for sync.
* [ ] Once the node is synchronized you can connect through the web sockets to get the data.

{% hint style="info" %}
Make sure that in the config file you are using - web sockets are enabled.
{% endhint %}

For example: [**wscat**](https://github.com/websockets/wscat) can be used to get the data - by entering this command in console:

```csharp
wscat -c http://127.0.0.1:8545/dsl
```







