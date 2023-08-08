# Sync modes

## There are three main synchronization modes

* snap sync
  * the fastest way to sync to the network (syncs to mainnet in \~3 hours)
  * downloads only the latest state, headers, and optionally bodies and receipts
* fast sync
  * slower than snap sync
  * useful on nethermind-only chains (like Gnosis), where snap sync is not available for now
  * downloads only the latest state, headers, and optionally bodies and receipts
* archive sync
  * heavy historical sync verifying all the transactions and keeping all the historical state
  * you can run it like this `./Nethermind.Runner --config mainnet_archive`

| Sync Mode                                                  | Disk Space needed | Full current state | Full current and all historical states | Can sync a full archive node from this | Time to sync | Time to RPC |
| ---------------------------------------------------------- | ----------------- | ------------------ | -------------------------------------- | -------------------------------------- | ------------ | ----------- |
| archive                                                    | \~12TB            | YES                | YES                                    | YES                                    | \~3 weeks    | \~3 weeks   |
| snap/fast sync with all bodies and receipts                | \~800GB           | YES                | NO                                     | YES                                    | \~20 hours   | \~20 hours  |
| default snap/fast sync (with barriers set to support Eth2) | \~500GB           | YES                | NO                                     | NO                                     | \~11 hours   | \~11 hours  |
| snap/fast sync without receipts                            | \~450GB           | YES                | NO                                     | YES                                    | \~12 hours   | \~12 hours  |
| snap/fast sync without bodies and receipts                 | \~200GB           | YES                | NO                                     | NO                                     | \~9 hours    | \~9 hours   |

## Snap Sync

Snap sync allows a node to perform the initial synchronization and download of Ethereum’s state up to 10 times faster than using fast sync.

#### How to Enable

Snap sync is enabled by default for majority of networks. To make sure, check if`SnapSync` is set to `true` in the Sync module of your `.cfg` file

```
"Sync": {
	"SnapSync": true
}
```

> **IMPORTANT**: Do not enable snap sync on a previously synced node. Only use when syncing to the network for the first time.
>
> **IMPORTANT**: Do not remove other configurations from Sync module. Just add `"SnapSync": true`, e.g.
>
> ```
> "Sync": {
> 	"SnapSync": true,
> 	"PivotNumber": 15011000,
>         "PivotHash": "0x46c838d02d5fa5bc070080ed7965da1d888f6eb1797045365407c7011280af56",
>     	"PivotTotalDifficulty": "52367203434576253689712",
>     	"FastBlocks": true
> }
> ```

#### Snap Sync vs Other Sync Modes

More than 12TB of storage is needed today to run a full archive node — one that stores all the state since genesis. Because of that, setting up an archive node can take days or even weeks. Fast Sync can still take more than 24 hours on the fast machine and download about 90GB state data. With Snap Sync, sync time is reduced to 2-3h with a download of about 30GB.

This reduction in sync time and download size has to do with the specific way in which Ethereum’s state is stored in a node: Merkle trees.

![](</img/Untitled(1).png>)

With Fast Sync, a node downloads the headers of each block and retrieves all the nodes beneath it until it reaches the leaves. By contrast, Snap Sync only downloads the leaf nodes, generating the remaining nodes locally which saves time and packets downloaded.

#### Current limitations and future development

For now Snap Sync on the Nethermind client can only download the Ethereum state but not serve it to other clients - snap serving development is in progress, expected late 2023/early 2024.

The only Ethereum client that supports serving Snap Sync requests is Geth, so only networks supported by Geth can be synced using that method: Mainnet, Goerli, Sepolia.

## Fast Sync

After completing the fast sync your node will have the ability to answer questions like _'what is my account balance **now**'_, _'how many XYZ tokens SomeExchange holds **at the moment**'_.

Fast sync has multiple stages. Nethermind uses a `pivot block` number to improve fast sync performance. The `pivot block` data is automatically updated after initialization of the client and consists of the `block number`, `block hash` and `block total difficulty` (please note that `total difficulty` is different than `difficulty`). Before synchronizing state data Nethermind synchronizes in two directions - backwards from `pivot block` to 0 for headers and forward to the head of the chain for headers, blocks and receipts. Forward sync might be very slow (5 - 50 bps) so having fresh pivot block is very important - it is guaranteed by recently implemented auto-update.

After downloading the block data Nethermind will start state sync (downloading the latest state trie nodes). We are providing an estimate for the download size and progress but the real value may be different than the estimate (especially if you are using an old version of Nethermind as we sometimes manually adjust the estimator based on our observations of the chain growth rate). Because of this sometimes your sync may continue even when it shows \~100% finished. The other important component is the speed of your sync - if your IO / network / file system causes the state sync to go much slower than around 1.5MB per second on average then you will start downloading some parts of the trie over and over again. In such cases you may be surprised to see something like 58000MB / 53000MB (100%). It means that you downloaded around 5GB of data that is no longer needed. If your sync is very slow (extended beyond two days) then very likely your setup cannot catch up with the chain progress.

