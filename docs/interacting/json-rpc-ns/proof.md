---
title: proof namespace
sidebar_label: proof
sidebar_position: 11
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### proof_call

Executes a call against the state at the given block (analogous to `eth_call`) and returns the call output together with the execution witness — flat lists of state-trie node RLP, loaded contract bytecode, accessed keys, and RLP-encoded block headers emitted in ascending block-number order (any block whose hash was read via the `BLOCKHASH` opcode comes first, and the executed-against header is always the last entry). The witness is sufficient for a stateless verifier to independently re-execute the call.

<Tabs>
<TabItem value="params" label="Parameters">

1. `tx`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `blockTimestamp`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _string_ (transaction type)

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_call",
      "params": [tx, blockParameter]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `error`: optional _object_
    - `code`: _integer_
    - `data`: optional _object_
    - `message`: optional _string_
  - `result`: optional _string_ (hex data)
  - `witness`: _object_
    - `codes`: array of _string_ (hex data)
    - `headers`: array of _string_ (hex data)
    - `keys`: array of _string_ (hex data)
    - `state`: array of _string_ (hex data)

</TabItem>
</Tabs>

### proof_getProofWithMeta

Returns the same payload as `eth_getProof` plus per-call diagnostics: `nodeLookups` (total trie-node fetches), `cacheHits` (of those, served from the in-process trie store cache), and `maxDepth` (deepest level reached in the account or any storage trie, in nibbles). Useful as a client-agnostic proxy for the work an EL does to serve a proof. The `proof` field has the same shape and content as `eth_getProof`'s result: one `storageProof` entry per requested key, in request order, duplicates included.

<Tabs>
<TabItem value="params" label="Parameters">

1. `accountAddress`: _string_ (address)

2. `storageKeys`: array of _string_ (hex storage slot), or a _string_ holding that array as JSON

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_getProofWithMeta",
      "params": [accountAddress, storageKeys, blockParameter]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `meta`: _object_
    - `cacheHits`: _string_ (hex integer)
    - `maxDepth`: _integer_
    - `nodeLookups`: _string_ (hex integer)
  - `proof`: _object_
    - `accountProof`: array of _string_ (hex data)
    - `address`: _string_ (address)
    - `balance`: _string_ (hex integer)
    - `codeHash`: _string_ (hash)
    - `nonce`: _string_ (hex integer)
    - `storageHash`: _string_ (hash)
    - `storageProof`: array of _object_
      - `key`: optional _string_ (hex data)
      - `proof`: array of _string_ (hex data)
      - `value`: optional _string_ (hex data)

</TabItem>
</Tabs>

### proof_getTransactionByHash

Returns the same data as `eth_getTransactionByHash` plus a Merkle-Patricia proof of the transaction's inclusion in the block's `transactionsRoot`. When `includeHeader` is `true`, the RLP-encoded block header is also returned, allowing the proof to be verified against the block's `transactionsRoot`. Returns `null` when the transaction is unknown, or when the block it is stored against cannot be resolved or no longer carries it.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `includeHeader`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_getTransactionByHash",
      "params": [txHash, includeHeader]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `blockHeader`: _string_ (hex data)
  - `transaction`: _object_
    - `blockHash`: _string_ (hash) or `null`
    - `blockNumber`: _string_ (hex integer) or `null`
    - `blockTimestamp`: _string_ (hex integer) or `null`
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash) or `null`
    - `transactionIndex`: _string_ (hex integer) or `null`
    - `type`: _string_ (transaction type)
  - `txProof`: array of _string_ (hex data)

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

### proof_getTransactionReceipt

Returns the same data as `eth_getTransactionReceipt` plus Merkle-Patricia proofs of the transaction's inclusion in the block's `transactionsRoot` and of the receipt's inclusion in the block's `receiptsRoot`. When `includeHeader` is `true`, the RLP-encoded block header is also returned, allowing proofs to be verified against the block's roots. Returns `null` when the transaction is unknown, when the block it is stored against cannot be resolved or no longer carries it, or when the block's stored receipts do not include one for it. Error 4444 replaces `null` when the block's body is pruned below the oldest block the node serves, or when the indexed block is canonical, its stored body holds the transaction, and the block is either below the oldest block the node serves or settled (at or below the head, or processed) with a receipt count that differs from its transaction count.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `includeHeader`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_getTransactionReceipt",
      "params": [txHash, includeHeader]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `blockHeader`: _string_ (hex data)
  - `receipt`: _object_
    - `blobGasPrice`: optional _string_ (hex integer)
    - `blobGasUsed`: optional _string_ (hex integer)
    - `blockGasUsed`: optional _string_ (hex integer)
    - `blockHash`: optional _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `contractAddress`: _string_ (address) or `null`
    - `cumulativeGasUsed`: _string_ (hex integer)
    - `effectiveGasPrice`: optional _string_ (hex integer)
    - `executionGasUsed`: optional _string_ (hex integer)
    - `frameReceipts`: optional array of _object_
      - `executionGasUsed`: _string_ (hex integer)
      - `gasUsed`: _string_ (hex integer)
      - `logs`: optional array of _object_
        - `address`: _string_ (address)
        - `blockHash`: _string_ (hash)
        - `blockNumber`: optional _string_ (hex integer)
        - `blockTimestamp`: optional _string_ (hex integer)
        - `data`: _string_ (hex data)
        - `logIndex`: optional _string_ (hex integer)
        - `removed`: optional _boolean_
        - `topics`: array of _string_ (hash)
        - `transactionHash`: _string_ (hash)
        - `transactionIndex`: optional _string_ (hex integer)
      - `stateGasUsed`: _string_ (hex integer)
      - `status`: _integer_
    - `from`: _string_ (address)
    - `gasUsed`: _string_ (hex integer)
    - `logs`: optional array of _object_
      - `address`: _string_ (address)
      - `blockHash`: _string_ (hash)
      - `blockNumber`: optional _string_ (hex integer)
      - `blockTimestamp`: optional _string_ (hex integer)
      - `data`: _string_ (hex data)
      - `logIndex`: optional _string_ (hex integer)
      - `removed`: optional _boolean_
      - `topics`: array of _string_ (hash)
      - `transactionHash`: _string_ (hash)
      - `transactionIndex`: optional _string_ (hex integer)
    - `logsBloom`: optional _string_ (hex data)
    - `payer`: optional _string_ (address)
    - `root`: optional _string_ (hash)
    - `status`: optional _string_ (hex integer)
    - `storageGasUsed`: optional _string_ (hex integer)
    - `to`: _string_ (address) or `null`
    - `transactionHash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _string_ (transaction type)
  - `receiptProof`: array of _string_ (hex data)
  - `txProof`: array of _string_ (hex data)

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

