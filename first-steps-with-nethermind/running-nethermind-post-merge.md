# Running Nethermind & CL

## Introduction

Ethereum’s long awaited shift from Proof of Work (POW) to Proof of Stake (POS) known as The Merge happened on September 15, 2022 and came with fundamental changes to the network. The most notable change is the addition of the Beacon chain (Consensus layer) which replaced Proof of Work mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on the network.

The Merge changed how operators run nodes on the Ethereum blockchain. A node now needs **two** clients that work together as a pair. In addition to the Execution Layer client (e.g. Nethermind) you need a Consensus Layer client that connects to the Beacon chain and runs the POS algorithm.

This guide will show you everything you need to know to operate an Ethereum node. It will show how to connect to the Goerli, Sepolia, Kiln and Ropsten test networks as well.

An easy way to run both CL and EL clients is by using Sedge. Sedge is a setup tool for PoS network/chain validators and nodes. Currently, Sedge supports multiple Linux distributions and MacOS.

{% embed url="https://docs.sedge.nethermind.io/" %}

To do your setup manually follow the steps below.

## Step 1: Installing Nethermind

You can choose from downloading the official release, downloading the docker image, or building Nethermind from source.

{% hint style="info" %}
Support for post merge Ropsten is available as of Nethermind version 1.13.1
{% endhint %}

### Downloading Official Release

#### Ubuntu

Run the following commands to enable our launchpad repository run then install Nethermind

```bash
sudo add-apt-repository ppa:nethermindeth/nethermind
sudo apt install nethermind
```

#### macOS

Run the following commands to add the Nethermind repository to your local Homebrew and install

```bash
brew tap nethermindeth/nethermind
brew install nethermind
```

#### Windows

On Windows all you have to do is install and unzip the packages. There are two sources that you can download from.

{% embed url="https://downloads.nethermind.io" %}

{% embed url="https://github.com/NethermindEth/nethermind/releases" %}

### Downloading Docker Image

To download the latest Docker image run the following command to install the latest Debian biased Nethermind image.

```bash
docker pull nethermind/nethermind
```

{% hint style="info" %}
Currently Nethermind only supports images for **AMD64** and **ARM64** CPU architectures.
{% endhint %}

### Building From Source

#### Installing Dependencies

To build Nethermind you will need to have **Git** and the **.NET SDK 6.0** installed.

{% embed url="https://git-scm.com/downloads" %}

{% embed url="https://dotnet.microsoft.com/en-us/download" %}

Depending on the platform you are using you may need to install extra dependencies.

#### **Windows**

You may need to install [Microsoft Visual C++ Redistributable](https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170)

#### **macOS**

You will need to install the following packages.

```bash
brew install gmp snappy lz4 zstd
```

#### **Ubuntu 18.04 and Debian 10**

You will need to install the following packages

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6
```

Commands for other Linux distros can be found [here](https://docs.nethermind.io/nethermind/ethereum-client/building-nethermind#linux).

#### Building Nethermind

After you have installed all of the dependencies for your platform you need to clone the Nethermind repo from GitHub.

Once the download has finished enter the `nethermind/src/Nethermind` directory and run the build command.

```bash
git clone --recursive https://github.com/NethermindEth/nethermind.git
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

## Step 2: Installing Consensus Client

On the Consensus Layer you have five client implementations to choose from. Though all CL clients are great check them out for yourself and find the client best suited to your needs.

{% hint style="warning" %}
We urge you to take client diversity into consideration when choosing your CL client and avoid majority clients.
{% endhint %}

{% embed url="https://clientdiversity.org" %}

### Prysm

{% embed url="https://prysmaticlabs.com" %}

### Teku

{% embed url="https://consensys.net/knowledge-base/ethereum-2/teku/" %}

### Lighthouse

{% embed url="https://lighthouse.sigmaprime.io" %}

### Lodestar

{% embed url="https://lodestar.chainsafe.io" %}

### Nimbus

{% embed url="https://nimbus.team/#about" %}

## Step 3 : Configure JSON-RPC API

### JWT Secrets

JSON Web Token authentication was added to the JSON-RPC API for security reasons to ensure that nothing interferes with the communication between the Execution Client (Nethermind in this case) and the Consensus Client. This requires you to create a file containing a hexadecimal “secret” that will be passed to each .

