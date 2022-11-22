# Connecting with consumers

As a provider, you can provide data assets before connecting with your consumers' nodes but there will be no one to consume them. First, you have to connect with them and there are two ways to do that.

* **Add consumer through UI**\
  1\. Go to "**Advanced**" -> "**Peers"** tab

![Advanced/Peers tab](<../.gitbook/assets/image (39).png>)

&#x20;      2\. Enter the consumer enode address to the "**Add peer**" input  \


![Adding enode to the available peers](<../.gitbook/assets/image (49).png>)

&#x20;     3\. Consumer's node should be added to the connected peers\


![Connected consumer's node](<../.gitbook/assets/image (45).png>)



* **Add consumer through static-nodes.json file**\
  1\. Go to your local NDM package\
  2\. Access **nethermind/Data/static-nodes.json**\
  ****3. **** Add consumer's enode address to the .json file (remember about the proper formatting - an array of strings) \
  4\. Run NDM \
  5\. You should see in the logs that your node is connecting to the given enode
