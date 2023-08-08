---
description: How to resync your Nethermind node
---

# Resync database from scratch

## Resyncing a Nethermind Node

This guide explains how to resync a Nethermind node using the existing Pivot block or updating it to a more recent one.

### Steps to Resync a Nethermind Node

1. **Stop the Nethermind node**: If your Nethermind node is currently running, stop it to ensure that no new data is being written to the database during the resync process.
2. **Delete the existing database**: Navigate to the Nethermind data directory. The location of this directory depends on how Nethermind was installed and your configuration settings. Inside the data directory, find the `nethermind_db` folder and delete the `mainnet` subfolder to remove the existing database for the mainnet.
3. **Update the configuration file (optional)**: If you want to change any configuration settings before resyncing the node, edit the `mainnet.cfg` file located in the Nethermind directory. For example, you might want to adjust the pruning settings or specify a different network.
4. **Update the Pivot block (optional)**\
   :::danger
   **Only for versions before 1.19.0 where Auto-Pivot approach was introduced**
   :::
   1.  **Using Etherscan**: If you want to speed up the syncing process, you can update the Pivot block to a more recent one. To do this, find the `Sync` section in the `mainnet.cfg` file and update the `PivotNumber` and `PivotHash` fields to match a recent "finalized" block number and its corresponding hash. You can obtain this information from a block explorer such as [Etherscan](https://etherscan.io/).\
       \
       Using block number 17165278 from [Etherscan](https://etherscan.io/block/17165278):

       ```
       { 
         "PivotNumber": 17165278,
         "PivotHash": "0xa665315efd923f3b11215feee09a9d3e13c5e6ee602fa19b642824682ec0a752"
       }
       ```
   2. **Using Nethermind's GitHub**: Alternatively, you can update the Pivot block by referring to the [Nethermind's mainnet.cfg file on GitHub](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/mainnet.cfg). The Pivot block is periodically bumped to the HEAD-8192 block of the mainnet chain. Copy the `PivotNumber` and `PivotHash` values from the GitHub file and update your local `mainnet.cfg` file accordingly.
5. **Restart the Nethermind node**: Start the Nethermind node again to initiate the resync process. The node will begin syncing from the existing Pivot block or the specified updated Pivot block, downloading and processing all the blocks in the blockchain.

To ensure that your Nethermind node is resyncing, you can monitor the logs for the node's progress. The logs will display information about the block processing, synchronization status and `OldHeaders` being processed. By observing the increasing block numbers and synchronization messages in the logs, you can confirm that the resync process is active and working as expected.

> Old Headers 0 / 17154000 | queue 0 | current 0.00bps | total 0.00bps
>
> Old Headers 768 / 17154000 | queue 0 | current 766.07bps | total 762.49bps
>
> Beacon Headers from block 17154001 to block 17169722 | 960 / 15722 | queue 4992 | current 0.00bps | total 40622848.83bps
>
> Old Headers 9024 / 17154000 | queue 0 | current 576.40bps | total 1286.40bps
>
> Beacon Headers from block 17154001 to block 17169723 | 9024 / 15723 | queue 6698 | current 2694.81bps | total 3882943.63bps\
> Downloaded 17154031 / 17172359 | current 0.00bps | total 0.00bps
>
> Downloaded 17154062 / 17169724 | current 0.00bps | total 2.88bps

Keep in mind that resyncing a Nethermind node can take a considerable amount of time. It depends on your hardware, internet connection, and the size of the blockchain.
