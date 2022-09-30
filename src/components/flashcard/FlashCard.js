import { useEffect, useState } from "react";
import AnswerFlashCard from "./AnswerFlashCard";
import CloseFlashCard from "./CloseFlashCard";
import QuestionFlashCard from "./QuestionFlashCard";

export default function FlashCard({ data }) {
  const { id, name, question, answer, doneStatus } = data.flashcard;
  const [cardType, setCardType] = useState(0);

  function openCard() {
    setCardType(1);
  }

  const cards = [
    <CloseFlashCard
      name={name}
      disabled={data.disabledFlashCards}
      openCard={openCard}
      doneStatus={doneStatus}
    />,
    <QuestionFlashCard updateCardType={(type) => setCardType(type)} />,
    <AnswerFlashCard updateCardType={(type) => setCardType(type)} id={id} />,
  ];

  return <>{cards[cardType]}</>;
}
