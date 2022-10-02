import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  background: #fff;
  padding: 20px 15px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.black};
`;

export const Text = styled.h2`
  font-family: "Recursive", sans-serif;
  font-weight: bold;
  color: ${(props) =>
    props.theme[props.doneStatus === "" ? "undone" : props.doneStatus]};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: transparent;
  cursor: pointer;
  box-sizing: border-box;
  width: 30px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
