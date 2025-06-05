"use client";
import Header from "./components/Header";
import ServicesSection from "./components/Serives";
import { Container } from "./styles/ContainerStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/ThemeStyle";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <ServicesSection />
      </Container>
    </ThemeProvider>
  );
}
