const prompt = require("prompt-sync")({ sigint: true });
var numero;
var digito1;
var digito2;
var digito3;
var suma;

numero = parseInt(prompt('ingrese numero de 3 cifras: '));
digito1 = parseInt(numero/100);
digito2 = parseInt((numero/10)%10);
digito3 = parseInt(numero%10);
suma = parseInt(digito1+digito2+digito3);
console.log(digito1);
console.log(digito2);
console.log(digito3)
console.log("La suma de los tres digitos es "+ suma);