{% embed url="https://jwt.io" %}

To create this “Secret File” use the following command.

```bash
openssl rand -hex 32 | tr -d "\n" > "/tmp/jwtsecret"
```

Install OpenSSL for Windows

{% embed url="https://wiki.openssl.org/index.php/Binaries" %}
then simply type on your Terminal or Command Prompt (make sure you add the binaries directory to your environment variables or run the terminal from there)
{% endembed %}

where `"/tmp/jwtsecret"` will be the file path and name when created.

If you do not want to install OpenSSL, you may use a random hex generator website. All you need is a 64 character hex string saved to a `.txt` file.

```
fcba4ab3138530cf233568bee2d518dd960da77355333d5ac856e1f27487dc9c
```

{% hint style="danger" %}
We strongly recommend you use OpenSSL to generate the secret locally because it is more secure
{% endhint %}

### JsonRpc Configuration Module

Nethermind has added some additional configuration settings for the JSON-RPC API to support the Consensus Clients.

{% hint style="danger" %}
#### **Please do not use `JsonRpc.Port` or `JsonRpc.EnabledModules` for enabling Engine API.  Nethermind uses `JsonRpc.EnginePort`, `JsonRpc.EngineHost` and `JsonRpc.EngineEnabledModules` for that.**
{% endhint %}

```json
"JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": ["Eth", "Subscribe", "Trace", "TxPool", "Web3", "Personal", "Proof", "Net", "Parity", "Health"],
    "EnginePort": 8551,
    "EngineHost": "127.0.0.1",
    "JwtSecretFile": "keystore/jwt-secret"
  },
```

{% hint style="danger" %}
#### **if you want to change`JsonRpc.EngineHost, JsonRpc.EnginePort` should be specified as well.**
{% endhint %}

#### `EngineHost`

This setting specifies the host for your Engine API. Click [here](../nodes-and-the-merge/nethermind-changes.md) for more info on EngineAPI.

#### `EnginePort`

This setting specifies the port used for Engine API.

**`EngineEnabledModules`**

This setting specifies the modules to be enabled on the Engine API endpoint.

#### `JwtSecretFile`

This setting is used to identify the location of the file containing the JWT secret.

{% hint style="warning" %}
Nethermind will create it's own `jwtsecret` file if you do not specify a location or pass the wrong location.
{% endhint %}

## Step 4: Run Nethermind

Ensure you have:

* Installed Nethermind
* Installed Consensus client
* Created a JWT secret file
* Engine module is enabled with authenticated port &#x20;

Then you are ready to start your clients. First start up Nethermind.

{% hint style="danger" %}
Since the Ethereum merge, you are required to set the Merge.Enabled=true flag. This is not required if you are using the default config files as this is enabled by default. &#x20;
{% endhint %}

### Choosing the Network

Depending on the network you want to run the node for, choose the `--config` variable. for more on networks, check [here](../ethereum-client/networks.md).

`--config` is the config file for the network you want to connect to. For example, to run a node for the kiln testnet use `--config kiln`

### Running Local Build

After you have built Nethermind you should be in the `nethermind/src/Nethermind` directory. From there you will need to run the following commands

```bash
cd Nethermind.Runner
dotnet run -c Release -- --config ropsten --JsonRpc.JwtSecretFile=PATH
```

Where PATH is the path to your JWT secret. ex `--JsonRpc.JwtSecretFile=/tmp/jwtsecret`

### Running Release

You have two options when running from a release. The `Nethermind.Launcher` which is a simple GUI with options to configure your node, or the `Nethermind.Runner` where you can configure your node by hand.

You will need to be in the directory that the `Nethermind.Runner` and `Nethermind.Launcher` are in to run Nethermind.

#### Nethermind.Launcher

{% tabs %}
{% tab title="Windows" %}
```bash
./Nethermind.Launcher
```
{% endtab %}

{% tab title="Ubuntu" %}
```bash
nethermind
```
{% endtab %}

{% tab title="macOS" %}
```
nethermind-launcher
```
{% endtab %}
{% endtabs %}

#### Nethermind.Runner

{% tabs %}
{% tab title="Windows" %}
```bash
./Nethermind.Runner --config ropsten --JsonRpc.JwtSecretFile=PATH
```
{% endtab %}

