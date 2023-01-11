const prompt = require("prompt-sync")({ sigint: true });
var formula1;
var num1;
var formula1;
var num2;

num1 = parseInt(prompt('Ingrese primer numero: '))

num2 = parseInt(prompt('Ingrese segundo numero: '))

if(num1<0){
    num1= num1*(-1);
}
if(num2<0){
    num2= num2*(-1);
}
formula1 = num1%10;
formula2 = num2%10;
console.log("el ultimo digito del numero "+ num1 + " es "+ formula1);
console.log("el ultimo digito del numero "+ num2 + " es "+ formula2);
if(formula1==formula2){
console.log("el ultimo digito de numero 1 es igual al de numero 2");
}else{
    console.log("los numeros no son iguales");
}



