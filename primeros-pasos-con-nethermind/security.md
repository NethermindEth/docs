---
description: >-
  Medidas de seguridad que deben tomarse antes de ejecutar Nethermind Node en
  Ethereum Mainnet
---

# Seguridad

{% hint style="danger" %}
📢  **NO use** cartera de Nethermind / firmantes de Nethermind para el manejo de ETH en el mainnet!
{% endhint %}

{% hint style="danger" %}
📢 Endpoint JSON RPC \( puerto`8545`\) **NO** debe exponerse públicamente \(debe estar detrás del firewall\).
{% endhint %}

{% hint style="danger" %}
📢 La llave privada de la que se deriva el ID de nodo se almacena en el disco \( **NO** protegido por contraseña\).
{% endhint %}

{% hint style="warning" %}
Nethermind se prueba a fondo, pero cuanto más popular se vuelve, más probable es que sea el objetivo de ataques específicos del cliente. Por lo general, siempre debe considerar la ejecución de nodos de cliente de respaldo implementados por un equipo diferente para cualquier operación crítica.
{% endhint %}

{% hint style="info" %}
Para firmas que no pertenecen a la red principal, puede usar configuraciones de cartera dev.
{% endhint %}

