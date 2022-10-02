import { Button, Container, ContainerButton, Text } from "./styles";
import flip from "./../../../../assets/seta_virar.png";

export default function QuestionFlashCard({ question, updateCardType }) {
  return (
    <Container>
      <Text data-identifier="flashcard-question">{question}</Text>
      <ContainerButton>
        <Button
          data-identifier="flashcard-turn-btn"
          onClick={() => updateCardType(2)}
        >
          <img src={flip} />
        </Button>
      </ContainerButton>
    </Container>
  );
}
