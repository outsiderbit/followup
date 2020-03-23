import React from 'react'
import { Reset } from 'styled-reset'
import { initializeI18n } from './I18n/setup'
import FollowUp from './components/pages'
import { ProviderState } from './states/store'

initializeI18n()

const App = () => (
  <ProviderState>
    <Reset />
    <FollowUp />
  </ProviderState>
)

export default App
