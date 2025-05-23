const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

// Endpoint alumnos
router.get('/alumnos', alumnoController.getAlumnosPorInstrumento);

// Nuevo endpoint asistencia por fechas
router.get('/asistencia', alumnoController.getAsistenciaPorFechas);

// Ruta principal
router.get('/', (req, res) => {
  res.render('index', { titulo: 'Bienvenido' });
});

module.exports = router;
