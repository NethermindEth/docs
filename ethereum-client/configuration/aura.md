# Aura module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| AllowAuRaPrivateChains | If 'true' then you can run Nethermind only private chains. Do not use with existing Parity AuRa chains. | false |
| ForceSealing | If 'true' then Nethermind if mining will seal empty blocks. | false |
| Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract | If 'true' then when using BlockGasLimitContractTransitions if the contract returns less than 2mln gas, then 2 mln gas is used. | false |
| TxPriorityConfigFilePath | If set then transaction priority rules are used when selecting transactions from transaction pool. This has higher priority then on chain contract rules. See more at contract details [https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol](https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol) | null |
| TxPriorityContractAddress | If set then transaction priority contract is used when selecting transactions from transaction pool. See more at [https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol](https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol) | null |

