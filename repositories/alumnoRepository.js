const db = require('../config/db');

async function callGetAlumnosPorInstrumento() {
  const [rows] = await db.query('CALL reporte_alumnos_por_instrumento()');
  return rows[0]; // El primer resultado contiene los datos
}

module.exports = {
  callGetAlumnosPorInstrumento,
};
