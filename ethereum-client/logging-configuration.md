# Logging Configuration

Logging in Nethermind is done via NLog library that can be configured by editing the NLog.config file.

| Environment Type | NLog.config location |
| :--- | :--- |
| built from src - Debug mode | src\Nethermind\Nethermind.Runner\bin\Debug\netcoreapp3.1\NLog.config |
| built from src - Release mode | src\Nethermind\Nethermind.Runner\bin\Release\netcoreapp3.1\NLog.config |
| Docker | ? |
| Downloaded from [downloads.nethermind.io](https://downloads.nethermind.io) | top level directory after unzipping the package |
| Downloaded from [GitHub releases page](https://github.com/NethermindEth/nethermind/releases) | top level directory after unzipping the package |

Detailed NLog configuration options can be found here: [https://nlog-project.org/config/](https://nlog-project.org/config/)

Additionally there are global logging override that you can use temporarily:

| Command line override | Log level |
| :--- | :--- |
| ./Nethermind.Runner --config mainnet --log TRACE | TRACE |
| ./Nethermind.Runner --config mainnet --log DEBUG | DEBUG |
| ./Nethermind.Runner --config mainnet --log INFO | INFO |
| ./Nethermind.Runner --config mainnet --log WARN | WARN |
| ./Nethermind.Runner --config mainnet --log ERROR | ERROR |

