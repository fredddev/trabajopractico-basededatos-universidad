const alumnoService = require('../services/alumnoService');

async function getAlumnosPorInstrumento(req, res) {
  try {    
    const alumnosPorInstrumento = await alumnoService.getAlumnosPorInstrumento();    
    res.render('alumnos', { alumnosPorInstrumento }); // Envía los datos a la vista EJS
  } catch (error) {
    res.status(500).send('Error fetching alumnos: ' + error.message);
  }
}

module.exports = {
  getAlumnosPorInstrumento,
};
