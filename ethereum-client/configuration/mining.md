# Mining module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| Enabled | Defines whether the blocks should be produced. | false |
| MinGasPrice | Minimum gas price for transactions accepted by the block producer. | 1000000000 |
| RandomizedBlocks | Only used in NethDev. Setting this to true will change the difficulty of the block randomly within the constraints. | false |
| TargetBlockGasLimit | Block gas limit that the block producer should try to reach in the fastest possible way based on protocol rules. NULL value means that the miner should follow other miners. | null |

