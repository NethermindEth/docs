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
Al pasar una bandera, cada propiedad debe tener el prefijo de su ****[**módulo**](https://app.gitbook.com/@nethermind/s/nethermind/~/drafts/-MaAKH3aeKCFuQB_nKeN/v/spanish/cliente-de-ethereum/configuration) ****respectivo, seguido del **nombre de la propiedad** y su **valor**, por ejemplo, `--Init.IsMining`true
{% endhint %}

{% hint style="info" %}
Utilice / como separador de ruta para que las configuraciones se puedan compartir entre todas las plataformas compatibles \(Linux, Windows, MacOS\).
{% endhint %}

{% hint style="info" %}
Las opciones`--config`, `--baseDbPath`,`--datadir, --loggerConfigSource, --log` y `--configsDirectory`están disponibles en la línea de comandos para seleccionar el archivo de configuración, el prefijo del directorio base de la base de datos y el nivel de registro, respectivamente.  
  
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

