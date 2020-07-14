# Sync modes

## Archive Sync

Archive sync is the 'heaviest' and slowest sync mode but allows to ask questions like _'what was the balance of my account 2 years ago?'_, _'how many XYZ token were held in SomeExchange custody in 2017?'_.

We have prepared default archive sync configurations and they can be launched from Nethermind Launcher \(just choose the archive options\) or by simply loading appropriate config when launching `./Nethermind.Runner --config mainnet_archive`

`./Nethermind.Runner --config goerli_archive`

While for some smaller networks archive sync can complete very quickly \(in minutes or hours\) mainnet sync would take 2 - 6 weeks depending on the speed of your IO \(whether you use SSD or NVMe or depending on the cloud provider IOPS\). Database size in archive sync is the biggest from all modes as you will store all the historical data.

![Example of the archive sync logs](../.gitbook/assets/image%20%2857%29.png)

Explanation of some data in the logs:

* at the beginning you may see a _'Waiting for peers...'_ message while the node is trying to discover nodes that it can sync with.
* _'Downloaded 1234/8000000'_ shows the number of unprocessed blocks \(with transactions\) downloaded from the network. For `mainnet`this value may be slower than processing at first but very quickly you will see blocks being downloaded much faster than processed. Empty blocks can as small as 512 bytes \(just headers without transactions\) and full blocks with heavy transactions can reach a few hundred kilobytes. We display both current download speed \(calculated in the last second\) and average \(total\) speed since starting the node.
* _'Processed ...'_ displays the blocks that have been processed by the EVM. The first number shows the current head block number, then you can see `mgasps` \(million gas per second\) - current and total, then `tps` \(transactions per second\) - current and total, `bps` \(blocks per second\). Then `recv queue` \(transactions signature public key recovery queue\), `proc queue` \(processor queue\). Both recovery queue and processor queue are designed so when too many blocks are waiting for processing then only their hashes are kept in memory and remaining data are stored in the database. Thus, the queues numbers that you can see will be capped by some number.
* _'Cache for epoch...'_ informs about `ethash` cache needed for block seal verification \(only on `mainnet` and `ropsten`\). Caches will be calculated every 30000 blocks \(length of an epoch\) but can can also be calculated for the latest blocks that are being broadcast on the network.
* After the archive sync finishes you will see the _'Processed...'_ message appearing on average every 15 seconds when the new block is processed.
* `mgasps`, `tps`, `bps` values should not be treated as comparable as they may differ massively on different parts of the chain. For example when blocks are empty you may see very high `bps` values with very low \(or even zero\) `tps` and `mgasps` values as there are no transactions and no gas for EVM processing and blocks are very light. On the other hand when blocks are filled with very heavy transactions then `bps` might be very low while `mgasps` will be very high. It is even possible that you will see a lot of very light transactions where `tps` will be high while `bps` and `mgasps` will be average.

## Fast Sync

## Beam Sync

