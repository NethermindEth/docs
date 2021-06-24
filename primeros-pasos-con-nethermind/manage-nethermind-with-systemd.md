# Administra Nethermind con systemd

## Crear un nuevo usuario

```text
sudo useradd -m -s /bin/bash nethermind
```

aumentar el número máximo de archivos abiertos

```text
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

Cambiar al nuevo usuario

```text
sudo su - nethermind
```

## Instalar dependencias

```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

## Obtener Nethermind

[descarga](../cliente-de-ethereum/download-sources/) el último paquete de Nethermind

```text
wget [LINUX_PACKAGE_URL]
```

extraer los archivos

```text
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

eliminar el paquete que no necesita más  **\(opcional\)** 

```text
rm [LINUX_PACKAGE_FILENAME]
```

## Administra Nethermind con systemd

Salga de la sesión como usuario `nethermind` si todavía está activa

```text
exit
```

descargar la configuración nethermind.service

```text
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

mover la configuración a la carpeta systemd

```text
sudo mv nethermind.service /etc/systemd/system/
```

recargar las configuraciones de systemd

```text
sudo systemctl daemon-reload
```

ahora puedes `start`,`stop`, `restart` Nethermind con systemd

```text
sudo service nethermind start
```

mostrar la salida actual de Nethermind **\(opcional\)** 

```text
journalctl -u nethermind -f
```

habilitar ejecución automática **\(opcional \)**

```text
sudo systemctl enable nethermind
```

