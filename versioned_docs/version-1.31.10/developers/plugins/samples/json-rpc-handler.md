---
title: JSON-RPC handler
sidebar_position: 0
---

In this guide we're going to create a plugin that adds a new JSON-RPC method to Nethermind and handles all the requests with that method.

:::info Before you begin
This guide assumes you have read the [introduction](../plugins.md) to plugins.
:::

In Nethermind, JSON-RPC functionality is an extensible combination of various modules grouped by their responsibilities. For instance, the `eth_`-prefixed methods, well known by all RPC users, are handled by the `IEthRpcModule`. By design, RPC modules must have their respective interface derived from the [`IRpcModule`][irpcmodule] and a class implementing that interface.

Let's create our `IDemoRpcModule` interface and implement it in `DemoRpcModule` class:

```csharp title="IDemoRpcModule.cs" showLineNumbers
using Nethermind.JsonRpc;
using Nethermind.JsonRpc.Modules;

namespace DemoRpcPlugin;

//highlight-start
[RpcModule("Demo")]
//highlight-end
public interface IDemoRpcModule : IRpcModule
{
    ResultWrapper<string> demo_divide(int x, int y);
}
```

Although the interface above is straightforward, it needs some explanation. Since the [`IRpcModule`][irpcmodule] is an empty interface, there's nothing specific to implement besides our RPC methods. Each RPC method is a regular interface method with the same name in the code. So, if we want to have `demo_divide` RPC method, we declare a method (function) named the same. If we need to pass parameters with our RPC call, we define those parameters as function arguments with their respective types. In this example, we create a method that takes two integer parameters, `x` (dividend) and `y` (divisor), divides one to another, and returns their quotient, as a string. All RPC methods' return type is [`ResultWrapper<T>`][resultwrapper], where the `T` is the actual data type we intend to return in the response. If a method is async, the return type must be `Task<ResultWrapper<T>>`. We will showcase that in later examples. Last but not least, in line 6, the interface is decorated with [`RpcModule`][rpcmoduleattr] attribute that sets the name of our module used in configuration settings. We will see its importance later when we try to make a request.

Now, let's begin with the actual implementation:

```csharp title="DemoRpcModule.cs" showLineNumbers
using Nethermind.JsonRpc;

namespace DemoRpcPlugin;

public class DemoRpcModule : IDemoRpcModule
{
    public ResultWrapper<string> demo_divide(int x, int y)
    {
        if (y == 0)
//highlight-start
            return ResultWrapper<string>.Fail("Divisor cannot be zero", float.NaN.ToString());
//highlight-end

        var result = (float)x / y;

//highlight-start
        return ResultWrapper<string>.Success(result.ToString());
//highlight-end
    }
}
```

The [`ResultWrapper<T>`][resultwrapper] provides two statuses -- success and failure. We use the latter when the divisor is zero to show a meaningful error message to the user and some data if needed, `NaN` in our case.

Now when we have all we need, we should let Nethermind know about our RPC module by registering it with [`IRpcModuleProvider`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.JsonRpc/Modules/IRpcModuleProvider.cs) in the dedicated `InitRpcModules()` method as follows:

```csharp title="DemoRpcPlugin.cs" showLineNumbers
using Nethermind.Api;
using Nethermind.Api.Extensions;
using Nethermind.JsonRpc.Modules;

namespace DemoRpcPlugin;

public class DemoRpcPlugin : INethermindPlugin
{
    private INethermindApi? _api;

    public string Name => "Demo JSON-RPC plugin";
    public string Description => "A sample plugin for demo";
    public string Author => "Anonymous";

    public Task Init(INethermindApi nethermindApi)
    {
        _api = nethermindApi;

        return Task.CompletedTask;
    }

    public Task InitNetworkProtocol() => Task.CompletedTask;

// highlight-start
    public Task InitRpcModules()
    {
        _api?.RpcModuleProvider?.RegisterSingle<IDemoRpcModule>(new DemoRpcModule());

        return Task.CompletedTask;
    }
// highlight-end

    public void InitTxTypesAndRlpDecoders(INethermindApi api) { }
    public ValueTask DisposeAsync() => default;
}
```

Although the highlighted code is mainly self-explanatory, there's a caveat. The `RegisterSingle<T>()` method expects the `T` to be an interface, not a class. The following snippet demonstrates that:

```csharp
// Error: Module factory type should be an interface...
_api.RpcModuleProvider.RegisterSingle(new DemoRpcModule());

// Error: Module factory type should be an interface...
var module = new DemoRpcModule();
_api.RpcModuleProvider.RegisterSingle(module);

// OK
IDemoRpcModule module = new DemoRpcModule();
_api.RpcModuleProvider.RegisterSingle(module);

// OK
var module = new DemoRpcModule();
_api.RpcModuleProvider.RegisterSingle((IDemoRpcModule)module);
// or
_api.RpcModuleProvider.RegisterSingle<IDemoRpcModule>(module);
```

We're ready to test our plugin with Nethermind. Let's build it, copy it to the `plugins` folder, and launch Nethermind. It takes a few moments for Nethermind to initialize and start the JSON-RPC server. Once you see the following message, you can start making requests:

```text
======================== Nethermind initialization completed ========================
...
JSON RPC     : http://127.0.0.1:8545 ; http://127.0.0.1:8551
...
=====================================================================================
```

Now let's check how our `demo_divide` method divides 32 by 2 as follows:

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "demo_divide",
      "params": [
        32, 2
      ]
    }'
```

:::tip
Nethermind also allows numeric parameters to be passed as strings and supports hex encoding.
:::

The response should look like the following:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32600,
    "message": "The method 'demo_divide' is found but the namespace 'Demo' is disabled for http://127.0.0.1:8545. Consider adding the namespace 'Demo' to JsonRpc.AdditionalRpcUrls for an additional URL, or to JsonRpc.EnabledModules for the default URL."
  },
  "id": 0
}
```

This is because not all RPC modules are enabled by default for security and performance reasons. The bundled Nethermind configurations enable some widely used ones for convenience, but any additional modules, including third-party ones, must be enabled explicitly. We'll follow the instructions in the error message to enable our module for the default RPC URL. Remember the [`RpcModule`][rpcmoduleattr] attribute in line 6 of `IDemoRpcModule` interface? Now, it comes in handy. We will use its name of `Demo` to pass it to [`JsonRpc.EnabledModules`](../../../fundamentals/configuration.md#jsonrpc-enabledmodules) as follows:

```bash
nethermind \
  -c holesky \
  --jsonrpc-enabledmodules eth,demo
```

We enabled just two modules for demo purposes, but you may enable as many as needed. Note that the module names are case-insensitive here.

Now, our method should work as expected by returning 16 as a result:

```json
{
  "jsonrpc": "2.0",
  "result": "16",
  "id": 0
}
```

If we try to divide 32 by 0, the response should be an error like this:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Divisor cannot be zero",
    "data": "NaN"
  },
  "id": 0
}
```

That's it. We added our custom JSON-RPC handler to Nethermind.

_To be continued_

[irpcmodule]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.JsonRpc/Modules/IRpcModule.cs
[resultwrapper]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.JsonRpc/ResultWrapper.cs
[rpcmoduleattr]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.JsonRpc/Modules/RpcModuleAttribute.cs