After the state sync finishes you will see the _'Processed...'_ messages like in archive sync - it means that your node is in sync and is processing the latest blocks.

Mainnet sync, at the time of writing (December 2020), takes around 8 hours on an UpCloud 16GB RAM 8 CPU $40 VM (and then syncs receipts and bodies in the background if you enabled them in the configuration). Goerli sync should take around 40 minutes.

![Fast sync logs example for mainnet.](</img/image(59).png>)

State sync log messages have multiple values displayed. First `dd.HH:mm:ss` total state sync time is displayed, followed by an estimated sync progress (percentage of total database data synced), then the current download speed is displayed (there will be times when it will slow down to 0 or single digit numbers, especially towards the end of the sync). In general 6 hours sync times shown on screenshots are with around 2000 kB/s (kilobytes per second) average sync rate. You can calculate it in the example as \~45GB / (2MB/s) \~ 22500 seconds \~6.25 hours. We also display the number of state accounts synced, number of trie nodes synced and a diagnostic message in the format of _\[number\_of\_pending\_requests].\[average time spent in response handler displayed as milliseconds]_. So `5.6.20ms` means that we are awaiting for responses to 5 requests that have been sent to peers and the average time it takes us to process a single response is 6.20ms. The response handling times will differ depending on how many trie nodes are already cached (so they will be significantly slower for a while after the node restart when cache has to be rebuilt) and based on how fast the database IO is (SSD vs NVMe vs cloud drives). For a reasonable sync time you probably should expect these values to be below 15ms (but they may be as high as 700ms for a while after restarting the node).

A single restart of the node during the fast sync may extend the sync time by up to two hours because the node has to rebuild the caches by reading millions of values from the database.

At the last stages of the sync the node will be repeatedly displaying the branch sync progress and changing the block number to which it tries to catch up. This stage should take between 30 minutes and two hours. If it lasts much more then it is possible that you will not be able to catch up with the network progress.

One of the best indicators that you are close to be synced is combined \~100% state size progress and nearly 100% branch sync progress.

![](</img/image(64).png>)

![](</img/image(62).png>)

## Archive Sync

Archive sync is the 'heaviest' and slowest sync mode but allows to ask questions like _'what was the balance of my account 2 years ago?'_, _'how many XYZ token were held in SomeExchange custody in 2017?'_.

We have prepared default archive sync configurations and they can be launched from Nethermind Launcher (just choose the archive options) or by simply loading appropriate config when launching `./Nethermind.Runner --config mainnet_archive`

`./Nethermind.Runner --config goerli_archive`

While for some smaller networks archive sync can complete very quickly (in minutes or hours) mainnet sync would take 2 - 6 weeks depending on the speed of your IO (whether you use SSD or NVMe or depending on the cloud provider IOPS). Database size in archive sync is the biggest from all modes as you will store all the historical data.

![Example of the archive sync logs](</img/image(58).png>)

![](</img/image(57).png>)

Explanation of some data in the logs:

* at the beginning you may see a _'Waiting for peers...'_ message while the node is trying to discover nodes that it can sync with.
* _'Downloaded 1234/8000000'_ shows the number of unprocessed blocks (with transactions) downloaded from the network. For `mainnet`this value may be slower than processing at first but very quickly you will see blocks being downloaded much faster than processed. Empty blocks can be as small as 512 bytes (just headers without transactions) and full blocks with heavy transactions can reach a few hundred kilobytes. We display both current download speed (calculated in the last second) and average (total) speed since starting the node.
* _'Processed ...'_ displays the blocks that have been processed by the EVM. The first number shows the current head block number, then you can see `mgasps` (million gas per second) - current and total, then `tps` (transactions per second) - current and total, `bps` (blocks per second). Then `recv queue` (transactions signature public key recovery queue), `proc queue` (processor queue). Both recovery queue and processor queue are designed so when too many blocks are waiting for processing then only their hashes are kept in memory and remaining data are stored in the database. Thus, the queues numbers that you can see will be capped by some number.
* _'Cache for epoch...'_ informs about `ethash` cache needed for block seal verification (only on `mainnet` and `ropsten`). Caches will be calculated every 30000 blocks (length of an epoch) but can also be calculated for the latest blocks that are being broadcast on the network.
* After the archive sync finishes you will see the _'Processed...'_ message appearing on average every 15 seconds when the new block is processed.
* `mgasps`, `tps`, `bps` values should not be treated as comparable as they may differ massively on different parts of the chain. For example when blocks are empty you may see very high `bps` values with very low (or even zero) `tps` and `mgasps` values as there are no transactions and no gas for EVM processing and blocks are very light. On the other hand when blocks are filled with very heavy transactions then `bps` might be very low while `mgasps` will be very high. It is even possible that you will see a lot of very light transactions where `tps` will be high while `bps` and `mgasps` will be average.
