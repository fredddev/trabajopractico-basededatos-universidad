const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API Node + MySQL',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
  },
  apis: ['./routes/*.js'], // Ruta donde Swagger buscará los comentarios
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
