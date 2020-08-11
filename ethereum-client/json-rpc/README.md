# JSON RPC

JSON RPC is available via HTTP and WS.

{% hint style="warning" %}
JSON RPC needs to be explicitly switched on in the Netherming `config` file.
{% endhint %}

{% tabs %}
{% tab title="goerli.cfg" %}
```yaml
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

Some of the methods listed in this section are not implemented by Nethermind \(they will be marked\).

