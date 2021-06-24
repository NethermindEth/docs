# Beam Wallet

## Descripción

Beam Wallet es una prueba de concepto Ethereum Wallet con una interfaz de usuario de consola que permite a los usuarios aprovechar el poder del beam sync. Beam Wallet se ejecuta sin dependencias externas \(inicia automáticamente un nodo Nethermind en segundo plano\) y permite verificar los saldos de las cuentas y realizar transacciones simples en mainnet solo 5 minutos después del lanzamiento.

## Descarga y ejecuta

Puede encontrar el Beam wallet \(que se incluye en el paquete estándar de Nethermind\) **aquí**: [https://downloads.nethermind.io/](https://downloads.nethermind.io/).

Seleccione el paquete apropiado según el sistema operativo y descárguelo.

### **Prerrequisitos**

#### Linux

#### **- Ubuntu**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_Probado en Ubuntu 20.04 LTS and 18.04 LTS_

#### **- Debian**

```text
# Activate Microsoft repository
wget https://packages.microsoft.com/config/debian/$(lsb_release -rs | cut -d. -f1)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo apt install -y ./packages-microsoft-prod.deb apt-transport-https && sudo apt update

# Install dependencies
sudo apt install -y dotnet-sdk-3.1 libsnappy-dev libc6-dev libc6
```

_Probado en Debian 10 \(9 no funciona\)_

#### **- CentOS**

```text
# Install dependencies
sudo yum install --enablerepo=PowerTools -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so 
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_Probado en CentOS 8_

#### **- Fedora**

```text
# Install dependencies
sudo dnf install -y dotnet-sdk-3.1 gcc snappy-devel glibc-devel bzip2-devel libzstd

# Link libraries
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

_Probado en Fedora 32_

#### Mac

* instalar deps `brew install gmp snappy lz4 zstd`
* Además, si tiene problemas con el inicio corre este comando `brew install rocksdb`

## Aplicación en ejecución

Para ejecutar la aplicación, abra el archivo **Nethermind.BeamWallet**.

{% hint style="warning" %}
**Mac**

Si su sistema operativo es macOS, se le pedirá que **Permita el acceso** en sus  **Preferencias del sistema-&gt;Security & Privacy,** dos veces: para Nethermind.BeamWallet y Nethermind.Runner.
{% endhint %}

Después de iniciar la aplicación, debería poder ver esta ventana:

\(Los colores de la aplicación pueden variar de los que se muestran en las imágenes; depende de la configuración de la línea de comandos.\)

* El primer paso es seleccionar una red.

![](../.gitbook/assets/image%20%28129%29.png)

* Luego elija una de las dos opciones **Create new account** o **Provide an address** usando la tecla TAB o las flechas hacia arriba y hacia abajo.

![](../.gitbook/assets/image%20%28131%29.png)

### Ya tienes una cuenta

Si ya tienes una cuenta, puede usarla seleccionando la opción **Provide an address**; en ese caso, necesitará:

* **your address**
* **your passphrase**
* **your keystore file**

{% hint style="warning" %}
**Copia el archivo keystore**

Antes de comenzar, copie el archivo keystore de su cartera en la carpeta **keystore**.  \(el directorio de la carpeta del almacén de claves se mostrará en la imagen siguiente\). Es necesario desbloquear correctamente su cuenta antes de enviar la transacción. De lo contrario, fallará el desbloqueo de su cuenta.
{% endhint %}

### **Crear una nueva cuenta**

Si no tienes una cuenta, puedes crear una usando la aplicación **Beam wallet**.

Crear una nueva cuenta crea un archivo keystore. Puede encontrarlo en la carpeta **keystore**.

Copie su archivo de keystore si desea utilizar una cuenta en el futuro.

![](../.gitbook/assets/image%20%28118%29%20%281%29%20%281%29%20%281%29.png)

### Establece una dirección

{% tabs %}
{% tab title="Create new account" %}
* Cree una cuenta proporcionando el passphrase en la primera entrada y el passphrase de confirmación en la segunda.

![](../.gitbook/assets/image%20%28117%29%20%282%29%20%283%29%20%283%29%20%282%29%20%282%29.png)

{% hint style="warning" %}
**Passphrase**

**Mantenerla segura**

No pierda su passphrase. No tenemos acceso a su frase de passphrase, por lo que no hay posibilidad de recuperarla.

**No lo compartas**

Nunca le dé su passphrase a nadie. Sus fondos pueden ser robados.

**Escríbelo**

Establezca una frase de contraseña segura. Recomendamos escribirlo en un papel. Si pierde su contraseña, no podremos ayudarlo. Todo tu dinero se habrá ido.
{% endhint %}

* Con la tecla TAB, muévase al botón **OK**  y presione Enter.
{% endtab %}

{% tab title="Provide an address" %}
* Después de elegir la opción "Provide an address", verá esa ventana. Proporcione la dirección de su cartera.

![](../.gitbook/assets/image%20%28107%29.png)

* Con la tecla TAB, muévase al botón **OK** y presione Enter.

![](../.gitbook/assets/image%20%28100%29.png)
{% endtab %}
{% endtabs %}

### Sincronizando

* Después de un rato, la leyenda "Syncing ... Please wait for the balance.". debería cambiar al saldo de su cartera y también aparecerán los botones **BACK** y **TRANSFER**.

![](../.gitbook/assets/image%20%28124%29.png)

* Lo primero es tu saldo ETH. Si no está interesado en el saldo de sus tokens \(DAI, USDT, USDC\),puedes omitirlo y continuar con la transferencia.

![](../.gitbook/assets/image%20%28132%29.png)

![](../.gitbook/assets/image%20%28121%29.png)

* Use la tecla TAB, vaya al botón **TRANSFER** y presione Enter.

## Realizando una transacción

Veras una ventana diferente donde puede proporcionar datos para realizar una transferencia.

* En la primera entrada proporcione el **address** a la que desea enviar ETH.
* En la entrada a continuación, ingrese el  **valor**  de ETH que desea transferir.
* Y en la última entrada ingrese su **passphrase** de su cartera.
* Vaya al botón **TRANSFER** y presione ENTER.  \(Este no es el último paso, se le pedirá que confirme la transacción.\)

![](../.gitbook/assets/image%20%28122%29.png)

\(Datos de ejemplo\)

![](../.gitbook/assets/image%20%28116%29.png)

* Después de presionar Enter en el botón **Transfer**, aparecerá un modal con un resumen de la transacción. Confirme \(o no\) el envío de la transacción.

![](../.gitbook/assets/image%20%28130%29.png)

* Los pasos que se seguirán para enviar la transacción se enumerarán a continuación.

![](../.gitbook/assets/image%20%28126%29.png)

## Base de datos

Puede encontrar la base de datos en la carpeta **nethermind \_db**  en el paquete descargado:

![](../.gitbook/assets/image%20%28113%29.png)

En el directorio **nethermind \_db**  encontrará carpetas con redes que se ejecutaron utilizando el paquete Netherming.

Elige el que más te interese.

![](../.gitbook/assets/image%20%28110%29.png)

Dentro encontrará carpetas de ejemplo:

![](../.gitbook/assets/image%20%28108%29.png)

