---
description: >-
  Recipe for a fast and easy terraform deployment of Nethermind Client and
  Monitoring stack (Grafana/Prometheus/Seq)
---

# Deploy Nethermind with Monitoring stack

Below tutorial will guide you through the Nethermind node deployment together with full monitoring stack which consists of:

* Grafana with a beautiful, preloaded dashboard to monitor your Nethermind node performance
* Prometheus/Pushgateway to pull and push metrics generated by Nethermind client
* Seq to have an easy, queriable view of Nethermind client logs 

## Prerequisites

* [x] [Terraform v0.12.7](https://www.terraform.io/downloads.html) &lt; 
* [x] [Cloud provider](cloud-providers/) \(in this tutorial we will be using **Digital Ocean**, the terraform recipe can be configured to use any other provider of your choice UpCloud/AWS/Google etc.\)

## 🛠 Setting up

First of all let us download repository with necessary files

```text
git clone https://github.com/NethermindEth/terraform-nethermind
```

Let's move to the cloned directory

```text
cd terraform-nethermind/
```

Create a `terraform.tfvars` file and add these 2 variables

{% tabs %}
{% tab title="terraform.tfvars" %}
```bash
do_token = "Your DigitalOcean token goes here"
pvt_key = "path/to/your/private_ssh_key"
```
{% endtab %}
{% endtabs %}

Make sure that the `public_key` variable in `main.tf` file points to your Public key path

{% tabs %}
{% tab title="main.tf" %}
```bash
resource "digitalocean_ssh_key" "key" {
  name       = "SSH Key Example for "
  public_key = file("./private.key.pub")
}
```
{% endtab %}
{% endtabs %}

### How to get those variables? \([skip this part](deploy-nethermind-with-monitoring-stack.md#run-the-stack) if you know already\)

#### do\_token

Can be generated on DigitalOcean panel. First go to the **API** management \(bottom of the left navigation panel\)

![](../.gitbook/assets/image%20%2843%29.png)

Click on the `Generate New Token` button

![](../.gitbook/assets/image%20%2847%29.png)

Give it a name and generate

![](../.gitbook/assets/image%20%2842%29.png)

Copy the token and place in its spot in `terraform.tfvars` file

#### pvt\_key

Generate ssh key, we will be using **ed25519** algorithm in our example

```bash
ssh-keygen -t ed25519 -a 100 -f private.key
```

`pvt_key` variable will now look like this:

```bash
pvt_key = "./private.key"
```

## Running the stack

Confirm that terraform can be initialized, run this command from within terraform-templates directory

```bash
terraform init
```

You should see a green light in your console

![](../.gitbook/assets/image%20%2850%29.png)

Let's preview our plan before applying and save it so that it can be used in a future

```bash
terraform plan -out myplan
```

You can now provide some basic configuration to your VM/Nethermind Node

![](../.gitbook/assets/image%20%2855%29.png)

A list of available `configs` can be found [here](../ethereum-client/networks.md)

{% hint style="warning" %}
🧯 If you chose to enable JsonRpc \(it will run on port `8545` by default\) make sure that you set up [Firewall rules](../first-steps-with-nethermind/firewall-configuration.md) either in DigitalOcean or by using Linux `iptables`
{% endhint %}

Let's apply our plan and start deploying whole stack \(it should take no longer than 3 minutes\)

```bash
terraform apply myplan
```

Wait until terraform is done deploying and if everything went smooth you should see

![](../.gitbook/assets/image%20%2854%29.png)

## Exploring the stack

Grab the IP of your new Droplet from the DigitalOcean panel

![](../.gitbook/assets/image%20%2852%29.png)

### Grafana Dashboard

Go to the `YOUR_DROPLET_IP:3000`

Login to Grafana with `admin:admin` credentials and change the password if you wish

![](../.gitbook/assets/image%20%2841%29.png)

Go to `YOUR_DROPLET_IP:3000/dashboards` endpoint

![](../.gitbook/assets/image%20%2840%29.png)

Click on the **Nethermind** Dashboard and you should see charts with Nethermind metrics

![](../.gitbook/assets/image%20%2848%29.png)

### Prometheus

Go to the `YOUR_DROPLET_IP:9090`

Explore Nethermind metrics, visualize and analyse using prometheus syntax, a list of available metrics with their descriptions can be found here:

{% page-ref page="../ethereum-client/metrics/modules/" %}

![](../.gitbook/assets/image%20%2851%29.png)

### Pushgateway

Go to the `YOUR_DROPLET_IP:9091` and verify if metrics are inflowing

![](../.gitbook/assets/image%20%2849%29%20%281%29.png)

### Seq

Go to the `YOUR_DROPLET_IP:5341`, you will be albe to query your Nethermind client logs. Feel free to create some useful `Signals, Queries` or `Dashboards.`

![](../.gitbook/assets/image%20%2839%29%20%282%29.png)

## Destroying the stack

Use below command to destroy your terraform stack \(We will need to provide variables, can be random, once again as we haven't set any default values for them. Hopefully it will change in the future.\)

```bash
terraform destroy --auto-approve
```
