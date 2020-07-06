---
description: 指标可用于监视正在运行的Nethermind节点
---

# 设置本地指标基础架构

## 指标配置

如果在[度量标准配置类别](../configuration/modules/metrics.md).中进行配置，_Prometheus/Grafana_可以使用Nethermind度量标准

## 指标基础架构

### Nethermind启用指标

可以使用简单地参数 `--Metrics.Enabled true` 传递给Docker容器，`Nethermind.Runner`或`Nethermind.Launcher` 来启用 度量。 例如 `./Nethermind.Runner --Metrics.Enabled true`. 。

如果pushgateway端点不是默认值的，需要修改`Metrics.PushGatewayUrl`。

### 运行样本配置

* [x] 克隆[度量基础结构](https://github.com/NethermindEth/metrics-infrastructure) repository

```bash
git clone https://github.com/NethermindEth/metrics-infrastructure.git
```

1. [x] 转到` 度量基础结构`目录

```bash
cd metrics-infrastructure
```

1. [x] 运行docker 堆栈

```bash
docker-compose up -d
```

* _Prometheus_实例现在应该在 [`http://localhost:9090/`](http://localhost:9090/) 运行
* _Pushgateway_ 在 [`http://localhost:9091/`](http://localhost:9091/) 运行
* _Grafana 在_ [`http://localhost:3000/`](http://localhost:3000/)\`\` 运行

1. [x]在启用`指标` 的情况下运行 `Nethermind` 节点，您应该看到有指标流入_Pushgateway_ [url](http://localhost:9091/)

{% hint style="info" %}
可以将Nethermind服务添加到 `docker-compose.yml`文件中，以便与整个堆栈一起运行

```yaml
nethermind:
    image: nethermind/nethermind:alpine
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

1. [x] 打开_Grafana_ [url](http://localhost:3000) 并使用默认登录 \(admin\) 和密码 \(admin\), 登录，可以跳过密码更改

![](../../.gitbook/assets/image%20%2828%29.png)

* [x] 转到仪表板管理 [`http://localhost:3000/dashboards`](http://localhost:3000/dashboards) 然后点击 `Nethermind` 

![](../../.gitbook/assets/image%20%2826%29.png)

* [x] 现在可以探索指标并监控自己的的Nethermind节点

![](../../.gitbook/assets/image%20%2829%29.png)

### Prometheus，Pushgateway和Grafana的来源

{% embed url="https://github.com/prometheus/prometheus" caption="Prometheus GitHub" %}

{% embed url="https://github.com/prometheus/pushgateway" caption="Pushgateway GitHub" %}

{% embed url="https://github.com/grafana/grafana" caption="Grafana GitHub" %}

