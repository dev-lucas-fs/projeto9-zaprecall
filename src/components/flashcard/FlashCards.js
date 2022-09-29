import { useContext, useState } from "react";
import { FlashCardContext } from "../../contexts/FlashcardContext";

export default function FlashCards() {
  const context = useContext(FlashCardContext);
  const [disabledFlashCards, setDisabledFlashCards] = useState(
    context.flashcards.map((_) => false)
  );
  const data = context.flashcards.map((flashcard, i) => (
    <div>flashcard.id</div>
  ));

  return <>{data}</>;
}
