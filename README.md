# Data Lovers - Proyecto Pokémon

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios que cumple el proyecto](#4-criterios-que-cumple-el-proyecto)
* [5. Checklis](#5-checklis)
* [6. Autoras](#6-autoras)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

Este proyecto consta de la creción de **una _página web_ para visualizar un
_conjunto (set) de datos de 251 pokemones_**, personajes de la conocida serie y juego Pokémon GO!

Esta página web otorgará a los usuarios una interfaz de facil acceso donde 
puedan **visualizar la data de los pokemones,filtrarla, ordenarla y conocer 
el top 10 de pokemones más altos y pesados**; con el objetivo de dar un soporte en sus 
necesidades a aquellos usuarios del juego mundialmente conocido:[Pokémon GO](http://pokemongolive.com).

## 3. Objetivos de aprendizaje

En la construcción de este proyecto se cumplieron ciertos requisitos para 
dar al usuario un producto correctamente definido entendiendo lo necesita.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [x] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [x] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [x] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [x] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [x] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [x] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.


## 4. Criterios que cumple el proyecto

Los criterios del proyecto son:

### Definición del producto

El proyecto fue diseñado con la visión de que sea un soporte y/o una herramienta
funcional para usuarios del juego digital [Pokémon GO](http://pokemongolive.com); 
este juego incita al usuario a atrapar la mayor cantidad y mejor calidad de pokémon 
para que posteriormente estos personajes se batan a duelo con los pokémon de otros 
usuarios; para que los usuarios puedan ganar esas batallas, necesitan conocer las 
características de los pokemón y elegir bien a sus personajes. Este aplicativo web ayuda
a estos usuarios a obtener de manera casi instantánea y sencilla las diferentes 
características de cada uno de los 251 pokémon que ellos necesitan.

El proyecto cumple con las siguientes características:
* [x] Permite acceder a la lista de los 251 pokemones en órden, mostrando el número, 
      el nombre y la imagen del pokémon.
* [x] Permite tener acceso a las características más específicas de cada pokémon.
* [x] Permite ordenar numérica y alfabéticamente la información de los pokémon (asc. y descendente).
* [x] Permite filtrar los pokémon de acuerdo a su tipo.
* [x] Otorga información sobre los 10 pokémon más altos y más pesados.

### Historias de usuario

Realizamos 3 historias de usuario:

En la primera historia de Usuario definimos como usuario a aquel jugador aficionado de Pokémon GO! :

![H1](https://user-images.githubusercontent.com/85121220/126589940-73312280-bd3a-43aa-8825-67fabe608056.PNG)

En la segunda historia de usuario definimos al jugador junior de Pokémon GO! como usuario final, 
donde tendrá acceso a las características de cada pokémon:

![H2](https://user-images.githubusercontent.com/85121220/126590327-28215749-5e60-45c6-be7f-4e4399fd936c.PNG)

En la tercera historia de usuario el jugador intermedio de Pokémon GO! es el usuario final, 
donde contará con la herramienta de filtrado por tipos y podrá ordenarlos de acuerdo a diferentes opciones:

![H3](https://user-images.githubusercontent.com/85121220/126590536-b5d4bd93-c47c-462f-9186-19d8b26c023b.PNG)


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Realizamos un boceto inicial para aterrizar la idea del proyecto: 

![image](https://user-images.githubusercontent.com/85120257/126593538-70b50dc7-3d5b-4224-af3c-c476edb3ea66.png)

![image](https://user-images.githubusercontent.com/85120257/126593547-3d178524-77f1-4efc-bbf0-e40e4346014a.png)

![image](https://user-images.githubusercontent.com/85120257/126593556-7c5949be-94de-44b2-812a-116a6681443a.png)

#### Prototipo de alta fidelidad y testeos de usabilidad

Posteriormente desarrollamos los [prototipos de alta fidelidad](https://www.figma.com/file/EV9ZdxjgjUdFL8ihJZSHn5/Pokem%C3%B3n?node-id=0%3A1) para cada una de las 
pantallas a mostrar: 

En esta imagen visualizamos la pantalla de bienvenida con la lista de los 251 pokemones:

![Prototipo1](https://user-images.githubusercontent.com/85121220/126590719-7147ebed-dc9d-4874-9948-273d7c423b3c.PNG)

En la siguiente imagen se puede observar las caracteristicas del pokémon elegido:

![Prototipo2](https://user-images.githubusercontent.com/85121220/126590736-813fc3a9-1a8c-4343-865a-24869ad655dd.PNG)

Esta imagen muestra la lista desplegable que habíamos diseñado inicialmente:

![Prototipo3](https://user-images.githubusercontent.com/85121220/126590756-4886af1f-1650-4bb1-a8ac-282b3e496b9a.PNG)

Posteriormente a través de los diferentes testeos de usabilidad que se realizaron,
descubrimos que era necesario que las opciones de filtrado debían ser separadas y los 
links importantes debian ser incluídos en un menu responsive: 
![Prototipo-mejorado](https://user-images.githubusercontent.com/85121220/126590784-7b2c2442-222a-4185-96de-0de86e86931b.PNG)

Problemas que reconocimos tras los test de usabilidad: 
- Cuando las opciones de filtrado permanecían juntas, hacía que el usuario no pueda visulizar
  a primera vista la cantidad de opciones que el aplicativo web ofrecía.
- Sin un menú responsive se hacía muy desordenado la lista de links
  importantes, específicamente para dispositivos móbiles.
- Falta de cuadro de búsqueda para que la información requerida por el usuario
  sea encontrada fácilmente. 
  
### Pruebas unitarias

Las pruebas unitarias para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas nos dan
como resultado lo siguiente:

```text
 PASS  test/data.spec.js (7.031 s)
  filterData
    √ is a function (13 ms)
    √ should return an array with elements (5 ms)
    √ should return an array with three elements (8 ms)
    √ should return an object with information about pokemon `water` type (6 ms)
  sortData
    √ is a function (2 ms)
    √ should be an object (3 ms)
    √ should sort alphabetically from A to Z (3 ms)
    √ should sort alphabetically from Z to A (2 ms)
    √ should sort descending from 221 to 217 (3 ms)
  greaterHeight
    √ is a function (1 ms)
    √ should return an object with 3 elements (4 ms)
    √ should return an object with the first greater height value (2 ms)
    √ should return an object sort by `size:heigth` (4 ms)
  greaterWeight
    √ is a function (1 ms)
    √ should return an array list with pokemons in order by weight  (4 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |    95.45 |     100 |     100 |                  
 data.js  |     100 |    95.45 |     100 |     100 | 26               
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        13.156 s, estimated 15 s
Ran all test suites.
```


## 5. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Figma en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.

## 5. Autoras
-Paola Vitalia Taboada Alanoca.

-Dafne Corali Aquino Manyari.
