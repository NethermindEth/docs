# Runtime

## Directories

If you built the application locally then the entry point will be located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/
```

Log files by default are located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/logs
```

Database by default is located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/nethermind_db
```

## Static nodes

Static nodes are a pre-configured array of nodes you can trust. They can be defined with a simple `static-nodes.json` file containing a list of `enodes` separated with comma.

```bash
[
  "enode://c1c3a604950119f82d78189792b73f5a96bd09017c77465e3c32fc51c1d758a9a772ffddd58436d465342f2cfa6d4a442a49e526743f4d8354d7c5ce794c3ee5@127.0.0.1:30303",
  "enode://2784b947df025df9911875e68ccfcb0627ad4ae1dfb9f77634435692e8626508d9a6a04adff7719d3d73b25e72cbedee8d8e431492afbbd5fb4082e78c52d934@127.0.0.1:30303"
]
```

By default `static-nodes.json` file is stored in `Data/` folder included in Nethermind packages. Path to `static-nodes` file can be configured via [`StaticNodesPath`](../configuration/init.md) parameter.

## NLog config

You can change the level of logging in file and in the console by choosing one of the levels \(Error, Warn, Info, Debug, Trace\):

```bash
<logger name="*" minlevel="Info" writeTo="file-async"/>
<logger name="*" minlevel="Info" writeTo="auto-colored-console-async"/>
```

More detailed NLog configuration can be found [here](https://github.com/NLog/NLog/wiki/Configuration-file).

### Building from repository

Logging level can be controlled in `NLog.config` file located in:

```text
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/NLog.config
```

### Downloading package from Github/Downloads package

`NLog.config` file is supplied with the package and can be found in extraction directory.

![](../../.gitbook/assets/image%20%2830%29.png)

### Running Nethermind with docker image

`NLog.config` file is located at `/nethermind/NLog.config` path inside the docker container. The volume can be then mapped with a simple command:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

