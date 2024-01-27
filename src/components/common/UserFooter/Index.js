import styled from "styled-components";
import ImageBox from "./ImageBox";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BorderBar = styled.div`
  width: 90rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--navy);
`;

function Index() {
  return (
    <Container>
      <BorderBar>
        Copyright 2024 DPANG all rights reserved
        <ImageBox />
      </BorderBar>
    </Container>
  );
}
export default Index;
