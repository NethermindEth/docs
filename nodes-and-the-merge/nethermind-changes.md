# Nethermind Changes

The Merge brings changes to the JSON-RPC API. Such as the Engine API, JWT authentication, additional RPC ports, and additional block tags.

## Engine API

The Engine API adds new endpoints that allow the execution layer client to receive messages from the consensus layer client.

{% hint style="info" %}
Port `8551` is the default port that Engine API communicates with the CL on.
{% endhint %}

{% hint style="info" %}
JWT Authentication is used on all ports with the `Engine` API Module enabled.
{% endhint %}

{% embed url="https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md" %}

{% content-ref url="../ethereum-client/json-rpc/" %}
[json-rpc](../ethereum-client/json-rpc/)
{% endcontent-ref %}

## JWT Secrets

JSON Web Token authentication was added to the JSON-RPC API for security reasons to ensure that nothing interferes with the communication between the Nethermind and the Consensus client. This requires you to create a `.txt` file containing a hexadecimal “secret” that will be passed to each client.

{% hint style="warning" %}
Nethermind will create its own `jwtsecret` file if you do not specify a location or pass the wrong location.
{% endhint %}

{% embed url="https://jwt.io/" %}

To create this “Secret File” use the following command.

```bash
openssl rand -hex 32 | tr -d "\n" > "/tmp/jwtsecret"
```

where `"/tmp/jwtsecret"` will be the file path and name when created.

If you do not want to install OpenSSL, you may use a random hex generator website. All you need is a 64 character hex string saved to a `.txt` file.

{% hint style="danger" %}
We strongly recommend you use OpenSSL to generate the secret locally because it is more secure
{% endhint %}

```
fcba4ab3138530cf233568bee2d518dd960da77355333d5ac856e1f27487dc9c
```

## Configuration Module

The merge also adds new configuration options such as:

* `JsonRpc.AdditionalRpcUrls`
* `JsonRpc.JwtSecretFile`
* New `Merge` module&#x20;

{% content-ref url="../ethereum-client/configuration/jsonrpc.md" %}
[jsonrpc.md](../ethereum-client/configuration/jsonrpc.md)
{% endcontent-ref %}

{% content-ref url="../ethereum-client/configuration/merge.md" %}
[merge.md](../ethereum-client/configuration/merge.md)
{% endcontent-ref %}

## Block Tags

Some requests on the JSON-RPC API require a block tag for additional context. Previously there were three block tags `earliest`, `latest`, and `pending`. The Merge adds an additional two tags `finalized` and `safe`.

| Block Tag | Description                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| earliest  | The lowest numbered block the client has available                                                                                                              |
| safe      | The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination                            |
| finalized | The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination                            |
| latest    | The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions |
| pending   | A sample next block built by the client on top of latest and containing the set of transactions usually taken from local mempool                                |
