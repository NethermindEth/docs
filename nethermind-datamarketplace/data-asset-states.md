# Estados de activos de datos

## Transiciones de estado válidas

* Sin publicar a publicado 
* Publicado bajo mantenimiento
* En mantenimiento a publicado
* Published to Closed

### Estados finales:

* Cerrado

### Visibilidad para los consumidores:

* No publicado - no visible
* Publicado - visible
* En mantenimiento - visible
* Cerrado: visible solo si el usuario ha realizado depósitos en el pasado

### Capacidad para realizar depósitos por parte del consumidor

* No publicado - no es posible
* Publicado - posible
* Bajo mantenimiento - posible
* Cerrado - no es posible

### Capacidad de iniciar una sesión por consumidor

* No publicado - no es posible
* Publicado - posible
* En mantenimiento - no es posible
* Cerrado - no es posible

