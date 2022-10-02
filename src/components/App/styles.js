import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 355px;
  max-height: 800px;
  border-radius: 5px;
  background: ${(props) => props.theme.background};
  padding: 40px 0px 0px 0px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  > *:nth-child(1) {
    grid-row: 1/2;
  }

  > *:nth-child(2) {
    grid-row: 2/3;
  }

  > *:nth-child(3) {
    grid-row: 3/4;
  }
`;

export const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cecece;
`;
