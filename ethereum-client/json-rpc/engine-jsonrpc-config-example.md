# Engine JsonRpc Config Example

In this page we will layout an example configuration for the JsonRpc module.

{% tabs %}
{% tab title="Cli" %}
<pre><code>./Nethermind.Runner \
--JsonRpc.EnginePort=8551 \
<strong>--JsonRpc.JwtSecretFile="keystore/jwt-secret"</strong></code></pre>

or

<pre><code><strong>./Nethermind.Runner \
</strong><strong>--JsonRpc.EnginePort=8551 \
</strong><strong>--JsonRpc.EngineHost=0.0.0.0 \
</strong><strong>--JsonRpc.JwtSecretFile="keystore/jwt-secret"</strong></code></pre>
{% endtab %}

{% tab title="Config" %}
<pre><code><strong>"JsonRpc": {
</strong>    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": ["Eth", "Subscribe", "Trace", "TxPool", "Web3", "Personal", "Proof", "Net", "Parity", "Health"],
    "EnginePort": 8551,
    "JwtSecretFile": "keystore/jwt-secret"
    },</code></pre>

or

```
"JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": ["Eth", "Subscribe", "Trace", "TxPool", "Web3", "Personal", "Proof", "Net", "Parity", "Health"],
    "EnginePort": 8551,
    "EngineHost": "0.0.0.0",
    "JwtSecretFile": "keystore/jwt-secret"
    },
```
{% endtab %}
{% endtabs %}

In the first example above the consensus client can connect to Nethermind on port 8551 if the consensus client is on the same machine. JsonRpc for other things is available at port 8545 on the same machine.&#x20;

If you want to use a consensus client that's on a different machine, you can add the `JsonRpc.EngineHost` parameter and use `0.0.0.0` like the second example above. This will expose the JsonRpc.Engine to the outside.&#x20;

{% hint style="danger" %}
#### **if you want to change`JsonRpc.EngineHost, JsonRpc.EnginePort` should be specified as well.** &#x20;
{% endhint %}
