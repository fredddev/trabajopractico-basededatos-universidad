const alumnoService = require('../services/alumnoService');

async function getAlumnosPorInstrumento(req, res) {
  try {    
    const alumnosPorInstrumento = await alumnoService.getAlumnosPorInstrumento();    
    res.render('alumnos', { alumnosPorInstrumento }); // Envía los datos a la vista EJS
  } catch (error) {
    res.status(500).send('Error fetching alumnos: ' + error.message);
  }
}

// Nuevo: asistencia por rango de fechas
async function getAsistenciaPorFechas(req, res) {
  const { fechaInicio, fechaFin } = req.query;

  if (!fechaInicio || !fechaFin) {
    // Renderiza la vista con la variable definida
    return res.render('asistencia', { asistencias: undefined });
  }

  try {
    const asistencias = await alumnoService.getAsistenciaPorFechas(fechaInicio, fechaFin);
    res.render('asistencia', { asistencias });
  } catch (error) {
    res.status(500).send('Error fetching asistencia: ' + error.message);
  }
}

module.exports = {
  getAlumnosPorInstrumento,
  getAsistenciaPorFechas,
};