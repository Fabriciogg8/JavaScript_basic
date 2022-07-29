// Crea una función que pueda recibir cualquier objeto como parámetro e 
// imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var myObject = {1:1, 2:"auto", 3:true, 4:3.2};
var theKeys = Object.keys(myObject);
var theValues = Object.values(myObject);

function troughObject(myObject){
    for (var i=0; i < myObject.length; i++){
        console.log(myObject[i]);
    }
}

troughObject(theKeys);
troughObject(theValues);