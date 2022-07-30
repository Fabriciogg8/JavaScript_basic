// Crea una función que pueda recibir cualquier objeto como parámetro e 
// imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var myObject = {1:1, 2:"auto", 3:true, 4:3.2};
var theKeys = Object.keys(myObject);
var theValues = Object.values(myObject);

function troughObject(theObject){
    for (var i=0; i < theObject.length; i++){
        console.log(theObject[i]);
    }
}

troughObject(theKeys);
troughObject(theValues);