# AccountAbstraction



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| AaPriorityPeersMaxCount | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_AAPRIORITYPEERSMAXCOUNT | Max number of priority AccountAbstraction peers. | 20 |
| Create2FactoryAddress | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_CREATE2FACTORYADDRESS | Defines the list of the hex string representation of the addresses of the create2Factory contract which was used to create the entryPoint |  |
| Enabled | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENABLED | Defines whether UserOperations are allowed. | false |
| EntryPointContractAddresses | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENTRYPOINTCONTRACTADDRESSES | Defines the comma separated list of hex string representations of the addresses of the EntryPoint contract to which transactions can be made |  |
| FlashbotsEndpoint | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_FLASHBOTSENDPOINT | Defines the string URL for the flashbots bundle reception endpoint | https://relay.flashbots.net/ |
| MaximumUserOperationPerSender | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MAXIMUMUSEROPERATIONPERSENDER | Defines the maximum number of UserOperations that can be kept for each sender | 1 |
| MinimumGasPrice | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MINIMUMGASPRICE | Defines the minimum gas price for a user operation to be accepted | 1 |
| UserOperationPoolSize | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_USEROPERATIONPOOLSIZE | Defines the maximum number of UserOperations that can be kept in memory by clients | 200 |
| WhitelistedPaymasters | NETHERMIND_ACCOUNTABSTRACTIONCONFIG_WHITELISTEDPAYMASTERS | Defines a comma separated list of the hex string representations of paymasters that are whitelisted by the node |  |
