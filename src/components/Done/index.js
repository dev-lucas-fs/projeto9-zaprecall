import React, { useContext } from "react";
import { FlashCardContext } from "../../contexts/FlashcardContext";
import { Container, ContainerIcon, ContainerText } from "./styles";

import notYet from "./../../assets/icone_erro.png";
import almost from "./../../assets/icone_quase.png";
import zap from "./../../assets/icone_certo.png";

const icons = {
  "not-yet": notYet,
  almost: almost,
  zap: zap,
};

export default function Done() {
  const context = useContext(FlashCardContext);

  function isAllDone() {
    const done = context.flashcards.filter(
      (flashcard) =>
        flashcard.doneStatus != "" && flashcard.doneStatus != "undone"
    );
    return done.length === context.flashcards.length;
  }

  return (
    <Container>
      <ContainerText data-identifier="flashcard-counter">
        {
          context.flashcards.filter((flashcard) => flashcard.doneStatus !== "")
            .length
        }
        /{context.flashcards.length} CONCLUÍDOS
      </ContainerText>
      <ContainerIcon>
        {isAllDone()
          ? context.flashcards.map(({ doneStatus }) => (
              <img src={icons[doneStatus]} />
            ))
          : ""}
      </ContainerIcon>
    </Container>
  );
}

/*

*/
