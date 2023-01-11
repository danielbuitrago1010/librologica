const prompt = require("prompt-sync")({ sigint: true });
var opcion;
opcion = prompt("Ingrese caracter: ");
console.log(opcion);
if (opcion == 'a' || opcion == 'A') {
    console.log("Android");
}else if (opcion == 'i' || opcion == 'I') {
    console.log("iOS");
}else{
    console.log("invalido");
}

/* switch (opcion) {
    case "a":
    case "A":   
        console.log("Android");
        break;
    case "i":
    case "I":
        console.log("iOS");
        break;
    default:
    console.log("invalido");
      
} */