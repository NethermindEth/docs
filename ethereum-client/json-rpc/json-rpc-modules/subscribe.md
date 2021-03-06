# Subscribe

## eth\_subscribe

Starts a subscription to specific event. For every event matching subscription, JSON-RPC notification with event details and subscription ID will be sent to a client.  
Subscriptions are created with a regular RPC call, with `eth_subscribe` as method and subscription type as first parameter. If successful, returns `subscription ID`.

#### Parameters

| Parameter name | Type | Description |
| :--- | :--- | :--- |
| subscriptionType | `string` | Type of subscription you want to subscribe to. |
| arguments | `Filter object` | Optional arguments available only for logs subscription. |

#### Returns

| Returned type | Description |
| :--- | :--- |
| `string` | Subscription ID, used to identify subscription and to unsubscribe. |

#### Notifications returns

Depends on the subscription type.

#### Supported subscriptions

* `newHeads` - subscribes to incoming block headers.
* `logs` - subscribes to incoming logs, filtered by the given options.
* `newPendingTransactions` - subscribes to incoming pending transactions.
* `syncing` - subscribes to syncing events.

#### Additional informations

* Subscriptions require a full duplex connections. Due to this reason, they are not available via HTTP and supported only on WebSockets.

  [Learn how to install and use wscat - simple command line WebSockets client.](https://github.com/websockets/wscat)

* Subscriptions are coupled to a connection. If the connection is closed, all subscriptions created over this connection are removed.
* Subscribing to some events can cause a flood of notifications, e.g. listening for all logs/blocks when the node starts to synchronize.

### newHeads

Subscribes to incoming block headers. Fires a notification each time a new header is appended to the chain, including chain reorganizations. Returns `Block object`.

Parameter: `"newHeads"`

#### Example

```text
>> {"method":"eth_subscribe","params":["newHeads"],"id":1,"jsonrpc":"2.0"}
<< {"jsonrpc":"2.0","result":"0x2160ff5d141248a8bbcbbc44a5c3aa54","id":1}
```

### logs

Subscribes to incoming logs, filtered by the given options. In case of a chain reorganization previous sent logs that are on the old chain will be resend with the `removed` property set to `true`.

Parameters:

* `"logs"`
* `Filter object` \(optional\)
  * `fromBlock` - `"earliest"`, `"pending"` or `"latest"` \(optional\)
  * `toBlock` - `"earliest"`, `"pending"` or `"latest"` \(optional\)
  * `address` - either an address or an array of addresses. Only logs that are created from these addresses are returned \(optional\)
  * `topics` - only logs which match the specified topics \(optional\)

If RPC call doesn't have second parameter, or parameters `fromBlock` or `toBlock` are not provided, subscription will use default filter: `fromBlock` - `"latest"`, `toBlock` - `"latest"`

#### Example

```text
>> {"method":"eth_subscribe","params":["logs"],"id":1,"jsonrpc":"2.0"}
<< {"jsonrpc":"2.0","result":"0x00d19d5b87a94098a412de60ea8912b0","id":1}
```

### newPendingTransactions

Subscribes to incoming pending transactions. Returns transaction hash.

Parameter: `"newPendingTransactions"`

#### Example

```text
>> {"method":"eth_subscribe","params":["newPendingTransactions"],"id":1,"jsonrpc":"2.0"}
<< {"jsonrpc":"2.0","result":"0x6927b0dcf6534500add4b589230c19ff","id":1}
```

### syncing

Subscribe to syncing events. Returns an object once when the node starts or finish syncing.

Parameter: `"syncing"`

#### Example

```text
>> {"method":"eth_subscribe","params":["newHeads"],"id":1,"jsonrpc":"2.0"}
<< {"jsonrpc":"2.0","result":"0x482b454f96d74bb08163cf94011778c1","id":1}
```

## eth\_unsubscribe

Unsubscribes from subscription. Subscriptions are cancelled with a regular RPC call with `eth_unsubscribe` as method and `subscription ID` as a parameter. It returns a `bool` indicating if the subscription was cancelled successful.

#### Parameters

| Parameter name | Type | Description |
| :--- | :--- | :--- |
| subscriptionId | `string` | ID of subscription you want to unsubscribe. |

#### Returns

| Returned type | Description |
| :--- | :--- |
| `bool` | `true` if subscription was cancelled successful, `false` if not. |

#### Example

```text
>> {"method":"eth_unsubscribe","params":["0x3cd2bcd1630948fe89190ca27b3b5913"],"id":1,"jsonrpc":"2.0"}
<< {"jsonrpc":"2.0","result":true,"id":1}
```

