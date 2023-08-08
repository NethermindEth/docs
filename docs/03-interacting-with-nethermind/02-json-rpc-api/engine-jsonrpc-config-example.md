import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Engine JsonRpc Config Example

In this page we will layout an example configuration for the JsonRpc module.

<Tabs>
	<TabItem value="cli" label="Cli">

```bash
./Nethermind.Runner \

--JsonRpc.EnginePort=8551 \

--JsonRpc.JwtSecretFile="keystore/jwt-secret"
```

or

```bash
./Nethermind.Runner

--JsonRpc.EnginePort=8551

--JsonRpc.EngineHost=0.0.0.0

--JsonRpc.JwtSecretFile="keystore/jwt-secret"

```

</TabItem>
	<TabItem value="config" label="Config">

```json
{
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": [
      "Eth",
      "Subscribe",
      "Trace",
      "TxPool",
      "Web3",
      "Personal",
      "Proof",
      "Net",
      "Parity",
      "Health"
    ],
    "EnginePort": 8551,
    "JwtSecretFile": "keystore/jwt-secret"
  }
}
```

or

 ```json
{
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": [
      "Eth",
      "Subscribe",
      "Trace",
      "TxPool",
      "Web3",
      "Personal",
      "Proof",
      "Net",
      "Parity",
      "Health"
    ],
    "EnginePort": 8551,
    "EngineHost": "0.0.0.0",
    "JwtSecretFile": "keystore/jwt-secret"
  }
}

 ```

</TabItem>

</Tabs>


In the first example above the consensus client can connect to Nethermind on port 8551 if the consensus client is on the
same machine. JsonRpc for other things is available at port 8545 on the same machine.&#x20;

If you want to use a consensus client that's on a different machine, you can add the `JsonRpc.EngineHost` parameter and
use `0.0.0.0` like the second example above. This will expose the JsonRpc.Engine to the outside.&#x20;

:::danger

If you want to change`JsonRpc.EngineHost, JsonRpc.EnginePort` should be specified as well.

:::
