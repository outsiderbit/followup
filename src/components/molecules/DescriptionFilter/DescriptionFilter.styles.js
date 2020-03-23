import styled from 'styled-components'

import tokens from '../../../utils/tokens'

const { descriptionBorder, paragraphColor } = tokens

export const Description = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
  border: 1px solid ${descriptionBorder};
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;

  p {
    color: ${paragraphColor};
  }

  strong {
    font-weight: 500
  }
`
