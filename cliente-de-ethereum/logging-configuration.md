# Configuración de loggin

## Ubicación del archivo de configuración de registro

El inicio de sesión en Nethermind se realiza a través de la librería NLog que se puede configurar editando el archivo NLog.config.

| Tipo de ambiente | Ubicación de NLog.config |
| :--- | :--- |
| built from src - Debug mode | src\Nethermind\Nethermind.Runner\bin\Debug\netcoreapp3.1\NLog.config |
| built from src - Release mode | src\Nethermind\Nethermind.Runner\bin\Release\netcoreapp3.1\NLog.config |
| Docker | /nethermind/NLog.config |
| from [downloads page](https://downloads.nethermind.io) | directorio de nivel superior después de descomprimir el paquete |
| from [GitHub releases page](https://github.com/NethermindEth/nethermind/releases) | directorio de nivel superior después de descomprimir el paquete |
| dAppNode | ? \[sera documentado\] |

## Sintaxis del archivo de configuración de registro

Opciones detalladas de configuración de NLog se pueden encontrar aquí: [https://nlog-project.org/config/](https://nlog-project.org/config/)

## Anulación de registro global

Además, hay una anulación de registro global que puede usar temporalmente:

| Sobrescritura de la línea de comando | Nivel de registro |
| :--- | :--- |
| ./Nethermind.Runner --config mainnet --log TRACE | TRACE |
| ./Nethermind.Runner --config mainnet --log DEBUG | DEBUG |
| ./Nethermind.Runner --config mainnet --log INFO | INFO |
| ./Nethermind.Runner --config mainnet --log WARN | WARN |
| ./Nethermind.Runner --config mainnet --log ERROR | ERROR |

## Nivel de registro JSON RPC

Esto se puede hacer incluyendo estas líneas en el archivo de configuración de registro:

```text
<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>
<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>
<logger name="JsonRpc.*" final="true"/>
```

## Registro empresarial

Puedes ver cómo configurar Seq \[aquí\] \([https://docs.nethermind.io/nethermind/enterprise/seq](https://docs.nethermind.io/nethermind/enterprise/seq)\)

