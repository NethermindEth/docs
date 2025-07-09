### eth_subscribe

Starts a subscription to a particular event over WebSockets. A JSON-RPC notification with event payload and subscription id is sent to a client for every event matching the subscription topic.

:::info
This method is enabled by adding `subscribe` to [`--JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionName`: _string_

2. `filter`: _object_
   - `address`: _string_ (address)
   - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
   - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
   - `topics`: array of _string_ (hex data)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c ws://localhost:8545
```

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_subscribe",
  "params": [subscriptionName, args]
}
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": "0x..." // subscription id
}
```

`result`: _string_

</TabItem>
<TabItem value="notif" label="Notification">

```json
{
  "jsonrpc": "2.0",
  "method": "eth_subscription",
  "params": {
    "subscription": "0x...", // subscription id
    "result": payload
  }
}
```

See specific subcription topic below for `payload` details.

</TabItem>
</Tabs>

#### Subscription topics

<details>
<summary className="nd-details-heading">

##### newHeads

</summary>

Subscribes to incoming block headers. Fires a notification each time a new header is appended to the chain, including chain reorganizations.

Notification `payload`: _object_

- `author`: _string_ (address)
- `baseFeePerGas`: _string_ (hex integer)
- `blobGasUsed`: _string_ (hex integer)
- `difficulty`: _string_ (hex integer)
- `excessBlobGas`: _string_ (hex integer)
- `extraData`: _string_ (hex data)
- `gasLimit`: _string_ (hex integer)
- `gasUsed`: _string_ (hex integer)
- `hash`: _string_ (hash)
- `logsBloom`: _string_ (hex data)
- `miner`: _string_ (address)
- `mixHash`: _string_ (hash)
- `nonce`: _string_ (hex data)
- `number`: _string_ (hex integer)
- `parentBeaconBlockRoot`: _string_ (hash)
- `parentHash`: _string_ (hash)
- `receiptsRoot`: _string_ (hash)
- `sha3Uncles`: _string_ (hash)
- `signature`: _string_ (hex data)
- `size`: _string_ (hex integer)
- `stateRoot`: _string_ (hash)
- `step`: _string_ (hex integer)
- `timestamp`: _string_ (hex integer)
- `totalDifficulty`: _string_ (hex integer)
- `transactions`: array of _object_
- `transactionsRoot`: _string_ (hash)
- `uncles`: array of _string_ (hash)
- `withdrawals`: array of _object_
  - `address`: _string_ (address)
  - `amount`: _string_ (hex integer)
  - `index`: _string_ (hex integer)
  - `validatorIndex`: _string_ (hex integer)
- `withdrawalsRoot`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### logs

</summary>

Subscribes to incoming logs filtered by the given options. In case of a chain reorganization, previously sent logs on the old chain will be re-sent with the `removed` field set to `true`.

Notification `payload`: _object_

- `address`: _string_ (address)
- `blockHash`: _string_ (hash)
- `blockNumber`: _string_ (hex integer)
- `data`: _string_ (hex data)
- `logIndex`: _string_ (hex integer)
- `removed`: _boolean_
- `topics`: array of _string_ (hash)
- `transactionHash`: _string_ (hash)
- `transactionIndex`: _string_ (hex integer)
- `transactionLogIndex`: _string_ (hex integer)

</details>

<details>
<summary className="nd-details-heading">

##### newPendingTransactions

</summary>

Subscribes to incoming pending transactions. Returns the transaction hash.

Notification `payload`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### droppedPendingTransactions

</summary>

Subscribes to transactions evicted from the transaction pool. Returns the transaction hash.

Notification `payload`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### syncing

</summary>

Subscribes to syncing events. Returns `false` (once) if the node is synced or an object with statistics (once) when the node starts syncing.

Notification `payload`:

- if synced: _boolean_
- if syncing: _object_
  - `currentBlock`: _string_ (hex integer)
  - `highestBlock`: _string_ (hex integer)
  - `isSyncing`: _boolean_
  - `startingBlock`: _string_ (hex integer)

</details>
