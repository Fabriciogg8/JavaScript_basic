// Replicar el comportamiento del ejercicio 01 con arrays u objetos y un solo condicional

const myArray = {
    "Free":"Solo puedes tomar los cursos gratis",
    "Basic":"Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert":"Puedes tomar casi todos los cursos de Platzi durante un año",
    "Expert Plus":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    "Other":"Suscripción inválida"
}

let myKeys = Object.keys(myArray);
let myValues = Object.values(myArray);

let supscription = "Free"

function mySupscription(){
    for (var i=0; i < myKeys.length; i++){
        if (supscription == myKeys[i]){
            console.log(myValues[i]);
        }
    }
}

mySupscription();


// ############# Simplified way #################

function newSupscription(){
    if(myArray[supscription2]){
     console.log(myArray[supscription2]);
     return;
    }
    console.log("No existe esa suscripción");
}

let supscription2 = "Expert"
newSupscription();