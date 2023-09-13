# JSON RPC

JSON RPC is available via HTTP and WS.

:::caution
JSON RPC needs to be explicitly switched on in the Netherming `config` file.
:::

```json title="goerli.cfg"
  "JsonRpc": {
    "Enabled": true,
    "Host": "127.0.0.1",
    "Port": 8545
  }
```

:::info
JSON RPC can be also enabled by passing `--JsonRpc.Enabled true` flag to the `Nethermind.Runner` or `Nethermind.Launcher` arguments.
:::

WebSockets, when enabled, will be accessible on the same address/port as HTTP by default, just using the `ws://` protocol instead of `http://` protocol.  You can change the WebSocket port to something else like 8546 if desired.

```json title="goerli.cfg" 
  "Init": {
    "WebSocketsEnabled": true
  },
  "JsonRpc": {
    "WebSocketsPort": 8545
  }
```


:::info
WebSockets can also be enabled by passing `--Init.WebSocketsEnabled true` as show below:

``` bash
./Nethermind.Runner --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545
```
or
``` bash
./Nethermind.Launcher --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545
```
:::

Some of the methods listed in this section are not implemented by Nethermind (they will be marked).

