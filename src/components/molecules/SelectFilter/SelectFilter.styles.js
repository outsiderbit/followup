import styled from 'styled-components'
import tokens from '../../../utils/tokens'

const { backgroundDefault, descriptionBorder } = tokens

export const SelectContainer = styled.div`
  position: relative;
  background-color: ${backgroundDefault};
  border-radius: 3px;
  min-width: 200px;
  border: 1px solid ${descriptionBorder};

  > select {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    background-color: transparent;
  }

  :after {
    content: '';
    background-image: url('data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzA2cHgiIGhlaWdodD0iMzA2cHgiIHZpZXdCb3g9IjAgMCAzMDYgMzA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDYgMzA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBvbHlnb24gcG9pbnRzPSIyNzAuMyw1OC42NSAxNTMsMTc1Ljk1IDM1LjcsNTguNjUgMCw5NC4zNSAxNTMsMjQ3LjM1IDMwNiw5NC4zNSIvPjwvZz48L3N2Zz4=');
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    position: absolute;
    height: 89%;
    width: 25px;
    top: 0;
    right: 0;
    margin: 5px;
    pointer-events: none;
  }
`
