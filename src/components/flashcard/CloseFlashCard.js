import styled from "styled-components";

const Text = styled.h2`
  color: ${(props) => {
    console.log(props.theme);
    return props.theme[props.doneStatus === "" ? "undone" : props.doneStatus];
  }};
`;

export default function CloseFlashCard({
  name,
  openCard,
  disabled,
  doneStatus,
}) {
  return (
    <div>
      <Text doneStatus={doneStatus}>{name}sss</Text>
      {doneStatus === "" ? (
        <button disabled={disabled} onClick={openCard}>
          Virar
        </button>
      ) : (
        `--${doneStatus}--`
      )}
    </div>
  );
}
