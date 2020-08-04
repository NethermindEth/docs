# Personal

personal\_importRawKey

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| keyData | System.Byte |
| passphrase | System.String |

personal\_listAccounts

_description missing_

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |


personal\_lockAccount

_description missing_

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |

personal\_unlockAccount

_description missing_

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |
| passphrase | System.String |

personal\_newAccount

_description missing_

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| passphrase | System.String |

personal\_sendTransaction

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | Nethermind.JsonRpc.Data.TransactionForRpc |
| passphrase | System.String |

personal\_ecRecover

ecRecover returns the address associated with the private key that was used to calculate the signature in personal\_sign

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| message | System.Byte\[\] |
| signature | System.Byte\[\] |

personal\_sign

The sign method calculates an Ethereum specific signature with: sign\(keccack256\("ƞthereum Signed Message: " + len\(message\) + message\)\)\).

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| message | System.Byte\[\] |
| address | Nethermind.Core.Address |
| passphrase | System.String |

