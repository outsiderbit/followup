import styled from 'styled-components'
import tokens from '../../../utils/tokens'

const { fontFamily, backgroundDefault, headerBackgroundColor } = tokens

export const Header = styled.header`
  width: 100%;
  background: ${headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  
  h1 {
    padding: 20px 40px;
    font-size: 20px;
    font-weight: bold;
    font-family: ${fontFamily};
    color: ${backgroundDefault};
  }
`

export const Title = styled.h1`
  
`
