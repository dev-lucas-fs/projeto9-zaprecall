import { Button, Container, Text } from "./styles";
import play from "../../../../assets/seta_play.png";
import almost from "../../../../assets/icone_quase.png";
import notYet from "../../../../assets/icone_erro.png";
import zap from "../../../../assets/icone_certo.png";

const ICONS = {
  "not-yet": notYet,
  almost: almost,
  zap: zap,
};

export default function CloseFlashCard({
  name,
  openCard,
  disabled,
  doneStatus,
}) {
  return (
    <Container data-identifier="flashcard">
      {doneStatus !== "" ? (
        <Text
          style={{ "text-decoration-line": "line-through" }}
          doneStatus={doneStatus}
          data-identifier="flashcard-index-item"
        >
          {name}
        </Text>
      ) : (
        <Text doneStatus={doneStatus}>{name}</Text>
      )}
      {doneStatus === "" ? (
        <Button
          data-identifier="flashcard-show-btn"
          disabled={disabled}
          onClick={openCard}
        >
          <img src={play} />
        </Button>
      ) : (
        <img data-identifier="flashcard-status" src={ICONS[doneStatus]} />
      )}
    </Container>
  );
}
