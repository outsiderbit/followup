import React from 'react'
import SelectFilter from './SelectFilter'
import { render, fireEvent } from '@testing-library/react'

//fixture to test
import { options } from '../../../utils/fixtures/periodList'

describe('SelectFilter', () => {
  test('should renders "select value" correctly', () => {
    const spy = jest.fn()
    const optionsFixture = options

    const { container } = render(
      <SelectFilter value="ALL" options={optionsFixture} onChange={spy}/>
    )

    const select = container.querySelector('select')

    expect(select.value).toBe('ALL')

    fireEvent.change(select, { target: { value: 'LAST_MONTH' }})

    expect(select.value).toBe('LAST_MONTH')
  })

  test('should called "handleChange" with selected value', () => {
    const optionsFixture = options
    const handleChange = jest.fn()

    const { container } = render(
      <SelectFilter value="ALL" options={optionsFixture} onChange={handleChange} />
    )

    const select = container.querySelector('select')

    expect(select.value).toBe('ALL')

    fireEvent.change(select, { target: { value: 'LAST_MONTH' }})

    expect(handleChange).toHaveBeenCalledWith('LAST_MONTH')
    expect(select.value).toBe('LAST_MONTH')

  })

})
