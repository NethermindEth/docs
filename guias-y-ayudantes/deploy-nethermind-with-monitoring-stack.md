---
description: >-
  Receta para una implementación terraform rápida y fácil de la stack de
  Monitoreo y Cliente Nethermind (Grafana/Prometheus/Seq)
---

# Implementar Nethermind con el stack de monitoreo

El siguiente tutorial lo guiará a través de la implementación del nodo Nethermind junto con el stack de monitoreo completa que consiste en:

* Grafana con un hermoso dashboard precargado para monitorear el rendimiento de su nodo Nethermind
* Prometheus/Pushgateway para extraer y enviar métricas generadas por el cliente Nethermind
* Seq para tener una vista fácil y consultable de los registros de clientes de Nethermind

## Prerrequisitos

* [x] [Terraform v0.12.7](https://www.terraform.io/downloads.html) &lt; 
* [x] [Proveedores de la nube](cloud-providers/) \(in this tutorial we will be using **Digital Ocean**, the terraform recipe can be configured to use any other provider of your choice UpCloud/AWS/Google etc.\)

## 🛠 Configuración

En primer lugar, descarguemos el repositorio con los archivos necesarios.

```text
git clone https://github.com/NethermindEth/terraform-nethermind
```

Pasemos al directorio clonado

```text
cd terraform-nethermind/
```

Crear un archivo `terraform.tfvars` y agregue estas 2 variables

{% tabs %}
{% tab title="terraform.tfvars" %}
```bash
do_token = "Your DigitalOcean token goes here"
pvt_key = "path/to/your/private_ssh_key"
```
{% endtab %}
{% endtabs %}

Asegúrese de que la variable `public_key` en el archivo`main.tf` apunte a la ruta de su llave pública

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

### ¿Cómo obtener esas variables?  \([omitir esta parte](deploy-nethermind-with-monitoring-stack.md#run-the-stack) si ya lo sabes\)

#### do\_token

Se puede generar en el panel de DigitalOcean. Primero vaya a la gestión de **API** \(parte inferior del panel de navegación izquierdo \)

![](../.gitbook/assets/image%20%2843%29.png)

Haga clic en el botón `Generar token nuevo`

![](../.gitbook/assets/image%20%2847%29.png)

Dale un nombre y genera

![](../.gitbook/assets/image%20%2842%29.png)

Copie el token y colóquelo en su lugar en el archivo `terraform.tfvars`

#### pvt\_key

Genere la llave ssh, usaremos el algoritmo **ed25519** en nuestro ejemplo

```bash
ssh-keygen -t ed25519 -a 100 -f private.key
```

`pvt_key` la variable ahora se verá así:

```bash
pvt_key = "./private.key"
```

## Ejecutando el stack

Confirme que terraform se puede inicializar, ejecute este comando desde el directorio terraform-templates

```bash
terraform init
```

Debería ver una luz verde en su consola

![](../.gitbook/assets/image%20%2850%29.png)

Hagamos una vista previa de nuestro plan antes de solicitarlo y guárdelo para que pueda usarse en el futuro.

```bash
terraform plan -out myplan
```

Ahora puede proporcionar alguna configuración básica a su VM/Nethermind Node

![](../.gitbook/assets/image%20%2855%29.png)

Puede encontrar una lista de `configs` disponibles \[aquí\] \(../ ethereum-client / networks.md\)

{% hint style="warning" %}
🧯 If you chose to enable JsonRpc \(it will run on port `8545` by default\) make sure that you set up [Firewall rules](../primeros-pasos-con-nethermind/firewall-configuration.md) either in DigitalOcean or by using Linux `iptables`
{% endhint %}

Apliquemos nuestro plan y comencemos a implementar toda el stack \(no debería tomar más de 3 minutos\)

```bash
terraform apply myplan
```

Espere hasta que terraform termine de desplegarse y si todo salió bien, debería ver

![](../.gitbook/assets/image%20%2854%29.png)

## Explorando el stack

Toma la IP de tu nuevo Droplet desde el panel de DigitalOcean

![](../.gitbook/assets/image%20%2852%29.png)

### Dashboard de Grafana

Vaya al `YOUR_DROPLET_IP:3000`

Inicie sesión en Grafana con las credenciales `admin:admin` y cambie la contraseña si lo desea

![](../.gitbook/assets/image%20%2841%29.png)

Vaya al endpoint `YOUR_DROPLET_IP:3000/dashboards`

![](../.gitbook/assets/image%20%2840%29.png)

Haga clic en el Dashboard de  **Nethermind**  y deberías ver gráficos con métricas de Nethermind

![](../.gitbook/assets/image%20%2848%29.png)

### Prometheus

Vaya a `YOUR_DROPLET_IP:9090`

Explore las métricas de Nethermind, visualice y analice utilizando la sintaxis de prometheus, puede encontrar una lista de métricas disponibles con sus descripciones aquí:

{% page-ref page="../cliente-de-ethereum/metrics/" %}

![](../.gitbook/assets/image%20%2851%29.png)

### Pushgateway

Vaya a `YOUR_DROPLET_IP:9091` y verifique si las métricas están entrando

![](../.gitbook/assets/image%20%2849%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29%20%284%29.png)

### Seq

Vaya a `YOUR_DROPLET_IP:5341`, podrá consultar los registros de su cliente Nethermind. Siéntase libre de crear algunas `Signals, Queries` o `Dashboards` útiles.

![](../.gitbook/assets/image%20%2839%29%20%282%29%20%283%29%20%283%29.png)

## Destruyendo el stack

Utilice el siguiente comando para destruir su stack terraform  \(necesitaremos proporcionar variables, pueden ser aleatorias, una vez más, ya que no hemos establecido ningún valor predeterminado para ellas. Con suerte, cambiará en el futuro.\)

```bash
terraform destroy --auto-approve
```

