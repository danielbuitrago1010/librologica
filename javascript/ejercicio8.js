const prompt = require("prompt-sync")({ sigint: true });
var notaDefinitiva;
notaDefinitiva = parseFloat(prompt('ingresa la nota: '));
console.log("la nota fue "+ notaDefinitiva);
if (notaDefinitiva >= 3.0) {
    console.log("aprobo el curso");
}else{
console.log("no aprobo el curso");
}
if (notaDefinitiva>=4.0) {
    console.log("Felicitaciones sacaste una nota igual o mayor a 4.0");
}