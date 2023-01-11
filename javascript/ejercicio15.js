const prompt = require("prompt-sync")({ sigint: true });
var genero;
var estadoCivil;
var edad;
var salida;
var estatura;

estadoCivil=prompt("Ingrese estado civil del aspirante(S/C/V/D/U): ");
genero=prompt("Genero del aspirante: ");
edad=parseInt(prompt("Ingrese edad del aspirante: "));
estatura=parseFloat(prompt("Estatura del aspirante: "));

if (estadoCivil == "S" || estadoCivil == "s") {
    switch (genero) {
        case "m":
            if (estatura > 1.65 && edad >= 18 && edad <=24) {
                salida = "Es apto";
            }else{
                salida = "no es apto";
            }
            break;
            case "f":
                if (estatura > 1.60 && edad >= 20 && edad <=25) {
                    salida = "Es apto";
                }else{
                    salida = "no es apto";
                }
            break;
        default:
            salida = "";
            break;
    }
}
if (salida == "") {
    console.log("Genero incorrecto");
}else{
console.log("el aspirante: "+salida);
}

