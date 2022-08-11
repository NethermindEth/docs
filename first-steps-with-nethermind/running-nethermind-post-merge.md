# Running Nethermind Post Merge

## Introduction

The long awaited shift from Proof of Work (POW) to Proof of Stake (POS) in Ethereum otherwise known as The Merge adds a lot to Ethereum. The most notable change is the addition of the Beacon chain (Consensus layer) which replaces Proof of Work mining. It will coordinate and pseudorandomly select block producers from the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on the network.

The Merge also changes how operators run nodes on the Ethereum blockchain. The biggest change being that a node now consists of **two** clients that work together as a pair. You still need to run an Execution Layer client (EL client) such as Nethermind that will connect to the existing chain. Nethermind will still build and validate blocks similar to before except mining will not longer work after The Merge. In addition to the EL client you will need a Consensus Layer client (CL client) that connects to the Beacon chain and runs the POS algorithm.

This guide will show you everything you need to know to operate an Ethereum node after The Merge. It will show how to connect to the Kiln and Ropsten test networks as well.

An easy way to run both CL and EL clients is by using Sedge. Sedge is a one click setup tool for PoS network/chain validators and nodes. Currently, Sedge supports multiple Linux distributions and MacOS.

{% embed url="https://docs.sedge.nethermind.io/" %}

To do your setup manually follow the steps below.

## Step 1: Installing Nethermind

Installing Nethermind is the same as before The Merge. You can choose from downloading the official release, downloading the docker image, or building Nethermind from source.

{% hint style="info" %}
&#x20;Support for post merge Ropsten is available as of Nethermind version 1.13.1
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

{% tabs %}
{% tab title="Downloads Page" %}
{% embed url="https://downloads.nethermind.io" %}
{% endtab %}

{% tab title="GitHub Release Page" %}
{% embed url="https://github.com/NethermindEth/nethermind/releases" %}
{% endtab %}
{% endtabs %}

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

#### **Apple Silicon (M1) users only**

You will need to create symlink for homebrew dependencies.

```bash
sudo ln -s find /opt/homebrew/Cellar/snappy -name "libsnappy.dylib" /usr/local/lib/libsnappy.dylib
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

On the Consensus Layer you have five client implementations to chose from. Though all CL clients are great check them out for yourself and find the client best suited to your needs.&#x20;

{% hint style="warning" %}
We urge you to take client diversity into consideration when choosing your CL client and avoid majority clients.&#x20;
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

The Merge adds changes the JSON-RPC API. Such as the Engine API, JWT authentication, additional RPC ports, and additional block tags.

### JWT Secrets

JSON Web Token authentication was added to the JSON-RPC API for security reasons to ensure that nothing interferes with the communication between the Execution client(Nethermind in this case) and the Consensus client. This requires you to create a `.txt` file containing a hexadecimal “secret” that will be passed to each .

{% embed url="https://jwt.io" %}

To create this “Secret File” use the following command.

{% tabs %}
{% tab title="Linux/Mac" %}
```
openssl rand -hex 32 | tr -d "\n" > "/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Windows" %}
Install OpenSSL for Windows

{% embed url="https://wiki.openssl.org/index.php/Binaries" %}

then simply type on your Terminal or Command Prompt (make sure you add the binaries directory to your environment variables or run the terminal from there)

```bash
openssl rand -hex 32 > C:\temp\jwtsecret
```
{% endtab %}
{% endtabs %}

where `"/tmp/jwtsecret"` will be the file path and name when created.

If you do not want to install OpenSSL, you may use a random hex generator website. All you need is a 64 character hex string saved to a `.txt` file.

```
fcba4ab3138530cf233568bee2d518dd960da77355333d5ac856e1f27487dc9c
```

{% hint style="danger" %}
We strongly recommend you use OpenSSL to generate the secret locally because it is more secure
{% endhint %}

### JsonRpc Configuration Module

Nethermind has added some additional configuration settings for the JSON-RPC API.

```jsx
"JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": ["Eth", "Subscribe", "Trace", "TxPool", "Web3", "Personal", "Proof", "Net", "Parity", "Health"],
    "AdditionalRpcUrls": ["http://localhost:8551|http;ws|net;eth;subscribe;engine;web3;client"],
    "JwtSecretFile": "keystore/jwt-secret"
  },
```

#### `AdditionalRpcUrls`

This setting allows you to chose which port you want to use, whether its sent over HTTP and or WebSockets, which APIs you want enabled on that port, and if you want to disable JWT authentication on that port.

#### `JwtSecretFile`

This setting is used to identify the location of the file containing the JWT secret.

{% hint style="warning" %}
Nethermind will create it's own `jwtsecret` file if you do not specify a location or pass the wrong location.
{% endhint %}

