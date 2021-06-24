# Web3.py

Es posible conectarse al nodo Nethermind usando **web3.py** \(implementación de python web3.js\). Necesitarás tener `web3.py` instalado utilizando las siguientes guías:

* [https://github.com/ethereum/web3.py](https://github.com/ethereum/web3.py)
* [https://web3py.readthedocs.io/en/stable/quickstart.html](https://web3py.readthedocs.io/en/stable/quickstart.html)

Puedes usar el siguiente script para verificar su conexión. Asegúrate de haber habilitado el módulo JSON RPC, esto se puede hacer pasando la bandera `--JsonRpc.Enabled true` a cualquiera Nethermind.Launcher o Nethermind.Runner

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

Debería ver el siguiente resultado \(depende de la versión del nodo\):

```bash
True
Nethermind/v1.4.8-13-5c66dcdf6-20200120/X64-Linux 5.3.2-050302-generic/Core3.1.1
```

