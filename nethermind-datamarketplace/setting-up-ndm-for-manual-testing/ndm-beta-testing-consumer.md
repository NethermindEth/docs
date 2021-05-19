---
description: Running the consumer
---

# Consumer

* [x] Download the NDM package from the discord
* [x] Run Consumer node:

  `ndm.launcher.exe` \(Windows\)   
  `ndm.launcher.command` \(MacOs\)  
  `ndm.launcher` \(Linux\).

* [x] Select `Consumer`

![](../../.gitbook/assets/image%20%2815%29.png)

* [x] Select the network

## Connect to the network

### Ropsten

#### VIA Proxy

* [x] Select **Ropsten \[VIA Proxy\]** and enter the proxy endpoint.

for example: [`https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190`](https://ropsten.infura.io/v3/8728eeb1128309974c528b1183533190)\`\`

![](../../.gitbook/assets/image%20%2838%29.png)

### xDai

#### Sync

* [x] Select **xDai** network. Default sync type is **fast sync**.

![](../../.gitbook/assets/image%20%28162%29.png)

* [x] Wait for the sync to complete \(~1 hour\)

#### VIA Proxy

* [x] Select **xDai \[VIA Proxy\]** and enter the proxy endpoint

![](../../.gitbook/assets/image%20%28163%29.png)

## Account

If you don't have an account, you can create one using the modal that will appear at the start. Or you can use your existing account. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-already-have-an-account-can-i-use-it).

### Ropsten

If you can use Get ETH contact with us on Discord.

### xDai

If you can use Get ETH using Ramp Network. [See more](https://docs.nethermind.io/nethermind/nethermind-datamarketplace/ndm-faq#i-created-the-account-but-i-still-have-no-money-on-it-what-should-i-do).

## Making deposit and getting the data

After that, you will have an electron app and cosnole running. By default, you will have our Provider node added in the static-nodes file so you will be already connected to one. If you don't see any data assets - don't worry, they will appear after a while.

You will see a couple of data assets. For example **Crypto Compare Web Api** or **Nethermind Tx Stream**. 

* [x] Continue by placing a deposit with the unit number of your choice.

![Data assets view \(you will have more data assets avaliable to consume\)](../../.gitbook/assets/image%20%28117%29.png)

* [x] After you make a deposit go to the **Deposits** tab. 

When the deposit is unclonfirmed, please wait patiently for block confirmations.

Once the deposit has been confirmaed, feel free to **open a data stream**.

![Deposits view](../../.gitbook/assets/image%20%28123%29.png)

* [x] After clicking the **Open data stream** button, you will be redirected to a view where you can enter requested query/stream parameters \(if required\) to receive the data.

![Consumed data stream from Crypto Compare Web Api](../../.gitbook/assets/image%20%28118%29.png)

###   Queries examples for **Crypto Compare Web Api** 

 `data/news/feeds  
 data/exchange/histoday?tsym=USD&limit=1  
 data/top/exchanges/full?fsym=BTC&tsym=USD  
 data/symbol/histoday?fsym=BTC&tsym=USD&limit=1`

