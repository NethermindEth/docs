---
description: How to setup a Nethermind Validator with docker-compose file
---

# With docker-compose

## Prerequisites

* [x] docker-compose
* [x] docker
* [x] machine with at least 4GB RAM is recommended

```bash
sudo apt-get install docker docker-compose -y
```

## Docker-compose file sample

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: '3.5'

services:
  nethermind-validator:
    image: nethermind/nethermind:alpine
    container_name: nethermind-validator
    restart: unless-stopped
    ports:
      - 8545:8545
      - 30303:30303
    network_mode: host
    environment:
      - NETHERMIND_CONFIG=xdai
    volumes:
      - ${PWD}/nethermind_db:/nethermind/nethermind_db
      - ${PWD}/keystore:/nethermind/keystore
      - ${PWD}/logs:/nethermind/logs
      - ${PWD}/xdai.cfg:/nethermind/configs/xdai.cfg 
      - ${PWD}/NLog.config:/nethermind/NLog.config
      - ${PWD}/static-nodes.json:/nethermind/Data/static-nodes.json

volumes:
  nethermind_db:
    driver: local
    name: nethermind_db
  keystore:
    driver: local
    name: keystore
  logs:
    driver: local
    name: logs
```
{% endtab %}
{% endtabs %}

Configure Nethermind node via environment variables or use local config file and map it to the one existing inside container \(`xdai.cfg` file in above example\).

{% hint style="info" %}
Make sure that `nethermind_db`, `keystore`\(`logs` - optional \) are mapped, otherwise you might lose database or keys
{% endhint %}

`NLog.config` file is optional \( more about it NLog can be found [here](../../ethereum-client/running-nethermind/runtime.md#nlog-config) \).   
`static-nodes.json` can be filled with an array of enodes, this is also optional.

