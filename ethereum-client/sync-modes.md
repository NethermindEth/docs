# Sync modes

## There are three main synchronization modes

* fast sync
  * downloads only the latest state, headers, and optionally bodies and receipts
  * you can run it like this: `./Nethermind.Runner --config mainnet`
  * if you have a good connection and a reasonable machine then setting --Network.MaxActiveSyncPeers to 256 \(see NetworkConfig secion in configuration\) should give much better fast sync times \(we use 256 peers to get 5 hours syncs\) [https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network](https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network)
* beam sync
  * same as fast sync but also allows to query the chain within the first few minutes from starting
  * you can run it like this: `./Nethermind.Runner --config mainnet_beam`
* archive sync
  * heavy historical sync verifying all the transactions and keeping all the historical state
  * you can run it like this `./Nethermind.Runner --config mainnet_archive`

| Sync Mode | Disk Space needed | Full current state | Full current and all historical states | Can sync a full archive node from this | Time to sync | Time to RPC |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| archive | ~5TB | YES | YES | YES | ~3 weeks | ~3 weeks |
| default fast sync \(with barriers set to support Eth2\) | ~100GB | YES | NO | NO | ~11 hours | ~11 hours |
| fast sync with all bodies and receipts | ~320GB | YES | NO | YES | ~20 hours | ~20 hours |
| fast sync without receipts | ~130GB | YES | NO | YES | ~12 hours | ~12 hours |
| fast sync without bodies and receipts | ~70GB | YES | NO | NO | ~9 hours | ~9 hours |
| beam sync | ~320GB | YES | NO | YES | ~30 hours | ~20 minutes |
| beam sync without receipts | ~140GB | YES | NO | YES | ~20 hours | ~20 minutes |
| beam sync without bodies and receipts | ~80GB | YES | NO | NO | ~10 hours | ~20 minutes |
| beam sync without historical headers | ~60GB | YES | NO | NO | ~9 hours | ~5 minutes |

## Fast Sync

Fast sync is probably the most popular method of syncing. After completing the fast sync your node will have the ability to answer questions like _'what is my account balance **now**'_, _'how many XYZ tokens SomeExchange holds **at the moment**'_.

Fast sync is the default syncing method in Nethermind so whenever you launch standard configs you will end up using Fast Sync.

`./Nethermind.Runner --config mainnet`

`./Nethermind.Runner --config goerli`

Fast sync has multiple stages. Nethermind uses a `pivot block` number to improve fast sync performance. The `pivot block` data is provided in the configuration file and consists of the `block number`, `block hash` and `block total difficulty` \(please note that `total difficulty` is different than `difficulty`\). Please note that the meaning of `pivot block` is different in Nethermind than in other clients, for example. Before synchronizing state data Nethermind synchronizes in two directions - backwards from `pivot block` to 0 for headers and forward to the head of the chain for headers, blocks and receipts. Forward sync might be very slow \(5 - 50 bps\) so it is important that you use the latest config or update your config before synchronization.

After downloading the block data Nethermind will start state sync \(downloading the latest state trie nodes\). We are providing an estimate for the download size and progress but the real value may be different than the estimate \(especially if you are using an old version of Nethermind as we sometimes manually adjust the estimator based on our observations of the chain growth rate\). Because of this sometimes your sync may continue even when it shows ~100% finished. The other important component is the speed of your sync - if your IO / network / file system causes the state sync to go much slower than around 1.5MB per second on average then you will start downloading some parts of the trie over and over again. In such cases you may be surprised to see something like 58000MB / 53000MB \(100%\). It means that you downloaded around 5GB of data that is no longer needed. If your sync is very slow \(extended beyond two days\) then very likely your setup cannot catch up with the chain progress.

After the state sync finishes you will see the _'Processed...'_ messages like in archive sync - it means that your node is in sync and is processing the latest blocks.

Mainnet sync, at the time of writing \(December 2020\), takes around 8 hours on an UpCloud 16GB RAM 8 CPU  $40 VM \(and then syncs receipts and bodies in the background if you enabled them in the configuration\). Goerli sync should take around 40 minutes.

![Fast sync logs example for mainnet.](../.gitbook/assets/image%20%2859%29.png)

State sync log messages have multiple values displayed. First `dd.HH:mm:ss` total state sync time is displayed, followed by an estimated sync progress \(percentage of total database data synced\), then the current download speed is displayed \(there will be times when it will slow down to 0 or single digit numbers, especially towards the end of the sync\). In general 6 hours sync times shown on screenshots are with around 2000 kB/s \(kilobytes per second\) average sync rate. You can calculate it in the example as ~45GB / \(2MB/s\) ~ 22500 seconds ~6.25 hours. We also display the number of state accounts synced, number of trie nodes synced and a diagnostic message in the format of _\[number\_of\_pending\_requests\].\[average time spent in response handler displayed as milliseconds\]_. So `5.6.20ms` means that we are awaiting for responses to 5 requests that have been sent to peers and the average time it takes us to process a single response is 6.20ms. The response handling times will differ depending on how many trie nodes are already cached \(so they will be significantly slower for a while after the node restart when cache has to be rebuilt\) and based on how fast the database IO is \(SSD vs NVMe vs cloud drives\). For a reasonable sync time you probably should expect these values to be below 15ms \(but they may be as high as 700ms for a while after restarting the node\).

