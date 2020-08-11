# FAQs

## Can I disable logging to file?

Yes, the details of the logger configuration can be found [here](https://docs.nethermind.io/nethermind/ethereum-client/logging-configuration)**.**

## Can I disable logging of JSON RPC calls

Yes, the details of the logger configuration can be found [here](https://docs.nethermind.io/nethermind/ethereum-client/logging-configuration)**.**

## How can I configure validator on AuRa / Clique?

You can find more details on running validators in the docs -&gt; for [AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) and for [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain).

## My network bandwidth is used up by the Nethermind node

Try changing the config to a lower number \(`--Network.ActivePeersMaxCount 25`\)

## Is my node synced?

Your node is synced when it shows log lines starting with:

`Processed ...` 

And the block numbers shown are at the head of the chain.

_In blockchain any node can never be 100% sure it is synced because there is no central source of truth - so your node is generally not able to tell you that it is synced but it is able to tell you that it believes it is synced based on what it know from the peers that it talks to\)._



