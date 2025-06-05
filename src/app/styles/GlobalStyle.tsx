import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme: { fonts } }) => fonts.sans};
    background-color: ${({ theme: { colors } }) => colors.background};
        color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
