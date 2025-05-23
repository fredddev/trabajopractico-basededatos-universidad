const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

// Endpoint principal
router.get('/', alumnoController.getAlumnosPorInstrumento);

module.exports = router;
