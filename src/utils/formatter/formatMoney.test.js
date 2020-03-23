import formatMoney from './formatMoney'

describe('formatMoney', () => {
  test('should format number to real currency', () => {
    const money = 989.9
    expect(formatMoney({ money })).toBe("R$ 989.90")
  })
})
