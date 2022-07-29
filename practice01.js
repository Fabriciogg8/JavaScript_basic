// Given this conditional, do the same but with conditional SWITCH

const tipoDeSuscripcion = "Expert Plus";

if (tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    
}else if (tipoDeSuscripcion == "Expert Plus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    
} else {
    console.log("Suscripción inválida");
}

// The same with conditional SWITCH
const typeOfSubscription = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}