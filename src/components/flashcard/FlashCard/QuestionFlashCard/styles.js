import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #ffffd4;
  border-radius: 5px;
  padding: 20px 15px 10px 15px;
  min-height: 150px;
  justify-content: space-between;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0 0 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.black};
`;
