# JSON RPC

JSON RPC可以通过HTTP和WS获得。

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

本节中列出的某些方法不是由Nethermind 实现的。\(它们会被标记\)

