# Setting up NDM for manual testing

### Running Consumer

* [x] Download the NDM package from the download page[ https://downloads.nethermind.io/](https://downloads.nethermind.io/)
* [x] Run Consumer node:

  `ndm.launcher.exe` \(Windows\)   
  `ndm.launcher.command` \(MacOs\)  
  `ndm.launcher` \(Linux\).   

* [x] In the console choose **Consumer** then **Ropsten \[via proxy\]** and confirm the proxy endpoint.

![](../.gitbook/assets/image%20%28140%29.png)

### Running Provider

* [x] Run Provider in a similar way:  `ndm.launcher.exe` \(Windows\) `ndm.launcher.command` \(MacOs\)  `ndm.launcher` \(Linux\) 
* [x] In the console choose **Provider** then **Ropsten \[via proxy\]** and also confirm the proxy endpoint.

### Playing with data assets

You will have two consoles and two UIs \(one for **Provider** and one for **Consumer**\). If you want to change client type - select the correct button in the right top corner on UI.

We prepared for you 2 accounts with ETH on start: 

* **0xc7f8522f15c189e00d2f895b4528b4f84516cd7b** - passphrase `provider`
* **0x5d55020e862bc876c8d2e9a4eeeda935ce6438c6** - passphrase `consumer`

And one data asset from the **Crypto Compare Web Api** plugin. 

* [x] Continue by placing a deposit with the unit number of your choice.

![Data assets view](../.gitbook/assets/image%20%28117%29.png)

* [x] After you place a deposit for the asset go to the **Deposits** tab and start consuming your units \(click on **Open data stream**\).

![Deposits view](../.gitbook/assets/image%20%28123%29.png)

* [x] On selecting deposit the deposit details tab will appear - to consume units go to **Open data stream.** On input, you can write your queries to recieve data from **Provider.**

![Consumed data stream from Crypto Compare Web Api](../.gitbook/assets/image%20%28118%29.png)

###   Queries examples

 `data/news/feeds  
 data/exchange/histoday?tsym=USD&limit=10  
 data/top/exchanges/full?fsym=BTC&tsym=USD  
 data/symbol/histoday?fsym=BTC&tsym=USD&limit=10`

