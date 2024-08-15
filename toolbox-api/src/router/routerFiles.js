const { Router } = require('express')
const fileController = require('../controllers/fileController')

const routerFiles = Router()

/**
 * @swagger
 * /files/data:
 *   get:
 *     summary: Get files data formatted
 *     tags:
 *       - files
 *     parameters:
 *       - name: fileName
 *         in: query
 *         description: Optional. Name of the specific file to retrieve info for.
 *         type: string
 *     responses:
 *       '200':
 *         description: List of files with the data
 *       '500':
 *         description: Internal server error
 */
routerFiles.get('/data', fileController.getFilesData)

/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: List all files
 *     tags:
 *       - files
 *     responses:
 *       '200':
 *         description: List of all files
 *       '500':
 *         description: Internal server error
 */
routerFiles.get('/list', fileController.getFiles)

module.exports = routerFiles
