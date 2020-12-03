---
description: Sample local Baseline setup
---

# Baseline

To launch the local nodes to experiment with some Baseline commands try the example below:

Baseline configuration files have network discovery processes disabled and in the example we use static nodes instead. The static nodes configuration can be found in the `Data/static-nodes-baseline.json` files. Each static node there has an enode entry with a public key derived from the private key of the node \(the `TestNodeKey` settings in our example\), IP addresses, and port.

Launch node A \(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

Launch node B \(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8522 --Network.DiscoveryPort 30222 --Network.P2PPort 30222 --KeyStore.TestNodeKey 020102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![Initial connectivity to both nodes and deployment of the baseline tree contract](../.gitbook/assets/image%20%2833%29.png)

![Send transaction to one node and the new block will be created and synchronized](../.gitbook/assets/image%20%2832%29.png)

![Sample interaction with the newly deployed Baseline Merkle Tree contract \(errors kept to answer FAQ\)](../.gitbook/assets/image%20%2834%29.png)

![Here we add some data to the tree and ask for Merkle proofs \(sibling paths\)](../.gitbook/assets/image%20%2835%29.png)

![Verification of a leaf against the root and the siblings path.](../.gitbook/assets/image%20%2836%29.png)

Find below a high-level overview of the Baseline Protocol Atomic Workflow Step with Provide infrastructure and Nethermind node serving as a gateway to Ethereum mainnet and maintaining data from the Baseline Merkle trees.

![](../.gitbook/assets/provide_neth%20%281%29%20%281%29%20%281%29.png)





