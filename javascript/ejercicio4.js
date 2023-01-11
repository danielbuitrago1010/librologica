const prompt = require("prompt-sync")({ sigint: true });
var salarioBase;
var aporteSalud;
var aportePension;
var descuento;
var salarioNeto;

salarioBase = parseFloat(prompt('Ingrese el salario del empleado: '));
aporteSalud = parseFloat(salarioBase * 0.04);
aportePension = parseFloat(salarioBase * 0.04);
descuento = parseFloat(aportePension + aporteSalud);
salarioNeto = parseFloat(salarioBase - descuento);

console.log("el salario es de "+ salarioBase);
console.log("el aporte a salud es de "+ aporteSalud);
console.log("el aporte a pension es de "+ aportePension);
console.log("el descuento es de "+ descuento);
console.log("el salario neto es de "+ salarioNeto);

