import FlashCardProvider from "../../contexts/FlashcardContext";
import { Global, theme } from "../../styles/styles";
import Done from "../Done";
import FlashCards from "../flashcard/FlashCards";
import { ThemeProvider } from "styled-components";
import { Container, ContainerApp } from "./styles";
import Logo from "../Logo";

export default function App() {
  return (
    <FlashCardProvider>
      <ThemeProvider theme={theme}>
        <Global />
        <ContainerApp>
          <Container>
            <Logo />
            <FlashCards />
            <Done />
          </Container>
        </ContainerApp>
      </ThemeProvider>
    </FlashCardProvider>
  );
}
