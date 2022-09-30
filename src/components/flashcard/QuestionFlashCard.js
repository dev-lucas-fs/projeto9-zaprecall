export default function QuestionFlashCard({ updateCardType }) {
  function handleClick() {
    updateCardType(2);
  }

  return (
    <div>
      QuestionFlashCard
      <button onClick={() => updateCardType(2)}>Virar</button>
    </div>
  );
}