For more information about possible configurations for JSON RPC Please refer to the article below:

{% content-ref url="../ethereum-client/configuration/jsonrpc.md" %}
[jsonrpc.md](../ethereum-client/configuration/jsonrpc.md)
{% endcontent-ref %}

## Step 4: Run Nethermind

The steps to running Nethermind after The Merge have not changed much. After you have:

* Installed Nethermind
* Installed Consensus client
* Created a JWT secret file
* Ensured that an authenticated port with the Engine module is enabled

Then you are ready to start your clients. First start up Nethermind.

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

Where PATH is the path to your JWT secret. ex `--JsonRpc.JwtSecretFile=/tmp/jwtsecret`

### Running Docker Image

Running Nethermind from a Docker image may require more configuration depending on the situation.

The commands below should work in most situations

```bash
docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind nethermind/nethermind --config ropsten --JsonRpc.Enabled true --JsonRpc.JwtSecretFile=PATH --datadir data
```

#### **Docker Settings**

* `-v /home/user/data:/nethermind/data` sets local directory we will be storing our data to

On some OS like Amazon Linux \*\*\*\*you may need to increase the `nofile` limit by adding the following instruction to docker command `-ulimit nofile=1000000:1000000` or you can take a look an [alternative solution](https://stackoverflow.com/questions/62127643/need-understand-ulimits-nofile-setting-in-host-and-container/62136351#62136351).

#### **Nethermind Settings**

* `--JsonRpc.JwtSecretFile=PATH` where PATH is the location of your JWT secret ex. `/tmp/jwtsecret`
* `--datadir data` maps the database, keystore, and logs all at once

### TTD Configuration (Important)

{% hint style="info" %}
For Nethermind to sync to Ropsten or Goerli you will have to set the Merge`TotalTerminalDifficulty`. \
You will need to edit your config or set manually during launch.
{% endhint %}

{% tabs %}
{% tab title="Ropsten" %}
There is two ways to set the TTD:

1. From startup arguments, make sure the following flag is added to the start up command when launching.

```
--Merge.TerminalTotalDifficulty="50000000000000000"
```

2\. From config,&#x20;

```
  "Merge": {
    "Enabled": true,
    "TerminalTotalDifficulty": "50000000000000000"
  }
```
{% endtab %}

{% tab title="Goerli" %}
There is two ways to set the TTD:

1. From startup arguments, make sure the following flag is added to the start up command when launching.

```
--Merge.TerminalTotalDifficulty="10790000"
```

2\. From config,&#x20;

```
  "Merge": {
    "Enabled": true,
    "TerminalTotalDifficulty": "10790000"
  }
```
{% endtab %}
{% endtabs %}

## Step 5: Run Consensus Clients

Once Nethermind has started you can start the CL client. See section below for commands to run the CL client you installed. You will need to make sure the `--jwt-secret` has the correct path as well or the clients will not be able to communicate.

Once both clients are running watch the logs to make sure you don’t get any `Unauthorized` errors to ensure the clients are communicating.

That’s about all there is to it. Easy right?

#### Running on Kiln

To run on the kiln testnet, lodestar, nimbus and prysm require cloning the kiln configs.

```
git clone https://github.com/eth-clients/merge-testnets.git
cd merge-testnets/kiln
```

For more detailed instructions on running the consensus clients on kiln, see [here](https://notes.ethereum.org/@launchpad/kiln#Prysm).

To sync the CL client using a checkpoint sync, see [here](https://notes.ethereum.org/@launchpad/checkpoint-sync). This is only applicable on Goerli, Ropsten or Sepolia.

### Running Nimbus With Nethermind

{% tabs %}
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

{% tab title="Goerli" %}
```
nimbus-eth2/build/nimbus_beacon_node \
    --network=goerli \
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
{% tab title="Ropsten" %}
```bash
cd prysm
bazel run //beacon-chain -- \
--ropsten \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--http-web3provider=http://localhost:8551  \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Goerli" %}
```
cd prysm
bazel run //beacon-chain -- \
--goerli \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--http-web3provider=http://localhost:8551  \
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}

{% tab title="Kiln" %}
```bash
cd prysm
bazel run //beacon-chain -- \
--genesis-state $genesis_state_path \
--datadir $db_path  \
--suggested-fee-recipient=<Enter-eth-address-here> \
--http-web3provider=$execution_server  \
--execution-provider=http://localhost:8551  \
--chain-config-file=$config_path \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```
{% endtab %}
{% endtabs %}

### Running Lighthouse With Nethermind

{% tabs %}
{% tab title="Ropsten" %}
```bash
lighthouse \
          --spec mainnet \
          --network ropsten \
          --debug-level info \
          beacon_node \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --merge \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --suggested-fee-recipient=<enter-eth-address-here> \
          --jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}

{% tab title="Goerli" %}
```
lighthouse \
          --spec mainnet \
          --network goerli \
          --debug-level info \
          beacon_node \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --merge \
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
--spec mainnet \ 
--network kiln \ 
--debug-level info \ 
beacon_node \ 
--datadir ./testnet-lh1 \ 
--eth1 \ 
--http \ 
--http-allow-sync-stalled \ 
--metrics \ 
--merge \ 
--execution-endpoints http://127.0.0.1:8551 \ 
--enr-udp-port=9000 \ 
--enr-tcp-port=9000 \ 
--discovery-port=9000 \ 
--suggested-fee-recipient=<enter-eth-address-here> \
--jwt-secrets="/tmp/jwtsecret"
```
{% endtab %}
{% endtabs %}

### Running Lodestar With Nethermind

{% tabs %}
{% tab title="Ropsten" %}
```bash
cd lodestar
./lodestar beacon \
--rootDir="../lodestar-beacondata" \ 
--network ropsten  \ 
--eth1.enabled=true \ 
--execution.urls="http://127.0.0.1:8551" \ 
--network.connectToDiscv5Bootnodes \ 
--network.discv5.enabled=true \ 
--chain.defaultFeeRecipient=<Enter-eth-address-here> \
--jwt-secret="/tmp/jwtsecret" \
--network.discv5.bootEnrs="enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk"
```
{% endtab %}

{% tab title="Goerli" %}
```
cd lodestar
./lodestar beacon \
--rootDir="../lodestar-beacondata" \ 
--network goerli \ 
--eth1.enabled=true \ 
--execution.urls="http://127.0.0.1:8551" \ 
--network.connectToDiscv5Bootnodes \ 
--network.discv5.enabled=true \ 
--chain.defaultFeeRecipient=<Enter-eth-address-here> \
--jwt-secret="/tmp/jwtsecret" \
```
{% endtab %}

{% tab title="Kiln" %}
```bash
cd lodestar./lodestar beacon \
--rootDir="../lodestar-beacondata" \
--paramsFile="../config.yaml" \
--genesisStateFile="../genesis.ssz" \ 
--eth1.enabled=true \ 
--execution.urls="http://127.0.0.1:8551" \ 
--network.connectToDiscv5Bootnodes \ 
--network.discv5.enabled=true \ 
--chain.defaultFeeRecipient=<Enter-eth-address-here> \
--jwt-secret="/tmp/jwtsecret" \ 
--network.discv5.bootEnrs="enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk"
```
{% endtab %}
{% endtabs %}

### Running Teku With Nethermind

{% tabs %}
{% tab title="Ropsten" %}
```bash
./teku/build/install/teku/bin/teku \
  --data-path "datadir-teku" \
  --network ropsten \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=<Enter-eth-address-here> \
```
{% endtab %}

{% tab title="Goerli" %}
```
./teku/build/install/teku/bin/teku \
  --data-path "datadir-teku" \
  --network goerli \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=<Enter-eth-address-here> \
```
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
{% endtabs %}

## Troubleshooting Issues

#### Nethermind only shows active peers after FastHeaders synced. (happens with chains that already merged to PoS)

The most likely cause for this is that the CL client is either not running or trying to connect to the wrong JSON RPC port. to solve this follow these steps:

1. Make sure the `AdditionalRpcUrls` is configured correctly and matches the port entered in your CL client. Follow [this link](running-nethermind-post-merge.md#jsonrpc-configuration-module) for details.
2. Make sure CL client is running. Follow [this link](running-nethermind-post-merge.md#how-to-run-consensus-clients) for details.

#### Getting  `engine_exchangeTransitionConfigurationV1 found but the containing module is disabled for the url .......`&#x20;

For this one, either the allowed modules for `AdditionalRpcUrls` does not include `engine` , or the port that you configured the CL client to use is not the same as the port configured in `AdditionalRpcUrls`. to solve this follow these steps:

1. Make sure the `AdditionalRpcUrls` has `engine` among the allowed modules. e.g : `"AdditionalRpcUrls": ["http://localhost:8551|http;ws|net;eth;engine;web3;client"]`
2. Make sure the CL client port is pointing to the same port specified in `AdditionalRpcUrls`&#x20;

#### Getting `Error when handling ID 1, engine_exchangeTransitionConfigurationV1`

it could mean one of two things:

1. `--Merge.Enabled` not set to `true` on the CLI or in the Config file. refer to the [this Link](../ethereum-client/configuration/merge.md) for more info.
2. Nethermind.Merge.Plugin.cs is not in the plugins folder
