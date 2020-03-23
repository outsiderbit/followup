import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SelectContainer } from './SelectFilter.styles'

const SelectFilter = ({ value, options, onChange, ...rest }) => {
  const [selectedValue, setValue] = useState(value)

  const handleChange = event => {
    const optionSelected = event.target.value

    setValue(optionSelected)

    if (onChange) {
      onChange(optionSelected)
    }
  }

  return (
    <SelectContainer>
      <select value={selectedValue} onChange={handleChange} tabIndex="0" autoFocus {...rest} data-testid="selectFilter">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </SelectContainer>
  )
}

SelectFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  rest: PropTypes.any,
  value: PropTypes.string.isRequired,
}

export default SelectFilter
