---
description: Nethermind MEV Plugin
---

# MEV Plugin

With the **Nethermind MEV Plugin**, you will be able to mine MEV blocks the same way as [**mev-geth**](https://github.com/flashbots/mev-geth). Furthermore, since our client supports a wide range of consensus mechanisms, we will be able to bring fair and democratized MEV extraction to more chains than ever before.

Initially, **Nethermind MEV Plugin** only works for mining blocks on [**xDai**](xdai-relay.md) ****with the `xdai_pruned_mev.cfg` or `xdai.cfg` config files.

[xdai\_pruned\_mev](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/xdai_pruned_mev.cfg) is basically a copy of [xdai\_pruned](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/xdai_pruned.cfg) config. The only addition to this configuration is the `MevConfig` which consists of 3 settings such as:

* `Enabled`- turns on/off the MEV Plugin within the Nethermind client
* `MaxMergedBundles`- represents the maximum bundles that can be included in a single block. The client will produce and compare several blocks, with the number of bundles ranging from `0` to `MaxMergedBundles`, and select the most profitable one.
* `BundlePoolSize`- a maximum number of MEV bundles that can be kept in memory by clients

