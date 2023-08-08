import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# web3

## web3.abi

| Invocation       |
|:-----------------|
| `web3.abi(name)` |

| Parameter | Type     | Description |
|:----------|:---------|:------------|
| name      | `String` |             |

| Returned type | Description |
|:--------------|:------------|
| `String`      |             |

``` yaml title="Example request of web3.abi" 
web3.abi(name)
```

## web3.clientVersion

Returns the current client version.

| Invocation           |
|:---------------------|
| `web3.clientVersion` |

| This method doesn't have parameters. |
|:-------------------------------------|

| Returned type | Description |
|:--------------|:------------|
| `String`      |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
web3.clientVersion
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
Nethermind/v1.10.75-0-310037468-20210717/X64-Linux/5.0.7
```

</TabItem>
</Tabs>

[See also JSON RPC web3_clientVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/web3#web3_clientversion)

## web3.sha3

Returns Keccak of the given data.

| Invocation        |
|:------------------|
| `web3.sha3(data)` |

| Parameter | Type   | Description |
|:----------|:-------|:------------|
| data      | `Data` |             |

| Returned type | Description |
|:--------------|:------------|
| `Hash`        |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
web3.sha3(["0x47767638636211111a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01abc"])
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
0xed3a98886604dcd55a159d55d35f7c14fa2f2aab7fbccbfa5511d8dadeea9442
```

</TabItem>
</Tabs>

[See also JSON RPC web3_sha3](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/web3#web3_sha3)

## web3.toDecimal

| Invocation            |
|:----------------------|
| `web3.toDecimal(hex)` |

| Parameter | Type     | Description |
|:----------|:---------|:------------|
| hex       | `String` |             |

| Returned type       | Description |
|:--------------------|:------------|
| `JavaScript Object` |             |

``` yaml title="Example request of web3.toDecimal" 
web3.toDecimal(hex)
```

