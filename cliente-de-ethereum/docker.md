---
description: Instrucciones de Nethermind Dockers
---

# Docker

## ![](../.gitbook/assets/pobrane.png) Repositorio de Docker

El repositorio de Docker se puede encontrar aquí:

{% embed url="https://hub.docker.com/repository/docker/nethermind/nethermind" caption="Nethermind Docker Hub" %}

## Arquitecturas soportadas

Actualmente soportamos imágenes de Docker para las siguientes arquitecturas de CPU:

* **AMD64**
* **ARM64**

## Usando una imagen existente

### **Etiquetas disponibles:**

| **Etiqueta** | Descripción | Arquitectura |
| :--- | :--- | :--- |
| `latest` | La última imagen basada en **Nethermind Debian** | x86\_64, ARM64 |

Para utilizar una de las versiones anteriores, puedes pasar `{tag}` Ej. `1.8.50` antes del nombre de la imagen principal.

Por ejemplo si deseas utilizar la versión `1.7.4` de la imagen **Nethermind Debian**, el nombre de la imagen sería `nethermind/nethermind:1.7.4`.

Todas las versiones están disponibles en \[historial de etiquetas\] \([https://github.com/NethermindEth/nethermind/tags](https://github.com/NethermindEth/nethermind/tags)\).

### **Ejecutando Nethermind**  Contenedor

Comando Docker pull:

{% tabs %}
{% tab title="" %}
```text
docker pull nethermind/nethermind
```
{% endtab %}
{% endtabs %}

Para iniciar `Nethermind.Runner` simplemente ejecute:

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind
```
{% endtab %}
{% endtabs %}

Puedes usar `--help` para obtener una lista de posibles parámetros de inicio para Nethermind o puede encontrarlos todos \[aquí\] \(configuración/\).

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind --help
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

{% hint style="warning" %}
Las variables de entorno deben pasarse antes de la etiqueta de docker de la ventana acoplable, mientras que los parámetros deben pasarse justo después de la etiqueta de docker de la ventana acoplable.
{% endhint %}

{% hint style="info" %}
Las variables de entorno \*\* **se pueden usar fácilmente dentro de los archivos** docker-compose.yml \*\* en la sección de entorno
{% endhint %}

### **JSON RPC**

Para habilitar JSON RPC, comparta el espacio de nombres de red del host con `--network host` y configure`- JsonRpc.Enabled true`. Para cambiar de puerto, simplemente pase`- JsonRpc.Port 8550`.

Si se ejecuta localmente:

{% tabs %}
{% tab title="" %}
```text
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

o con mapeo de puertos

{% tabs %}
{% tab title="" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}
{% endtabs %}

Si se ejecuta desde una máquina virtual, es posible que desee exponer JSON RPC al mundo exterior a través de `--JsonRpc.Host {hostmachine_ip}`  \(`127.0.0.1` está configurado de forma predeterminada \). Puedes intentar configurar `--JsonRpc.Host 0.0.0.0` si aún no puedes conectarte con JSON RPC.

### **Configuraciones disponibles**

Para cambiar la red, use `--config {network}` flag \(el valor predeterminado es `mainnet`\).

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`
* `energyweb`

Por ejemplo, para ejecutar Nethermind en la network `goerli`:

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind --config goerli
```
{% endtab %}
{% endtabs %}

### **Datadir**

To successfully map volumes such as `database, keystore, logs`at one go you can use `--datadir` command option:

```bash
docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --datadir data
```

### **Volumes**

Para sobreescribir completamente un archivo de configuración, debes usar un volumen:

```bash
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

Para mapear una base de datos interna a un volumen local, necesita mapear `/nethermind/nethermind_db/`:

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

NLog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

Puedes encontrar una configuración más detallada de NLog \[aquí\] \([https://github.com/NLog/NLog/wiki/Configuration-file](https://github.com/NLog/NLog/wiki/Configuration-file)\).

## Compilando una imagen

Dockerfile se puede encontrar en el repositorio \[raíz\] \([https://github.com/NethermindEth/nethermind](https://github.com/NethermindEth/nethermind)\) y actualmente usa el poder de compilaciones de múltiples arcos:

| Nombre del archivo | Descripción | Arquitectura |
| :--- | :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | requiere tener un repositorio clonado para compilar una imagen basada en Debian | x86\_64, ARM64 |

Para compilar las imágenes, ejecute:

```bash
docker buildx build --platform=linux/amd64 -t nethermind .
```

Ejemplo de uso de la imagen docker creada localmente:

```bash
docker run -it nethermind --config goerli
```

