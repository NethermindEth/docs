# Engine JsonRpc Configuration Examples

In this page we will layout the different configurations for the JsonRpc module and the resulting open ports.

{% tabs %}
{% tab title="Cli" %}
<pre><code>./Nethermind.Runner \
--JsonRpc.EnginePort=8551 \
<strong>--JsonRpc.JwtSecretFile="keystore/jwt-secret"</strong></code></pre>

or

<pre><code><strong>./Nethermind.Runner \
</strong><strong>--JsonRpc.EnginePort=8551 \
</strong><strong>--JsonRpc.EngineHost=127.0.0.1 \
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
    "EngineHost": "127.0.0.1",
    "JwtSecretFile": "keystore/jwt-secret"
    },</code></pre>
{% endtab %}
{% endtabs %}

In the example above CL client can connect to Nethermind on the 8551 port if CL client is on the same machine.

{% hint style="danger" %}
#### **if you want to change`JsonRpc.EngineHost, JsonRpc.EnginePort` should be specified as well.** &#x20;
{% endhint %}

{% tabs %}
{% tab title="Cli" %}


<pre><code>./Nethermind.Runner \
<strong>--JsonRpc.EnginePort=8551 \
</strong>--JsonRpc.EngineHost=0.0.0.0 \
--JsonRpc.JwtSecretFile="keystore/jwt-secret"</code></pre>
{% endtab %}

{% tab title="Config" %}
<pre><code><strong>"JsonRpc": {
</strong>    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": ["Eth", "Subscribe", "Trace", "TxPool", "Web3", "Personal", "Proof", "Net", "Parity", "Health"],
    "EnginePort": 8551,
    "EngineHost": "0.0.0.0",
    "JwtSecretFile": "keystore/jwt-secret"
    },</code></pre>
{% endtab %}
{% endtabs %}

In the above example the CL client can connect to Nethermind on the 8551 port if the CL client is on the same machine or on a different machine.

{% tabs %}
{% tab title="Cli" %}
```
./Nethermind.Runner \
--JsonRpc.EnginePort=8551 \
--JsonRpc.EngineHost=0.0.0.0 \
--JsonRpc.Port=8545 \
--JsonRpc.Host=127.0.0.1 \
--JsonRpc.JwtSecretFile="keystore/jwt-secret"
```
{% endtab %}

{% tab title="Config" %}

{% endtab %}
{% endtabs %}

In the above example  the CL client can connect to Nethermind on the 8551 port if the CL client is on the same machine or on a different machine. JsonRpc for other things is available at port  8545  on the same machine.
