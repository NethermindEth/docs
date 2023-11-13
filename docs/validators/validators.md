---
title: Validators
sidebar_position: 0
---

## General considerations

:::warning Important
Please check out the [security considerations](../fundamentals/security.md) before using Nethermind as a validator.
:::

For Ethereum validators, we highly recommend checking out [Staking with Ethereum](https://ethereum.org/en/staking/) and [Validator checklist](https://launchpad.ethereum.org/en/checklist).

## Hardware configurations

The following hardware configurations for Ethereum Mainnet validators have been battle-tested by us and our users. We have observed excellent validator performance and stability with these configurations.

### Local machine

A single validator on Intel NUC 11:

- CPU: Intel Core i7-1165G7
- Memory: Crucial 32GB DDR4-3200 SODIMM
- Storage: Samsung 980 PRO PCIe NVMe SSD 2TB
- Internet speed: 620 Mbps download, 160 Mbps upload

See also Nethermind [hardware requirements](../get-started/system-requirements.md#hardware-requirements).

### AWS

Multiple validators on the following EC2 instances:

- [m6i.2xlarge](https://aws.amazon.com/ec2/instance-types/m6i/): 8 vCPU, 32 GiB memory
- [m7g.2xlarge](https://aws.amazon.com/ec2/instance-types/m7g/): 8 vCPU, 32 GiB memory

These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on [t4g.small](https://aws.amazon.com/ec2/instance-types/t4/) instances.

### Azure

Multiple validators on the following VM instances:

- [Standard_D8_v5](https://learn.microsoft.com/en-us/azure/virtual-machines/dv5-dsv5-series#dv5-series): 8 vCPU, 32 GiB memory
- [Standard_D8ps_v5](https://learn.microsoft.com/en-us/azure/virtual-machines/dpsv5-dpdsv5-series#dpsv5-series): 8 vCPU, 32 GiB memory

These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on [Standard_D2pls_v5](https://learn.microsoft.com/en-us/azure/virtual-machines/dplsv5-dpldsv5-series#dplsv5-series) instances.

### GCP

Multiple validators on the [c2d-highmem-4](https://cloud.google.com/compute/docs/compute-optimized-machines#c2d-high-mem) instance: 4 vCPU, 32 GB memory

These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on [e2-small](https://cloud.google.com/compute/docs/general-purpose-machines#sharedcore) instances.

## Gnosis validators

To set up a Gnosis Chain validator, you can either do that [manually](https://docs.gnosischain.com/node/manual/) or use one of the available [one-click tools](https://docs.gnosischain.com/node/tools).