# Blocks

| Property            | Env Variable                                | Description                                                                                                                                                                  | Default    |
|:--------------------|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| ExtraData           | NETHERMIND_BLOCKSCONFIG_EXTRADATA           | Block header extra data. 32-bytes shall be extra data max length.                                                                                                            | Nethermind |
| MinGasPrice         | NETHERMIND_BLOCKSCONFIG_MINGASPRICE         | Minimum gas premium for transactions accepted by the block producer. Before EIP1559: Minimum gas price for transactions accepted by the block producer.                      | 1          |
| RandomizedBlocks    | NETHERMIND_BLOCKSCONFIG_RANDOMIZEDBLOCKS    | Only used in NethDev. Setting this to true will change the difficulty of the block randomly within the constraints.                                                          | false      |
| TargetBlockGasLimit | NETHERMIND_BLOCKSCONFIG_TARGETBLOCKGASLIMIT | Block gas limit that the block producer should try to reach in the fastest possible way based on protocol rules. NULL value means that the miner should follow other miners. | null       |
