# This is a Title

## Pasos realizados para hacer esto:
(Usando comandos para Ubuntu/Linux)
1. Abrir la terminal y crear una carpeta con: `mkdir folder`.
2. Entrar en la carpeta con el comando: `cd folder`.
3. Inicializar un repositorio local con git: `git init`.
4. Creamos un archivo *.gitignore* con: `touch .gitignore`.
5. Creamos un archivo *README.md* con: `touch .gitignore`.
6. Agregamos un titulo con *Markdown* en el archivo *README.md* con algun editor de texto, en este caso utilizo neovim: `nvim README.md` e ingresamos: ```# This is a Title``` (Para salir de neovim hay que apretar escape y poner `wq` para guardar los cambios y salir).
7. Agregamos los archivos a *Stage* con `git add .` y hacemos *commit* con `git commit -m "mensaje del commit."`. Esto tambien puede hacerse en un solo comando: `git commit -am "Mensaje del commit.` (Agregamos los archivos al *Stage* y lo "Commiteamos"). Remarcar que comunmente se hace commit por cada archivo por separado para que se sepa bien la razon del commit. En esta ocacion uso `git add .` y subo todo en un solo commit por temas practicos.

---

## Preguntas anteriores y respuestas:
### ¿Qué es un *DNS*?
-  Domain Name Stystem o Sistema de Nombres de Dominio.
-  Es el "directorio telefonico de Internet". El DNS traduce los nombres de dominio a direcciones IP para que los navegadores puedan cargar los recursos de Internet.
---
### ¿Qué es una *IP*?
- Internet Protocol o Protocolo de Internet.
- Es un conjunto de reglas para la comunicacion a traves de Internet, ya sea el envio de correo electronico, la transmision de video o la conexion a un sitio web.
- (Direccion IP: identifica una red o dispositivo en Internet.)
---
### ¿Qué es *ISP*?
- *Internet Service Provider* o *Proveedor de Servicios de Internet*
- Un ISP es una organizacion que provee diferentes servicios para acceder, usar o participar en el Internet.
---
### ¿Cuáles son las diferencias entre *Frontend* y *Backend*?
- *Frontend* se refiere a la interfaz con la que el usuario interactua.
- Backend significa el servidor, aplicacion y base de datos que trabaja detras de la interfaz para entregar la informacion al usuario.
---
### ¿Qué lenguajes son mas comunes en *Frontend* y *Backend*?
* *Frontend:*
    * HTML, CSS y Javascript

* *Backend*:
    * Javascript, Python, Java y PHP
---
### ¿Hay algún lenguaje que sea utilizable en ambos entornos?
- Si, Javascript se puede utilizar tanto en el lado de *Frontend* como el de *Backend*
---
### ¿Qué comando se utiliza para *crear directorios*?
  * Windows/Linux:
    * `mkdir`
---
### ¿Cuál es el comando para *ingresar o salir de un directorio*?
 * Windows/Linux:
   * Ingresar: `cd nombredirectorio`
   * Salir: `cd ../`
---
### ¿Cuál es el comando para *crear archivos*?
  * Windows:
    * `cat > archivo.txt`

  * Linux:
      * `touch archivo.txt`
---
### ¿Cuál es el comando para *borrar el historial de comando ejecutados*?
  * Windows: 
    * `doskey /listsize=0`
  * Linux (ingresar comando uno despues del otro):
    * `history -c`
    * `history -w`
---
### ¿Cuál es el comando para *listar archivos y carpetas* de la ubicacion actual?
  * Windows:
    * `dir`
  * Linux:
    * `ls`
