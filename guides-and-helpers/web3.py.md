# Web3.py

**web3.py**（python web3.js 实现）可以用来连接到 Nethermind 节点。您需要根据以下指南来安装 `web3.py`：

* [https://github.com/ethereum/web3.py](https://github.com/ethereum/web3.py)
* [https://web3py.readthedocs.io/en/stable/quickstart.html](https://web3py.readthedocs.io/en/stable/quickstart.html)

您可以使用以下脚本来检查您的节点连接情况。请确保您已启用 JSON RPC 模块，这可以通过将标记 `--JsonRpc.Enabled true` 传递给 Nethermind.Launcher 或 Nethermind.Runner 来完成。

```python
from web3.auto import w3

connected = w3.isConnected()
print(connected)

if connected and w3.clientVersion.startswith('Nethermind'):
    client = w3.clientVersion
    print(client)

else:
    client = None
    print(client)
```

您将看到以下输出（这取决于节点版本）：

```bash
True
Nethermind/v1.4.8-13-5c66dcdf6-20200120/X64-Linux 5.3.2-050302-generic/Core3.1.1
```

