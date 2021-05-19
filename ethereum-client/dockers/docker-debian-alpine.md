# Docker \(Debian/Alpine\)

## Usando una imagen existente

### **Etiquetas disponibles:**

| **Etiqueta** | Descripción | Arquitectura |
| :--- | :--- | :--- |
| `latest` | La última imagen basada en **Nethermind Debian** | x86\_64 |
| `alpine` | La última imagen basada en **Nethermind Alpine** **\ (recomendado \)** | x86\_64 |
| `arm64` | La última imagen basada en **Nethermind ARM64 Debian** | ARM64 |
| `alpine-arm64` | La última imagen basada en **Nethermind ARM64 Alpine** | ARM64 |
| `arm32` | La última imagen basada en **Nethermind ARM32 Debian** | ARM32 |

Para utilizar una de las versiones anteriores puedes pasar `{tag}` Ej. `1.8.50` antes del nombre de la imagen principal.

Por ejemplo si desea utilizar la versión `1.7.4` de la imagen ** Nethermind Alpine **, el nombre de la imagen sería` 1.7.4-alpine`, para ** Nethermind ARM64 Alpine ** `1.7.4-alpine- arm64` **** y así sucesivamente. Todas las versiones están disponibles en [historial de etiquetas] (https://github.com/NethermindEth/nethermind/tags).

{% hint style="info" %}
We highly encourage to use a lighter container which is Alpine based, tagged as `alpine` or `1.8.50-alpine` \(Possible benefit of less memory consumption\)
{% endhint %}

### **Ejecutando Nethermind** Contenedor 

Comando Docker pull:

{% tabs %}
{% tab title="Alpine" %}
```text
docker pull nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```text
docker pull nethermind/nethermind
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker pull nethermind/nethermind:alpine-arm64
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker pull nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker pull nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

Para iniciar `Nethermind.Runner` simplemente ejecute:

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```text
docker run -it nethermind/nethermind
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

Puedes usar `--help` para obtener una lista de posibles parámetros de inicio para Nethermind o puedes encontrarlos todos [aquí] (../configuration/).

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine --help
```
{% endtab %}

{% tab title="Debian" %}
```text
docker run -it nethermind/nethermind --help
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64 --help
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --help
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32 --help
```
{% endtab %}
{% endtabs %}

Es posible modificar cada propiedad de configuración a través de una variable de entorno, usando una convención simple:

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

Por ejemplo:

```text
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

Las variables de entorno deben pasarse antes de la etiqueta de imagen docker, mientras que los parámetros deben pasarse justo después de la etiqueta de la imagen docker.

### **JSON RPC**

Para habilitar JSON RPC, comparta el espacio de nombres de red del host con `--network host` y configure` - JsonRpc.Enabled true`. Para cambiar de puerto, simplemente pase` - JsonRpc.Port 8550`.

Si se ejecuta localmente:

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it --network host nethermind/nethermind:alpine --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian" %}
```text
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it --network host nethermind/nethermind:alpine-arm64 --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it --network host nethermind/nethermind:arm64 --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it --network host nethermind/nethermind:arm32 --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

o con mapeo de puertos

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind:alpine --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:alpine-arm64 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:arm64 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:arm32 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}
{% endtabs %}

Si se ejecuta desde una máquina virtual es posible que desees exponer JSON RPC al mundo exterior a través de `--JsonRpc.Host {hostmachine_ip}` \(`127.0.0.1` está configurado de forma predeterminada\). Puedes intentar configurar `--JsonRpc.Host 0.0.0.0` si aún no puede conectarte con JSON RPC.

### **Configuraciones disponibles**

Para cambiar la red use `--config {network}` flag \(el valor predeterminado es `mainnet`\).

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`

Por ejemplo para ejecutar Nethermind en la red `goerli`:

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine --config goerli
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it nethermind/nethermind --config goerli
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64 --config goerli
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --config goerli
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32 --config goerli
```
{% endtab %}
{% endtabs %}

### **Volúmenes**

Para sobreescribir completamente un archivo de configuración, debes usar un volumen:

```bash
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

Para mapear una base de datos interna a un volumen local, necesita mapear `/nethermind/nethermind_db /`:

```bash
-v /home/user/nethermind_db:/nethermind/nethermind_db
```

Los registros se pueden mapear con el siguiente comando:

```bash
-v /home/user/logs:/nethermind/logs
```

Keystore:

```bash
-v /home/user/keystore:/nethermind/keystore
```

Nlog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

Una configuración mas detallada se puede encontrar en NLog [aquí] (https://github.com/NLog/NLog/wiki/Configuration-file).

## Compilando una imagen

Dockerfile se puede encontrar en el repositorio [root] (https://github.com/NethermindEth/nethermind) y viene con 3 versiones:

| Nombre del archivo | Descripción |
| :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | requiere tener un repositorio clonado para compilar una imagen basada en Debian |
| [Dockerfile\_alpine](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine) | requiere tener un repositorio clonado para construir una imagen basada en Alpine |
| [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) | no requiere tener un repositorio clonado, ya que lo descargará durante el primer paso |

Para compilar las imágenes, ejecute:

```bash
docker build -t nethermind .
```

o:

```bash
docker build -f Dockerfile_full -t nethermind .
```

Dependiendo de la versión elegida.

Ejemplo de uso de la imagen docker creada localmente:

```bash
docker run -it nethermind --config goerli
```

