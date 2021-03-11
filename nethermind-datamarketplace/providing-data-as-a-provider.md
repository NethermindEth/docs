# Providing data as a provider

To provide your data through NDM you will have to create a data asset.   
Data assets are created based on the plugin files created in the provider's **ndm-plugins** directory in the package.  
  
To create such a plugin go to **nethermind/ndm-plugins** directory and create **.yml** file, next pick one of the types of plugins suited for you. 

## WebApi

Plugin type used for providing data from RESTfull Web Api using HTTP requests.   
  
**File structure:**

```text
name: <name_of_the_plugin>
type: webapi
url: <url_to_the_web_api>
method: <post/get>
```

**File example:** 

```text
name: crypto-compare-web-api
type: webapi
url: https://min-api.cryptocompare.com
method: get
```

**Process:** 

Let's say that we want to provide data from this public api [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/). First of all we will need to create a .yml file with plugin description.   
  
Go to **nethermind/ndm-plugins/** and create dogs-plugin.yml looking like this

```text
name: dogs-api
type: webapi
utl: https://dog.ceo/api/
method: get
```

Since we will only make HttpGet requests we are making the **method** field a **get** type.  
After that just run your provider NDM package on the chain of your choice \(depends on what currency you want to use for payments - xDai or ETH\).   


![On startup, you will see your plugin being initialized](../.gitbook/assets/image%20%28150%29.png)

Next, go to **Data Assets** tab and create new Data Asset \(click on the '+' icon\).  
You will be able to create data asset based on our dogs-plugin.yml file.

 Since this data asset will be based on HTTP Get requests the **Unit type** will be **Unit**  
and **Query type** will be **Query.**

![Select created plugin from &apos;Plugins&apos; dropdown](../.gitbook/assets/image%20%28149%29.png)

After creating the data asset change a state to **Published,** connected consumers should now have option to deposit funds on your data asset and consume WebApi data. 

![Change data asset state to &apos;Published&apos;](../.gitbook/assets/image%20%28151%29.png)

In order for consumers to consume your data, they will just need to input the HTTP GET query into data stream input \(in this case /breeds/image/random\) and with that provider will get paid for every single query consumers make.  

## JsonRpc

For providing data from nodes supporting JsonRpc requests. 

File structure: 

```text
name: <name_of_the_plugin>
type: jsonrpc
host: <node_json_rpc_endpoint>
```

File example: 

```text
name: nethermind-ropsten
type: jsonrpc
host: https://ropsten.nethermind.io
```

**Process:**

The main idea behind the JsonRpc data asset is that consumer will make a JsonRpc request \(just like with curl\) using the javascript object.   
  
For example, let's make ropsten.yml file where we define JsonRpc data asset plugin with connection to Nethermind's ropsten open node at [ropsten.nethermind.io](https://ropsten.nethermind.io/).  
  
The file will look like this:

```text
name: nethermind-ropsten
type: jsonrpc
host: https://ropsten.nethermind.io
```

Now run the NDM provider and you will see your plugin is initialized. 

![](../.gitbook/assets/image%20%28147%29.png)

After unlocking \(or creating\) your account, click on the '+' icon to create new data asset - you will be able to pick your JsonRpc plugin from **Plugins** dropdown, since we want the consumers to pay for every single query make **Unit type** - unit and **Query type** - query. 

![Creating JsonRpc data asset](../.gitbook/assets/image%20%28148%29.png)

Create the data asset and change its status to **Published**, after that connected consumers will be able to place deposits for this asset and consume it.   
In order to make queries to data assets they will just need to make JsonRpc request similar to those in curl - creating javascript object.   
  
Let's say that consumers want to consume data from **txpool\_content** JsonRpc method - in order to do that, in the data stream they will need to input 

```text
{"jsonrpc":"2.0", "method": "txpool_content", "id":1}
```

And the NDM will handle the rest providing the data from node and sending the payment to provider. 

