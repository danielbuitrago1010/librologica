const prompt = require("prompt-sync")({ sigint: true });
var numeroDias;
var numeroMinutos;
var numeroSegundos;
numeroDias = parseInt(prompt('Ingrese cantidad de dias: '));
numeroMinutos = numeroDias * 24 * 60;
numeroSegundos =numeroMinutos * 60;

console.log("numero dias: "+ numeroDias);
console.log("cantidad de minutos: "+ numeroMinutos);
console.log("cantidad de segundos: "+ numeroSegundos);
