const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2'); 
const btn1 = document.querySelector('btn1');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('form')

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    const suma = input1.value + input2.value;
    resultado.innerText = "Resultaado: " + suma;
}
