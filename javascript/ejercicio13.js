const prompt = require("prompt-sync")({ sigint: true });
var valor;
var descuento;
var tipo
var porcentaje;

valor = parseFloat(prompt('ingrese el valor del producto: '));
tipo = prompt('ingrese el tipo de producto: ');

switch (tipo) {
    case "1":
        porcentaje = 0.125;
        break;
        case "2":
            porcentaje = 0.083;
        break;
        case "3":
            porcentaje = 0.032;
        break;
    
    default:
        porcentaje = 0.0;
        break;
}
descuento= valor*porcentaje;
console.log("el valor del descuento es: "+descuento);