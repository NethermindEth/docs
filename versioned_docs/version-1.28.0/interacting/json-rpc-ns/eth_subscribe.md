### eth_subscribe

Starts a subscription to a particular event over WebSockets. A JSON-RPC notification with event payload and subscription id is sent to a client for every event matching the subscription topic.

:::info
This method is enabled by adding `subscribe` to [`--JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionName`: *string*

2. `filter`: *object*
    - `address`: *string* (address)
    - `fromBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of *string* (hex data)

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

`result`: *string*

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
<p>

Subscribes to incoming block headers. Fires a notification each time a new header is appended to the chain, including chain reorganizations.

Notification `payload`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### logs

</summary>
<p>

Subscribes to incoming logs filtered by the given options. In case of a chain reorganization, previously sent logs on the old chain will be re-sent with the `removed` field set to `true`.

Notification `payload`: *object*
  - `address`: *string* (address)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *string* (hash)
  - `transactionHash`: *string* (hash)
  - `transactionIndex`: *string* (hex integer)
  - `transactionLogIndex`: *string* (hex integer)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### newPendingTransactions

</summary>
<p>

Subscribes to incoming pending transactions. Returns the transaction hash.

Notification `payload`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### droppedPendingTransactions

</summary>
<p>

Subscribes to transactions evicted from the transaction pool. Returns the transaction hash.

Notification `payload`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### syncing

</summary>
<p>

Subscribes to syncing events. Returns `false` (once) if the node is synced or an object with statistics (once) when the node starts syncing.

Notification `payload`:

  - if synced: *boolean*
  - if syncing: *object*
      - `currentBlock`: *string* (hex integer)
      - `highestBlock`: *string* (hex integer)
      - `isSyncing`: *boolean*
      - `startingBlock`: *string* (hex integer)

</p>
</details>
