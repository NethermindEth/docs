# Connecting with providers

As a consumer, you won't be able to consume any data assets before connecting to the right providers, and you can do that in two ways. 

* **Add provider through UI** 1. Go to "**Advanced**" -&gt; "**Peers"** tab

![Advanced/Peers tab](../.gitbook/assets/image%20%2839%29.png)

       2. Enter the provider enode address to the "**Add peer"** input  


![Adding enode to the available peers](../.gitbook/assets/image%20%2849%29.png)

      3. Provider's node should be added to the connected peers  


![Connected provider&apos;s node](../.gitbook/assets/image%20%2845%29.png)



* **Add provider through static-nodes.json file** 1. Go to your local NDM package 2. Access **nethermind/Data/static-nodes.json** 3. ****Add provider's enode address to the .json file \(remember about the proper formatting - an array of strings\)  4. Run NDM  5. You should see in the logs that your node is connecting to the given enode