{% tab title="Ubuntu" %}
```
nethermind --config ropsten --JsonRpc.JwtSecretFile=PATH
```
{% endtab %}

{% tab title="macOS" %}
```bash
nethermind --config ropsten --JsonRpc.JwtSecretFile=PATH
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
`--config` flag **** is the network. for example it can be mainnet, goerli, sepolia, kiln or Ropsten.
{% endhint %}

Where PATH is the path to your JWT secret. ex `--JsonRpc.JwtSecretFile=/tmp/jwtsecret`

{% hint style="danger" %}
If you are not using the default config files, make sure you also use the **Merge.Enabled=true** flag when launching the client.&#x20;
{% endhint %}

### Running Docker Image

Running Nethermind from a Docker image may require more configuration depending on the situation.

The commands below should work in most situations

```bash
docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --config ropsten --JsonRpc.Enabled true --JsonRpc.JwtSecretFile=PATH --datadir data --JsonRpc.EngineHost=0.0.0.0 --JsonRpc.EnginePort=8551
```

{% hint style="info" %}
`--config` flag **** is the network. for example it can be mainnet, goerli, sepolia, kiln or Ropsten. **If you are not using the config file, make sure you set Merge.Enabled=true as flag.**&#x20;
{% endhint %}

#### **Docker Settings**

* `-v /home/user/data:/nethermind/data` sets local directory we will be storing our data to

On some OS like Amazon Linux \*\*\*\*you may need to increase the `nofile` limit by adding the following instruction to docker command `-ulimit nofile=1000000:1000000` or you can take a look an [alternative solution](https://stackoverflow.com/questions/62127643/need-understand-ulimits-nofile-setting-in-host-and-container/62136351#62136351).

#### **Nethermind Settings**

* `--JsonRpc.JwtSecretFile=PATH` where PATH is the location of your JWT secret ex. `/tmp/jwtsecret`
* `--datadir data` maps the database, keystore, and logs all at once

## Step 5: Run Consensus Clients

Once Nethermind has started you can start the CL client. See section below for commands to run the CL client you installed. You will need to make sure the `--jwt-secret` has the correct path as well or the clients will not be able to communicate.

Once both clients are running watch the logs to make sure you don’t get any `Unauthorized` errors to ensure the clients are communicating.

{% hint style="success" %}
### Checkpoint Sync

It would be way faster to sync consensus clients using checkpoint sync.

* <mark style="color:green;">**To sync the CL client using a checkpoint sync, view the community maintained endpoints**</mark> [**here**](https://eth-clients.github.io/checkpoint-sync-endpoints/)<mark style="color:green;">**.**</mark>
* For Goerli, Ropsten or Sepolia see [here](https://notes.ethereum.org/@launchpad/checkpoint-sync).
{% endhint %}

#### Running on Kiln

To run on the kiln testnet, lodestar, nimbus and prysm require cloning the kiln configs.

```bash
git clone https://github.com/eth-clients/merge-testnets.git
cd merge-testnets/kiln
```

For more detailed instructions on running the consensus clients on kiln, see [here](https://notes.ethereum.org/@launchpad/kiln#Prysm).



### Running Nimbus With Nethermind

{% tabs %}
{% tab title="Mainnet" %}
```bash
nimbus-eth2/build/nimbus_beacon_node \
    --network=mainnet \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --metrics \
    --suggested-fee-recipient=<Enter-eth-address-here> \
    --jwt-secret="/tmp/jwtsecret"
```

For checkpoint sync, add the following flag with a checkpoint sync endpoint from [above](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#checkpoint-sync). Example:

<pre class="language-bash"><code class="lang-bash"><strong>--trusted-node-url=https://beaconstate.ethstaker.cc</strong></code></pre>
{% endtab %}

{% tab title="Goerli" %}
```bash
nimbus-eth2/build/nimbus_beacon_node \
    --network=goerli \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --metrics \
    --suggested-fee-recipient=<Enter-eth-address-here> \
    --jwt-secret="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Sepolia" %}
```
nimbus-eth2/build/nimbus_beacon_node \
    --network=sepolia \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --metrics \
    --suggested-fee-recipient=<Enter-eth-address-here> \
    --jwt-secret="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Ropsten" %}
```bash
nimbus-eth2/build/nimbus_beacon_node \
    --network=ropsten \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --metrics \
    --suggested-fee-recipient=<Enter-eth-address-here> \
    --jwt-secret="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Kiln" %}
