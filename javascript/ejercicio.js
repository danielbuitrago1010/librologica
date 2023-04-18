const prompt = require("prompt-sync")({sigint:true});
var nota1;
var nota2;
var nota3;
var nota4;
var promedio;

nota1 = parseFloat(prompt('Ingrese la nota 1: '));
nota2 = parseFloat(prompt('Ingrese la nota 2: '));
nota3 = parseFloat(prompt('Ingrese la nota 3: '));
nota4 = parseFloat(prompt('Ingrese la nota 6: '));
promedio = (nota1+nota2+nota3+nota4)/4;

console.log("el promedio del estudiante es " + promedio);
if (promedio >= 7) {
    console.log("El estudiante aprobo");
    
}else{
 console.log("no aprobo");   
}