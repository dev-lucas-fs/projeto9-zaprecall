import { useContext, useState } from "react";
import { FlashCardContext } from "../../../contexts/FlashcardContext";
import FlashCard from "../FlashCard";
import { Container } from "./styles";

export default function FlashCards() {
  const context = useContext(FlashCardContext);
  const [disabledFlashCards, setDisabledFlashCards] = useState(
    context.flashcards.map((_) => false)
  );

  function updateDisabledFlashCards(disabled = true) {
    if (disabled) {
      setDisabledFlashCards(disabledFlashCards.map((_) => true));
    } else {
      setDisabledFlashCards(disabledFlashCards.map((_) => false));
    }
  }

  const data = context.flashcards.map((flashcard, i) => (
    <FlashCard
      data={{
        flashcard,
        updateDisabledFlashCards: updateDisabledFlashCards,
        disabledFlashCards: disabledFlashCards[i],
      }}
    />
  ));

  return <Container>{data}</Container>;
}
