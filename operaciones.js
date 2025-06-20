const fs = require('fs');

// Registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
  const nuevaCita = { nombre, edad, animal, color, enfermedad };

  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  citas.push(nuevaCita);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito:", nuevaCita);
}

// Leer todas las citas
function leer() {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  console.log("Citas registradas:");
  console.log(citas);
}

module.exports = { registrar, leer };
