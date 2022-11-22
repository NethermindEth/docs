# Connecting with providers

As a consumer, you won't be able to consume any data assets before connecting to the right providers, and you can do that in two ways.&#x20;

* **Add provider through UI**\
  1\. Go to "**Advanced**" -> "**Peers"** tab

![Advanced/Peers tab](<../.gitbook/assets/image (39).png>)

&#x20;      2\. Enter the provider enode address to the "**Add peer"** input\


![Adding enode to the available peers](<../.gitbook/assets/image (49).png>)

&#x20;     3\. Provider's node should be added to the connected peers\


![Connected provider's node](<../.gitbook/assets/image (45).png>)



* **Add provider through static-nodes.json file**\
  1\. Go to your local NDM package\
  2\. Access **nethermind/Data/static-nodes.json**\
  ****3. **** Add provider's enode address to the .json file (remember about the proper formatting - an array of strings) \
  4\. Run NDM \
  5\. You should see in the logs that your node is connecting to the given enode

