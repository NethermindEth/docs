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

As the package name implies, it provides [reference assemblies](https://learn.microsoft.com/en-us/dotnet/standard/assembly/reference-assemblies) that are only enough to compile the project. To see the plugin in action, put the library assembly (.dll) in the Nethermind's plugins directory and then run Nethermind. We will get to that soon.

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
    public bool Enabled => true;

    // The entry point of the plugin
    public Task Init(INethermindApi nethermindApi)
    {
        var logger = nethermindApi.LogManager.GetClassLogger();
        logger.Warn("Hello, world!");

        return Task.CompletedTask;
    }
}
```

Let's examine the code above. The properties at lines 8–11 are required and self-explanatory. The `Name`, `Description`, and `Author` are displayed on Nethermind startup for each loaded plugin. The `Enabled` property at line 11 tells Nethermind whether this plugin should be initialized. Only plugins returning `true` for `Enabled` are activated; the rest are skipped. Next is the `Init()` method at line 14, which is the main entry point of any plugin where initialization begins. Its only argument of type [`INethermindApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/INethermindApi.cs) → [`IApiWithNetwork`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithNetwork.cs) → [`IApiWithBlockchain`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithBlockchain.cs) → [`IApiWithStores`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IApiWithStores.cs) → [`IBasicApi`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/IBasicApi.cs) is the main gateway to the Nethermind API, as its name implies. The `INethermindApi` interface provides a rich functionality set essential for plugin development and is widely used in the Nethermind codebase.

In line 16, we get the logger instance we need to print our message. Usually, that instance is stored in a private field to be available to other class members, but in our example, we don't need that. Once we have the instance, we log the message as a warning so you can spot it easily in the logs.

:::info
The `INethermindPlugin` interface provides default implementations for the `Init()`, `InitNetworkProtocol()`, `InitRpcModules()`, and `InitTxTypesAndRlpDecoders()` methods. You only need to override the ones your plugin requires. In this basic example, we only override `Init()`.
:::

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
24 Jan 18:01:39 | Detected 17 plugins
...
24 Jan 18:01:39 |   EthStats by Nethermind                Enabled
# highlight-start
24 Jan 18:01:39 |   Demo plugin by Anonymous              Enabled
24 Jan 18:01:39 | Hello, world!
# highlight-end
...
```

That's it! We created our very first Nethermind plugin.

## Configuration

As Nethermind is highly configurable, so may its plugins. The same flexible configuration features that Nethermind uses internally are also available to its plugins. That means a plugin can be configured with command line options, environment variables, and configuration files by simply implementing a single interface.

Nethermind loads and runs all the plugins it finds on startup, but it only initializes those whose `Enabled` property returns `true`. This behavior is particularly useful for resource-hungry plugins or those requiring a specific network (chain) to run on. Instead of hardcoding the `Enabled` property to `true` as we did above, a typical approach is to base it on a configuration setting. Let's implement that for our Demo plugin.

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

That's it for the configuration. Now, let's update our `DemoPlugin` class to use the configuration. Nethermind uses [Autofac](https://autofac.org/) for dependency injection. This means we can inject our configuration interface directly into the plugin's constructor:

```csharp title="DemoPlugin.cs" showLineNumbers
using Nethermind.Api;
using Nethermind.Api.Extensions;

namespace DemoPlugin;

