import styled from 'styled-components'
import tokens from '../../../utils/tokens'

const { backgroundDefault } = tokens

export const SelectContainer = styled.div`
  position: relative;
  background-color: ${backgroundDefault};
  border-radius: 3px;
  
  > select {
    padding: .5rem 2rem;
    border-radius: 3px;
    background: white;
  }
`
