# Beta testing NDM

### Running Consumer

* [x] Download the NDM package from the discord
* [x] Run Consumer node:

  `ndm.launcher.exe` \(Windows\)   
  `ndm.launcher.command` \(MacOs\)  
  `ndm.launcher` \(Linux\). 

* [x] If you are working with NDM on MacOs be sure to read MacOs NDM setup page [https://app.gitbook.com/@nethermind/s/nethermind/~/drafts/-MTkjrtMVQumOGgTaf\_P/nethermind-datamarketplace/running-ndm-on-macos-problems-and-fixes](running-ndm-on-macos-problems-and-fixes.md) 

### Ropsten chain

* [x] In the console choose **Consumer** then **Ropsten \[via proxy\]** and confirm the proxy endpoint.

![](../.gitbook/assets/image%20%28140%29.png)

### xDai chain

* [x] In the console chose **Consumer** then **xDai** network.
* [x] Wait for the sync to complete \(~1 hour\)

### Playing with data assets

After that, you will have an electron app and cosnole running. By default, you will have our Provider node added in the static-nodes file so you will be already connected to one. 

We prepared consumer test account with ETH on start: 

* **0x5d55020e862bc876c8d2e9a4eeeda935ce6438c6** - passphrase `consumer`

And one data asset from the **Crypto Compare Web Api** plugin. 

* [x] Continue by placing a deposit with the unit number of your choice.

![Data assets view](../.gitbook/assets/image%20%28117%29.png)

* [x] After you place a deposit for the asset go to the **Deposits** tab and start consuming your units \(click on **Open data stream**\).

![Deposits view](../.gitbook/assets/image%20%28123%29.png)

* [x] On selecting deposit the deposit details tab will appear - to consume units go to **Open data stream.** On input, you can write your queries to receive data from **Provider.**

![Consumed data stream from Crypto Compare Web Api](../.gitbook/assets/image%20%28118%29.png)

###   Queries examples

 `data/news/feeds  
 data/exchange/histoday?tsym=USD&limit=10  
 data/top/exchanges/full?fsym=BTC&tsym=USD  
 data/symbol/histoday?fsym=BTC&tsym=USD&limit=10`

