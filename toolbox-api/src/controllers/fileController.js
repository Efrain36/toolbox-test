const { request, response } = require('express')
const externalApiService = require('../services/externalApiService')
const fileHelpers = require('../helpers/fileHelpers')

const getFilesData = async (req = request, res = response) => {
  const { fileName } = req.query

  try {
    const files = fileName ? [fileName] : (await externalApiService.getFilesName())?.data?.files || []

    if (!files.length) {
      return res.status(200).json([])
    }

    const results = await Promise.allSettled(
      files.map(async (file) => {
        try {
          const fileInfo = await externalApiService.getFileInfoByName(file)
          if (fileInfo.status === 200) {
            const fileData = fileHelpers.parseCsvToResponse(fileInfo.data, file)
            return fileData.lines.length > 0 ? fileData : null
          }
          return null
        } catch (error) {
          console.error(`Error processing file ${file}:`, error)
          return null
        }
      })
    )

    const response = results.map((result) => result.value).filter(Boolean)

    return res.status(200).json(response)
  } catch (error) {
    console.error(error)
  }
}

const getFiles = async (req = request, res = response) => {
  const response = await externalApiService.getFilesName()
  return res.status(200).json(response.data.files)
}

module.exports = { getFilesData, getFiles }
