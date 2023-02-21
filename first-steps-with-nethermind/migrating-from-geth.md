# Migrating From Geth

To migrate from Geth to Nethermind there are few conditions which should be met to ensure seamless and quick transition.

First of all there is need to check **if disk is big enough.** Most secure way would be to have a Nethermind node synced on the same machine as Geth but without stopping Geth. It will give a chance to check Nethermind if sync was properly executed, verify if everything works correctly and will reduce downtime of node to bare minimum. Such option will be recommended to any public JsonRpc provider or Validators.

If disk is big enough, recommended workflow of action is [#option-1a-sync-nethermind-next-to-geth](migrating-from-geth.md#option-1a-sync-nethermind-next-to-geth "mention") or [#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly](migrating-from-geth.md#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly "mention").

If disk is not big enough but downtime is not an option recommended would be to first try to increase disk space or if not possible to extend existing setup, then host Nethermind on separate machine, sync it and whenever it completes its work, move everything validator related to that machine and abandon first machine.

On the other hand, if downtime of around \~12h is not a problem, then suggested would be to go with [#option-2-remove-geth-and-sync-nethermind](migrating-from-geth.md#option-2-remove-geth-and-sync-nethermind "mention").

### Option 1a - Sync Nethermind next to Geth

#### Step 1 - Download Nethermind latest release

Please refer to a [#step-1-installing-nethermind](running-nethermind-post-merge.md#step-1-installing-nethermind "mention") to see available options or use [**Sedge** ](https://docs.sedge.nethermind.io/)which is a one-click setup tool for running node developed by Nethermind Team (refer to [#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly](migrating-from-geth.md#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly "mention")).

#### Step 2 - Run secondary CL client for Nethermind syncing purpose only

Please refer to a [#step-2-installing-consensus-client](running-nethermind-post-merge.md#step-2-installing-consensus-client "mention") to install secondary CL client beacon node which will be used only for Nethermind syncing purpose.\
Once it is installed ensure it is not colliding with primary CL currently used by Geth.

{% hint style="info" %}
**EXAMPLE**\
In case of running Geth + Prysm as a primary node, and configuring second pair which will be Nethermind + Prysm, for second instance of Prysm, flags needed to be used are (considering that primary one is using default values):\
`--rpc-port=4001 --p2p-tcp-port=13001 --p2p-udp-port=12001 --grpc-gateway-port=3501`
{% endhint %}

{% hint style="warning" %}
**REMEMBER**\
Nethermind node will also be running on separate ports so there should be a `--execution-endpoint=http://localhost:<<NETHERMIND_ENGINE_PORT>>` flag set keeping in mind that NETHERMIND\_ENGINE\_PORT should be changed to value selected in next step (preferably 8552)
{% endhint %}

#### Step 3 - Run Nethermind and wait for Sync

Please refer to a [#step-4-run-nethermind](running-nethermind-post-merge.md#step-4-run-nethermind "mention")for instruction on how to run Nethermind.

{% hint style="warning" %}
**REMEMBER**

For Nethermind You will also need to set a separate ports to not create a conflict with still working Geth node. Values needed to be changed with recommended values:\
`--JsonRpc.Port 8546 --JsonRpc.EnginePort 8552 --Network.DiscoveryPort 30304 --Network.P2PPort 30304`
{% endhint %}

Now Nethermind node should be syncing well using second CL configured on machine. To monitor status of syncing there is a JsonRPC call which can be used [#eth\_syncing](../ethereum-client/json-rpc/eth.md#eth\_syncing "mention").\
Whenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to work properly as a Validator.

Another option is to use a health module which will also return a information about current state of syncing.

{% content-ref url="../ethereum-client/monitoring-node-health.md" %}
[monitoring-node-health.md](../ethereum-client/monitoring-node-health.md)
{% endcontent-ref %}

#### Step 4 - Stop Geth instance

Now it is time to stop Geth. In order to do that stop Geth command/service/docker container. It depends on a way Geth was started initially. \
Ensure it is stopped properly and is not progressing before moving to next step.

#### Step 5 - Stop secondary CL and restart Nethermind using ports assigned for Geth before

After Geth is properly stopped and removed, restart your nethermind client but now without flags from point 3 (or adjust them to use the same ports which were used by Geth).\
Also stop a secondary CL client to ensure that after that step only Nethermind and CL1 (used before to talk with Geth) are started only.

Also important would be to restart primary CL using jwt-secret used by Nethermind. For that purpose, you can either use flags in CL to point to Nethermind jwtsecret or point Nethermind to that jwtsecret using command:\
`--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"`

#### Step 6 - Ensure Your setup works well after changes

To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors - especially ones about authentication which may tell about invalid jwtsecret used or no jwt configured.

Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\
`Block <<HASH>> was set as head.`

Compare a hash from log to hash of corresponding block on [https://etherscan.io/](https://etherscan.io/) to see if node is progressing well.

{% hint style="info" %}
**EXAMPLE**\
****Logs from Nethermind:\
****`Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987` \
`FCU - block 16670194 (0x13cebe...91beab) was processed.`\
``\
`Block on etherscan:`\
``[`https://etherscan.io/block/16670194`](https://etherscan.io/block/16670194)``

\
Block number and block hash matches information from logs.
{% endhint %}

#### Step 7 - Remove Geth and secondary CL

In this step you can remove Geth database and secondary CL used for Nethermind syncing.\
For Geth in order to remove db, remove `.ethereum` directory (default may be `/root/.ethereum` or path set on geth startup). Also there is a command which can be used to remove Geth db:

`sudo geth --datadir /var/lib/goethereum removedb`

### Option 1b - Use Sedge to install Nethermind next to Geth quickly

Sedge is a one-click tool which can host entire node on your machine withing a single command taking care of ports, checkpoint sync, connection between EL and CL etc.\
There is a documentation of Sedge located here: [https://docs.sedge.nethermind.io/](https://docs.sedge.nethermind.io/)

High level flow would be similar to Option 1a, but Sedge would automatically take care of Steps 1,2 and 3.

{% hint style="info" %}
To add additional flags to Sedge, use `--el-extra-flag JsonRpc.Port=8546` or --cl-extra-flag `rpc-port=4001`
{% endhint %}

Later on step 5 you can edit a `docker-compose.yml` file and remove all extra flags which were passed to EL or CL and simply restart a node using commands: \
`docker compose stop execution`\
`docker compose up -d execution`

### Option 2 - Remove Geth and sync Nethermind

This option is quicker since does not require to adjust configuration of EL or CL to not collide with currently running setup.

#### Step 1 - Stop and remove Geth and its DB from disk

First of all, Geth and its DB needs to be removed. Stop Geth process, find a `.ethereum` directory and remove it completely. Also there is a command which can be used to remove Geth db:

`sudo geth --datadir /var/lib/goethereum removedb`

Ensure that Geth is stopped properly - it is crucial since it acquires ports which are common between other clients so it may cause some unexpected problems during procedure of syncing Nethermind.

#### Step 2 - Download Nethermind latest release

Please refer to a [#step-1-installing-nethermind](running-nethermind-post-merge.md#step-1-installing-nethermind "mention") to see available options or use [**Sedge** ](https://docs.sedge.nethermind.io/)which is a one-click setup tool for running node developed by Nethermind Team.

#### Step 3 - Reconfigure CL and run Nethermind

Important thing in PoS chains like Ethereum Mainnet is to properly setup a connection between EL and CL. JwtSecret which is used for that communication is needed to be set properly. For that purpose, you can either use flags in CL to point to Nethermind jwtsecret or point Nethermind to that jwtsecret using command:\
`--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"`

Nethermind will generate jwtsecret in `keystore` directory and if not specified, it will use this secret.

After reconfiguring CL, run Nethermind an monitor it. Please refer to a [#step-4-run-nethermind](running-nethermind-post-merge.md#step-4-run-nethermind "mention")for instruction on how to run Nethermind.

Now Nethermind node should be syncing well using CL reconfigured on machine. To monitor status of syncing there is a JsonRPC call which can be used [#eth\_syncing](../ethereum-client/json-rpc/eth.md#eth\_syncing "mention").\
Whenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to work properly as a Validator.

Another option is to use a health module which will also return a information about current state of syncing.

#### Step 4 - Ensure Your setup works well after changes

To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors - especially ones about authentication which may tell about invalid jwtsecret used or no jwt configured.

Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\
`Block <<HASH>> was set as head.`

Compare a hash from log to hash of corresponding block on [https://etherscan.io/](https://etherscan.io/) to see if node is progressing well.

{% hint style="info" %}
**EXAMPLE**\
****Logs from Nethermind:\
****`Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987` \
`FCU - block 16670194 (0x13cebe...91beab) was processed.`\
``\
`Block on etherscan:`\
``[`https://etherscan.io/block/16670194`](https://etherscan.io/block/16670194)``

\
Block number and block hash matches information from logs.
{% endhint %}
