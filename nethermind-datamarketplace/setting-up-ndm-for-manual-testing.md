# Setting up NDM for manual testing

Download the NDM package from its download page[ https://downloads.nethermind.io/](https://downloads.nethermind.io/)

Run Consumer node - ndm.launcher.exe \(Windows\),  ndm.launcher.command \(MacOs\) or ./ndm.launcher \(Linux\).   
In the console choose "Consumer" then "Ropsten \[via proxy\]" and confirm infura key.

![](../.gitbook/assets/image%20%28139%29.png)

Run Provider in a similar way -&gt; ndm.launcher.exe \(Windows\),  ndm.launcher.command \(MacOs\) or ./ndm.launcher \(Linux\)  
In the console choose "Provider" then "Ropsten \[via proxy\]" and also confirm infura key.

You will have two consoles and two UIs \(one for provider and one for consumer\). If you want to change client type - select the correct button in the right top corner on UI.

We prepared for you 2 accounts with ETH on start:   
0xc7f8522f15c189e00d2f895b4528b4f84516cd7b - passphrase 'provider' 0x5d55020e862bc876c8d2e9a4eeeda935ce6438c6 - passphrase 'consumer'

And one data asset from the Crypto Compare Web Api plugin:

![](../.gitbook/assets/image%20%28117%29.png)

After you place a deposit for the asset go to the **Deposits** tab and start consuming your units \(click on "**Open data stream**".

![On selecting deposit the deposit details tab wil appear - to consume units go to &apos;Open data stream&apos;](../.gitbook/assets/image%20%28123%29.png)

![On input you can write your queries to recieve data from provider](../.gitbook/assets/image%20%28118%29.png)

  Queries:   
  `data/news/feeds  
  data/exchange/histoday?tsym=USD&limit=10  
  data/top/exchanges/full?fsym=BTC&tsym=USD  
  data/symbol/histoday?fsym=BTC&tsym=USD&limit=10`

