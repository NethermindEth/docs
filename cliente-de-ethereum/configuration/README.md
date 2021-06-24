---
description: Una lista de propiedades para ajustar la configuración del nodo Nethermind
---

# Configuración

Hay tres formas de configurar el nodo Nethermind. Están presentadas a continuación en el orden inverso de prioridades \(si estableces la misma propiedad en el archivo de configuración, en la variable de entorno y en la línea de comandos entonces se utilizará el valor de la línea de comando\).

## Archivo de configuración

Cambia las propiedades de configuración en el archivo `.cfg` de la configuración de red que desea ejecutar. Cada archivo `.cfg` con la configuración predeterminada se adjunta a los paquetes de Nethermind y se puede encontrar en la carpeta`configs`.

## Variables de entorno

La última forma es establecer los valores en las variables de entorno, Ej. `establecer NETHERMIND_INITCONFIG_PROCESSINGENABLED = false`

## Opciones de línea de comando

Otra forma es configurar cada propiedad de configuración pasando indicadores a `Nethermind.Runner` o`Nethermind.Launcher`. Puedes ver la lista de todas las opciones de configuración ejecutando `./Nethermind.Runner --help` Por ejemplo:

```text
./Nethermind.Runner --config ropsten --JsonRpc.Enabled true --Init.ProcessingEnabled false
```

{% hint style="warning" %}
When passing a flag, each property needs to be prefixed with its respective [**Module**](./), followed by the **property name** and its **value** e.g `--Init.IsMining true`
{% endhint %}

{% hint style="info" %}
Use `/` as the path separator so the configs can be shared between all platforms supported \(Linux, Windows, MacOS\).
{% endhint %}

{% hint style="info" %}
`--config`, `--baseDbPath`,`--datadir, --loggerConfigSource, --log` and `--configsDirectory`options are available from the command line to select config file, base DB directory prefix and log level respectively.
{% endhint %}

### datadir

**Usage:** `--datadir` o `-dd`

You may want to use this option to store all data that the node produces in a custom directory. The `--datadir` \(`-dd`\) changes paths of `database, logs, keystore`to the target directory. You can specify either **relative** or **absolute** paths, e.g.

```text
--datadir data
```

```text
--datadir /home/user/nethermind/data
```

```text
--datadir ./data
```

{% hint style="warning" %}
Absolute paths of `Init.BaseDbPath`, `Init.LogDirectory` or`KeyStore.KeyStoreDirectory`in config file will not be overwritten by `--datadir`
{% endhint %}

### baseDbPath

**Usage:** `--baseDbPath` o `-d`

Configures the path of the Nethermind's database folder. Is equal to setting `--Init.BaseDbPath` parameter.

```text
--baseDbPath /home/user/my_node/db
```

### config

**Usage:** `--config` **o** `-c`

Determines the configuration file of the network on which Nethermind will be running.

```text
--config xdai
```

More on that:

{% page-ref page="../networks.md" %}

### log

**Usage:** `--log` **o** `-l`

Changes the logging level.

```text
--log DEBUG
```

More on that:

{% page-ref page="../logging-configuration.md" %}

### configsDirectory

**Usage:** `--configsDirectory` o `-cd`

Changes the source directory of your configuration files.

```text
--configsDirectory /home/user/my_configs
```

### loggerConfigSource

**Usage:** `--loggerConfigSource` o `-lcs`

Changes the path of the `NLog.config` file.

```text
--loggerConfigSource /home/user/NLog.config
```

More on that:

{% embed url="https://github.com/nlog/nlog/wiki" caption="" %}

