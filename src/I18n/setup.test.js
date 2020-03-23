import setup from './setup'

describe('i18n', () => {
  test('initial language should be brazillian portuguese', () => {
    expect(setup.options.fallbackLng).toEqual(['pt-BR'])
  })

  test('have english and portuguese setup', () => {
    expect(Object.keys(setup.options.resources)).toEqual(['pt-BR', 'en'])
  })

  test('detection order is queryString -> localStorage', () => {
    expect(setup.options.detection.order).toEqual(['querystring', 'localStorage'])
  })

  test('detection query', () => {
    expect(setup.options.detection.lookupQuerystring).toEqual('lng')
  })
})
