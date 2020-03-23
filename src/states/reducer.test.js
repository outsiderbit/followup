import { reducer } from './reducer'
import {
    FETCH_DATA,
    FILTER_BY_LAST_MONTH,
    FILTER_BY_LAST_THREE_MONTH,
    FILTER_BY_LAST_YEAR,
    FILTER_BY_LAST_TWO_YEAR
  } from './constants'

describe('reducer', () => {
  test('should fetch the data', () => {
    const initialState = {
      dataChart: [],
      filteredChartData: [],
    }

    const payload = ['item1', 'item2']
    const action = { type: FETCH_DATA, payload }

    const state = reducer(initialState, action)
    
    expect(state.dataChart).toEqual(payload)
    expect(state.filteredChartData).toEqual(payload)
  })

  
  test('should filters data by last year', () => {
    const initialState = {
      dataChart: [
        [new Date('10-10-2019'), 4],
        [new Date('11-10-2019'), 4],
        [new Date('01-10-2020'), 3],
      ],
      filteredChartData: []
    }
    const action = { type: FILTER_BY_LAST_YEAR }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('10-10-2019'), 4],
      [new Date('11-10-2019'), 4],
    ])
  })

  test('should filters data by last two years', () => {
    const initialState = {
       dataChart: [
        [new Date('11-10-2017'), 4],
        [new Date('10-10-2018'), 4],
        [new Date('11-10-2019'), 4],
        [new Date('01-10-2020'), 3],
      ],
      filteredChartData: []
    }
    const action = { type: FILTER_BY_LAST_TWO_YEAR }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('10-10-2018'), 4],
      [new Date('11-10-2019'), 4],
    ])
  })
})
