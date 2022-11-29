# Mining



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| Enabled | NETHERMIND_MININGCONFIG_ENABLED | Defines whether the blocks should be produced. | false |
| ExtraData | NETHERMIND_MININGCONFIG_EXTRADATA | Deprecated since v1.14.6. Please use BlocksConfig.ExtraDataValues you set here are forwarded to it. Conflicting values will cause Exceptions. Block header extra data. 32-bytes shall be extra data max length. | Nethermind |
| MinGasPrice | NETHERMIND_MININGCONFIG_MINGASPRICE | Deprecated since v1.14.6. Please use BlocksConfig.MinGasPrice Values you set here are forwarded to it. Conflicting values will cause Exceptions. Minimum gas premium for transactions accepted by the block producer. Before EIP1559: Minimum gas price for transactions accepted by the block producer. | 1 |
| RandomizedBlocks | NETHERMIND_MININGCONFIG_RANDOMIZEDBLOCKS | Deprecated since v1.14.6. Please use BlocksConfig.RandomizedBlocks Values you set here are forwarded to it. Conflicting values will cause Exceptions. Only used in NethDev. Setting this to true will change the difficulty of the block randomly within the constraints. | false |
| TargetBlockGasLimit | NETHERMIND_MININGCONFIG_TARGETBLOCKGASLIMIT | Deprecated since v1.14.6. Please use BlocksConfig.TargetBlockGasLimit. Values you set here are forwarded to it. Conflicting values will cause Exceptions. Block gas limit that the block producer should try to reach in the fastest possible way based on protocol rules. NULL value means that the miner should follow other miners. | null |
