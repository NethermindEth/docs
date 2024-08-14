---
sidebar_label: Common issues
sidebar_position: 7
---

# Common issues

### Logs contains **Nethermind.Trie.TrieNodeException** 
This error indicates corrupted or missing data in the database. To resolve the issue the following can be attempted: 
- If your node is still syncing, wait until the node has been fully synced, and observe for errors.
- Restart your node and observe for errors.
- Update to the latest version of nethermind ***[here](https://github.com/NethermindEth/nethermind/releases/latest)***.
- If all of the above steps fail, a resync may be required. To start a resync follow the steps outlined ***[here](https://docs.nethermind.io/fundamentals/sync/#resync-a-node-from-scratch)***.