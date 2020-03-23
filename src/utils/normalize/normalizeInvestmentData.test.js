import normalizeInvestmentData from './normalizeInvestmentData'

describe('normalizeInvestmentData', () => {
  test('should normalize the list values', () => {
    const chartData = [
      [1576800000000, 135771.08]
    ]

    const data = normalizeInvestmentData({ chartData })
    
    expect(data[0]).toBe(1576800000000)
    expect(data[1]).toBe(135771.08)
  })
})
