# The Merge

The long awaited transition from Proof of Work (PoW) to Proof of Stake (PoS) better known as "_The Merge_" is the
largest change in Ethereum's history. This idea has been in the works since 2015 and will fundamentally change how the
network is secured and lays the foundation for the next phase of improvements.

### Beacon Chain

The most notable change is the addition of the Beacon chain (Consensus layer) which launched on December 1, 2020 and
will be replacing Proof of Work mining. It will coordinate and pseudo randomly select block producers from the pool of
stakers (also called validators) in a way that makes it extremely difficult for validators to coordinate attacks on the
network. To make sure all of this happens in a secure manner each node will need an additional **Consensus Client** to
run the consensus algorithm and choose block validators, slash malicious accounts.

### Energy Efficiency

The Transition from PoW to PoS also removes the need for GPU's which will reduce the energy consumption of Ethereum by
99.95%!

::: info

Sound too good to be true? [See for yourself](https://ethereum.org/en/energy-consumption/).

:::

### Sharding

The addition of the beacon chain will allow developers to start working on scaling solutions
like [Sharding](https://ethereum.org/en/upgrades/sharding/). Sharding
will allow Ethereum to scale horizontally and allow validators to correctly verify data with only a small amount of the
network data.

