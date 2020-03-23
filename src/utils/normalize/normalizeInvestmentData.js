const normalizeInvestmentData = ({ chartData }) => {
  chartData.map((item) => ({
    t: item[0],
    y: item[1],
  }))

  return chartData[0]
}

export default normalizeInvestmentData
