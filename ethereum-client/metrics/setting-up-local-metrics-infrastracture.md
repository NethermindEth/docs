---
description: Metrics then can be used to monitor your running Nethermind nodes
---

# Setting up local Metrics infrastracture

## Metrics Configuration

Nethermind metrics can be consumed by _Prometheus/Grafana_ if configured in [Metrics configuration category](../configuration/modules/metrics.md).

## Metrics infrastracture

### Enabling Metrics in Nethermind

Metrics can be enabled by simply passing `--Metrics.Enabled true` argument to the Docker containers,`Nethermind.Runner` or `Nethermind.Launcher`  e.g. `./Nethermind.Runner --Metrics.Enabled true`. 

`Metrics.PushGatewayUrl` will need to be amended if pushgateway endpoint is not default.

### Setting up Prometheus, Pushgateway and Grafana

{% embed url="https://github.com/prometheus/prometheus" caption="Prometheus GitHub" %}

{% embed url="https://github.com/prometheus/pushgateway" caption="Pushgateway GitHub" %}

{% embed url="https://github.com/grafana/grafana" caption="Grafana GitHub" %}

#### Sample configuration

* [x] create prometheus directory and save below file

```bash
mkdir prometheus
cd prometheus/
```

{% tabs %}
{% tab title="prometheus.yml" %}
```yaml
global:
  scrape_interval:     5s
  evaluation_interval: 5s

scrape_configs:
  - job_name: 'pushgateway'
    honor_labels: true
    static_configs:
    - targets: ['pushgateway:9091']
```
{% endtab %}
{% endtabs %}

* [x] create grafana directory with dashboards and datasources subfolders

```bash
mkdir grafana/
mkdir grafana/dashboards
mkdir grafana/datasources
```

* [x] create `docker-compose.yml` file outside `prometheus` directory

```bash
cd ..
nano docker-compose.yml
```

Example of `docker-compose.yml` file running _Prometheus, Pushgateway_ and _Grafana_ services:

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: "3.5"

services:

    prometheus:
        image: prom/prometheus
        container_name: prometheus
        volumes:
            - ./prometheus/:/etc/prometheus/
            - prometheus_data:/prometheus
        command:
            - '--config.file=/etc/prometheus/prometheus.yml'
            - '--storage.tsdb.path=/prometheus'
            - '--web.console.libraries=/etc/prometheus/console_libraries'
            - '--web.console.templates=/etc/prometheus/consoles'
            - '--storage.tsdb.retention=200h'
            - '--web.enable-lifecycle'
        restart: unless-stopped
        expose:
            - 9090
        ports:
            - "9090:9090"
        networks:
            - metrics


    pushgateway:
        image: prom/pushgateway
        container_name: pushgateway
        restart: unless-stopped
        expose:
            - 9091
        ports:
            - "9091:9091"
        networks:
            - metrics

    grafana:
        image: grafana/grafana
        container_name: grafana
        restart: unless-stopped
        expose:
            - 3000
        ports:
            - "3000:3000"
        networks:
            - metrics
        volumes:
            - ./grafana/:/etc/grafana/provisioning/

networks:
    metrics:
        driver: bridge

volumes:
    prometheus_data: {}
```
{% endtab %}
{% endtabs %}

1. [x] run `docker-compose up -d`

* _Prometheus_ instance should be now running on [`http://localhost:9090/`](http://localhost:9090/)
* _Pushgateway_ on [`http://localhost:9091/`](http://localhost:9091/)
* _Grafana on_ [`http://localhost:3000/`](http://localhost:3000/)\`\`

1. [x] run the `Nethermind` node with `Metrics` enabled and you should see metrics inflowing on _Pushgateway_ [url](http://localhost:9091/)

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

1. [x] open _Grafana_ [url](http://localhost:3000) and login with default login \(admin\) and password \(admin\), skip password change if you want

![](../../.gitbook/assets/image%20%2828%29.png)

* [x] go to dashboards management [`http://localhost:3000/dashboards`](http://localhost:3000/dashboards)and click `Nethermind` 

![](../../.gitbook/assets/image%20%2826%29.png)

* [x] you can now explore metrics and monitor your Nethermind node

![](../../.gitbook/assets/image%20%2829%29.png)

