import axios from 'axios'

const API_URL = 'http://localhost:8081'

export const getFilesData = async (fileName = '') => {
  try {
    const response = await axios({
      url: `${API_URL}/files/data`,
      method: 'GET',
      params: { fileName },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};