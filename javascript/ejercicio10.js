const prompt = require("prompt-sync")({ sigint: true });
var nota;
nota = parseFloat(prompt("Ingrese nota: "));
if (nota < 3.0) {
  console.log("Insuficiente");
} else if (nota <= 3.5) {
  console.log("aceptable");
} else if (nota <= 4.0) {
  console.log("sobresaliente");
} else {
  console.log("excelente");
}
