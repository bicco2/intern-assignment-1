import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
  }
`;

export default GlobalStyle;