```bash
nimbus-eth2/build/nimbus_beacon_node \ 
--network=merge-testnets/kiln \ 
--web3-url=ws://127.0.0.1:8551 \ 
--rest \ 
--metrics \ 
--log-level=DEBUG \ 
--terminal-total-difficulty-override=20000000000000 \ 
--jwt-secret="/tmp/jwtsecret" \ 
--suggested-fee-recipient=<Enter-eth-address-here> \
--eth1.depositContractDeployBlock=0
```
{% endtab %}
{% endtabs %}

### Running Prysm With Nethermind

{% tabs %}
{% tab title="Mainnet" %}
```bash
cd prysm
./prysm.sh beacon-chain \
--mainnet \
--datadir "$db_path"  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--execution-endpoint=http://localhost:8551  \
--jwt-secret="/tmp/jwtsecret"
```

For checkpoint sync, add the following flag with a checkpoint sync endpoint from [above](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#checkpoint-sync). Example:&#x20;

```bash
--checkpoint-sync-url="https://beaconstate.ethstaker.cc" \
--genesis-beacon-api-url="https://beaconstate.ethstaker.cc"
```
{% endtab %}

{% tab title="Goerli" %}
```bash
cd prysm
./prysm.sh beacon-chain \
--goerli \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--execution-endpoint=http://localhost:8551  \
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Sepolia" %}
```bash
cd prysm
./prysm.sh beacon-chain \
--sepolia \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--execution-endpoint=http://localhost:8551  \
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Ropsten" %}
```bash
cd prysm
./prysm.sh beacon-chain \
--ropsten \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--execution-endpoint=http://localhost:8551  \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Kiln" %}
```bash
cd prysm
./prysm.sh beacon-chain \
--genesis-state $genesis_state_path \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--execution-endpoint=$execution_server  \
--execution-provider=http://localhost:8551  \
--chain-config-file=$config_path \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Chiado" %}
Please follow guide provided [here](https://github.com/gnosischain/prysm-client).
{% endtab %}
{% endtabs %}

### Running Lighthouse With Nethermind

{% tabs %}
{% tab title="Mainnet" %}
```bash
lighthouse \
          beacon_node \
          --network mainnet \
          --debug-level info \
          --datadir ./mainnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --suggested-fee-recipient=<enter-eth-address-here> \
          --jwt-secrets="/tmp/jwtsecret"
```

For checkpoint sync, add the following flag with a checkpoint sync endpoint from [above](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#checkpoint-sync). Example:

```bash
--checkpoint-sync-url "https://beaconstate.ethstaker.cc"
```
{% endtab %}

{% tab title="Goerli" %}
```bash
lighthouse \
          beacon_node \
          --network goerli \
          --debug-level info \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --suggested-fee-recipient=<enter-eth-address-here> \
          --jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Sepolia" %}
```
lighthouse \
          beacon_node \
          --network sepolia \
          --debug-level info \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --suggested-fee-recipient=<enter-eth-address-here> \
          --jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Ropsten" %}
```bash
lighthouse \
          beacon_node \
          --network ropsten \
          --debug-level info \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --suggested-fee-recipient=<enter-eth-address-here> \
          --jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Kiln" %}
```bash
lighthouse \
beacon_node \ 
--network kiln \ 
--debug-level info \ 
--datadir ./testnet-lh1 \ 
--eth1 \ 
--http \ 
--http-allow-sync-stalled \ 
--metrics \ 
--execution-endpoints http://127.0.0.1:8551 \ 
--enr-udp-port=9000 \ 
--enr-tcp-port=9000 \ 
--discovery-port=9000 \ 
--suggested-fee-recipient=<enter-eth-address-here> \
--jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Chiado" %}
Please follow guide provided [here](https://github.com/gnosischain/lighthouse-client).
{% endtab %}
{% endtabs %}

### Running Lodestar With Nethermind

{% tabs %}
{% tab title="Mainnet" %}
<pre class="language-bash"><code class="lang-bash"><strong>cd lodestar
</strong>./lodestar beacon \
--dataDir "../lodestar-beacondata" \ 
--network mainnet \ 
--eth1 \ 
--execution.urls "http://127.0.0.1:8551" \ 
--discv5 \ 
--suggestedFeeRecipient &#x3C;Enter-eth-address-here> \
--jwt-secret "/tmp/jwtsecret" \</code></pre>

For checkpoint sync, add the following flag with a checkpoint sync endpoint from [above](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#checkpoint-sync). Example:

```bash
--checkpointSyncUrl "https://beaconstate.ethstaker.cc"
```
{% endtab %}

{% tab title="Goerli" %}
```bash
cd lodestar
./lodestar beacon \
--dataDir "../lodestar-beacondata" \ 
--network goerli \ 
--eth1 \ 
--execution.urls "http://127.0.0.1:8551" \ 
--discv5 \ 
--suggestedFeeRecipient <Enter-eth-address-here> \
--jwt-secret "/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Sepolia" %}
```
cd lodestar
./lodestar beacon \
--dataDir "../lodestar-beacondata" \ 
--network sepolia \ 
--eth1 \ 
--execution.urls "http://127.0.0.1:8551" \ 
--discv5 \ 
--suggestedFeeRecipient <Enter-eth-address-here> \
--jwt-secret "/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Ropsten" %}
<pre class="language-bash"><code class="lang-bash"><strong>cd lodestar
</strong>./lodestar beacon \
--dataDir "../lodestar-beacondata" \ 
--network ropsten \ 
--eth1 \ 
--execution.urls "http://127.0.0.1:8551" \ 
--discv5 \ 
--suggestedFeeRecipient &#x3C;Enter-eth-address-here> \
--jwt-secret "/tmp/jwtsecret" \
--bootnodes "enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk"</code></pre>
{% endtab %}

{% tab title="Kiln" %}
```bash
cd lodestar
./lodestar beacon \
--dataDir "../lodestar-beacondata" \ 
--network Kiln \ 
--eth1 \ 
--execution.urls "http://127.0.0.1:8551" \ 
--discv5 \ 
--suggestedFeeRecipient <Enter-eth-address-here> \
--jwt-secret "/tmp/jwtsecret" 
```
{% endtab %}

{% tab title="Chiado" %}
Please follow guide provided [here](https://github.com/gnosischain/lodestar-client).
{% endtab %}
{% endtabs %}

### Running Teku With Nethermind

{% tabs %}
{% tab title="Mainnet" %}
<pre class="language-bash"><code class="lang-bash"><strong>./teku/build/install/teku/bin/teku \
</strong>  --data-path "datadir-teku" \
  --network mainnet \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=&#x3C;Enter-eth-address-here></code></pre>

```
```

For checkpoint sync, add the following flag with a checkpoint sync endpoint from [above](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#checkpoint-sync). Example:

```bash
--initial-state="https://beaconstate.ethstaker.cc"
```
{% endtab %}

{% tab title="Goerli" %}
```bash
./teku/build/install/teku/bin/teku \
  --data-path "datadir-teku" \
  --network goerli \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=<Enter-eth-address-here> \
```
{% endtab %}

{% tab title="Sepolia" %}
```
./teku/build/install/teku/bin/teku \
  --data-path "datadir-teku" \
  --network sepolia \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=<Enter-eth-address-here> \
```
{% endtab %}

{% tab title="Ropsten" %}
<pre class="language-bash"><code class="lang-bash"><strong>./teku/build/install/teku/bin/teku \
</strong>  --data-path "datadir-teku" \
  --network ropsten \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=&#x3C;Enter-eth-address-here> \</code></pre>
{% endtab %}

{% tab title="Kiln" %}
```bash
./teku/build/install/teku/bin/teku \ 
--data-path "datadir-teku" \  
--network kiln \  
--p2p-discovery-bootnodes "enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk" \  
--ee-endpoint http://localhost:8551 \  
--Xee-version kilnv2 \  
--ee-jwt-secret-file "/tmp/jwtsecret" \  
--log-destination console \
--validators-proposer-default-fee-recipient=<Enter-eth-address-here> \
```
{% endtab %}

{% tab title="Chiado" %}
Please follow guide provided [here](https://github.com/gnosischain/teku-client).
{% endtab %}
{% endtabs %}
