---
title: JSON-RPC server
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Interacting with Nethermind requires using the JSON-RPC 2.0 protocol. Nethermind provides JSON-RPC over [HTTP](#http), [WebSocket](#websocket), and [IPC socket](#ipc-socket) transports. Each transport must be enabled with the respective configuration option, as shown below. For more details, see the [JSON-RPC configuration options](../fundamentals/configuration.md#jsonrpc).

The JSON-RPC API methods are grouped into several categories (namespaces) depending on their purpose. All API method names are composed of the namespace and the actual method name in that namespace. For instance, the `eth_call` method belongs to the `eth` namespace. See the sidebar for all supported namespaces and methods.

:::note
Not all of the JSON-RPC namespaces are enabled by default. Instead, they must be enabled explicitly with the [`JsonRpc.EnabledModules`](../fundamentals/configuration.md#jsonrpc-enabledmodules) command line option. Otherwise, error code `-32600` is returned. The enabled namespaces can be found in the configuration file specified with the [`-c, --config`](../fundamentals/configuration.md#config) command line option.
:::

## Transports

:::tip
The right choice of transport depends on the specific use case.

- HTTP is a familiar and idempotent transport that closes connections between requests and can, therefore, have lower overall overhead for a relatively low number of requests.
- WebSocket provides a continuous open channel that enables event subscriptions and streaming and handles large volumes of requests with more negligible per-message overhead.
- IPC is generally the most secure as it is limited to local interactions and cannot be exposed to external traffic. It can also be used for event subscriptions.
  :::

### HTTP

HTTP is the most widely used transport for Nethermind. To enable the HTTP server, set the [`JsonRpc.Enabled`](../fundamentals/configuration.md#jsonrpc-enabled) configuration option to `true`. By default, Nethermind uses local loopback (127.0.0.1 or `localhost`) and 8545 port. To use a different host or port, set the [`JsonRpc.Host`](../fundamentals/configuration.md#jsonrpc-host) and [`JsonRpc.Port`](../fundamentals/configuration.md#jsonrpc-port) configuration options, respectively.

### WebSocket

The configuration of the WebSocket server follows the same pattern as the HTTP server. The WebSocket server is enabled automatically when the HTTP server is enabled and uses the same host and port. To disable the WebSocket server, set the [`Init.WebSocketsEnabled`](../fundamentals/configuration.md#init-websocketsenabled) configuration option to `false`. To use a different a port, set the [`JsonRpc.WebSocketsPort`](../fundamentals/configuration.md#jsonrpc-websocketsport) configuration option.

### IPC socket

Nethermind uses IPC based on Unix domain socket. To enable the IPC server, use the [`JsonRpc.IpcUnixDomainSocketPath`](../fundamentals/configuration.md#jsonrpc-ipcunixdomainsocketpath) configuration option. For example:

```
--jsonrpc-ipcunixdomainsocketpath path/to/ipc
```

If the `path/to/ipc` doesn't exist, Nethermind creates one.

## Engine API

The Engine API is a set of RPC methods that enable communication between an execution and consensus client. The clients call these methods automatically when they need to exchange information. Engine API is enabled automatically by default and is not designed to be exposed to the user.

By default, the Engine API uses local loopback (127.0.0.1 or `localhost`) and 8551 port. To use a different host or port, set the [`JsonRpc.EngineHost`](../fundamentals/configuration.md#jsonrpc-enginehost) and [`JsonRpc.EnginePort`](../fundamentals/configuration.md#jsonrpc-engineport) configuration options, respectively. For example, this can be useful when execution and consensus clients are on different machines.

:::warning Important
When the `JsonRpc.EngineHost` option is specified, the `JsonRpc.EnginePort` option must be specified as well.
:::

The Engine API uses JWT authentication and requires a JWT secret. By default, Nethermind creates one at `keystore/jwt-secret` path in its root directory. To use a different path, specify the [`JsonRpc.JwtSecretFile`](../fundamentals/configuration.md#jsonrpc-jwtsecretfile) configuration option.

## Requests

:::info
As per the JSON-RPC 2.0 specification, Nethermind supports batch requests. Specifics depend on the JSON-RPC client used.
:::

Multiple options are available for JSON-RPC interaction from generic utilities like [curl](https://curl.se) and [Postman](https://www.postman.com) for raw requests to tailored tools like [Cast](https://book.getfoundry.sh/cast), to dedicated libraries such as [Ethers.js](https://ethers.org) and [Viem](https://viem.sh), to name a few.

The following examples demonstrate how to make JSON-RPC requests with some of the abovementioned options.

<Tabs groupId="lib">
<TabItem value="cast" label="Cast">

The following example uses the [`eth_getBalance`](./json-rpc-ns/eth.md#eth_getbalance) method to check the balance of the specified account:

```bash
# Assuming Nethermind is running locally using the default port of 8545
cast rpc --rpc-url http://localhost:8545 eth_getBalance 0x00000000219ab540356cbb839cbe05303d7705fa latest

# Alternatively, use the dedicated balance command.
# Note that the output format differs from the one above.
cast balance 0x00000000219ab540356cbb839cbe05303d7705fa --ether --rpc-url http://localhost:8545
```

Similarly, we can use the [`eth_getBlockByNumber`](./json-rpc-ns/eth.md#eth_getblockbynumber) method to fetch the specified block data, including transactions:

```bash
# Assuming Nethermind is running locally using the default port of 8545
cast rpc --rpc-url http://localhost:8545 eth_getBlockByNumber latest true

# Alternatively, use the dedicated block command
cast block latest --rpc-url http://localhost:8545
```

For more information, see [Cast documentation](https://book.getfoundry.sh/reference/cast/).

</TabItem>
<TabItem value="ethers" label="Ethers.js">

:::note
Examples are based on Ethers.js v6.
:::

The following example uses the [`eth_getBalance`](./json-rpc-ns/eth.md#eth_getbalance) method to check the balance of the specified account:

```js
import { JsonRpcProvider, formatEther } from 'ethers';

// Assuming Nethermind is running locally using the default port of 8545
const provider = new JsonRpcProvider('http://localhost:8545');

// Use the low-level API to send the request
let balance = await provider.send('eth_getBalance', [
  '0x00000000219ab540356cbb839cbe05303d7705fa',
  'latest'
]);
console.log('Balance:', formatEther(balance));

// Use the high-level API to send the request.
// Note that the return type may differ from the one of the low-level API.
balance = await provider.getBalance(
  '0x00000000219ab540356cbb839cbe05303d7705fa',
  'latest'
);
console.log('Balance:', formatEther(balance));
```

Similarly, we can use the [`eth_getBlockByNumber`](./json-rpc-ns/eth.md#eth_getblockbynumber) method to fetch the specified block data, including transactions:

```js
import { JsonRpcProvider } from 'ethers';

// Assuming Nethermind is running locally using the default port of 8545
const provider = new JsonRpcProvider('http://localhost:8545');

// Use the low-level API to send the request
let block = await provider.send('eth_getBlockByNumber', ['latest', true]);
console.log('Block:', block);

// Use the high-level API to send the request.
// Note that the return type may differ from the one of the low-level API.
// Not all JSON-RPC methods have their respective high-level API.
block = await provider.getBlock('latest', true);
console.log('Block:', block);
```

For more information, see [Ethers.js documentation](https://docs.ethers.org/v6/).

</TabItem>
<TabItem value="viem" label="Viem">

:::note
Examples are based on Viem v2.
:::

The following example uses the [`eth_getBalance`](./json-rpc-ns/eth.md#eth_getbalance) method to check the balance of the specified account:

```js
import { createPublicClient, http, formatEther, hexToNumber } from 'viem';
import { localhost } from 'viem/chains';

// Assuming Nethermind is running locally using the default port of 8545
const client = createPublicClient({
  chain: localhost,
  transport: http('http://localhost:8545')
});

// Use the low-level API to send the request
let balance = await client.request({
  method: 'eth_getBalance',
  params: ['0x00000000219ab540356cbb839cbe05303d7705fa', 'latest']
});
console.log('Balance:', formatEther(hexToNumber(balance)));

// Use the high-level API to send the request.
// Note that the return type may differ from the one of the low-level API.
// Not all JSON-RPC methods have their respective high-level API.
balance = await client.getBalance({
  address: '0x00000000219ab540356cbb839cbe05303d7705fa',
  blockTag: 'latest'
});
console.log('Balance:', formatEther(balance));
```

Similarly, we can use the [`eth_getBlockByNumber`](./json-rpc-ns/eth.md#eth_getblockbynumber) method to fetch the specified block data, including transactions:

```js
import { createPublicClient, http } from 'viem';
import { localhost } from 'viem/chains';

// Assuming Nethermind is running locally using the default port of 8545
const client = createPublicClient({
  chain: localhost,
  transport: http('http://localhost:8545')
});

// Use the low-level API to send the request
let block = await client.request({
  method: 'eth_getBlockByNumber',
  params: ['latest', true]
});
console.log('Block:', block);

// Use the high-level API to send the request
block = await client.getBlock({
  blockTag: 'latest',
  includeTransactions: true
});
console.log('Block:', block);
```

For more information, see [Viem documentation](https://viem.sh/docs/getting-started).

</TabItem>
</Tabs>

The exhaustive list of supported JSON-RPC methods can be found under the JSON-RPC namespaces.
