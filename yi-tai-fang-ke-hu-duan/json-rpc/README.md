# JSON RPC

JSON RPC 可以通过 HTTP 和 WS 获得。

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

本节中列出的部分方法不是通过 Nethermind 实现的\（它们会被标记出来\）。