// highlight-start
public class DemoPlugin(IDemoConfig demoConfig) : INethermindPlugin
// highlight-end
{
    public string Name => "Demo plugin";
    public string Description => "A sample plugin for demo";
    public string Author => "Anonymous";

    // highlight-start
    public bool Enabled => demoConfig.Enabled;
    // highlight-end

    public Task Init(INethermindApi nethermindApi)
    {
        var logger = nethermindApi.LogManager.GetClassLogger();
        logger.Warn("Hello, world!");

        return Task.CompletedTask;
    }
}
```

The highlighted lines show the key changes. At line 6, we use a [primary constructor](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/primary-constructors) to accept an `IDemoConfig` instance that Nethermind's dependency injection container resolves automatically. At line 13, `Enabled` delegates to the configuration value, so the plugin is only activated when the user enables it.

:::tip
You can also retrieve configuration via `INethermindApi.Config<T>()` in the `Init()` method:

```csharp
public Task Init(INethermindApi nethermindApi)
{
    var config = nethermindApi.Config<IDemoConfig>();
    // ...
}
```

However, for controlling the `Enabled` property, constructor injection is preferred since `Enabled` is evaluated before `Init()` is called.
:::

:::warning Important
The configuration interface name must be in the `I{PluginName}Config` format. In our case, it's `IDemoConfig`.
:::

The naming convention is crucial for mapping the configuration options. For instance, `IDemoConfig.Enabled` turns into the following configuration options:

- `--demo-enabled` or `--Demo.Enabled` as a command line option
- `NETHERMIND_DEMOCONFIG_ENABLED` as an environment variable
- `{ "Demo": { "Enabled": true|false } }` as a JSON in a configuration file

Since now we know what our configuration options are, let's build the project, copy the library to Nethermind's plugins directory, and run Nethermind as we did previously:

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
24 Jan 18:01:39 | Detected 17 plugins
...
24 Jan 18:01:39 |   EthStats by Nethermind                Enabled
# highlight-start
24 Jan 18:01:39 |   Demo plugin by Anonymous              Disabled
# highlight-end
...
```

There's a slight difference compared to the previous run -- the "Hello, world!" message is gone and the plugin shows as "Disabled". The reason is that the plugin's `Enabled` property returns `false` because `IDemoConfig.Enabled` defaults to `false`. Let's set it to `true` using the command line option as follows:

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

## Dependency injection and modules

