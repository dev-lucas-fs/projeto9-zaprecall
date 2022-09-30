import { useContext, useEffect } from "react";
import { FlashCardContext } from "../../contexts/FlashcardContext";

export default function AnswerFlashCard({ id, updateCardType }) {
  const context = useContext(FlashCardContext);

  function handleClick(doneStatus) {
    context.updateDoneStatus(id, doneStatus);
    updateCardType(0);
  }

  useEffect(() => {
    context.updateDoneStatus(id, "undone");
  }, []);

  return (
    <div>
      AnswerFlashCard
      <button onClick={() => handleClick("not-yet")}>Not Yet</button>
      <button onClick={() => handleClick("almost")}>Almost</button>
      <button onClick={() => handleClick("zap")}>Zap</button>
    </div>
  );
}
