const express = require('express')
const cors = require('cors')
const swagger = require('./src/config/swagger/swagger')
const router = require('./src/router/index.router')

const app = express()
const port = process.env.PORT || 8082

app.use(cors())
app.use(express.json())

app.use(router)

swagger(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = app