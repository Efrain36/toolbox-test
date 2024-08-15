const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toolbox API',
      version: '1.0.0',
      description: 'REST API for toolbox code challenge'
    }
  },
  apis: [`${path.join(__dirname, '../../router/*.js')}`]
}

const swaggerSpecs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
}
