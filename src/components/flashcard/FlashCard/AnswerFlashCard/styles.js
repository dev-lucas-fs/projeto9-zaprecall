import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background-color: #ffffd4;
  border-radius: 5px;
  padding: 20px 15px 10px 15px;
  min-height: 150px;
  justify-content: space-between;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 0;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.black};
  line-height: 20px;
`;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  width: 100%;
  max-width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme[props.typeButton]};
  border-radius: 5px;
  border: none;
  color: #fff;
`;
