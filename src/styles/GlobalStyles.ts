import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #000000;
    color: #00FF00;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: 2px solid #00FF00;
    background: transparent;
    color: #00FF00;
    font-family: 'Courier New', Courier, monospace;
    padding: 8px 16px;

    &:hover {
      background: #00FF00;
      color: #000000;
    }
  }

  input {
    background: transparent;
    border: 2px solid #00FF00;
    color: #00FF00;
    font-family: 'Courier New', Courier, monospace;
    padding: 8px;

    &:focus {
      outline: none;
      border-color: #33FF33;
    }
  }
`;