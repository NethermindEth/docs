# Docker

### Download Docker Image

{% embed url="https://hub.docker.com/r/nethermind/nethermind" %}

To download the latest Debian biased Nethermind image run the following command.

```bash
docker pull nethermind/nethermind
```

If you are looking for a specific release you can add the version number as a tag and docker will pull the correct image. Ex. _"I want the Nethermind 1.13.4 Image"_

```
docker pull nethermind/nethermind:1.13.4
```

:::info
Currently Nethermind only supports images for **AMD64** and **ARM64** CPU architectures.
:::

### Building Docker Image

You are also able to build Docker images from source. The Dockerfile can be found in the repository root and it currently uses the power of multi-arch builds:

First you will need to clone the Nethermind repo and enter the nethermind directory.

```
git clone https://github.com/NethermindEth/nethermind.git --recursive
cd nethermind
```

Then run the build command:

```bash
docker buildx build --platform=linux/amd64 -t nethermind .
```

Finally run the following command to see if your image was built correctly:

```bash
docker run -it nethermind --config goerli
```

Follow the link for more information on running your node with Docker.

{% content-ref url="../ethereum-client/docker.md" %}
[docker.md](../ethereum-client/docker.md)
{% endcontent-ref %}
