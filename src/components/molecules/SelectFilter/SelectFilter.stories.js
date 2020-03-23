import React from 'react'
import SelectFilter from './SelectFilter'
import { action } from '@storybook/addon-actions'
import { options, periods } from '.././../../utils/fixtures/periodList'

export default {
  title: 'Components/molecules/SelectFilter',
}

export const Sample = () => (
  <div style={{ width: '80vw' }}>
    <SelectFilter options={options} value={periods} onChange={action('selected value')} />
  </div>
)

Sample.story = {
  name: 'SelectFilter',
}
