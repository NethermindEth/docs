---
title: personal namespace
sidebar_label: personal
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### personal_importRawKey

<Tabs>
<TabItem value="params" label="Parameters">

1. `keyData`: *string* (hex data)

2. `passphrase`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "personal_importRawKey",
      "params": [keyData, passphrase]
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

`result`: *string* (address)

</TabItem>
</Tabs>

### personal_listAccounts

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "personal_listAccounts",
      "params": []
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

`result`: array of *string* (address)

</TabItem>
</Tabs>

### personal_lockAccount

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "personal_lockAccount",
      "params": [address]
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

`result`: *boolean*

</TabItem>
</Tabs>

### personal_newAccount

<Tabs>
<TabItem value="params" label="Parameters">

1. `passphrase`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "personal_newAccount",
      "params": [passphrase]
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

`result`: *string* (address)

</TabItem>
</Tabs>

### personal_unlockAccount

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `passphrase`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "personal_unlockAccount",
      "params": [address, passphrase]
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

`result`: *boolean*

</TabItem>
</Tabs>

