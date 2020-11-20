import api from '../../../core/lib/api'

const apiService = {
  getData: async () => {
    try {
      let response = await api.get('/ywc18.json')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default apiService