import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Description } from './DescriptionFilter.styles'

const DescriptionFilter = ({ period }) => {
  const { t } = useTranslation('app')

  return (
    <Description tabIndex="0">
      <p data-testid="descriptionFilter">
        {t('description')} <strong>{t(`${period}`)}</strong>
      </p>
    </Description>
  )
}

DescriptionFilter.propTypes = {
  period: PropTypes.string,
}

DescriptionFilter.defaultProps = {
  period: 'Desde o ínicio',
}

export default DescriptionFilter
