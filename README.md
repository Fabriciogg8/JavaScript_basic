# JavaScript_basic

In this repository I made some exercices with the JavaScript language.

0. - Variables: declaration and initialization of different types. Also functions
1. - Condistionals switch, if, else if, else. 
2. - For and While Loops
3. - Function whit a while loop
4. - Array, print a number, and iterate an array. 
5. - Object, print the keys and the values. 


## Manipulación DOM

Podemos utilizar JavaScript para manipular el DOM. En el archivo index.js primero utilizamos querySelector para comenzar a buscar los elementos que tenemos en el html. Cuando utilizamos querySelector debemos de especificar los elementos tal como los hacemos con CSS.

Al realizar un console.log de los elementos dentro de un objeto, vemos en el navegador todas las propiedades con las que podemos trabajar. Allí descubrimos que existe una propiedad value que nos muestra el valor que contiene un input. Le dimos un valor por defecto al input para poder verlo en la consola. 

También existen getElementById, getElementsByClassName, querySelectoAll(el cual nos envía una lista con todos los elementos que cumplen con el requisito de busqueda), pero en definitiva realizan lo mismo. 

### Escribiendo desde JavaScript

Utilizamos la variable constante que especificamos para obtener un elemento de HTML, con **innerHTML** y le pasamos el valor que deseamos. De esta manera se escribe ese valor en HTML. Este metodo nos puede traer problemas ya que se puede ingresar HTML directamente lo que significa que alguien podría ingresar HTML que ejecute JavaScript desde otra página pudiendo ingresar algo malicioso. Colocamos una etiqueta HTML cualquiera para mostrar como la etiqueta no se ve en la pagína pero si la está renderizando. 

Por lo tanto es mejot utilizar **innerText**, en este caso la etiqueta que colocamos es tomada como texto. Es una forma básica de protegerse de posibles ataques, al manipular el DOM. 

### Modificando un atributo

Una de las formas de modificar un atributo que tenga nuestro elemento es con **getAttribute** y **setAttribute**. Le inventamos un atributo cualquiera a nuestro h1, solo para ver como funcionan los métodos. 

Con setAttribute le podemos pasar un nuevo valor al atributo que seleccionamos. 

También existe el método **classList** el cual tiene otras propiedades que se pueden utiliar, como por ejemplo para agregarle otras clases a un elemento (add), para quitar una clase (remove), para intercambiar entre clases (toggle) la cual sirve cuando estamos manejando eventos, para consultar si existe una clase en un elemento (contains) la cual devuelve true or false. 

### Creando elementos desde cero

Podemos crear un nuevo elemento HTML con **document.createElement**. Si creamos una imagen vemos que después podemos pasarle los atributos con el método que vimos **setAttribute**, dandole por ejemplo el valor del src. Luego esa imagen la podemos insertar dentro de un contenedor, o sea un elemento que ya existia en el html, con **append**. 

Una forma de reemplazar un elemento ya existente u ocultarlo para mostrar otro, sería colocarle **innerHTML = ""**, esto nos dará un elemento vacío, y luego le hacemos **append** del nuevo elemento que queremos que sea visible. 

### Realizando claculos

Desde el archivo calculo.html se crearon dos input y un button para realizar una serie de calculos. Desde el archivo de javascript lo primero que hacemos es obtener esos elementos con **querySelector**. 

Una de las formas de escuchar eventos es agregar en el HTML el evento **onclick**, se lo agregamos al elemento que queremos escuchar. Otra forma también es el **onchange**. Podemos pasarle un console.log como valor al evento para ver como funciona. Despues le pasamo el nombre de una función que creamos en javascript para que al hacer click se ejecute esa función. 

Vamos a utilizar la función para obtener los valores de los input y de esta manera sumar su contenido. Luego creamos otro elemento donde haremos que se muestre ese valor. 

### Escuchando eventos con addEventListener

La manera en como funciona es que primero debemos de seleccionar que elemento es al que queremos agregarle la propiedad. Al seleccionar el elemento le agregamos **addEventListener**. Luego entre parentesis debemos que colocar cual es el evento que estaremos 'escuchando', y seguido el nombre de la función. Algo importante es que el nombre de la función no lleva los parentesis que se colocan siempre que invocamos una función. Porque si lo hicieramos se ejecutaria dos veces la misma función. 

Luego vamos agregar la etiqueta <form> y colocar los <input> dentro de esta. Vamos agregar un evento cuando se envie el formulario. El problema que se nos genera es que al enviarse el formulario no podemos ver el contenido de la suma en el html, ya que al enviarse el formulario se recarga la página. 

Para solucionar esto, sabemos que a la función le podemos pasar el evento como parámetro. Este argumento tiene varias propiedades entre las cuales existe **preventDefault**. Esta propiedad al llamarla lo que nos hace es prevenir de ejecutar lo que haría al ocurrir el evento, por lo tanto no se recarga la página. 

Existe otra forma de hacer lo mismo, si seguimos escuchando al boton en vez de al form. En este caso debemos de modificar el tipo de boton en el html. Por defecto el boton será de tipo submit, debemos colocar typo button.