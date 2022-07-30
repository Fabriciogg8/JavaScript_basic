// Para manipular el DOM cuando utilizamos querySelector debemos de colocar los elementos
// igual como lo hacemos cuando trabajamos con CSS

const h1 = document.querySelector('h1');
const p = document.querySelector('p'); 
const pclass = document.querySelector('.pclass');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

document.g

console.log({h1, 
    p, 
    pclass, 
    pid, 
    input});
    
console.log(input.value);

h1.innerHTML = "Hola <br> mundo Fabricio"
h1.innerText = "Hola <br> Uruguay Fabricio"

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'minimum');

h1.classList.add('midium');
//h1.classList.remove('midium');
//h1.classList.toggle();
//h1.classList.contains();

// Crear un elemento
console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1614366521568-5ed2403107b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80');
console.log(img);

// Ocultamos un elemento y mostramos otro al hacer append
pid.innerHTML = ""
pid.append(img);

