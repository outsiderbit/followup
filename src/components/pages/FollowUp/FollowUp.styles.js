import styled from 'styled-components'
import tokens from '../../../utils/tokens'

const { fontFamily } = tokens

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: ${fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
