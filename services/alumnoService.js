const alumnoRepository = require('../repositories/alumnoRepository');

async function getAlumnosPorInstrumento() {
  return await alumnoRepository.callGetAlumnosPorInstrumento();
}

async function getAsistenciaPorFechas(fechaInicio, fechaFin) {
  return await alumnoRepository.callGetAsistenciaPorFechas(fechaInicio, fechaFin);
}

module.exports = {
  getAlumnosPorInstrumento,
  getAsistenciaPorFechas,
};