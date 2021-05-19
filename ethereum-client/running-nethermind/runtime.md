# Runtime

## Directorios

Si creas la aplicación localmente, el punto de entrada se ubicará en:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/
```

Los archivos de registro de forma predeterminada se encuentran en:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/logs
```

La base de datos por defecto se encuentra en:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/nethermind_db
```

## Nodos estáticos

Los nodos estáticos son una matriz preconfigurada de nodos en los que puede confiar. Se pueden definir con un archivo simple `static-nodes.json` que contiene una lista de` enodes` separados por comas.

```bash
[
  "enode://c1c3a604950119f82d78189792b73f5a96bd09017c77465e3c32fc51c1d758a9a772ffddd58436d465342f2cfa6d4a442a49e526743f4d8354d7c5ce794c3ee5@127.0.0.1:30303",
  "enode://2784b947df025df9911875e68ccfcb0627ad4ae1dfb9f77634435692e8626508d9a6a04adff7719d3d73b25e72cbedee8d8e431492afbbd5fb4082e78c52d934@127.0.0.1:30303"
]
```

By default `static-nodes.json` file is stored in `Data/` folder included in Nethermind packages. Path to `static-nodes` file can be configured via [`StaticNodesPath`](../configuration/init.md) parameter.

## Configuración de NLog

Puede cambiar el nivel de logging en el archivo y en la consola eligiendo uno de los niveles \(Error, Warn, Info, Debug, Trace\):

```bash
<logger name="*" minlevel="Info" writeTo="file-async"/>
<logger name="*" minlevel="Info" writeTo="auto-colored-console-async"/>
```

Puedes encontrar una configuración más detallada de NLog [aquí] (https://github.com/NLog/NLog/wiki/Configuration-file).

### Compilando desde un repositorio

El nivel de logging se puede controlar en el archivo `NLog.config` ubicado en:

```text
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/NLog.config
```

### Descargando el paquete de Github/Downloads package

El archivo `NLog.config` se suministra con el paquete y se puede encontrar en el directorio de extracción.

![](../../.gitbook/assets/image%20%2830%29.png)

### Ejecutando Nethermind con la imagen de docker

El archivo `NLog.config` se encuentra en la ruta `/nethermind/NLog.config` dentro del contenedor docker. Luego, el volumen se puede asignar con un comando simple:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

