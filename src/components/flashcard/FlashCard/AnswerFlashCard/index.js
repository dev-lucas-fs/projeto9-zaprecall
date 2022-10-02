import { useContext, useEffect } from "react";
import { FlashCardContext } from "../../../../contexts/FlashcardContext";
import { Button, Container, ContainerButton, Text, ZapButton } from "./styles";

export default function AnswerFlashCard({ id, answer, updateCardType }) {
  const context = useContext(FlashCardContext);

  function handleClick(doneStatus) {
    context.updateDoneStatus(id, doneStatus);
    updateCardType(0);
  }

  useEffect(() => {
    context.updateDoneStatus(id, "undone");
  }, []);
  return (
    <Container>
      <Text data-identifier="flashcard-answer">{answer}</Text>
      <ContainerButton>
        <Button
          data-identifier="forgot-btn"
          typeButton={"not-yet"}
          onClick={() => handleClick("not-yet")}
        >
          Não lembrei
        </Button>
        <Button
          data-identifier="almost-forgot-btn"
          typeButton={"almost"}
          onClick={() => handleClick("almost")}
        >
          Quase não lembrei
        </Button>
        <Button
          data-identifier="zap-btn"
          typeButton={"zap"}
          onClick={() => handleClick("zap")}
        >
          Zap!
        </Button>
      </ContainerButton>
    </Container>
  );
}
