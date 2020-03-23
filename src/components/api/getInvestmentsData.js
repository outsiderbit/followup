import axios from 'axios'

const getInvestmentsData = async ({ URL_API }) => {
  const { data } = await axios.get(URL_API)
  return data
}

export default getInvestmentsData
