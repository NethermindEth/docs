# Troubleshooting Issues



### Nethermind only shows active peers after FastHeaders synced. (happens with chains that already merged to PoS)

The most likely cause for this is that the CL client is either not running or trying to connect to the wrong JSON RPC port. to solve this follow these steps:

1. Make sure `EnginePort` or `AdditionalRpcUrls`  is configured correctly and matches the port entered in your CL client. Follow [this link](troubleshooting-issues.md#jsonrpc-configuration-module) for details.
2. Make sure CL client is running. Follow [this link](troubleshooting-issues.md#how-to-run-consensus-clients) for details.

### Getting `engine_exchangeTransitionConfigurationV1 found but the containing module is disabled for the url .......`

For this one, either the allowed modules for `AdditionalRpcUrls` does not include `engine` , or the port that you configured the CL client to use is not the same as the port configured in `EnginePort` or with `AdditionalRpcUrls`. to solve this follow these steps:

1. Make sure `EnginePort` or `AdditionalRpcUrls`  is configured correctly and matches the port entered in your CL client. Follow [this link](troubleshooting-issues.md#jsonrpc-configuration-module) for details.
2. If you are using `AdditionalRpcUrls`, make sure that `AdditionalRpcUrls` has `engine` among the allowed modules. e.g : `"AdditionalRpcUrls": ["http://localhost:8551|http;ws|net;eth;engine;web3;client"]`.
3. Make sure the CL client port is pointing to the same port specified in `EnginePort` or in `AdditionalRpcUrls`.

### Getting `Method engine_... is not supported`

it could mean one of two things:

1. `--Merge.Enabled` not set to `true` on the CLI or in the Config file. refer to the [this Link](../ethereum-client/configuration/merge.md) for more info.
2. Nethermind.Merge.Plugin.cs is not in the plugins folder.

### Getting `Error when handling ID 1, engine_exchangeTransitionConfigurationV1`

it could mean one of two things:

1. `--Merge.Enabled` not set to `true` on the CLI or in the Config file. refer to the [this Link](../ethereum-client/configuration/merge.md) for more info.
2. Nethermind.Merge.Plugin.dll is not in the plugins folder.

### Getting  `[MergeTransitionInfo] Terminal Total Difficulty wasn't specified in Nethermind` or  or

This is most likely due to not updating the `Chainspec` folder when updating nethermind. Either update Chainspec folder or specify TTD manually like explained [here](troubleshooting-issues.md#ttd-configuration-important).

### Getting `[MergeTransitionInfo] Found the difference in terminal total difficulty between Nethermind and CL.`&#x20;

This has two possible cases, either TTD is misconfigured in nethermind or it is misconfigured in the CL Client. to solve this, make sure to update the chainspec folder when updating nethermind or setting the TTD manually like explained [here](troubleshooting-issues.md#ttd-config). Another possible solution is to update your CL Client.

{% hint style="danger" %}
Please note TerminalTotalDifficulty is different from one network to another.
{% endhint %}
