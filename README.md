# NFT Shop

## cross-env

Usuarios de Windows: Instalar la dependencia `cross-env` con npm y agregar en los script antes de los 'NODE_ENV=...' lo siguiente: `cross-env`
Ejemplo:
```json
    "dev": "cross-env NODE_ENV=development nodemon index.js",
    "start": "cross-env NODE_END=production node index.js",
```
De esta manera no van a tener errores a la hora de ejecutar los comandos

## Comandos npm

- `npm run server` : Inicia el servidor en el puerto configurado en el archivo `.env`.

- `npm run dev` : Inicia el servidor con nodemon para development en el puerto configurado en el archivo `.env`.

- `npm run build` : Corre Webpack en modo `production` y transpila los archivos TypeScript a Javascript en un archivo en `public/scripts/bundle.js`.

- `npm run watch` : Inicia Webpack en modo `watch` para development.

- `npm run test` : Inicia los test con Jest.

- `npm run node-sv` : Inicia con nodemon el ejercicio de la semana 6.
