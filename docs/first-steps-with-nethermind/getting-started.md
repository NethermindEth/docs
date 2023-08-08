---
description: A quick start example for Görli Testnet Nethermind synchronization
---

# Explaining Nethermind logs

You can check the supported operating systems, architectures and hardware requirements here: [system-requirements.md](system-requirements.md "mention")

After the node starts, you will see some initial info about the node and then the sync will start. Görli fast sync uses a `fast blocks` sync mode initially. The `fast blocks` sync picks some known `pivot block` from the past and downloads `headers`, `bodies`, and `receipts` downwards all the way to `genesis block`. All blocks from 0 to the `pivot block` are showed as `Old Headers` in the `fast blocks sync` logs. The console display shows the number growing from 0 to pivot, but this is just to make the display more user-friendly.

You will see some information about the sync progress, like below:

1. Shows the number of already downloaded `headers`, `bodies` and `receipts` under the name `Downloaded` out of all to be downloaded in the fast blocks stage.
2. Shows the current queue of already downloaded `blocks`, `headers` and `receipts` waiting for being saved to the database.
3. Shows the current download speed (blocks per second - bps).
4. Shows the average download speed (blocks per second - bps).

![Fast blocks sync logs](/img/getting\_started\_log\_0.png)

When the fast blocks stage finishes, there will be some period of downloading blocks between the `pivot` and the`latest blocks` which will have some additional info:

1. Shows the last entry from the fast blocks stage.
2. Shows the mode transition moment.
3. Displays the speed (in blocks per second) of all `headers`, `bodies` and `receipts` at the same time.
4. Additional info will appear every 30000 blocks with information about the Görli epoch being stored.

![Görli fast sync logs](/img/getting\_started\_7.png)

After the `fast sync` part finished, the node will transition to the `state sync stage` when the `state trie` is being downloaded. Much information is displayed about the progress, as this process may take a long time on mainnet (a few hours).

1. Total elapsed time in `state sync` is displayed.
2. The total percentage of downloaded DB size is displayed (on mainnet the sync finishes around 34GB in March 2020, on Görli around 800MB).
3. `branches` stands for the percentage of downloaded branches.
4. Download speed in kilobytes per second is displayed.
5. `accounts` stands for the number of accounts data downloaded already.
6. `nodes` stands for the number of `Patricia trie nodes` downloaded by the sync process.
7. `diagnostic` shows the time spent in the DB write / read access. The higher the value, the worse. It may get much worse if you restart the node during the sync process, as we need to recreate some caches then by reading data from the DB.

![Görli state sync logs](/img/getting\_started\_8.png)

When the state sync is nearing completion, you may see a series of `branch sync` information reloading many times from 0% to nearly 100%. This is the node trying to retrieve the few remaining state nodes and progressing with the head block rapidly:

![Görli branch sync logs](/img/getting\_started\_26.png)

At some point, the entire state is downloaded and the node enters the `full sync` mode and will allow you to issue CLI / Web3 queries and send / receive transactions🥳

1. The `root` is saved at the moment when the entire `Patricia trie` is downloaded.
2. We also clearly state that the node transitions to the `full sync`.
3. When you see the block being processed, then you are in the `full sync` and the newly arrived block is being calculated.
4. Every two minutes you will see a summary of connected peers with their client version, IP address, highest synced block, and data download speeds.

![Görli full sync logs](/img/getting\_started\_9.png)

Also, every now and then, a peer report will appear like below:

![](</img/Screenshot2022-08-10205144.png>)

1. First bracket is for Allocated contexts. It has possible values of `H` for Headers, `B` for Bodies, `R` for Receipts, `N` for State, `S` for Snap, and `W` for Witness.
2. Second bracket is for Sleeping contexts. It has possible values of `H` for Headers, `B` for Bodies, `R` for Receipts, `N` for State, `S` for Snap, and `W` for Witness.
3. Third bracket contains Peer Info.
4. Fourth bracket is for Speeds as Follows:
   * Latency
   * Headers Transfer
   * Bodies Transfer
   * Receipts Transfer
   * Node Data Transfer
   * Snap Ranges Transfer
5. Fifth bracket is for Client Info like Client Name, Client Version, Operating System and Language Version.
