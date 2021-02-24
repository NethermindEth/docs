---
description: Frequently asked questions about Nethermind Data Marketplace - Provider
---

# Provider

## How can I connect to a consumer?

There is separate documentation about connecting with consumers. 

{% page-ref page="../connecting-with-consumers.md" %}

## Is creating data assets free?

Yes, creating data assets is free. However, please remember that as a provider you need a balance in your account, otherwise you will not be able to send any payment claim transaction.

## Can I edit created data asset?

No, once created the data asset can not be edited.

## Do I need to have my node always running to provide data assets for consumers?

Yes, your consumers will be able to make deposits and consume data only while being connected to your node.

## What if I need to make a technical break for my data asset?

Change the state of data asset from `Published` to `Under maintanace`. Consumers will be able to make deposits but will not be able to consume the data.  
After the break, you simply just change it back to `Published`. 

## How to claim a payment for consumed data asset?

Payment claims are being sent automatically by NDM. If you want to change gas price or default thresholds, you can make the changes in "**Advanced**" -&gt; "**Configuration**" tab. 

## Why I can't claim payment for consumed units?

There are 2 reasons.

The first reason is that sending a payment claim may result in a loss. -&gt; It costs more to send the payment claim transaction than the money that goes to your account.

The second reason may be that the payment claim threshold is too high.  
Provider will not claim any value under **payment claim threshold**. 



