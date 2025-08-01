const paqueteSuma = require("2025a-swgr1-adcs-suma");
const respuestaSuma = paqueteSuma.suma(2, 1);
console.log("La respuesta de la suma es: ", respuestaSuma); // 3

const paqueteResta = require("2025a-swgr1-adcs-resta");
const respuestaResta = paqueteResta.resta(3, 2);
console.log("La respuesta de la resta es: ", respuestaResta); // 1

const paqueteMultiplicacion = require("2025a-swgr1-djga-multiplicacion");
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
console.log("La respuesta de la multiplicación es: ", respuestaMultiplicacion); // 10

const paqueteDivision = require("2025a-swgr1-djga-division");
const respuestaDivision = paqueteDivision.multiplicacion(9, 3); // 3
console.log("La respuesta de la división es: ", respuestaDivision);
