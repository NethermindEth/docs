---
description: Metrics then can be used to monitor your running Nethermind nodes
---

# Setting up local Metrics infrastracture

## Metrics Configuration

Nethermind metrics can be consumed by _Prometheus/Grafana_ if configured in [Metrics configuration category](../configuration/modules/metrics.md).

## Metrics infrastracture

Metrics can be enabled by simply passing `--Metrics.Enabled true` argument to the Docker containers,`Nethermind.Runner` or `Nethermind.Launcher`  e.g. `./Nethermind.Runner --Metrics.Enabled true`. 

`Metrics.PushGatewayUrl` will need to be amended if pushgateway endpoint is not default.

### Setting up Prometheus and Pushgateway

{% embed url="https://github.com/prometheus/prometheus" caption="Prometheus GitHub" %}

{% embed url="https://github.com/prometheus/pushgateway" caption="Pushgateway GitHub" %}

#### Basic configuration for Prometheus:

* [x] create prometheus directory and save below file

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
    - targets: ['localhost:9091']
```
{% endtab %}
{% endtabs %}

* [x] create `docker-compose` file outside `prometheus` directory

Example of `docker-compose` file running both _Prometheus_ and _Pushgateway_:

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
            - "127.0.0.1:9090:9090"
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

networks:
    metrics:
        driver: bridge

volumes:
    prometheus_data: {}
```
{% endtab %}
{% endtabs %}

1. [x] run `docker-compose up`

_Prometheus_ instance should be now running on `http://localhost:9090/`.

_Pushgateway_ on `http://localhost:9091/`.

1. [x] run the `Nethermind` node with `Metrics` enabled and you should see metrics inflowing

![](https://nethermind.readthedocs.io/en/latest/_images/pushgateway.png)

1. [x] You can now use this data and create some awesome dashboards in your favourite data visualization tool e.g. _Grafana_, _Splunk_ etc.

