// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento
myList = [8,7,6,10,12];

function numbers (myList) {
    console.log(myList[0]);
}

numbers(myList);

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
// (no se vale imprimir el array completo)

function trough(myList){
    for (var i=0; i < myList.length; i++){
        console.log(myList[i]);
    }
}

trough(myList);