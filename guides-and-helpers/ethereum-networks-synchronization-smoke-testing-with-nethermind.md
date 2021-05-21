# Ejemplo de prueba de humo

## Intro

Una versión de software para producción a menudo incluye una serie de pruebas y pasos de compilación a lo largo del proceso de CI/CD. En este artículo, le mostraré cómo combinar el potencial de diferentes herramientas de monitoreo / construcción de infraestructura y cómo usar las pruebas de humo para sus proyectos. Tenga en cuenta que este artículo es una descripción general simple y no entrará en detalles específicos, sino que le permitirá elegir un stack de tecnología de su elección que satisfaga las necesidades de su proyecto.

Herramientas y tecnologías utilizadas en este proyecto:

* [Terraform](https://www.terraform.io/) \(to design the smoke tests infrastructure\)
* [Terragrunt](https://terragrunt.gruntwork.io/) \(to quickly deploy every module with a single command\)
* [Node.js](https://nodejs.org/en/) \(to build backend scripts for smoke tests management\)
* Bash \(para crear scripts sencillos para la gestión de la infraestructura\)
* [Svelte/Sapper](https://sapper.svelte.dev/) \(to build a handy UI and keep everything in place\)
* [Portainer ](https://www.portainer.io/)\(to manage dockers from a single point\)
* [Pushgateway/Prometheus](https://prometheus.io/)/[Grafana](https://grafana.com/) \(to consume the node's metrics and monitor them\)

En _Nethermind_, una de las pruebas centrales para verificar el correcto funcionamiento de nuestra aplicación es la prueba de sincronización con Ethereum Mainnet y muchas otras [networks](https://docs.nethermind.io/nethermind/ethereum-client/networks) actualmente soportado por _Nethermind_, como Rinkeby, Ropsten, xDai, Sokol, etc. La sincronización de un nodo Ethereum es generalmente necesaria si desea tener acceso al estado actual de la red. En mi ejemplo, probaré el método de sincronización predeterminado que es la `fast sync`, se puede encontrar más información al respecto. [aquî] (https://docs.nethermind.io/nethermind/ethereum-client/sync-modes#fast-sync).

## Componentes

Para lograr este objetivo, utilizaremos la creación de una infraestructura completa utilizando herramientas como _terraform_ y su envoltorio _terragrunt_. Cada red se probará por separado en una máquina virtual separada alojada en _DigitalOcean_ que proporciona una API muy fácil de usar. También incluiremos todo en una interfaz de usuario simple que nos permitirá administrar y monitorear el estado de nuestras pruebas de humo.

Como primer paso, crearemos carpetas que contengan archivos _terraform_ y _terragrunt_ para cada red. En su caso, puede haber algunas configuraciones diferentes de su aplicación cuyo comportamiento le gustaría probar en un entorno separado.

```text
module/
├── goerli
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── goerli_archive
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── mainnet
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── poacore
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── rinkeby
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── ropsten
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── sokol
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── sokol_archive
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
├── xdai
│   ├── main.tf
│   ├── terraform.tfvars
│   ├── terragrunt.hcl
│   └── variables.tf
└── xdai_archive
    ├── main.tf
    ├── terraform.tfvars
    ├── terragrunt.hcl
    └── variables.tf
```

En nuestros [`main.tf`] (https://gist.github.com/matilote/c1ec9955edc3c2140f6e52eb092376f8) archivos en cada una de las carpetas anteriores que describimos [digitalocean \ _droplet](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/droplet) el recurso que básicamente define el  `name, image, region, size`and y detalles de conexión que se utilizarán para conectarse y ejecutar comandos de forma remota en una máquina virtual. También hemos definido una salida que contiene una dirección IP de gotas en el momento de la creación, que se utilizará más adelante para consultar y verificar el estado de sincronización. Cada carpeta también constará de una [`terragrunt.hcl`](https://gist.github.com/matilote/18e09273b939d87235babd8e63f1d7eb), [`variables.tf`](https://gist.github.com/matilote/897bbf5ed7bf27e4f1b9dccfb0dbbb40) and `terraform.tfvars` archivos. Para obtener más información sobre cómo configurar estos archivos, consulte los enlaces a continuación:

* [https://terragrunt.gruntwork.io/docs/getting-started/configuration/](https://terragrunt.gruntwork.io/docs/getting-started/configuration/)
* [https://www.terraform.io/docs/configuration-0-11/variables.html](https://www.terraform.io/docs/configuration-0-11/variables.html)

Una vez que tengamos nuestras plantillas terraform listas, necesitaremos un script que creará toda la infraestructura para nosotros para que no tengamos que hacerlo manualmente.

En primer lugar, necesitaremos configurar archivos `terraform.tfvars` listos en cada módulo. Podemos usar el siguiente script para lograrlo automáticamente. También tiene la capacidad de pasar argumentos al script, que luego revisará todos los módulos y escribirá datos en el archivo.

```bash
#!/bin/bash
cd module/

for D in *; do
    if [ -d "${D}" ]; then
        cd "${D}/"
        cat > terraform.tfvars <<EOF 
do_token = "$1"
hostname = "$2"
pvt_key = "$3"
ssh_fingerprint = "$4"
gateway = "$5"
EOF
        cd ..
    fi
done
```

A continuación, podemos usar el siguiente script que también repasa cada módulo \ (Ethereum encadena en nuestro caso \) y configura un `TF_VAR_tag`  una variable que define la versión de la aplicación para la que se ejecutarán las pruebas de humo y luego usa el poder de _terragrunt_ para comenzar a crear máquinas virtuales con la aplicación ya configurada y en ejecución.

```bash
#!/bin/bash

echo "Running smoke tests for tag $1"
# Run tests for each instance
cd module/
for D in *; do
    if [ -d "${D}" ]; then
        cd "${D}/"
        sed -i '3s/.*/    TF_VAR_tag = "'"$1"'"/' terragrunt.hcl
        cd ..
    fi
done

# Go back to the main dir
cd ..

# Apply to terraform modules
echo "Y" | terragrunt apply-all

echo "Infrastructure created"
```

Si deseamos destruir la infraestructura podemos usar este script bash:

```bash
#!/bin/bash

echo "Finishing smoke tests for tag $1"

echo "Y" | terragrunt destroy-all

echo "Infrastructure destroyed"
```

## Aplicación de pruebas de humo definitiva

La interfaz de usuario/backend del proyecto se diseñó con _Svelte _ /_ Sapper_, javascript frameworks muy potentes para la creación de aplicaciones web. Echemos un vistazo a la interfaz de usuario.

![](../.gitbook/assets/smoke-ultimate-ui.gif)

La aplicación en sí es una aplicación simple de una sola página que contiene 5 rutas. La página principal es un dashboard simple que muestra el progreso de la sincronización de cada red. Más adelante veremos cómo cambia cuando se ejecutan las pruebas de humo. 

En la segunda pestaña, podemos configurar variables terraform, es un formulario que activará nuestro script descrito anteriormente que construye archivos`terraform.tfvars`. Esto debe ejecutarse solo una vez, ya que estos datos no cambian mucho.

La tercera pestaña se utiliza para controlar nuestra infraestructura, así como la versión actual que se está probando con humo y el punto central de nuestra aplicación que es el botón que ejecuta el verificador de sincronización \(este cambia el estado y actualiza el dashboard en la primera página\). 

La cuarta pestaña también es un formulario que guardará los datos necesarios para borrar las métricas de Pushgateway, consultando la API de Etherscan para obtener el número de bloque de cabeza actual   \(se refiere al bloque numérico actual en una cadena de bloques\) y la ruta a la clave privada que usamos en `terraform.tfvars` ya que nos conectaremos a cada VM para obtener los registros al finalizar la sincronización o cuando lo soliciten.

¡Estupendo! Ahora tenemos una descripción general del contenido de nuestra aplicación de prueba de humo. Veámoslo paso a paso y también echemos un vistazo rápido detrás de escena. 

La creación de infraestructura se puede activar con un solo botón. Aplica todas las configuraciones de _terraform_ que describimos anteriormente y prepara los contenedores de la ventana acoplable que ejecutan los nodos _Nethermind_ que también son configurado para exponer el protocolo JSON RPC y enviar métricas a nuestro panel de Grafana para que podamos controlar el rendimiento con más detalles durante la sincronización \ (se puede encontrar más información [aquí](https://docs.nethermind.io/nethermind/ethereum-client/metrics/setting-up-local-metrics-infrastracture)\).

![](../.gitbook/assets/creation-infra.gif)

Una vez que tenemos nuestra infraestructura en funcionamiento, podemos iniciar el verificador de sincronización y observar el progreso de nuestras pruebas de humo. Ejecuta el script _node.js_ que consulta sobre JSON RPC, [Etherscan](https://etherscan.io/) and [Blockscout](https://blockscout.com/poa/sokol/)

![](../.gitbook/assets/sync-checker.gif)

Cuando termine de sincronizarse, las pruebas para esta red finalizarán, los registros se recuperarán en el servidor en el que se está ejecutando la aplicación y su máquina virtual se destruirá. El estado apropiado también se mostrará en el dashboard.

![](../.gitbook/assets/image%20%2879%29.png)

En la pestaña Herramientas, también podemos ejecutar la instancia de [_Portainer_] (https://www.portainer.io/) _\ _docker ejemplo. Con \ _Portainer_ podemos administrar contenedores Docker en cada máquina, detener, reiniciar o incluso ver los registros en vivo y todo esto en un solo lugar.

![](../.gitbook/assets/portainer.gif)

![](../.gitbook/assets/image%20%2882%29.png)

![](../.gitbook/assets/image%20%2878%29.png)

Una vez que hayan pasado todas las pruebas, toda la infraestructura debe limpiarse automáticamente y luego podemos verificar los registros en el lado del servidor si es necesario, eche un vistazo al dashboard de _Grafana_ para ver cómo se desempeñó la aplicación durante la prueba.

![](../.gitbook/assets/image%20%2877%29.png)

Si algo sale mal y una o más cadenas no se sincronizan correctamente, podemos descargar rápidamente los registros de la pestaña Herramientas para una mayor investigación,  destruir la infraestructura desde el Panel de control y borrar los registros de métricas de Pushgateway después de que averigüemos los puntos de interrupción.

## Resumen

Hay muchas herramientas útiles que puede utilizar para aprovechar el poder de la implementación rápida y el monitoreo de sus aplicaciones en las etapas previas al lanzamiento. Las herramientas utilizadas en este proyecto fueron una combinación de diferentes proyectos que estoy usando de forma regular, como [este] (https://docs.nethermind.io/nethermind/guides-and-helpers/deploy-nethermind-with-monitoring-stack). Usé _DigitalOcean_ como el proveedor de _terraform_ en nuestro caso, obviamente, puede elegir una de sus opciones, p. _UpCloud, Google, _ o _AWS_.

Lo más desafiante fue diseñar un script que verificara adecuadamente las etapas de sincronización de cada cadena. Sin embargo, esto fue posible gracias a que _node.js_ y _Svelte / Sapper_ nos dieron la capacidad de mostrar estas etapas en vivo en el dashboard. Todo esto no sería tan útil si no hubiéramos podido ver lo que realmente está sucediendo en nuestros nodos, y aquí es donde brillan las herramientas de monitoreo, al permitir la posibilidad de ver registros en vivo desde un solo punto en una web y el rendimiento de la aplicación y el estado de sincronización en los dashboards designados de _Grafana_.

Tener la interfaz de usuario no es obligatorio, ya que todo se puede ejecutar también a través de scripts escritos en el idioma con el que se sienta cómodo. Todavía nos falta una cosa en este proyecto y ese es el sistema de alerta adecuado que nos informará cuando algo salga mal en el backend y que luego podamos usar para mantenernos notificados a través de _Slack, _ e-mails, \ _ \ _ o incluso llamadas telefónicas.

