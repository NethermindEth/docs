# JSON RPC

JSON RPC está disponible a través de HTTP y WS.

{% hint style="warning" %}
JSON RPC needs to be explicitly switched on in the Netherming `config` file.
{% endhint %}

{% tabs %}
{% tab title="goerli.cfg" %}
```javascript
  "JsonRpc": {
    "Enabled": true,
    "Host": "127.0.0.1",
    "Port": 8545
  }
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
JSON RPC can be also enabled by passing `--JsonRpc.Enabled true` flag to the `Nethermind.Runner` or `Nethermind.Launcher` arguments.
{% endhint %}

{% tabs %}
{% tab title="Nethermind.Runner" %}
```yaml
./Nethermind.Runner --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Nethermind.Launcher" %}
```yaml
./Nethermind.Launcher --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

WebSockets, when enabled, will be accessible on the same address/port as HTTP by default, just using the `ws://` protocol instead of `http://` protocol. You can change the WebSocket port to something else like 8546 if desired.

{% tabs %}
{% tab title="goerli.cfg" %}
```javascript
  "Init": {
    "WebSocketsEnabled": true
  },
  "JsonRpc": {
    "WebSocketsPort": 8545
  }
```
{% endtab %}

{% tab title="Nethermind.Runner" %}
```text
./Nethermind.Runner --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545
```
{% endtab %}

{% tab title="Nethermind.Launcher" %}
```text
./Nethermind.Launcher --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545
```
{% endtab %}
{% endtabs %}

Algunos de los métodos enumerados en esta sección no están implementados por Nethermind  \(estarán marcados como\).

