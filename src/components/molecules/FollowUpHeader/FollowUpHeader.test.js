import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import FollowUpHeader from './FollowUpHeader'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key })
}))

describe('FollowUpHeader', () => {
  test('should render the application title', () => {
    const { getByTestId } = render(<FollowUpHeader />)
    expect(getByTestId('appName')).toHaveTextContent('appName')
  })
})