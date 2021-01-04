# Logging Configuration

## Log config file location

Logging in Nethermind is done via NLog library that can be configured by editing the NLog.config file.

| Environment Type | NLog.config location |
| :--- | :--- |
| built from src - Debug mode | src\Nethermind\Nethermind.Runner\bin\Debug\netcoreapp3.1\NLog.config |
| built from src - Release mode | src\Nethermind\Nethermind.Runner\bin\Release\netcoreapp3.1\NLog.config |
| Docker | /nethermind/NLog.config |
| from [downloads page](https://downloads.nethermind.io) | top level directory after unzipping the package |
| from [GitHub releases page](https://github.com/NethermindEth/nethermind/releases) | top level directory after unzipping the package |
| dAppNode | ? \[to be documented\] |

## Log config file syntax

Detailed NLog configuration options can be found here: [https://nlog-project.org/config/](https://nlog-project.org/config/)

## Global logging override

Additionally there are global logging override that you can use temporarily:

| Command line override | Log level |
| :--- | :--- |
| ./Nethermind.Runner --config mainnet --log TRACE | TRACE |
| ./Nethermind.Runner --config mainnet --log DEBUG | DEBUG |
| ./Nethermind.Runner --config mainnet --log INFO | INFO |
| ./Nethermind.Runner --config mainnet --log WARN | WARN |
| ./Nethermind.Runner --config mainnet --log ERROR | ERROR |

## JSON RPC logging level

This can be done by including these lines in the logging configuration file:

```text
<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>
<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>
<logger name="JsonRpc.*" final="true"/>
```

## Enterprise Logging

See how to configure Seq [here](https://docs.nethermind.io/nethermind/enterprise/seq)

