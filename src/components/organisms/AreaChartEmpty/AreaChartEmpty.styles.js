import styled from 'styled-components'

import tokens from '../../../utils/tokens'

const { paragraphColor } = tokens

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmptyText = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${paragraphColor};
`
