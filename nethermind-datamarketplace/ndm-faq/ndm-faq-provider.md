---
description: Frequently asked questions about Nethermind Data Marketplace - Provider
---

# Provider

## How can I connect with my consumers?

There is separate documentation about connecting with consumers. 

{% page-ref page="../connecting-with-consumers.md" %}

## How can I unlock my account?

Right after starting NDM, you will be asked to input passphrase to your account.

## Do I need to have my node always running in order to provide data assets for consumers?

Yes, your consumers will be able to consume your assets and place deposits only while being connected to your live node.

## Can I edit created data asset?

No, once created the data asset can not be edited \(exception is plugin type\).

## Is creating data assets free?

Yes, creating data assets is free. But remember that, as a provider you need some balance in your account, otherwise you won't send any payment claim transaction.

## What if I need to make a technical break for my data asset?

Simply just change the asset status from `Published` to `Under maintanace`.   
After the break, you simply just change it back to `Published` again. 

## How to claim a payment for consumed data asset?

Payment claims are being sent automatically by NDM. If you want to change gas price for the transactions, you can make the changes in Advance -&gt; Configuration tab. 

## Why I can't claim payment for consumed units?

It is often due to payment claim threshold. You can change this via the NDM UI in Advance -&gt; Configuration tab.   
Provider won't claim any value under threshold. 

## Why are my receipts not being merged? 

It is due to receipts merge threshold. You can change this via NDM UI in Advance -&gt; Configuration tab.   
Provider won't merge receipts if their account is less than the threshold. 



