import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.sans};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
  }
`;
