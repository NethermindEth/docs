---
description: Sample local Baseline setup
---

# Baseline

Launch node A \(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

Launch node B \(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![Initial connectivity to both nodes and deployment of the baseline tree contract](../.gitbook/assets/image%20%2833%29.png)

![Send transaction to one node and the new block will be created and synchronized](../.gitbook/assets/image%20%2832%29.png)

![Sample interaction with the newly deployed Baseline Merkle Tree contract \(errors kept to answer FAQ\)](../.gitbook/assets/image%20%2834%29.png)





