const { registrar, leer } = require('./operaciones');

// Recibe los comandos desde el terminal
const [ , , operacion, nombre, edad, animal, color, enfermedad ] = process.argv;

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operación no válida. Usa 'registrar' o 'leer'");
}
