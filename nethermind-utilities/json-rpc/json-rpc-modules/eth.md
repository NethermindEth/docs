# Eth

### eth\_accounts\(\)

Returns accounts

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_blockNumber\(\)

Returns current block number

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_call\(transactionCall, blockParameter\)

Executes a tx call \(does not create a transaction\)

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_chainId\(\)

Returns ChainID

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_coinbase\(\)

Returns miner’s coinbase

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_estimateGas\(transactionCall\)

Executes a tx call and returns gas used \(does not create a transaction\)

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_gasPrice\(\)

Returns miner’s gas price

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getBalance\(address, blockParameter\)

Returns account balance

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getBlockByHash\(blockHash, returnFullTransactionObjects\)

Retrieves a block by hash

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getBlockByNumber\(blockParameter, returnFullTransactionObjects\)

Retrieves a block by number

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getBlockTransactionCountByHash\(blockHash\)

Returns number of transactions in the block block hash

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getBlockTransactionCountByNumber\(blockParameter\)

Returns number of transactions in the block by block number

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getCode\(address, blockParameter\)

Returns account code at given address and block

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getFilterChanges\(filterId\)

Reads filter changes

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getFilterLogs\(filterId\)

Reads filter changes

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getLogs\(filter\)

Reads logs

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getProof\(accountAddress, hashRate, blockParameter\)

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getStorageAt\(address, positionIndex, blockParameter\)

Returns storage data at address. storage\_index

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getTransactionByBlockHashAndIndex\(blockHash, positionIndex\)

Retrieves a transaction by block hash and index

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getTransactionByBlockNumberAndIndex\(blockParameter, positionIndex\)

Retrieves a transaction by block number and index

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getTransactionByHash\(transactionHash\)

Retrieves a transaction by hash

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getTransactionCount\(address, blockParameter\)

Returns account nonce \(number of trnsactions from the account since genesis\) at the given block number

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getTransactionReceipt\(txHashData\)

Retrieves a transaction receipt by tx hash

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getUncleByBlockHashAndIndex\(blockHashData, positionIndex\)

Retrieves an uncle block header by block hash and uncle index

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getUncleByBlockNumberAndIndex\(blockParameter, positionIndex\)

Retrieves an uncle block header by block number and uncle index

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getUncleCountByBlockHash\(blockHash\)

Returns number of uncles in the block by block hash

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getUncleCountByBlockNumber\(blockParameter\)

Returns number of uncles in the block by block number

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_getWork\(\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_hashrate\(\)

Returns mining hashrate

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_mining\(\)

Returns mining status

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_newBlockFilter\(\)

Creates an update filter

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_newFilter\(filter\)

Creates an update filter

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_newPendingTransactionFilter\(\)

Creates an update filter

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_pendingTransactions\(\)

Returns the pending transactions list

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_protocolVersion\(\)

Returns ETH protocol version

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_sendRawTransaction\(transaction\)

Send a raw transaction to the tx pool and broadcasting

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_sendTransaction\(transactionForRpc\)

Send a transaction to the tx pool and broadcasting

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_sign\(addressData, message\)

Signs a transaction

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_snapshot\(\)

Returns full state snapshot

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_submitHashrate\(hashRate, id\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_submitWork\(nonce, headerPowHash, mixDigest\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_syncing\(\)

Returns syncing status

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### eth\_uninstallFilter\(filterId\)

Creates an update filter

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}



