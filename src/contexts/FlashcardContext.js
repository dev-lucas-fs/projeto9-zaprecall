import { useState, createContext } from "react";
import FLASHCARDS from "../mock/flashcardsMock";

export const FlashCardContext = createContext();

const FlashCardProvider = ({ children }) => {
  const [flashcards, setFlashCards] = useState(FLASHCARDS);

  const updateDoneStatus = (id, doneStatus) => {
    const updatedFlashCards = flashcards.map((flashcard) => {
      flashcard["id"] == id
        ? (flashcard.doneStatus = doneStatus)
        : (flashcard.doneStatus = flashcard.doneStatus);

      return flashcard;
    });
    setFlashCards(updatedFlashCards);
  };

  return (
    <FlashCardContext.Provider value={{ flashcards, updateDoneStatus }}>
      {children}
    </FlashCardContext.Provider>
  );
};

export default FlashCardProvider;
