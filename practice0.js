let nombre;
let apellido;
let userName;
let edad;
let email;
let mayorEdad;
let dineroAhorrado;
let deudas; 

nombre = "Fabricio";
apellido = "González";
userName = "Fabriciogg8";
edad = 35;
email = "fabricio@gmail.com";
mayorEdad = true;
dineroAhorrado = 1000;
deudas = 0; 

console.log(nombre + " " + apellido);
console.log(dineroAhorrado - deudas)

function printName(name, nickname){
    console.log("Mi nombre es " + name + " pero prefiero que me digas " + nickname);
}

printName(nombre, userName);