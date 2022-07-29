// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
var answer = 0;

function game(answer) {
    while (answer != "4") {
        answer = prompt("Cuanto es 2 + 2 ? ", 0);
    };
    alert("Congrats!");
}

game(answer);