import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# witness

## witness_witnesses

Return witness of Block provided

| Invocation                                                 |
|:-----------------------------------------------------------|
| `{"method":"witness_witnesses","params":[blockParameter]}` |

| Parameter      | Type                    | Description          |
|:---------------|:------------------------|:---------------------|
| blockParameter | `BlockParameter object` | Block to get witness |

| Returned type | Description                                                           |
|:--------------|:----------------------------------------------------------------------|
| `Hash`        | Table of hashes of state nodes that were read during block processing |

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"witness_witnesses","params":[{"jsonrpc":"2.0","result":["0xa2a9f03b9493046696099d27b2612b99497aa1f392ec966716ab393c715a5bb6"],"id":67}],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": 1
}
```

</TabItem>
<TabItem value="objects" label="Object">


`BlockParameter`

| Field name       | Type                        |
|:-----------------|:----------------------------|
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

</TabItem>
</Tabs>


