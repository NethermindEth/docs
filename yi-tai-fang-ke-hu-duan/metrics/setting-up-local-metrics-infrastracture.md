---
description: Metrics 可以用来监视正在运行的 Nethermind 节点
---

# 设置本地 Metrics 基础设施

## Metrics 配置

在[Metrics 配置类别](https://github.com/NethermindEth/docs/tree/bcfb341da537eb05ae9b235a5e5b55dad92c0fbb/ethereum-client/configuration/modules/metrics.md)中进行配置后，Nethermind 指标即可用于_Prometheus/Grafana_。

## Metrics 基础设施

### 在 Nethermind 中启用 Metrics

您只需将 `--Metrics.Enabled true` 参数传递给 Docker 容器 `Nethermind.Runner` 或 `Nethermind.Launcher`，即可启用指标，例如，`./Nethermind.Runner --Metrics.Enabled true`。

如果 pushgateway 端点不是默认值，您将需要修改 `Metrics.PushGatewayUrl`。

### 运行样本配置

* [x] 克隆 [Metrics 基础设施](https://github.com/NethermindEth/metrics-infrastructure)代码库

```bash
git clone https://github.com/NethermindEth/metrics-infrastructure.git
```

1. [x] 打开 `metrics-infrastructure` 目录

```bash
cd metrics-infrastructure
```

1. [x] 运行 docker 堆栈

```bash
docker-compose up -d
```

* _Prometheus_ 实例应该在 [`http://localhost:9090/`](http://localhost:9090/) 上运行
* _Pushgateway_ 应该在 [`http://localhost:9091/`](http://localhost:9091/) 上运行
* _Grafana_ 应该在 [`http://localhost:3000/`](http://localhost:3000/)\`\` 上运行
* [\[x\] 在启用 `Metrics` 的情况下运行 `Nethermind` 节点。您会在 _Pushgateway_ 链接 上看到指标流入。](http://localhost:9091/)

{% hint style="info" %}
您可以将 Nethermind 服务添加到 `docker-compose.yml` 文件中，使其与整个堆栈一起运行。

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

1. [x] 打开 _Grafana_ [链接](http://localhost:3000) 并使用默认登录名（admin）和密码（admin）登录。您可以选择跳过密码修改。

![](../../.gitbook/assets/image%20%2828%29.png)

* [x] 打开面板管理 [`http://localhost:3000/dashboards`](http://localhost:3000/dashboards) 并点击 `Nethermind`。 

![](../../.gitbook/assets/image%20%2826%29.png)

* [x] 现在您可以探索指标并监控自己的 Nethermind 节点了。

![](../../.gitbook/assets/image%20%2829%29.png)

### Prometheus、Pushgateway 和 Grafana 的来源

{% embed url="https://github.com/prometheus/prometheus" caption="Prometheus GitHub" %}

{% embed url="https://github.com/prometheus/pushgateway" caption="Pushgateway GitHub" %}

{% embed url="https://github.com/grafana/grafana" caption="Grafana GitHub" %}

