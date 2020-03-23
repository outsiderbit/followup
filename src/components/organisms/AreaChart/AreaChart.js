import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import store from '../../../states/store'

import { useOptionsChart } from './hooks'
import AreaChartEmpty from '../AreaChartEmpty/AreaChartEmpty'

const AreaChart = ({ data }) => {
  const [chartData, setChartData] = useState(data)
  const { state } = useContext(store)
  const { filteredChartData } = state

  useEffect(() => {
    setChartData([filteredChartData])
  }, [filteredChartData])

  const options = useOptionsChart({ chartData })

  return (
    <>
      {isEmpty(chartData[0]) ? (
        <AreaChartEmpty />
      ) : (
        <HighchartsReact test-dataid="areaChart" constructorType="chart" highcharts={Highcharts} options={options} />
      )}
    </>
  )
}

AreaChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default AreaChart
