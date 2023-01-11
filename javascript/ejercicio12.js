const prompt = require("prompt-sync")({ sigint: true });
var estrato;
var cargoFijo;
var cantidad;
var valorBasura;
var valorConsumo;
var valorTotal;
estrato = prompt("Ingrese el estrato: ");
cantidad = parseFloat(prompt("Ingrese la cantidad: "));

if (estrato == "1") {
  cargoFijo = 2500;
  valorBasura = 5500;
  valorConsumo = cantidad * 2200;
} else if (estrato == "2") {
  cargoFijo = 2800;
  valorBasura = 6200;
  valorConsumo = cantidad * 2350;
} else if (estrato == "3") {
  cargoFijo = 3000;
  valorBasura = 7400;
  valorConsumo = cantidad * 2600;
} else if (estrato == "4") {
  cargoFijo = 3300;
  valorBasura = 8600;
  valorConsumo = cantidad * 3400;
} else if (estrato == "5") {
  cargoFijo = 3700;
  valorBasura = 9700;
  valorConsumo = cantidad * 3900;
} else {
  cargoFijo = 4400;
  valorBasura = 11000;
  valorConsumo = cantidad * 4800;
}
valorTotal = cargoFijo + valorBasura + valorConsumo;
console.log("valor del cargo fijo: " + cargoFijo);
console.log("valor de basura: " + valorBasura);
console.log("valor del consumo: " + valorConsumo);
console.log("el valor a pagar para estrato " + estrato + " es " + valorTotal);
