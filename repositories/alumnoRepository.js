const db = require('../config/db');

async function callGetAlumnosPorInstrumento() {
  const [rows] = await db.query('CALL reporte_alumnos_por_instrumento()');
  return rows[0]; // El primer resultado contiene los datos
}


// Llama al SP que obtiene asistencia por fechas
async function callGetAsistenciaPorFechas(fechaInicio, fechaFin) {
  const [rows] = await db.query('CALL reporte_asistencia_por_rango(?, ?)', [fechaInicio, fechaFin]);
  return rows[0]; // El primer resultado contiene los datos
}

module.exports = {
  callGetAlumnosPorInstrumento,
  callGetAsistenciaPorFechas, // <-- Exporta también este método
};