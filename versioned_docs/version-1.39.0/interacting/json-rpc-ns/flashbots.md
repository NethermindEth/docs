---
title: flashbots namespace
sidebar_label: flashbots
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### flashbots_validateBuilderSubmissionV3

 validate the builder submissions as received by a relay

<Tabs>
<TabItem value="params" label="Parameters">

1. `params`: _object_
    - `blobsBundle`: _object_
      - `blobs`: array of _string_ (hex data)
      - `commitments`: array of _string_ (hex data)
      - `proofs`: array of _string_ (hex data)
    - `executionPayload`: _object_
      - `base_fee_per_gas`: _string_ (hex integer)
      - `blob_gas_used`: _string_ (hex integer)
      - `block_hash`: _string_ (hash)
      - `block_number`: _string_ (hex integer)
      - `excess_blob_gas`: _string_ (hex integer)
      - `extra_data`: _string_ (hex data)
      - `fee_recipient`: _string_ (address)
      - `gas_limit`: _string_ (hex integer)
      - `gas_used`: _string_ (hex integer)
      - `logs_bloom`: _string_ (hex data)
      - `parent_hash`: _string_ (hash)
      - `prev_randao`: _string_ (hash)
      - `receipts_root`: _string_ (hash)
      - `state_root`: _string_ (hash)
      - `timestamp`: _string_ (hex integer)
      - `transactions`: array of _string_ (hex data)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount_in_gwei`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validator_index`: _string_ (hex integer)
    - `message`: _object_
      - `blockHash`: _string_ (hash)
      - `builderPublicKey`: _object_
        - `address`: _string_ (address)
        - `bytes`: _string_ (hex data)
        - `hash`: _string_ (hash)
        - `prefixedBytes`: _string_ (hex data)
      - `gasLimit`: _string_ (hex integer)
      - `gasUsed`: _string_ (hex integer)
      - `parentHash`: _string_ (hash)
      - `proposerFeeRecipient`: _string_ (address)
      - `proposerPublicKey`: _object_
        - `address`: _string_ (address)
        - `bytes`: _string_ (hex data)
        - `hash`: _string_ (hash)
        - `prefixedBytes`: _string_ (hex data)
      - `slot`: _string_ (hex integer)
      - `value`: _string_ (hex integer)
    - `parentBeaconBlockRoot`: _string_ (hash)
    - `registeredGasLimit`: _string_ (hex integer)
    - `signature`: _string_ (hex data)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "flashbots_validateBuilderSubmissionV3",
      "params": [params]
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
  - `status`: _string_
  - `validationError`: _string_

</TabItem>
</Tabs>

