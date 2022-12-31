import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: #2E2D2E;
    --color-white: #ebebeb;
  }

  * {
      margin: 0;
      padding: 0;
      font-size: 16px;
      box-sizing: border-box;
  }

  html, body, #root {
      box-sizing: border-box;
      background-color: black;
      height: 100vh;
  }
`

export default GlobalStyle;