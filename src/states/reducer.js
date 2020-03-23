import moment from 'moment'
import { filter } from 'lodash'

import {
  FETCH_DATA,
  FILTER_BY_LAST_MONTH,
  FILTER_BY_LAST_THREE_MONTH,
  FILTER_BY_LAST_YEAR,
  FILTER_BY_LAST_TWO_YEAR,
  FILTER_BY_ALL,
} from './constants'

const initialState = {
  dataChart: [],
  filteredChartData: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        dataChart: action.payload,
        filteredChartData: action.payload,
      }

    case FILTER_BY_LAST_MONTH:
      const lastMonthData = filterByLastMonth(state.dataChart)
      return {
        ...state,
        filteredChartData: lastMonthData,
      }

    case FILTER_BY_LAST_THREE_MONTH:
      return {
        ...state,
        filteredChartData: filterByLastThreeMonths(state.dataChart),
      }

    case FILTER_BY_LAST_YEAR:
      return {
        ...state,
        filteredChartData: filterByLastYear(state.dataChart),
      }

    case FILTER_BY_LAST_TWO_YEAR:
      return {
        ...state,
        filteredChartData: filterByLastTwoYears(state.dataChart),
      }

    case FILTER_BY_ALL:
      return {
        ...state,
        filteredChartData: state.dataChart,
      }

    default:
      throw new Error()
  }
}

const filterByLastMonth = (investments) => {
  const MONTH = 1

  return filter(investments, (item) => {
    const date = new Date(item[0])

    const lastMonth = moment()
      .subtract(MONTH, 'month')
      .month()

    const month = moment(date).month()

    console.log(month)
    return month === lastMonth
  })
}

const filterByLastThreeMonths = (investments) => {
  const THREE_MONTHS = 3

  return filter(investments, (item) => {
    const date = new Date(item[0])
    const threeMonthsBack = moment()
      .subtract(THREE_MONTHS, 'months')
      .startOf('month')
    const momentDate = moment(date)
    const now = moment()

    return momentDate > threeMonthsBack && momentDate <= now
  })
}

const filterByLastYear = (investments) => {
  const YEAR = 1

  return filter(investments, (item) => {
    const date = new Date(item[0])
    const lastYear = moment()
      .subtract(YEAR, 'year')
      .year()
    const year = moment(date).year()

    return year === lastYear
  })
}

const filterByLastTwoYears = (investments) => {
  const TWO_YEAR = 2

  return filter(investments, (item) => {
    const date = new Date(item[0])
    const twoYearsBack = moment().subtract(TWO_YEAR, 'years')
    const year = moment(date).year()
    const currentYear = moment().year()

    return year >= twoYearsBack.year() && year < currentYear
  })
}

export { reducer, initialState }
