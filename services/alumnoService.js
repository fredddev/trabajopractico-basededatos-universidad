const alumnoRepository = require('../repositories/alumnoRepository');

async function getAlumnosPorInstrumento() {
  return await alumnoRepository.callGetAlumnosPorInstrumento();
}

module.exports = {
  getAlumnosPorInstrumento,
};