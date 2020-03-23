import { useEffect, useContext, useState } from 'react'
import getInvestmentsData from '../../../api/getInvestmentsData'

import store from '../../../../states/store'

const URL_API = process.env.REACT_APP_API_INVESTMENT

const useFetchData = () => {
  const [data, setChartData] = useState({})
  const { dispatch } = useContext(store)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInvestmentsData({ URL_API })
        dispatch({ type: 'FETCH_DATA', payload: response })
        setChartData(response)
      } catch (error) {
        alert('error', error) // TODO: handle the error and show the component
      }
    }

    fetchData()
  }, [dispatch])

  return [data]
}


export default useFetchData
