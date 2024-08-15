const { Router } = require('express')
const routerFiles = require('./routerFiles')

const router = Router()

router.use('/files', routerFiles)

module.exports = router
