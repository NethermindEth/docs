# Eth2 Validator

## Introduction

This tutorial will allow anyone to set up an Ethereum Validator node as long as you have the sufficient hardware requirements and familiarity with the command line. This guide will use installation instructions for Ubuntu 20.04 but instructions to other operating systems will be linked.

### Using Testnets

We highly recommend you use one of the following test networks before you attempt running a validator on Ethereum Mainnet to get familiarized with the process:

* Ropsten
* Kiln

Coming Soon

* Sepolia
* Goerli

We will go through the most important steps in the [checklist](https://launchpad.ethereum.org/en/checklist) and a [general overview](https://kiln.launchpad.ethereum.org/en/overview) of the responsibilities of a validator provided by the Ethereum foundation.

### Hardware and Network Requirements

You will need to run two pieces of software on your machine to run a validator. The two software have several different implementations maintained by different teams. Each implementation has their own hardware requirements, but generally you would need for mainnet:

* Memory: 16 GB RAM
* Processor: Intel Core i5–760 or better (CPUs made later than 2010 are usually fine)
* Storage: 1 TB SSD
* Network: Broadband connection (preferably wired)

Please consult the docs / website of the specific client software you choose to run the Ethereum chain with. Note that the hardware requirements are lower if you intend to run on testnets only.

## Setup

### Installing Prerequisites

The two pieces of software to run a node for proof of stake Ethereum are called the consensus client and the execution client. The consensus client maintains the proof of stake consensus mechanism while the execution client stores and validates transactions for the proof of stake layer.

Install these prerequisites before proceeding:

```bash
sudo apt -y install software-properties-common wget curl ccze
```

This guide will go through the Nethermind and Lighthouse client combination.

#### **Installing Nethermind**

Run the following command to install Nethermind:

```bash
sudo add-apt-repository ppa:nethermindeth/nethermind; sudo apt install nethermind
```

See [here](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge) for docs for other ways to install Nethermind.

#### **Installing Consensus Client**

{% tabs %}
{% tab title="Lighthouse" %}
Download the [latest release](https://github.com/sigp/lighthouse/releases) from lighthouse. You can also install lighthouse through other methods by following [their docs](https://lighthouse-book.sigmaprime.io/installation.html). To install v2.3.1 of lighthouse (latest release as of June 21 2022):

```bash
wget <https://github.com/sigp/lighthouse/releases/download/v2.3.1/lighthouse-v2.3.1-x86_64-unknown-linux-gnu.tar.gz>
tar xvf lighthouse-v2.3.1-x86_64-unknown-linux-gnu.tar.gz
rm lighthouse-v2.3.1-x86_64-unknown-linux-gnu.tar.gz
```

Install globally:

```bash
sudo cp ~/lighthouse /usr/local/bin
rm ~/lighthouse
```
{% endtab %}

{% tab title="Teku" %}
You can install Teku following [their docs](https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Installation-Options/Install-Binaries/). \
Quick guide how to install Teku using binary distribution:\


Check if Java is already installed on Your machine:

```bash
Java --version
```

if not You can use this command to install it:

```bash
sudo apt install default-jdk
```

Then, download Teku and extract it (currently latest version is 22.8.1):

```bash
wget https://artifacts.consensys.net/public/teku/raw/names/teku.tar.gz/versions/22.8.1/teku-22.8.1.tar.gz
tar xvf teku-22.8.1.tar.gz
rm teku-22.8.1.tar.gz
```

Install globally:

<pre class="language-bash"><code class="lang-bash"><strong>sudo cp -r teku-22.8.1 /usr/local/bin
</strong>rm teku-22.8.1
</code></pre>
{% endtab %}
{% endtabs %}

### Configuration

It is recommended to run the consensus and execution client as a systemd service, which will allow the two processes run in the background and start up again if your machine restarts, improving reliability and uptime of your validator. This is not as crucial for running testnet validators and you can follow [this guide](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge) on how to connect to testnets with Nethermind and other consensus clients.

Create a dedicated user for Nethermind. This will set up the correct permissions and directory where the chain data is stored.

```bash
sudo useradd -m -s /bin/false nethermindeth
sudo mkdir -p /var/lib/nethermind
sudo chown -R nethermindeth:nethermindeth /var/lib/nethermind
sudo chown -R nethermindeth:nethermindeth /usr/share/nethermind
```

Create a JWT Token which will be used to communicate between consensus and execution clients. For more information about JWT Token please refer to [this section](../../first-steps-with-nethermind/running-nethermind-post-merge.md#step-3-configure-json-rpc-api).

```bash
openssl rand -hex 32 | tr -d "\n" > "/var/lib/nethermind/jwt-secret"
```

Create a systemd config file. This will run Nethermind as a systemd service on your machine.

```bash
sudo nano /etc/systemd/system/nethermind.service
```

Paste the following service configuration into the file

```bash
[Unit]
Description=Nethermind Ethereum Client
After=network.target
Wants=network.target

[Service]
User=nethermindeth
Group=nethermindeth
Type=simple
Restart=always
RestartSec=5
TimeoutStopSec=180
WorkingDirectory=/home/nethermindeth
ExecStart=/usr/share/nethermind/Nethermind.Runner \
    --config mainnet \
    --Init.BaseDbPath /var/lib/nethermind \
    --JsonRpc.Enabled true \
    --JsonRpc.EngineHost "0.0.0.0" \
    --JsonRpc.EnginePort 8551 \
    --JsonRpc.JwtSecretFile /var/lib/nethermind/jwt-secret

[Install]
WantedBy=default.target
```

To close and save the file, press `Ctrl`+ `X`, `Y`, `Enter`.

Reload systemd to reflect the changes and start the nethermind service. The status should say active in green text. If not, repeat the configuration steps and see if it resolves the problem

```bash
sudo systemctl daemon-reload
sudo systemctl start nethermind.service
sudo systemctl status nethermind.service
```

Press `Q` to quit viewing the status. Enable the nethermind service to automatically start on reboot:

```bash
sudo systemctl enable nethermind.service
```

To see the Nethermind logs:

```bash
sudo journalctl -f -u nethermind.service -o cat | ccze -A
```

Press `Ctrl` + `C` to stop showing those messages.

{% hint style="info" %}
If any path from sample would be changed (like "Init.baseDbPath") please ensure that You set newly added user as a owner of this directory and execute "_systemctl restart nethermind.service_" command.
{% endhint %}

Now repeat the process to run a CL beacon chain:

{% tabs %}
{% tab title="Lighthouse" %}
<pre class="language-bash"><code class="lang-bash"><strong>sudo useradd --no-create-home --shell /bin/false lighthousebeacon
</strong>sudo mkdir -p /var/lib/lighthouse
sudo chown -R lighthousebeacon:lighthousebeacon /var/lib/lighthouse
</code></pre>

Add systemd file:

```bash
sudo nano /etc/systemd/system/lighthousebeacon.service
```

Paste the following in:

```bash
[Unit]
Description=Lighthouse Ethereum Client Beacon Node
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=lighthousebeacon
Group=lighthousebeacon
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/lighthouse bn \\
    --network mainnet \\
    --datadir /var/lib/lighthouse \\
    --staking \\
    --http-allow-sync-stalled \\
    --merge \\
    --execution-endpoints <http://127.0.0.1:8551> \\
    --metrics \\
    --validator-monitor-auto \\
    --jwt-secrets="/var/lib/nethermind/jwt-secret"

[Install]
WantedBy=multi-user.target
```

The beacon node needs to share something called a JWT secret with Nethermind, so let the secret be accessible to all users:

```bash
sudo chmod +r /var/lib/nethermind/jwt-secret
```

Reload and start the lighthouse node. The status should say active in green text if running correctly. If not, repeat the configuration steps and see if it resolves the problem.

```bash
sudo systemctl daemon-reload
sudo systemctl start lighthousebeacon.service
sudo systemctl status lighthousebeacon.service
```

Enable the Lighthouse beacon node service to automatically start on reboot.

```bash
sudo systemctl enable lighthousebeacon.service
```

You can watch the logs from your Lighthouse beacon node using this command. Lighthouse may show errors if Nethermind is not synced, so wait until Nethermind is synced to see if the errors persist.

```bash
sudo journalctl -f -u lighthousebeacon.service -o cat | ccze -A
```

Press `Ctrl` + `C` to stop showing those messages.
{% endtab %}

{% tab title="Teku" %}
```bash
sudo useradd --no-create-home --shell /bin/false tekubeacon
sudo mkdir -p /var/lib/teku
sudo chown -R tekubeacon:tekubeacon /var/lib/teku
```

Add systemd file:

```bash
sudo nano /etc/systemd/system/tekubeacon.service
```

Paste the following in (make sure to replace the `0x0000000000000000000000000000000000000000` address with your own Ethereum address where you want to receive the proceeds from transaction fees (post merge)):

```bash
[Unit]
Description=Teku Ethereum Client Beacon Node
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=tekubeacon
Group=tekubeacon
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/teku-22.8.1 \
    --network mainnet \
    --data-path /var/lib/teku/datadir-teku \
    --ee-endpoint http://localhost:8551 \
    --ee-jwt-secret-file /var/lib/nethermind/jwt-secret \
    --rest-api-enabled
    --validators-proposer-default-fee-recipient=0x0000000000000000000000000000000000000000

[Install]
WantedBy=multi-user.target
```

The beacon node needs to share something called a JWT secret with Nethermind, so let the secret be accessible to all users:

```bash
sudo chmod +r /var/lib/nethermind/jwt-secret
```

Reload and start the lighthouse node. The status should say active in green text if running correctly. If not, repeat the configuration steps and see if it resolves the problem.

```bash
sudo systemctl daemon-reload
sudo systemctl start tekubeacon.service
sudo systemctl status tekubeacon.service
```

Enable the Teku beacon node service to automatically start on reboot.

```bash
sudo systemctl enable tekubeacon.service
```

You can watch the logs from your Teku beacon node using this command. Teku may show errors if Nethermind is not synced, so wait until Nethermind is synced to see if the errors persist.

```bash
sudo journalctl -f -u tekubeacon.service -o cat | ccze -A
```

Press `Ctrl` + `C` to stop showing those messages.
{% endtab %}
{% endtabs %}

### Syncing your node

The execution client still stores the blockchain state from the old proof of work chain, so it can take days to weeks to fully sync with the network, depending on your sync mode, hardware and network. The consensus client will also typically take a few days to fully sync on mainnet.

Please ensure both processes are synced before running your validator. Without the latest state your validator will not be able to vote and earn rewards on the proof of stake chain.

{% tabs %}
{% tab title="Nethermind" %}
A Nethermind node should be synced if the logs no longer say it is downloading blocks. Post merge, new payloads from the consensus client should display VALID instead of SYNCING in the logs.

![](<../../.gitbook/assets/Screen Shot 2022-06-15 at 4.30.51 pm (1).png>)
{% endtab %}

{% tab title="Lighthouse" %}
Lighthouse logs should show something similar, saying that the node is synced.

![](<../../.gitbook/assets/Screen Shot 2022-06-15 at 4.33.12 pm.png>)
{% endtab %}

{% tab title="Teku" %}
<figure><img src="../../.gitbook/assets/2022-08-30_13h29_58.png" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

## Running a Validator

### Generating Validator Keys

You will need to generate keys for your validator. These keys are the ONLY way to withdraw your funds after staking your ETH, so you have to ensure you have backed up your keys. There are two options:

* [staking-deposit-cli](https://github.com/ethereum/staking-deposit-cli) - recommended for those comfortable with the command line
* [Wagyu Key Gen](https://github.com/stake-house/wagyu-key-gen) - desktop app, choose the correct network (mainnet, kiln) to generate your validator keys

#### **Staking deposit cli**

Copy the following commands into your terminal to download the cli and generate your keys. Change `num_validators` and `chain` to the number of validators and / or testnet name you want to run.

```bash
wget <https://github.com/ethereum/staking-deposit-cli/releases/download/v2.3.0/staking_deposit-cli-76ed782-linux-amd64.tar.gz>
tar xvf staking_deposit-cli-9ab0b05-linux-amd64.tar.gz
cd staking_deposit-cli-9ab0b05-linux-amd64/
./deposit new-mnemonic --num_validators 1 --chain mainnet
```

Above should result with small structure created:

1. main directory (starts with _"staking\_"_)
   1. _keys_ directory
      1. _keystore_ json file
      2. _deposit\_data_ json file
   2. _deposit_ file

A _keystore_ file will be used later on to start Validator client on machine.

A _deposit\_data_ file will be used for launchpad to confirm Identity and send 32 ETH which will be used for Validator purpose.

#### **Wagyu Key Gen**

Download wagyu from [their website](https://wagyu.gg/) and select the download compatible with your operating system.

![](<../../.gitbook/assets/Screen Shot 2022-06-15 at 9.12.21 am.png>)

Clicking on the top right corner you can select the network you want to generate your keys for. If not connecting to a testnet, let the network default to mainnet.

![](<../../.gitbook/assets/Screen Shot 2022-06-15 at 9.20.16 am.png>)

Click on ‘Create New Secret Recovery Phrase’ and you will be taken through the process of generating a 24 word secret to generate your validator keys. The number of keys you generate should match the number of validators you intend to run.

![](<../../.gitbook/assets/Screen Shot 2022-06-15 at 9.40.05 am.png>)

When finished you should end up with a deposit file (starts with `deposit_data-`and ends with `.json`) and a keystore file (starts with `keystore-`and ends with `.json`) per validator from both methods.

### Depositing ETH

Next you will need to deposit ETH into the deposit contract. One validator requires 32 ETH to run. Go to [the mainnet launchpad](https://launchpad.ethereum.org/en/) to use your wallet and your deposit file to perform the deposit. The launchpad will go through similar instructions as this guide to ensure you have performed them.

#### Depositing on Testnets

You will need testnet ETH in order to run a validator.

{% tabs %}
{% tab title="Kiln" %}
Go to the [official Kiln website](https://kiln.themerge.dev/) and click on the _Add network to MetaMask_ button.

Get testnet ETH:

* [https://faucet.kiln.ethdevops.io/](https://faucet.kiln.ethdevops.io/)
* [https://kiln-faucet.pk-net.net/](https://kiln-faucet.pk-net.net/)

Go to the launchpad and follow the instructions:

* [https://kiln.launchpad.ethereum.org/en/](https://kiln.launchpad.ethereum.org/en/)

Check the status of your validator on the beacon chain:

* [https://beaconchain.kiln.themerge.dev](https://beaconchain.kiln.themerge.dev)
{% endtab %}

{% tab title="Ropsten" %}
Get testnet ETH:

* [https://faucet.egorfine.com/](https://faucet.egorfine.com/)
* [https://faucet.metamask.io/](https://faucet.metamask.io/)
* [https://faucet.dimensions.network/](https://faucet.dimensions.network/)

The [ethstaker](https://ethstaker.cc/) community discord can provide testnet ETH if you don’t have enough to deposit 32 ETH.

Go to the launchpad and follow the instructions:

* [https://ropsten.launchpad.ethereum.org/en/](https://ropsten.launchpad.ethereum.org/en/)

Check the status of your validator on the beacon chain:

* [https://ropsten.beaconcha.in/](https://ropsten.beaconcha.in/)
{% endtab %}

{% tab title="Goerli" %}
Get testnet ETH:

* [https://goerlifaucet.com](https://goerlifaucet.com/) (No auth, or social media account required)
* [https://fauceth.komputing.org/?chain=5](https://fauceth.komputing.org/?chain=5) (No social media account required)
* [https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/)
* [https://faucet.goerli.mudit.blog/](https://faucet.goerli.mudit.blog/)
* [https://faucets.chain.link/goerli](https://faucets.chain.link/goerli) (No social media account required)
* [https://goerli-faucet.pk910.de/](https://goerli-faucet.pk910.de/) (PoW powered, No social media account required)
* [https://goerli-faucet.com/](https://goerli-faucet.com/) ([Open Source](https://github.com/ayanamitech/ethereum-faucet), Telegram Bot authenticated, No social media account required)

Go to the launchpad and follow the instructions:

* [https://goerli.launchpad.ethereum.org/en/](https://goerli.launchpad.ethereum.org/en/)

Check the status of your validator on the beacon chain:

* [https://goerli.beaconcha.in/](https://goerli.beaconcha.in/)
{% endtab %}
{% endtabs %}

### Configuring a Validator

DO NOT run two validators with the same keys. This can lead to your validator signing two different blocks and lead to [slashing](https://consensys.net/knowledge-base/ethereum-2/glossary/) which will significantly reduce your staked ETH.

Like configuring your consensus and execution client, create a dedicated user for your validator:

{% tabs %}
{% tab title="Lighthouse" %}
```bash
sudo useradd --no-create-home --shell /bin/false lighthousevalidator
sudo mkdir -p /var/lib/lighthouse/validators
sudo chown -R lighthousevalidator:lighthousevalidator /var/lib/lighthouse/validators
sudo chmod 700 /var/lib/lighthouse/validators
```
{% endtab %}

{% tab title="Teku" %}
```bash
sudo useradd --no-create-home --shell /bin/false tekuvalidator
sudo mkdir -p /home/tekuvalidator
sudo chown -R tekuvalidator:tekuvalidator /home/tekuvalidator
```

Also ensure that new user has access to keystore files:

```bash
sudo chown -R tekuvalidator:tekuvalidator /path/to/keystores
```
{% endtab %}
{% endtabs %}

Below there is a description on how to start Validator service for various CL on Your machine.

{% tabs %}
{% tab title="Lighthouse" %}
The keystore file (generated previously and starts with `keystore-` ) needs to be imported for the Lighthouse validator client. Replace `/path/to/keystores` with the absolute path you saved your keystore file.

```bash
sudo /usr/local/bin/lighthouse account validator import \\
    --directory /path/to/keystores \\
    --datadir /var/lib/lighthouse \\
    --network mainnet
sudo chown -R lighthousevalidator:lighthousevalidator /var/lib/lighthouse/validators
```

The command will prompt for your keystore password.

Create the systemd file:

```bash
sudo nano /etc/systemd/system/lighthousevalidator.service
```

Paste the following configuration into the file. Make sure to replace the `0x0000000000000000000000000000000000000000` address with your own Ethereum address where you want to receive the proceeds from transaction fees (post merge).

```bash
[Unit]
Description=Lighthouse Ethereum Client Validator Client
Wants=network-online.target
After=network-online.target

[Service]
User=lighthousevalidator
Group=lighthousevalidator
Type=simple
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/lighthouse vc \\
    --network mainnet \\
    --datadir /var/lib/lighthouse \\
    --metrics \\
    --suggested-fee-recipient 0x0000000000000000000000000000000000000000

[Install]
WantedBy=multi-user.target
```

Reload systemd to reflect the changes and start the service. Check the status to make sure it’s running correctly.

```bash
sudo systemctl daemon-reload
sudo systemctl start lighthousevalidator.service
sudo systemctl status lighthousevalidator.service
```

Enable the Lighthouse validator client service to automatically start on reboot.

```bash
sudo systemctl enable lighthousevalidator.service
```

You can watch the live messages from your Lighthouse validator client logs using this command.

```bash
sudo journalctl -f -u lighthousevalidator.service -o cat | ccze -A
```

Press `Ctrl` + `C` to stop showing those messages
{% endtab %}

{% tab title="Teku" %}
In Teku at first we need to create a file with password used during creation of Validator Keys. In order to do that, navigate to the path, where keys created on [#generating-validator-keys](eth2-validator.md#generating-validator-keys "mention") are stored.&#x20;

Then on _keys_ directory level create a separate directory called _passwords_. Result should be two directories _keys_ and _passwords_ on the same level under _staking_ main directory.

In _passwords_ directory we need to create txt file which will have exactly the same name as _keystore_ json file. Result should be:

1. keys
   1. keystore.json
2. passwords
   1. keystore.txt

Now, in _keystore.txt_ user needs to put password used for creation of Validator Keys and save this file.

Then You can proceed to creation of Validator service. In order to do that, create systemd file:

```bash
sudo nano /etc/systemd/system/tekuvalidator.service
```

Paste the following configuration into the file. Make sure to replace the `0x0000000000000000000000000000000000000000` address with your own Ethereum address where you want to receive the proceeds from transaction fees (post merge).

Also make sure that You replace `/path/to/keystores` to path, where Validator Keys are stored.

```bash
[Unit]
Description=TekuEthereum Client Validator Client
Wants=network-online.target
After=network-online.target

[Service]
User=tekuvalidator
Group=tekuvalidator
Type=simple
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/teku-22.8.1/bin/teku validator-client \
    --beacon-node-api-endpoint=http://127.0.0.1:5051 \
    --validator-keys=/path/to/keystores/staking/keys/keystore.json:/path/to/keystores/staking/passwords/keystore.txt \
    --network mainnet\
    --validators-proposer-default-fee-recipient=0x0000000000000000000000000000000000000000

[Install]
WantedBy=multi-user.target
```

Reload systemd to reflect the changes and start the service. Check the status to make sure it’s running correctly.

```bash
sudo systemctl daemon-reload
sudo systemctl start tekuvalidator.service
sudo systemctl status tekuvalidator.service
```

Enable the Teku validator client service to automatically start on reboot.

```bash
sudo systemctl enable tekuvalidator.service
```

You can watch the live messages from your Teku validator client logs using this command.

```bash
sudo journalctl -f -u tekuvalidator.service -o cat | ccze -A
```

Press `Ctrl` + `C` to stop showing those messages
{% endtab %}
{% endtabs %}

### Validator Tips and Tricks

Go through [the checklist](https://launchpad.ethereum.org/en/checklist) by the Ethereum foundation for some ways to improve security and optimise your validator rewards. For example:

* Setting up [a firewall](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04) and forward ports 30303 (Nethermind P2P) and 9000 (Lighthouse P2P) to prevent malicious external actors accessing your node
* Ensure the time on your node [is synced](https://www.digitalocean.com/community/tutorials/how-to-set-up-time-synchronization-on-ubuntu-20-04)
* Adding monitoring dashboards for [Nethermind](https://docs.nethermind.io/nethermind/guides-and-helpers/deploy-nethermind-with-monitoring-stack) and [Lighthouse](https://github.com/sigp/lighthouse-metrics) to view real time metrics of your consensus and execution client
* Using a VPN to protect the privacy of your validator
* Add an optional `--graffiti` flag that adds a message to the blocks your validator proposes, publicly viewable on the beacon chain

#### Monitoring

To maximise your validator rewards, ensure that your node is always running and online. Downloading the [Beacon Chain mobile app](https://beaconcha.in/mobile) will allow you to monitor and set up alerts when your validator is offline or not earning rewards. You can also make an account on the [Beacon Chain explorer](https://beaconcha.in/) and set up email alerts.

If you receive an alert check your machine is connected to the internet and restart your services:

```bash
sudo systemctl restart nethermind.service
sudo systemctl restart lighthousebeacon.service
sudo systemctl restart lighthousevalidator.service
```

## Credits

Based on [ethstaker’s guide](https://github.com/remyroy/ethstaker/blob/main/merge-devnet.md) to connecting to kiln testnet.
