# MEV on xDai

## Enable MEV plugin on xDai validator

1. [x] Clone the [xdaichain](https://github.com/xdaichain/validator-node-dockerized/tree/nethermind) repository containing instructions for running the xDai validator with docker-compose and **Nethermind client**
2. [x] Modify the `NETHERMIND_CONFIG` variable in [docker-compose.yml](https://github.com/xdaichain/validator-node-dockerized/blob/87cd669a13817d61c01fea59e303ba9d17c83b5c/docker-compose.yml#L8) by setting it to `xdai_pruned_mev` \(with [Pruning](../ethereum-client/configuration/pruning.md) enabled\) or `xdai_mev`
3. [x] Make sure that the JSON RPC service is **enabled** and **is unreachable from the outside world.** To enable JSON RPC, add these settings to docker-compose.yml from above. 

   ```text
   NETHERMIND_JSONRPCCONFIG_PORT: 8545
   NETHERMIND_JSONRPCCONFIG_ENABLED: "true"
   NETHERMIND_JSONRPCCONFIG_HOST: "0.0.0.0"
   NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES: "[Eth, Mev, Web3]"
   ```

4. [x] Follow the readme and run the validator.
5. [x] Set up the [mev-proxy](https://github.com/flashbots/mev-proxy) running in front of your validator by following the instructions in the readme. This simple proxy will expose just the `eth_sendBundle` JSON-RPC method.
6. [x] The proxy can be set up using for example docker or the [pm2](https://pm2.keymetrics.io/) tool. You can then define a basic `ecosystem.config.js` file like the one below, where the `GETH_PORT` is the Nethermind JSON RPC port exposed \(`8545` by default\) and `PUBLIC_PORT` is the port on which the proxied RPC endpoint will be exposed:

   ```text
   module.exports = {
       apps: [
           {
               name: 'xdai-mev-proxy',
               script: `src/proxy.js`,
               watch: false,
               env: {
                   PUBLIC_PORT: 18545,
                   GETH_PORT: 8545
        },
           },
       ],
   };
   ```

   and then run it with:

   ```text
   pm2 startOrRestart ecosystem.config.js
   ```

{% hint style="danger" %}
Make sure that the`PUBLIC_PORT`is NOT blocked by a firewall, but the `GETH_PORT`is BLOCKED ⚠ 
{% endhint %}

* [x] Reach out to the Nethermind team ****on the **xDai Validators** Telegram or Discord channel to receive bundles from the [relay](https://xdai-relay.nethermind.io).

