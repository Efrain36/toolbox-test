const axios = require('axios')

const API_KEY = 'Bearer aSuperSecretKey'

const getFilesName = async () => {
  const response = await axios('https://echo-serv.tbxnet.com/v1/secret/files', {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response
}

const getFileInfoByName = async (fileName) => {
  const response = await axios('https://echo-serv.tbxnet.com/v1/secret/file/' + fileName, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response
}

module.exports = { getFilesName, getFileInfoByName }
