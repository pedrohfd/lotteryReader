import api from '../api'

export const getGames = async () => {
  const response = await api.get('')

  return response.data
}
