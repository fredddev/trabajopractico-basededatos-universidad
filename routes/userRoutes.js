/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener todos los usuarios (vía procedimiento almacenado)
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Juan Pérez
 *                   email:
 *                     type: string
 *                     example: juan@example.com
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpoint principal
router.get('/', userController.getUsers);

module.exports = router;
