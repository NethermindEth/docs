# Upgrades

When upgrading existing database make sure that you read the release notes for all version between your current version and the version that you are upgrading to.

The **biggest risk** when upgrading is to **upgrade a fast synced node** that is **not in a synced state** with a **new pivot block** in configuration \(changing the pivot block after sync should not be done - we are in the process of writing code that would prevent it\).

Generally you should ensure that when you upgrade:

* use the same pivot block data as in the initial sync
* **OR** drop the database and resync

Each release of Nethermind is going through the following test procedure:

* Exploratory testing, including mainnet resyncs, Goerli validator testing, JSON RPC
* Nethermind specific unit and integration tests are executed
* Ethereum tests are executed for EVM, fork choice, RLP, Trie
* Legacy \(old network versions\) Ethereum tests are executed for EVM, fork choice, RLP, Trie
* Hive tests for networking, sync and consensus are executed
* Deployment of an ERC20 contract from Truffle to Nethermind spaceneth network
* Smoke Tests are Executed for each of the following syncs:

{% page-ref page="ethereum-networks-synchronization-smoke-testing-with-nethermind.md" %}

| Network | Sync Mode | Consensus | Sync Test |
| :--- | :--- | :--- | :--- |
| Mainnet | fast sync | ethash | YES |
| Mainnet | archive | ethash | NO |
| Mainnet | beam sync | ethash | NO |
| Goerli | fast sync | Clique | YES |
| Goerli | archive | Clique | YES |
| Goerli | beam sync | Clique | NO |
| Rinkeby | fast sync | Clique | YES |
| Rinkeby | archive | Clique | NO |
| Rinkeby | beam sync | Clique | NO |
| Ropsten | fast sync | ethash | YES |
| Ropsten | archive | ethash | NO |
| Ropsten | beam sync | ethash | NO |
| POA Core | fast sync | AuRa | YES |
| POA Core | archive | AuRa | NO |
| POA Core | beam sync | AuRa | NO |
| Sokol | fast sync | AuRa | YES |
| Sokol | archive | AuRa | YES |
| Sokol | beam sync | AuRa | NO |
| xDAI | fast sync | POSDAO | YES |
| xDAI | archive | POSDAO | YES |
| xDAI | beam sync | POSDAO | NO |
| EnergyWeb | fast sync | AuRa | YES |
| EnergyWeb | archive | AuRa | YES |
| EnergyWeb | beam sync | AuRA | NO |
| Volta | fast sync | AuRa | YES |
| Volta | archive | AuRa | YES |
| Volta | beam sync | AuRa | NO |

![Example of sync test results](../.gitbook/assets/image%20%2893%29.png)

