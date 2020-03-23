import React from 'react'
import { render } from '@testing-library/react'

import DescriptionFilter from './DescriptionFilter'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key })
}))

describe('DescriptionFilter', () => {
  test('should render the filter description', () => {
    const { getByTestId } = render(<DescriptionFilter />)
    expect(getByTestId('descriptionFilter')).toHaveTextContent('Desde o ínicio')
  })
})