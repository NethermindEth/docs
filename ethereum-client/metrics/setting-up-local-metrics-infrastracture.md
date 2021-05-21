---
description: Las métricas se pueden usar para monitorear tus nodos Nethermind en ejecución
---

# Configurando la infraestructura de métricas local

## Configuración de métricas

Nethermind metrics can be consumed by _Prometheus/Grafana_ if configured in [Metrics configuration category](../configuration/metrics.md).

## Infraestructura de métricas

### Habilitación de métricas en Nethermind

Las métricas se pueden habilitar simplemente pasando el argumento `--Metrics.Enabled true` a los contenedores de Docker,`Nethermind.Runner` or `Nethermind.Launcher`  e.g. `./Nethermind.Runner --Metrics.Enabled true`. 

`Metrics.PushGatewayUrl` deberá modificarse si el endpoint de la puerta de enlace push no está predeterminado.

### Ejecución de la configuración de muestra

* [x] clone [metrics-infrastructure](https://github.com/NethermindEth/metrics-infrastructure) repositorio

```bash
git clone https://github.com/NethermindEth/metrics-infrastructure.git
```

1. [x] vaya al directorio `metrics-infrastructure` 

```bash
cd metrics-infrastructure
```

1. [x] ejecuta docker stack

```bash
docker-compose up -d
```

* La instancia de _Prometheus_ debería estar ejecutándose ahora en [`http://localhost:9090/`](http://localhost:9090/)
* _Pushgateway_ en [`http://localhost:9091/`](http://localhost:9091/)
* _Grafana en_ [`http://localhost:3000/`](http://localhost:3000/)\`\`

1. [x] ejecuta el nodo `Nethermind` con` Metrics` habilitado y debería ver las métricas en _Pushgateway_ [url](http://localhost:9091/)

{% hint style="info" %}
Puedes agregar el servicio nethermind al archivo `docker-compose.yml` para que se ejecute con todo el stack

```yaml
nethermind:
    image: nethermind/nethermind
    container_name: nethermind
    restart: unless-stopped
    command: '--config goerli --Metrics.Enabled true'
    network_mode: host
    volumes:
        - ./nethermind_db/:/nethermind/nethermind_db/
        - ./keystore/:/nethermind/keystore/
        - ./logs/:/nethermind/logs/
```
{% endhint %}

{% tabs %}
{% tab title="Runner" %}
```bash
./Nethermind.Runner --Metrics.Enabled true
```
{% endtab %}

{% tab title="Launcher" %}
```bash
./Nethermind.Launcher --Metrics.Enabled true
```
{% endtab %}

{% tab title="Docker" %}
```bash
docker run -it --network host nethermind/nethermind:alpine --Metrics.Enabled
```
{% endtab %}
{% endtabs %}

![http://localhost:9091/](https://nethermind.readthedocs.io/en/latest/_images/pushgateway.png)

1. [x] abre _Grafana_ [url](http://localhost:3000) e inicie sesión con el inicio de sesión predeterminado \ (admin\) y la contraseña \ (admin \), omita el cambio de contraseña si lo desea

![](../../.gitbook/assets/image%20%2828%29.png)

* [x] vaya a los dashboards de manejo [`http://localhost:3000/dashboards`](http://localhost:3000/dashboards)and click `Nethermind`

![](../../.gitbook/assets/image%20%2826%29.png)

* [x] ahora puedes explorar las métricas y monitorear su nodo Nethermind

![](../../.gitbook/assets/image%20%2829%29.png)

### Prometheus, Pushgateway y recursos de Grafana

{% embed url="https://github.com/prometheus/prometheus" caption="Prometheus GitHub" %}

{% embed url="https://github.com/prometheus/pushgateway" caption="Pushgateway GitHub" %}

{% embed url="https://github.com/grafana/grafana" caption="Grafana GitHub" %}

