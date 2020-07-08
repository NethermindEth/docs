# Web3.py

连接到Nethermind节点，可以使用**web3.py**\(python web3.js 实现\). 通过以下指南安装 `web3.py`：

* [https://github.com/ethereum/web3.py](https://github.com/ethereum/web3.py)
* [https://web3py.readthedocs.io/en/stable/quickstart.html](https://web3py.readthedocs.io/en/stable/quickstart.html)

来检查连接设置，可以使用以下脚本。 请确保已启用JSON RPC模块，（通过将标记`--JsonRpc.Enabled true`  传递给Nethermind.Launcher或Nethermind.Runner来完成。）

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

取决于节点版本，您应该看到以下输出

```bash
True
Nethermind/v1.4.8-13-5c66dcdf6-20200120/X64-Linux 5.3.2-050302-generic/Core3.1.1
```

