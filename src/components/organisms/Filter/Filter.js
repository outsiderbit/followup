import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FilterArea, Label } from './Filter.styles'
import SelectFilter from '../../molecules/SelectFilter'
import DescriptionFilter from '../../molecules/DescriptionFilter'
import periods from './constants'

import store from '../../../states/store'

const Filter = () => {
  const { t } = useTranslation('app')
  const [periodSelected, setPeriodSelected] = useState({})
  const { dispatch } = useContext(store)

  const handleChange = periodSelected => {
    setPeriodSelected(periodSelected)

    dispatch({ type: `FILTER_BY_${periodSelected}` })
  }

  const handleFilteredOption = ({ periods }) =>
    Object.keys(periods).map(value => ({
      value,
      text: t(`${periods[value]}`),
    }))

  const options = handleFilteredOption({ periods })

  return (
    <>
      <FilterArea>
        <Label>{t('filterLabel')}</Label>
        <SelectFilter options={options} value={periods} onChange={handleChange} />
      </FilterArea>
      <DescriptionFilter period={periods[periodSelected]} />
    </>
  )
}

export default Filter