A single restart of the node during the fast sync may extend the sync time by up to two hours because the node has to rebuild the caches by reading millions of values from the database.

At the last stages of the sync the node will be repeatedly displaying the branch sync progress and changing the block number to which it tries to catch up. This stage should take between 30 minutes and two hours. If it lasts much more then it is possible that you will not be able to catch up with the network progress.

One of the best indicators that you are close to be synced is combined ~100% state size progress and nearly 100% branch sync progress.

![](../.gitbook/assets/image%20%2864%29.png)

![](../.gitbook/assets/image%20%2862%29.png)

## Beam Sync

WARNING: we suggest that you do not pick the beam sync without the full understanding of its current downsides and benefits. Generally beam sync can only be useful for you if you know how to query the beam synced JSON RPC and you need it within the first 30 minutes of sync or so.

Current downsides of beam sync:

* JSON RPC queries have to be executed in a specific way \(they may timeout multiple times before you finally receive a valid response\)
* background state sync will be significantly slower \(and may be syncing long after the downloaded state shows 100%\)
* because of the longer sync times we test beam sync less thoroughly and we think there may be still some issues with the transition between the state sync and full sync at the last stages of the beam sync \(in fact we are just addressing on of such issues in the current 'wit' protocol testing that should be coming in early 1.10.x versions\)
* without the 'wit' protocol that we are currently working on, the mainnet beam sync can be quite inefficient in querying the recent blocks

Current benefits of the beam sync:

* if you know what you are doing, beam sync can give you state access very, very quickly \(within 10 - 30 minutes from starting the sync\)
* similarly to the above, if you know how to work with beam sync, you can start sending transactions from the beam sync node very quickly

The simplest way of explaining beam sync is by saying that the beam sync is exactly the same as fast sync but additionally it downloads the state data \(witnesses\) for the latest blocks. It also allows to execute some queries about the current state via JSON RPC much before the actual fast sync finishes. Currently beam sync takes more resources than fast sync and slows the fast sync down significantly but it allows you the query blockchain within a few minutes from starting.

![Beam sync logs example.](../.gitbook/assets/image%20%2860%29.png)

When the _'Beam sync is ON'_ message is displayed then it generally means that you can ask about the latest headers, latest transactions, you can ask about `eth_getBalance`, `eth_getCode`, `eth_call`, `debug_trace`, `trace_replayTransactions`etc. You cannot ask about transaction receipts or logs as most of them are not processed yet. With beam sync it is possible to create and broadcast an Ether or token transfer transactions from the node.

![](../.gitbook/assets/image%20%2865%29.png)

## Archive Sync

Archive sync is the 'heaviest' and slowest sync mode but allows to ask questions like _'what was the balance of my account 2 years ago?'_, _'how many XYZ token were held in SomeExchange custody in 2017?'_.

We have prepared default archive sync configurations and they can be launched from Nethermind Launcher \(just choose the archive options\) or by simply loading appropriate config when launching `./Nethermind.Runner --config mainnet_archive`

`./Nethermind.Runner --config goerli_archive`

While for some smaller networks archive sync can complete very quickly \(in minutes or hours\) mainnet sync would take 2 - 6 weeks depending on the speed of your IO \(whether you use SSD or NVMe or depending on the cloud provider IOPS\). Database size in archive sync is the biggest from all modes as you will store all the historical data.

![Example of the archive sync logs](../.gitbook/assets/image%20%2858%29.png)

![](../.gitbook/assets/image%20%2857%29.png)

Explanation of some data in the logs:

* at the beginning you may see a _'Waiting for peers...'_ message while the node is trying to discover nodes that it can sync with.
* _'Downloaded 1234/8000000'_ shows the number of unprocessed blocks \(with transactions\) downloaded from the network. For `mainnet`this value may be slower than processing at first but very quickly you will see blocks being downloaded much faster than processed. Empty blocks can be as small as 512 bytes \(just headers without transactions\) and full blocks with heavy transactions can reach a few hundred kilobytes. We display both current download speed \(calculated in the last second\) and average \(total\) speed since starting the node.
* _'Processed ...'_ displays the blocks that have been processed by the EVM. The first number shows the current head block number, then you can see `mgasps` \(million gas per second\) - current and total, then `tps` \(transactions per second\) - current and total, `bps` \(blocks per second\). Then `recv queue` \(transactions signature public key recovery queue\), `proc queue` \(processor queue\). Both recovery queue and processor queue are designed so when too many blocks are waiting for processing then only their hashes are kept in memory and remaining data are stored in the database. Thus, the queues numbers that you can see will be capped by some number.
* _'Cache for epoch...'_ informs about `ethash` cache needed for block seal verification \(only on `mainnet` and `ropsten`\). Caches will be calculated every 30000 blocks \(length of an epoch\) but can also be calculated for the latest blocks that are being broadcast on the network.
* After the archive sync finishes you will see the _'Processed...'_ message appearing on average every 15 seconds when the new block is processed.
* `mgasps`, `tps`, `bps` values should not be treated as comparable as they may differ massively on different parts of the chain. For example when blocks are empty you may see very high `bps` values with very low \(or even zero\) `tps` and `mgasps` values as there are no transactions and no gas for EVM processing and blocks are very light. On the other hand when blocks are filled with very heavy transactions then `bps` might be very low while `mgasps` will be very high. It is even possible that you will see a lot of very light transactions where `tps` will be high while `bps` and `mgasps` will be average.

