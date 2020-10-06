# Primera Práctica

## Instrucciones iniciales

Los repositorios han de ser creados en *GitHub.com* **antes** de subirlos mediante la consola.

El directorio *DOC*, contiene información de las herramientas utilizadas (obtención, instalación y uso).

El directorio *SRC*, contiene archivos de las prácticas realizadas.


## Teoría

Analizemos la siguiente línea de código para conocer su significado:

db.coleccion01.insertOne({x: 'Hola mundo'})

-db: hace referencia a la base de datos que estemos usando en el momento de introducir el código, como predeterminado esa base de datos es *test*.

-coleccion01: hace referencia a la colección que estemos usando, de no existir, se creará automáticamente.

-insertOne: indica que se va ha introducir **un solo documento**, es decir, el que aparece dentro de los paréntesis.

-{x: 'Hola mundo'}: es el documento a introducir.
    ·x: es el nombre de un campo.
    ·Hola mundo: es el valor alfanumérico asignado a un campo.

Si vamos a insertar **más de un campo**, añadimos una `,` añadimos campos y valores.

Si vamos a in sertar **más de un documento**, el código queda de esta forma:

db.coleccion01.insertMany([
    {a: 'Inicio de un insertMany'},
    {s: 'Fin de un insertMany'}])

-db: hace referencia a la base de datos que estemos usando en el momento de introducir el código, como predeterminado esa base de datos es *test*.

-coleccion01: hace referencia a la colección que estemos usando, de no existir, se creará automáticamente.

-insertMany: indica que se va ha introducir **más de un documento**, por eso, es necesario añadir `[]`, el de apertura antes de las llaves del primer documento, y el de cierre tras el último.

## Comienzo

Partiendo desde nuestro documento de prácticas, abrimos un terminal para trabajar.

En el terminal veremos un directorio, ahí es donde MongoDB leerá los archivos que le carguemos, por eso, debemos cambiar de directorio a *SRC* (realmente no es necesario, ya que se le podrá indicar dónde está el archivo a cargar mediante rutas relativas o absolutas, pero resulta más cómodo).
A continuación iniciaremos la interfaz Mongo escribiendo `mongo` en el terminal, nos situaremos en una base de datos usando `use ___` poniendo el nombre deseado en el espacio en blanco, por ejemplo *0010_practice* (si todo sale bien, la siguiente línea dirá *switched to db 0010_practice*).
Ahora cargamos al archivo deseado mediante `load("___")`, escribiendo el nombre del archivo en el espacio en blanco, por ejemplo *Practice01.js* (si todo sale bien, la siguiente línea dirá *true*).

