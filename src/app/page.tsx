"use client";
import Form from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/Projects";
import ServicesSection from "./components/Serives";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
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
        <Skills />
        <Stats />
        <ProjectsSection />
        <ServicesSection />
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
