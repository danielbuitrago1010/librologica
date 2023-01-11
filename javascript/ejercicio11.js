const prompt = require("prompt-sync")({ sigint: true });
var num1;
var num2;
var num3;
var num4;

num1 = parseFloat(prompt('Ingrese primer numero'));
num2 = parseFloat(prompt('Ingrese segundo numero'));
num3 = parseFloat(prompt('Ingrese tercer numero'));
num4 = parseFloat(prompt('Ingrese cuarto numero'));

if (num1>num2 && num1>num3 && num1>num4) {
    console.log("el mayor es "+ num1);
}else if (num2>num1 && num2>num3&&num2>num4) {
    console.log("el mayor es "+ num2);
}else if (num3>num1&&num3>num2&&num3>num4) {
    console.log("el mayor es "+ num3);
}else{
console.log("el mayor es "+ num4);
}
