import FlashCardProvider from "../contexts/FlashcardContext";
import { theme } from "../styles/styles";
import Done from "./Done";
import FlashCards from "./flashcard/FlashCards";
import styled, { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <FlashCardProvider>
      <ThemeProvider theme={theme}>
        <div>
          <FlashCards />
          <Done />
        </div>
      </ThemeProvider>
    </FlashCardProvider>
  );
}
