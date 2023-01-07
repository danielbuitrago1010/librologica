const prompt = require("prompt-sync")({ sigint: true });
var cantidad;
var porcentajeInteres;
var periodo;
var valorIntereses;
var valorImpuesto;
var netoPagar;

cantidad = parseFloat(prompt("Ingrese la cantidad que deposito: "));
porcentajeInteres = parseFloat(prompt("Ingrese el porcentaje de interes: "));
periodo = parseInt(prompt("Ingrese el periodo en dias: "));
valorIntereses = parseFloat((cantidad * porcentajeInteres/100 * periodo) / 360);
valorImpuesto = parseFloat(valorIntereses * 0.07);
netoPagar = parseFloat(cantidad + valorIntereses - valorImpuesto);

console.log("Valor total de los intereses:" + valorIntereses);
console.log("Valor del impuesto:" + valorImpuesto);
console.log("total a pagar:" + netoPagar);

