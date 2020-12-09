# JSON RPC

JSON RPC 可以通过 HTTP 和 WS 获得。

{% hint style="warning" %}
您需要在 Nethermind 的 `config` 文件中显式开启 JSON RPC。
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
您也可以通过将 `--JsonRpc.Enabled true`标记传递给 `Nethermind.Runner`或`Nethermind.Launcher`参数来开启 JSON RPC。
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

