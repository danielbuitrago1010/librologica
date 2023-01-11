const prompt = require("prompt-sync")({ sigint: true });
var tamanoPiso;
var valorCaja;
var cantidadCajas;
var valorTotal;

tamanoPiso=parseFloat(prompt('Ingrese el tamaño del piso: '));
valorCaja=parseFloat(prompt('Ingrese el valor de la caja: '));
cantidadCajas = tamanoPiso/2.26;
valorTotal = cantidadCajas*valorCaja;

console.log("se nesecitan: "+ cantidadCajas + "cajas");
console.log("el valor total es: "+ valorTotal);