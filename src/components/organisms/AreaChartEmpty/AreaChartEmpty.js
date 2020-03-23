import React from 'react'

import { useTranslation } from 'react-i18next'
import { EmptyText, AreaContainer } from './AreaChartEmpty.styles'


const AreaChartEmpty = () => {
  const { t } = useTranslation('app')

  return (
    <AreaContainer data-testid="areaChartEmpty">
      <figure>
        <img src="https://i.vimeocdn.com/portrait/1274237_300x300" alt={t('emptyText')} />
      </figure>
      <EmptyText>{t('emptyText')}</EmptyText>
    </AreaContainer>
  )
}
export default AreaChartEmpty
