---
description: Frequently asked questions about the Nethermind Data Marketplace - Provider
---

# Provider

## How can I unlock my account? 

Right after starting NDM you will be asked to input passphrase to your account. It also happens while changing accounts.

## Do I need to have my node always running in order to provide data assets for consumers?

Yes, your consumers will be able to consume your assets and place deposits only while being connected to your live node.

## Can I edit created data asset?

No, once created data asset can not be edited \(exception is plugin type\).

## Is creating data assets free?

Yes, creating data assets is free. But remember that as a provider you need some balance in your account, otherwise you won't send any payment claim transaction.

## What if I need to make a technical break for my data asset?

Just change assets's status from `Published` to `Under maintanace`.   
After the break just change it back to `Published` again. 

## Why I can't claim payment for consumed units?

It is often due to payment claim threshold. You can change it via NDM UI in Advance -&gt; Configuration tab.   
Provider won't claim any value under threshold. 

## Why my receipts are not being merged? 

It is due to receipts merge threshold. You can change it via NDM UI in Advance -&gt; Configuration tab.   
Provider won't merge receipts if their count is less than threshold. 



