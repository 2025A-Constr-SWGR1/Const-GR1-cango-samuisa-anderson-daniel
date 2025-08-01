const paqueteSuma = require("2025a-swgr1-adcs-suma");
const respuestaSuma = paqueteSuma.suma(4, 9);
console.log("La respuesta de la suma es: ", respuestaSuma);

const paqueteResta = require("2025a-swgr1-adcs-resta");
const respuestaResta = paqueteResta.resta(24, 9);
console.log("La respuesta de la resta es: ", respuestaResta);

const paqueteMultiplicacion = require("2025a-swgr1-djga-multiplicacion");
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(5, 4);
console.log("La respuesta de la multiplicación es: ", respuestaMultiplicacion);

const paqueteDivision = require("2025a-swgr1-djga-division");
const respuestaDivision = paqueteDivision.multiplicacion(20, 5);
console.log("La respuesta de la división es: ", respuestaDivision);
