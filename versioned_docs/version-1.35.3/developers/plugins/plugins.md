---
title: Plugins
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind plugins are a powerful way of extending its capabilities by adding new features and functionalities. If you need a functionality missing in Nethermind, you can add it yourself as a plugin! Actually, many Nethermind features are implemented as plugins, like L2 network support such as Optimism and Taiko, health checks, and Shutter, to name a few. The sky is the limit. Almost.

:::info
Nethermind plugins are .NET assemblies (.dll) that Nethermind's process loads on startup. By default, they are located in the `plugins` directory. To set a different location for plugins, use the [`--plugins-dir`](../../fundamentals/configuration.md#plugins-dir) command line option. In that case, move the bundled plugins to the new location to ensure the correct functionality of Nethermind.
:::

:::tip
We have a dedicated [Discord channel](https://discord.gg/K8MdZT3keK) for plugin development. Please get in touch with us if you have any issues or need functionality that is not provided by the current plugin API.
:::

This guide will walk you through writing a simple plugin to better understand the Nethermind plugin API and its capabilities.

## Creating a basic plugin

:::info Before you begin
Ensure you have installed the required version of the .NET SDK. See [Building from source](../building-from-source.md#prerequisites) for the details.
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

All Nethermind plugins must implement the [`INethermindPlugin`][inethermindplugin] interface. That's how Nethermind recognizes its plugins. So, let's create a `DemoPlugin` class implementing that interface:

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
        logger.Warn("Hello, world!");

        return Task.CompletedTask;
    }

    // Initializes the network stack
    public Task InitNetworkProtocol() => Task.CompletedTask;
    // Initializes the JSON-RPC stuff
    public Task InitRpcModules() => Task.CompletedTask;
    // Initializes the transaction-related stuff
    public void InitTxTypesAndRlpDecoders(INethermindApi api) { }
    // Cleans up resources
    public ValueTask DisposeAsync() => default;
}
```

Let's examine the code above. The properties at lines 8-10 are required and self-explanatory. They are displayed on Nethermind startup for each loaded plugin. Next is the `Init()` method at line 13, which is the main entry point of any plugin where initialization begins. Its only argument of type [`INethermindApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/INethermindApi.cs) → [`IApiWithNetwork`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithNetwork.cs) → [`IApiWithBlockchain`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithBlockchain.cs) → [`IApiWithStores`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithStores.cs) → [`IBasicApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IBasicApi.cs) is the main gateway to the Nethermind API, as its name implies. The `INethermindApi` interface provides a rich functionality set essential for plugin development and is widely used in the Nethermind codebase.

In line 15, we get the logger instance we need to print our message. Usually, that instance is stored in a private field to be available to other class members, but in our example, we don't need that. Once we have the instance, we log the message as a warning so you can spot it easily in the logs.

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

That's it! We created our very first Nethermind plugin.

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
        logger.Warn("Hello, world!");

    return Task.CompletedTask;
}
```

The highlighted line shows how to get the configuration instance. Note that we get it by its interface type, not the implementing class. That's an important detail.

:::warning Important
The configuration interface name must be in the `I{PluginName}Config` format. In our case, it's `IDemoConfig`.
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
nethermind --demo-enabled
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

As your code grows more complex and sophisticated, you may want to debug it at some point. These are the two ways to do that:

- [Attaching the debugger to the Nethermind process](#debug-attach)
- [Debugging the plugin together with the Nethermind codebase](#debug-codebase)

### Attaching to process \{#debug-attach\}

This approach is preferable if you focus on your plugin only and don't need to debug the Nethermind codebase.

:::info
This guide assumes you already have installed Nethermind. If you haven't, [install](../../get-started/installing-nethermind.md) it before moving on.
:::

We recommend using Visual Studio or JetBrains Rider as a debugger on Windows. On Linux and macOS, we recommend JetBrains Rider. While Visual Studio Code can also attach to and debug processes, it [does not support](https://github.com/dotnet/vscode-csharp/wiki/Troubleshoot-loading-the-.NET-Debug-Services#error-cause-1-net-debugging-services-library-file-is-missing) debugging the "SingleFile" .NET distributions that Nethermind distributives are.

:::tip
You may want to check out the following before moving on:

- [Attach to process with Visual Studio](https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger)
- [Attach to process with JetBrains Rider](https://www.jetbrains.com/help/rider/attach-to-process.html)
  :::

Before attaching the debugger to the Nethermind process, we need to ensure Nethermind will pick up our plugin. There are two ways:

- Run Nethermind with the [`--plugins-dir`](../../fundamentals/configuration.md#plugins-dir) command line option set to the output directory of the plugin project. We recommend copying the other bundled plugins from the original `plugins` directory to the new destination as you may be required depending on your use case.
- Set the plugin project output to the Nethermind's `plugins` directory.

Either of the above approaches will ensure Nethermind loads our plugin with the latest changes automatically. The following video demonstrates what the debugging process looks like:

<p>
  <video disablePictureInPicture controls controlsList="nodownload noremoteplayback" preload="metadata" width="100%">
    <source media="(prefers-color-scheme: dark)" src="https://github.com/user-attachments/assets/267904d4-444e-4eac-91c2-bd76c796c6f3" type="video/mp4" />
    <source media="(prefers-color-scheme: light)" src="https://github.com/user-attachments/assets/a854a649-759c-45f1-8727-8daf382fb043" type="video/mp4" />
  </video>
</p>

### Debugging with Nethermind codebase \{#debug-codebase\}

Another way to debug plugins is to debug them along with the Nethermind codebase. That requires obtaining the Nethermind source code and debugging it with the IDE of your choice. Visual Studio and JetBrains Rider are the most popular choices. Let's try that with our `DemoPlugin` example.

#### Step 1: Clone the Nethermind repo \{#debug-codebase-step-1\}

We highly recommend cloning a stable version of the codebase to avoid any unwanted behavior on debugging. Usually, it's the [latest](https://github.com/NethermindEth/nethermind/releases/latest) released version of Nethermind. For example, the command below clones Nethermind v1.30.0:

```bash
git clone -b "1.30.0" --depth 1 https://github.com/nethermindeth/nethermind.git
```

#### Step 2: Configure the startup project \{#debug-codebase-step-2\}

In the repo's root directory, open the `src/Nethermind/Nethermind.slnx` and set the `Nethermind.Runner` as a startup project. That is the Nethermind's executable that handles everything, including plugins.

#### Step 3: Add the plugin project to the solution \{#debug-codebase-step-3\}

Add the `DemoPlugin` project to the solution to have everything in one place. Then, let's set the `DemoPlugin` project output to Nethermind's `plugins` directory so the latest changes are always available for `Nethermind.Runner` to pick up. Add the following to the `DemoPlugin.csproj`:

```xml
<PropertyGroup>
  <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
  <OutputPath>$(SolutionDir)/artifacts/bin/Nethermind.Runner/debug/plugins</OutputPath>
</PropertyGroup>
```

#### Step 4: Configure build dependencies \{#debug-codebase-step-4\}

Last, let's configure build dependencies so that launching `Nethermind.Runner` automatically builds our `DemoPlugin` with its latest changes, so you don't need to build the plugin separately each time before launching the debugger. With this said, we need to make the `Nethermind.Runner` project depend on the `DemoPlugin` project. See how to configure project dependencies below:

- [Project dependencies in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-create-and-remove-project-dependencies#to-assign-dependencies-to-projects)
- [Project dependencies in JetBrains Rider](https://www.jetbrains.com/help/rider/Architecture__Project_Dependencies_Exploration.html)

<details>
<summary>IDE-agnostic workaround</summary>

If your IDE doesn't provide project dependency configuration, you can achieve that functionality by referencing the `DemoPlugin` project from the `Nethermind.Runner` project. Run the following from `src/Nethermind`:

```bash
dotnet add ./Nethermind.Runner reference path/to/DemoPlugin.csproj
```

Then, in the `Nethermind.Runner.csproj`, find the reference to `DemoPlugin` and disable the reference output as follows:

```xml title="Nethermind.Runner.csproj"
...
<ProjectReference Include="path/to/DemoPlugin.csproj">
<!--highlight-start-->
  <ReferenceOutputAssembly>false</ReferenceOutputAssembly>
<!--highlight-end-->
</ProjectReference>
...
```

Thus, the `DemoPlugin` won't be included in the output of `Nethermind.Runner`. This is important to avoid dependency conflicts.

</details>

#### Launching the debugger \{#debug-codebase-launch\}

Now, we're ready to launch the debugger and check the Nethermind logs for our plugin. You may notice that the "Hello, world!" message is missing, although Nethermind logs show the plugin is loaded. That's because we made it configurable with the `Demo.Enabled` option, which is `false` by default. Let's set it to `true`.

The launch configurations of `Nethermind.Runner` are defined in [`launchSettings.json`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/Properties/launchSettings.json). For instance, if we launch it with Hoodi, we set our `Demo.Enabled` configuration option as follows:

<Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```json title="launchSettings.json"
  ...
  "Hoodi": {
    "commandName": "Project",
  // highlight-start
    "commandLineArgs": "-c hoodi --data-dir .data --demo-enabled",
  // highlight-end
    "environmentVariables": {
      "ASPNETCORE_ENVIRONMENT": "Development"
    }
  },
  ...
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```json title="launchSettings.json"
  ...
  "Hoodi": {
    "commandName": "Project",
    "commandLineArgs": "-c hoodi --data-dir .data",
    "environmentVariables": {
      "ASPNETCORE_ENVIRONMENT": "Development",
  // highlight-start
      "NETHERMIND_DEMOCONFIG_ENABLED": "true"
  // highlight-end
    }
  },
  ...
  ```
  </TabItem>
  </Tabs>

Now, if we launch the debugger with Hoodi, we will see our "Hello, world!" message again!

## Plugin types

Nethermind defines the following plugin types derived from [`INethermindPlugin`][inethermindplugin] intended for specific functionality:

- #### [`IConsensusPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/IConsensusPlugin.cs)

  Plugins of this type provide support for consensus algorithms. For example, see the [`OptimismPlugin`][optimismplugin] or [`EthashPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Consensus.Ethash/EthashPlugin.cs).

- #### [`IConsensusWrapperPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/IConsensusWrapperPlugin.cs)

  Plugins of this type extend or change the handling of the Ethereum PoS consensus algorithm. For example, see the [`MergePlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Merge.Plugin/MergePlugin.cs) or [`ShutterPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Shutter/ShutterPlugin.cs).

- #### [`IInitializationPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/IInitializationPlugin.cs)

  Plugins of this type define _steps_ required to complete during Nethermind initialization. For example, see the [`SnapshotPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Init.Snapshot/SnapshotPlugin.cs).

- #### [`ISynchronizationPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/ISynchronizationPlugin.cs)

  Plugins of this type implement a custom sync logic. For example, see the [`OptimismPlugin`][optimismplugin] or [`TaikoPlugin`][taikoplugin].

## Samples

- [JSON-RPC handler](./samples/json-rpc-handler.md)
- _More to be added later_

[inethermindplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/INethermindPlugin.cs
[optimismplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Optimism/OptimismPlugin.cs
[taikoplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Taiko/TaikoPlugin.cs
