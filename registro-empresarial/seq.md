---
description: >-
  Nethermind soporta los clientes a traves del monitoreo de sus nodos de
  Ethereum con utiles herremientas como Grafana or Seq
---

# Seq

Con [Seq](https://datalust.co/seq) puedes rápidamente identificar y diagnosticar los problemas con tus nodos Nethermind. Puedes configurar los dashboards para monitorear el comportamiento del nodo y también enviar alertas cada vez que ocurran errores críticos. Con la ayuda del registro NLog, los registros de la aplicación son enviados a una instancia de Seq para permitir su monitoreo. Puedes buscar fácilmente a través de los eventos simplemente escribiendo consultas SQL.

Los clientes pueden confiar el monitoreo y el soporte de los nodos a nosotros o configurar su propio dashboard y herramientas Seq. El equipo de Nethermind puede usar los Seq dashboards y alertas para abordar rápidamente cualquier problema de producción e interrupciones.

## Dashboards y Alertas

En Seq podemos visualizar los datos de los eventos con gráficos simples. Son muy útiles cuando se trata de alertar al equipo cuando ocurre algo malo con los nodos.

![](https://nethermind.readthedocs.io/en/latest/_images/seq-dashboard1.png)

La alerta está configurada para activarse cuando el nodo Validador se detiene de sellar bloques en una ventana de medición específica.

![](https://nethermind.readthedocs.io/en/latest/_images/seq-alerts.png)

La alerta es envíada a nuestra instancia de \[OpsGenie\] \([https://www.atlassian.com/software/opsgenie](https://www.atlassian.com/software/opsgenie)\) a través del servidor SMTP configurado a través de una de las aplicaciones que son plug-ins que procesan eventos y alertas, o ingieren eventos de una fuente externa. Hay muchos de ellos creados y proporcionados por la comunidad. En nuestro ejemplo usamos un `Email +` 2.0.92 proporcionado por Datalust y Contribuidores.

![](https://nethermind.readthedocs.io/en/latest/_images/seq-email.png)

Cuando la alerta alcanza a OpsGenie, notificaciones telefónicas son enviadas a nuestros equipos de llamadas.

![](https://nethermind.readthedocs.io/en/latest/_images/opsgenie.png)

También podemos verlos en un organizado formato HTML que también se puede configurar en Seq.

![](https://nethermind.readthedocs.io/en/latest/_images/alert-message.png)

## Logs

Con el poder del registro estructurado, podemos verificar rápidamente la fuente de un evento. Es útil para diagnosticar problemas con los nodos de Ethereum, podemos verificar la fuente de un error en un segundo. Es muy fácil crear algunos filtros y consultas que se pueden reutilizar.

![](https://nethermind.readthedocs.io/en/latest/_images/seq-logs.png)

## Consultas SQL

El lenguaje más popular de consulta de base de datos se puede utilizar para consultar los registros de la aplicación.

![](https://nethermind.readthedocs.io/en/latest/_images/seq-sql.png)

