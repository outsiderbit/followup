import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import AreaChartEmpty from './AreaChartEmpty'

describe('AreaChartEmpty', () => {
  test('should render the empty list', () => {
    const { getByTestId } = render(<AreaChartEmpty />)
    expect(getByTestId('areaChartEmpty')).toBeInTheDocument()
  })

  test('should render the list empty and contain the default image', () => {
    const { container } = render(<AreaChartEmpty />)

    const emptyFigure = container.querySelector('img')
    expect(emptyFigure).toBeInTheDocument()
  })
})