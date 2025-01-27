---
title: Plugins
sidebar_position: 1
---

Nethermind plugins are a powerful way of extending its capabilities by adding new features and functionalities. If you need a functionality missing in Nethermind, you can add it yourself as a plugin! Actually, many Nethermind features are implemented as plugins, like L2 network support such as Optimism and Taiko, health checks, and Shutter, to name a few. The sky is the limit. Almost.

:::info
Nethermind plugins are .NET assemblies (.dll) that Nethermind's process loads on startup. By default, they are located in the `plugins` directory. To set a different location for plugins, use the [`--plugins-dir`](../fundamentals/configuration.md#plugins-dir) command line option. In that case, move the bundled plugins to the new location to ensure the correct functionality of Nethermind.
:::

This guide will walk you through writing a simple plugin to better understand the Nethermind plugin API and its capabilities.

## Writing a basic plugin

:::info Before you begin
Ensure you have installed the required version of the .NET SDK. See [Building from source](./building-from-source.md#prerequisites) for the details.
:::

To write a Nethermind plugin, you need the Nethermind API to be available to your code. There are two ways of achieving that:

- Using the [Nethermind.ReferenceAssemblies](https://www.nuget.org/packages/Nethermind.ReferenceAssemblies) NuGet package. This package is updated with each Nethermind release and is versioned the same. Thus, when choosing this approach, ensure the package version is lower than or equal to your target Nethermind version.
- Checking out the Nethermind source code and reference the required projects from the plugin. While this approach seems better for debugging your code, some setups had assembly version mismatch issues after upgrading Nethermind.

In this guide, we will use the first approach. So, let's pick a working directory for the plugin and create a library project as follows:

```bash
dotnet new classlib -n DemoPlugin -o .
```

Now, we need to add the NuGet package to get access to the Nethermind API:

```bash
dotnet add package Nethermind.ReferenceAssemblies
```

As the package name implies, it provides [reference assemblies](https://learn.microsoft.com/en-us/dotnet/standard/assembly/reference-assemblies) that are only enough to compile the project. To see the plugin in action, put the library assembly (.dll) in the Nethermind's plugins directory and then run Nethermind. We will get to that soon.

Now, we have everything we need to begin with the actual implementation. For the sake of simplicity, we will create a basic plugin, a classic example, that simply prints the famous "Hello, world!" message.

All Nethermind plugins must implement the [`INethermindPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/INethermindPlugin.cs) interface. That's how Nethermind recognizes its plugins. So, let's create a `DemoPlugin` class implementing that interface:

```csharp title="DemoPlugin.cs" showLineNumbers
using Nethermind.Api;
using Nethermind.Api.Extensions;

namespace DemoPlugin;

public class DemoPlugin : INethermindPlugin
{
    public string Name => "Demo plugin";
    public string Description => "A sample plugin for demo";
    public string Author => "Anonymous";

    // The entry point of the plugin
    public Task Init(INethermindApi nethermindApi)
    {
        var logger = nethermindApi.LogManager.GetClassLogger();
        logger.Info("Hello, world!");

        return Task.CompletedTask;
    }

    // Initializes the network stack
    public Task InitNetworkProtocol() => Task.CompletedTask;
    // Initializes the JSON-RPC stuff
    public Task InitRpcModules() => Task.CompletedTask;
    // Initializes the transaction-related stuff
    public void InitTxTypesAndRlpDecoders(INethermindApi api) { }
    // Cleans up resources
    public ValueTask DisposeAsync() => ValueTask.CompletedTask;
}
```

Let's examine the code above. The properties at lines 8-10 are required and self-explanatory. They are displayed on Nethermind startup for each loaded plugin. Next is the `Init()` method at line 13, which is the main entry point of any plugin where initialization begins. Its only argument of type [`INethermindApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/INethermindApi.cs) → [`IApiWithNetwork`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithNetwork.cs) → [`IApiWithBlockchain`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithBlockchain.cs) → [`IApiWithStores`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithStores.cs) → [`IBasicApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IBasicApi.cs) is the main gateway to the Nethermind API, as its name implies. The `INethermindApi` interface provides a rich functionality set essential for plugin development and is widely used in the Nethermind codebase.

In line 15, we get the logger instance we need to print our message. Usually, that instance is stored in a private field to be available to other class members, but in our example, we don't need that. Once we have the instance, we log the message at the regular `info` level.

The methods in lines 22-28 are irrelevant for this example, so they are left empty. We will get to them in later examples.

To see our plugin in action, let's build it first:

```bash
dotnet build
```

Once built, we need to copy the `DemoPlugin.dll` to Nethermind's `plugins` directory and run Nethermind. The output should be similar to the one below:

```text
24 Jan 18:01:37 | Nethermind is starting up
...
24 Jan 18:01:37 | Loading 14 assemblies from ...
# highlight-start
24 Jan 18:01:37 | Loading assembly DemoPlugin
24 Jan 18:01:37 |   Found plugin type DemoPlugin
# highlight-end
24 Jan 18:01:37 | Loading assembly Nethermind.Api
...
24 Jan 18:01:39 | Initializing 17 plugins
...
24 Jan 18:01:39 |   EthStats by Nethermind
24 Jan 18:01:39 |   EthStats by Nethermind initialized in 0ms
# highlight-start
24 Jan 18:01:39 |   Demo plugin by Anonymous
24 Jan 18:01:39 | Hello, world!
24 Jan 18:01:39 |   Demo plugin by Anonymous initialized in 0ms
# highlight-end
...
```

That's it! We wrote our very first Nethermind plugin.

## Configuration

As Nethermind is highly configurable, so may its plugins. The same flexible configuration features that Nethermind uses internally are also available to its plugins. That means a plugin can be configured with command line options, environment variables, and configuration files by simply implementing a single interface.

Nethermind loads and runs all the plugins it finds on startup. This behavior may be undesirable for resource-hungry plugins or incompatible with those requiring a specific network (chain) to run on. Thus, a typical scenario for almost any plugin is to be turned on or off by a configuration setting. Let's implement that feature for our Demo plugin.

All Nethermind configurations must implement the [`IConfig`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Config/IConfig.cs) interface. It's a 2 step process.

First, we derive a new interface from the `IConfig` and add all the required configuration options as properties. In our case, it's a single boolean property `Enabled`:

```csharp title="IDemoConfig.cs" showLineNumbers
using Nethermind.Config;

namespace DemoPlugin;

public interface IDemoConfig : IConfig
{
    // The attribute below is optional and serves as documentation
    [ConfigItem(Description = "Whether to enable the Demo plugin.", DefaultValue = "false")]
    bool Enabled { get; set; }
}
```

Second, we implement the interface above as follows:

```csharp title="DemoConfig.cs" showLineNumbers
namespace DemoPlugin;

public class DemoConfig : IDemoConfig
{
    public bool Enabled { get; set; }
}
```

That's it for the configuration. Now, let's check for the value of `Enabled` in the `Init()` method and only log the message if it's `true`:

```csharp
public Task Init(INethermindApi nethermindApi)
{
    var logger = nethermindApi.LogManager.GetClassLogger();
    // highlight-start
    var config = nethermindApi.Config<IDemoConfig>();
    // highlight-end

    if (config.Enabled)
        logger.Info("Hello, world!");

    return Task.CompletedTask;
}
```

The highlighted line shows how to get the configuration instance. Note that we get it by its interface type, not the implementing class. That's an important detail.

:::warning Important
The configuration interface name must be in the `I{PluginName}Config` format. In our case, it's `IDemoConfig`. While the `Config` suffix must remain as it is, the `I` prefix can be any allowed symbol. However, following the .NET naming conventions is highly recommended, and so do we.
:::

The naming convention is crucial for mapping the configuration options. For instance, `IDemoConfig.Enabled` turns into the following configuration options:

- `--demo-enabled` or `--Demo.Enabled` as a command line option
- `NETHERMIND_DEMOCONFIG_ENABLED` as an environment variable
- `{ "Demo": { "Enabled": true|false } }` as a JSON in a configuration file

Since now we know what our configuration options are, let's build the project, copy the library to Nethermind's plugins directory, and run Nethermind as we did previously:

```text
24 Jan 18:01:37 | Nethermind is starting up
...
24 Jan 18:01:37 | Loading 14 assemblies from ...
# highlight-start
24 Jan 18:01:37 | Loading assembly DemoPlugin
24 Jan 18:01:37 |   Found plugin type DemoPlugin
# highlight-end
24 Jan 18:01:37 | Loading assembly Nethermind.Api
...
24 Jan 18:01:39 | Initializing 17 plugins
...
24 Jan 18:01:39 |   EthStats by Nethermind
24 Jan 18:01:39 |   EthStats by Nethermind initialized in 0ms
# highlight-start
24 Jan 18:01:39 |   Demo plugin by Anonymous
24 Jan 18:01:39 |   Demo plugin by Anonymous initialized in 0ms
# highlight-end
...
```

There's a slight difference compared to the previous run -- the "Hello, world!" message is gone. The reason is that we put it under an `if` condition which has not been entered because of the `IDemoConfig.Enabled` is `false` by default. Let's set it to `true` using the command line option as follows:

```bash
nethermind --demo-enabled true
```

Now we see that our message is back, and the configuration option works as intended! That is how to turn plugins on or off in Nethermind and provide other configuration options.

Last, let's test our plugin configuration documentation defined at line 8 in `IDemoConfig.cs`:

```bash
nethermind -h
```

The output should be similar to the following:

```text
Description:

Usage:
  nethermind [options]

Options:
  -?, -h, --help                                              Show help and usage information
  --version                                                   Show version information
...
# highlight-start
  --demo-enabled, --Demo.Enabled <value>                      Whether to enable the Demo plugin.
# highlight-end
  --era-exportdirectory, --Era.ExportDirectory <value>        Directory of archive export.
  --era-from, --Era.From <value>                              Block number to import/export from.
...
```

## Debugging

**TBD**