Nethermind uses [Autofac](https://autofac.org/) as its dependency injection (DI) container. Plugins can participate in DI by providing an Autofac `Module` through the `Module` property of `INethermindPlugin`. This is used to register services, override default implementations, and register initialization steps.

Here is an example of a plugin that registers a custom service and an initialization step:

```csharp title="DemoPlugin.cs" showLineNumbers
using Autofac;
using Autofac.Core;
using Nethermind.Api.Extensions;
using Nethermind.Api.Steps;

namespace DemoPlugin;

public class DemoPlugin(IDemoConfig demoConfig) : INethermindPlugin
{
    public string Name => "Demo plugin";
    public string Description => "A sample plugin for demo";
    public string Author => "Anonymous";
    public bool Enabled => demoConfig.Enabled;

    // highlight-start
    public IModule Module => new DemoModule();
    // highlight-end
}

// highlight-start
public class DemoModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        // Register an initialization step
        builder.AddStep(typeof(DemoStep));
    }
}
// highlight-end
```

### Initialization steps (IStep) {#steps}

Initialization steps allow plugins to hook into Nethermind's startup sequence. Each step implements the [`IStep`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Steps/IEthereumRunnerStep.cs) interface and is resolved through Autofac, so its dependencies are injected automatically via the constructor:

```csharp title="DemoStep.cs" showLineNumbers
using System.Threading;
using System.Threading.Tasks;
using Nethermind.Api.Steps;
using Nethermind.Logging;

namespace DemoPlugin;

public class DemoStep(ILogManager logManager) : IStep
{
    public Task Execute(CancellationToken cancellationToken)
    {
        var logger = logManager.GetClassLogger();
        logger.Warn("Hello from DemoStep!");

        return Task.CompletedTask;
    }
}
```

Steps may declare dependencies on other steps to control the startup order using the `RunnerStepDependencies` attribute:

```csharp
using Nethermind.Api.Steps;
using Nethermind.Init.Steps;

// This step runs after InitializeBlockchain
[RunnerStepDependencies(typeof(InitializeBlockchain))]
public class DemoStep(ILogManager logManager) : IStep
{
    // ...
}
```

## Debugging

As your code grows more complex and sophisticated, you may want to debug it at some point. These are the two ways to do that:

- [Attaching the debugger to the Nethermind process](#debug-attach)
- [Debugging the plugin together with the Nethermind codebase](#debug-codebase)

### Attaching to process {#debug-attach}

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

### Debugging with Nethermind codebase {#debug-codebase}

Another way to debug plugins is to debug them along with the Nethermind codebase. That requires obtaining the Nethermind source code and debugging it with the IDE of your choice. Visual Studio and JetBrains Rider are the most popular choices. Let's try that with our `DemoPlugin` example.

#### Step 1: Clone the Nethermind repo {#debug-codebase-step-1}

We highly recommend cloning a stable version of the codebase to avoid any unwanted behavior on debugging. Usually, it's the [latest](https://github.com/NethermindEth/nethermind/releases/latest) released version of Nethermind. For example, the command below clones Nethermind v1.30.0:

```bash
git clone -b "1.30.0" --depth 1 https://github.com/nethermindeth/nethermind.git
```

#### Step 2: Configure the startup project {#debug-codebase-step-2}

In the repo's root directory, open the `src/Nethermind/Nethermind.slnx` and set the `Nethermind.Runner` as a startup project. That is the Nethermind's executable that handles everything, including plugins.

#### Step 3: Add the plugin project to the solution {#debug-codebase-step-3}

Add the `DemoPlugin` project to the solution to have everything in one place. Then, let's set the `DemoPlugin` project output to Nethermind's `plugins` directory so the latest changes are always available for `Nethermind.Runner` to pick up. Add the following to the `DemoPlugin.csproj`:

```xml
<PropertyGroup>
  <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
  <OutputPath>$(SolutionDir)/artifacts/bin/Nethermind.Runner/debug/plugins</OutputPath>
</PropertyGroup>
```

#### Step 4: Configure build dependencies {#debug-codebase-step-4}

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

#### Launching the debugger {#debug-codebase-launch}

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

  Plugins of this type provide support for consensus algorithms by implementing the block producer factory interfaces. Only one `IConsensusPlugin` can be active at a time. For example, see the [`OptimismPlugin`][optimismplugin] or [`EthashPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Consensus.Ethash/EthashPlugin.cs).

- #### [`IConsensusWrapperPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/IConsensusWrapperPlugin.cs)

  Plugins of this type extend or change the handling of the Ethereum PoS consensus algorithm by wrapping the block production pipeline. For example, see the [`MergePlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Merge.Plugin/MergePlugin.cs) or [`ShutterPlugin`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Shutter/ShutterPlugin.cs).

### INethermindPlugin reference {#plugin-interface}

The [`INethermindPlugin`][inethermindplugin] interface has the following members. Properties `Name`, `Description`, `Author`, and `Enabled` are required. All methods have default (empty) implementations.

| Member | Description |
|---|---|
| `Name` | The display name of the plugin. |
| `Description` | A brief description of the plugin. |
| `Author` | The author of the plugin. |
| `Enabled` | Whether the plugin is enabled. Only enabled plugins are initialized. |
| `MustInitialize` | If `true`, Nethermind will not start if this plugin's initialization fails. Defaults to `false`. |
| `Module` | An optional Autofac [`IModule`](https://autofac.readthedocs.io/en/latest/configuration/modules.html) for registering services and [initialization steps](#steps) with the DI container. Defaults to `null`. |
| `Init(INethermindApi)` | The main initialization entry point. Called after the DI container is built. |
| `InitNetworkProtocol()` | Initializes the network stack. |
| `InitRpcModules()` | Initializes the JSON-RPC modules. |
| `InitTxTypesAndRlpDecoders(INethermindApi)` | Registers custom transaction types and RLP decoders. |

## Samples

- [JSON-RPC handler](./samples/json-rpc-handler.md)
- _More to be added later_

[inethermindplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Api/Extensions/INethermindPlugin.cs
[optimismplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Optimism/OptimismPlugin.cs
[taikoplugin]: https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Taiko/TaikoPlugin.cs
