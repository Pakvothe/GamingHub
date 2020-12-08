### Flow

##### Antes de empezar cualquier daily:

-  Parado en **'dev'**: `git pull`, para traer los ultimos cambios.
-  Crear branch para la nueva tarea: `git checkout -b 'nombre'`.
-  Trabajar normalmente sobre la nueva rama
-  Pushear a la nueva rama.
-  Pedir pull request a **'dev'** el cual tienen que aceptar al menos dos personas.
-  En el caso de que haya pasado mucho tiempo desde que se empezo la tarea o si otra persona hizo un PullRequest :

```sh
$ git checkout dev
$ git pull
```

> Esto es para mantener tu dev actualizado al último cambio.

-  Despues de algun cambio **importante** o de un avance importante en el proyecto pullear los cambios (ya testeados) de **'dev'** a **'master'**, esto se hace con todo el grupo de trabajo presente.
-  Borrar los comentarios de los archivos en **'master'**

### Branches

-  Idioma de nombres: **Inglés**.
-  Formato de nombres : `'descripcion'-'version/id'` .
   > Ejemplo: `$ git checkout -b bugfix-0.1`
-  Usar nombres _descriptivos_ (recordar que cualquiera puede acceder a los nombres de los commits).
-  `CUIDADO CON LA MASTER!`

# Sintáxis y Código

### Identación

-  Antes de pushear cualquier cambio asegurarse de que el codigo este identado con el estandar elegido por el grupo.

> Para identar el código vamos a usar el plugin **'Prettier'** con las siguientes configuraciones:

```sh
	"prettier.useTabs": true,
	"prettier.tabWidth": 3,
	"noSemi": true,
	"prettier.singleQuote": true
	"printWidth": 80,
	"trailingComma": "none",
	"jsxBracketSameLine": false,
```

> 'En VSCode se puede configurar todo esto desde las configuraciones del plugin, o se puede crear un archivo a parte con estos comandos'.

### Scaffolding

-  **Idioma**: Inglés.
-  **Carpetas**: Todo en **snake_case**.
-  **Archivos**: Siempre con **snake_case** (excepciones react components, etc..).

### Code Syntax

-  **Idioma**: Inglés.
-  Funciones, variables y modelado en **camelCase**, costantes fijas en **UPPERCASE** y **Snake_Case** (puede haber excepciones, por ejemplo redux actions)
-  Utilizar nombres **descriptivos** para las variables.
-  No usar tildes ni caracteres especiales.
-  **Comentar** el código de forma descriptiva y concisa con la menor cantidad de palabras posible, ya que todos vamos a tener que leer los comentarios de los otros.
-  **Comentar** el código de forma descriptiva y concisa con la menor cantidad de palabras posible, ya que todos vamos a tener que leer los comentarios de los otros.
