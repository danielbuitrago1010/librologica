const prompt = require("prompt-sync")({ sigint: true });
var num;
num = parseFloat(prompt('Ingrese numero: '));
if (num<0){
console.log("el numero debe ser positivo");
}
else if (num%2 == 0){
console.log("el numero es par");

}else{
console.log("el numero es impar");
}