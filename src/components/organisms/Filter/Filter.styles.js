import styled from 'styled-components'

import tokens from '../../../utils/tokens'

const { paragraphColor } = tokens

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-weight: 500;
  color: ${paragraphColor};
  display: flex;
  padding: 10px 0;
`

export const FilterArea = styled.div`
  position: relative;
  border-radius: 3px;
  align-self: flex-end;
  margin: 20px 0;
`
