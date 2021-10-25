pablo_alonso_compartido

Usuarios de Windows: Instalar la dependencia `cross-env` con npm y agregar en los script antes de los 'NODE_ENV=...' lo siguiente: `cross-env`
Ejemplo:
```json
    "dev": "cross-env NODE_ENV=development nodemon index.js",
    "start": "cross-env NODE_END=production node index.js",
```
De esta manera no van a tener errores a la hora de ejecutar los comandos
