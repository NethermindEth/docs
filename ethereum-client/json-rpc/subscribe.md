# Subscribe module

## eth\_subscribe

Starts a subscription to specific event. For every event matching subscription, JSON-RPC notification with event details and subscription ID will be sent to a client.  
Subscriptions are created with a regular RPC call, with `eth_subscribe` as method and subscription type as first parameter. If successful, returns `subscription ID`.

#### Parameters

| Parameter | Type | Description |
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

{% tabs %}
{% tab title="Request of newHeads" %}
```text
{"method":"eth_subscribe","params":["newHeads"],"id":1,"jsonrpc":"2.0"}
```
{% endtab %}

{% tab title="Response of newHeads" %}
```
{"jsonrpc":"2.0","result":"0x1a14b6bdcf4542fabf71c4abee244e47","id":1}
```
{% endtab %}

{% tab title="Notification of newHeads" %}
```
{
	"jsonrpc":"2.0",
	"method":"eth_subscription",
	"params":
		{
			"subscription":"0x1a14b6bdcf4542fabf71c4abee244e47",
			"result":
				{
					"author":"0x000000568b9b5a365eaa767d42e74ed88915c204",
					"difficulty":"0x1",
					"extraData":"0x4e65746865726d696e6420312e392e32322d302d6463373666616366612d32308639ad8ff3d850a261f3b26bc2a55e0f3a718de0dd040a19a4ce37e7b473f2d7481448a1e1fd8fb69260825377c0478393e6055f471a5cf839467ce919a6ad2700",
					"gasLimit":"0x7a1200",
					"gasUsed":"0x0",
					"hash":"0xa4856602944fdfd18c528ef93cc52a681b38d766a7e39c27a47488c8461adcb0",
					"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
					"miner":"0x0000000000000000000000000000000000000000",
					"mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
					"nonce":"0x0000000000000000",
					"number":"0x434822",
					"parentHash":"0x1a9bdc31fc785f8a95efeeb7ae58f40f6366b8e805f47447a52335c95f4ceb49",
					"receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
					"sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
					"size":"0x261",
					"stateRoot":"0xf38c4bf2958e541ec6df148e54ce073dc6b610f8613147ede568cb7b5c2d81ee",
					"totalDifficulty":"0x633ebd",
					"timestamp":"0x604726b0",
					"transactions":[],
					"transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
					"uncles":[]
				}
		}
}
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="Request of logs" %}
```text
{
	"method":"eth_subscribe",
	"params":
		["logs",
			{
				"fromBlock":"latest",
				"toBlock":"latest",
				"address":"0xb7705ae4c6f81b66cdb323c65f4e8133690fc099",
				"topics":["0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760"]
			}
		],
	"id":1,
	"jsonrpc":"2.0"
}
```
{% endtab %}

{% tab title="Response of logs" %}
```
{"jsonrpc":"2.0","result":"0x0de42098e48c4ffba6d40561dc17b065","id":1}
```
{% endtab %}

{% tab title="Notification of logs" %}
```
{
	"jsonrpc":"2.0",
	"method":"eth_subscription",
	"params":
		{
			"subscription":"0x0de42098e48c4ffba6d40561dc17b065",
			"result":
				{
					"address":"0xb7705ae4c6f81b66cdb323c65f4e8133690fc099",
					"blockHash":"0x05333898e7f28f21a56370ed272b16c4b603d8a1dd26ec44f22639d8d90fe9d9",
					"blockNumber":"0x43489c",
					"data":"0x0000000000000000000000000000000000000000000000000000000000000000",
					"logIndex":"0x7",
					"removed":false,
					"topics":["0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760","0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111","0x000000000000000000000000c74f17181bf55635be65672e366b20f70662b79c"],
					"transactionHash":"0x29c551ba625bfaf58cb3d407c3e6f5c647032725c145cf55c7353cd3387cf845",
					"transactionIndex":"0xa",
					"transactionLogIndex":"0x0"
				}
		}
}
```
{% endtab %}
{% endtabs %}

### newPendingTransactions

Subscribes to incoming pending transactions. Returns transaction hash.

Parameter: `"newPendingTransactions"`

#### Example

{% tabs %}
{% tab title="Request of newPendingTransactions" %}
```text
{"method":"eth_subscribe","params":["newPendingTransactions"],"id":1,"jsonrpc":"2.0"}
```
{% endtab %}

{% tab title="Response of newPendingTransactions" %}
```
{"jsonrpc":"2.0","result":"0xfa561cbadf9b4bd79b62537661d18f27","id":1}
```
{% endtab %}

{% tab title="Notification of newPendingTransactions" %}
```
{
	"jsonrpc":"2.0",
	"method":"eth_subscription",
	"params":
		{
			"subscription":"0xfa561cbadf9b4bd79b62537661d18f27",
			"result":"0x6ad1058c56f71fe630053d24905f06d80677262ae2e8f42799690ab6b9fc5bd0"
		}
}
```
{% endtab %}
{% endtabs %}

### syncing

Subscribe to syncing events. Returns boolean `false` once if node is synced or an object with statistics once when the node starts syncing.

Parameter: `"syncing"`

#### Example

{% tabs %}
{% tab title="Request of syncing" %}
```text
{"method":"eth_subscribe","params":["syncing"],"id":1,"jsonrpc":"2.0"}
```
{% endtab %}

{% tab title="Response of syncing" %}
```
{"jsonrpc":"2.0","result":"0x28d37f96bc784de4abf96ee4f8005a79","id":1}
```
{% endtab %}

{% tab title="Notification of syncing" %}
```
{
	"jsonrpc":"2.0",
	"method":"eth_subscription",
	"params":
		{
			"subscription":"0x28d37f96bc784de4abf96ee4f8005a79",
			"result":false
		}
}

or

{
	"jsonrpc":"2.0",
	"method":"eth_subscription",
	"params":
		{
			"subscription":"0x28d37f96bc784de4abf96ee4f8005a79",
			"result":
				{
					"isSyncing":true,
					"startingBlock":"0x0",
					"currentBlock":"0x4346fe",
					"highestBlock":"0x434806"
				}
		}
}
```
{% endtab %}
{% endtabs %}

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

{% tabs %}
{% tab title="Request of eth\_unsubscribe" %}
```text
{"method":"eth_unsubscribe","params":["0x3cd2bcd1630948fe89190ca27b3b5913"],"id":1,"jsonrpc":"2.0"}
```
{% endtab %}

{% tab title="Response of eth\_unsubscribe" %}
```
{"jsonrpc":"2.0","result":true,"id":1}
```
{% endtab %}
{% endtabs %}

