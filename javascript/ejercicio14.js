const prompt = require("prompt-sync")({ sigint: true });
var capital;
var departamento;
departamento = prompt("ingrese el departamento: ");

switch (departamento) {
  case "Quindio":
    capital = "Armenia";
    break;
  case "Caldas":
    capital = "Manizales";
    break;
  case "Risaralda":
    capital = "Pereira";
    break;

  default:
    capital="";
    break;
}
if (capital != "") {
    console.log("la capital del "+departamento+" es "+capital);
}else{
    console.log("No es un departamento cafetero");
}
