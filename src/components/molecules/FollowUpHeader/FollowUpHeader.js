import React from 'react'
import { useTranslation } from 'react-i18next'

import { Header, Title } from './FollowUpHeader.styles'

const FollowUpHeader = () => {
  const { t } = useTranslation('app')

  return (
    <Header tabIndex="0">
      <Title data-testid="appName">{t('appName')}</Title>
    </Header>
  )
}

export default FollowUpHeader
