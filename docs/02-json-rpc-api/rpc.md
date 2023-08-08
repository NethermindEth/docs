# rpc

## rpc_modules

Retrieves a list of modules. 

| Invocation |
| :--- |
| `{"method":"rpc_modules","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

``` bash title="Example request of rpc_modules" 
curl --data '{"method":"rpc_modules","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

