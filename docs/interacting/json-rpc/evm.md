# Evm

## evm_mine

Triggers block production. 

| Invocation |
| :--- |
| `{"method":"evm_mine","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

``` bash title="Example request of evm_mine" 
curl --data '{"method":"evm_mine","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

