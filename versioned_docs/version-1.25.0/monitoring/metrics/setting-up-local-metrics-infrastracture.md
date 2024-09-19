import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::warning
This article is outdated and requires a revision.
:::

# Setting up local Metrics infrastructure

## Metrics Configuration

Nethermind metrics can be consumed by _Prometheus/Grafana_ if configured
in [Metrics configuration category](../../fundamentals/configuration#metrics).

## Metrics infrastructure

### Enabling Metrics in Nethermind

Metrics can be enabled by simply passing `--Metrics.Enabled true` argument to the Docker containers,`Nethermind.Runner`
or `Nethermind.Launcher`  e.g. `./Nethermind.Runner --Metrics.Enabled true`.

`Metrics.PushGatewayUrl` will need to be amended if pushgateway endpoint is not default.

### Running sample configuration

* [x] clone [metrics-infrastructure](https://github.com/NethermindEth/metrics-infrastructure) repository

```bash
git clone https://github.com/NethermindEth/metrics-infrastructure.git
```

1. [x] go to `metrics-infrastructure` directory

```bash
cd metrics-explanation-infrastructure
```

1. [x] run docker stack

```bash
docker-compose up -d
```

* _Prometheus_ instance should be now running on [`http://localhost:9090/`](http://localhost:9090/)
* _Pushgateway_ on [`http://localhost:9091/`](http://localhost:9091/)
* _Grafana on_ [`http://localhost:3000/`](http://localhost:3000/)\`\`

1. [x] run the `Nethermind` node with `Metrics` enabled and you should see metrics inflowing on
   _Pushgateway_ [url](http://localhost:9091/)

:::info
You can add nethermind service to the `docker-compose.yml` file so that it runs with the whole stack

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

:::

<Tabs>
<TabItem value="Runner" label="Runner">

```bash
./Nethermind.Runner --Metrics.Enabled true
```

</TabItem>
<TabItem value="Launcher" label="Launcher">

```bash
./Nethermind.Launcher --Metrics.Enabled true
```

</TabItem>
<TabItem value="Docker" label="Docker">

```bash
docker run -it --network host nethermind/nethermind:alpine --Metrics.Enabled
```

</TabItem>
</Tabs>

![http://localhost:9091/](https://nethermind.readthedocs.io/en/latest/_images/pushgateway.png)

1. [x] open _Grafana_ [url](http://localhost:3000) and login with default login \(admin\) and password \(admin\), skip
   password change if you want

![](/img/image(28).png)

* [x] go to dashboards management [`http://localhost:3000/dashboards`](http://localhost:3000/dashboards)and
  click `Nethermind`

![](/img/image(26).png)

* [x] you can now explore metrics and monitor your Nethermind node

![](/img/image(29).png)

### Useful Resources

- [Prometheus](https://github.com/prometheus/prometheus)
- [Pushgateway](https://github.com/prometheus/pushgateway)
- [Grafana](https://github.com/grafana/grafana)

