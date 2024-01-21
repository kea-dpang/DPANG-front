import logo from "../../../assets/images/logo.png";
import styled from "styled-components";
import NavBar from "./NavBar";
import { useState } from "react";
import CategoryList from "./CategoryList";

const Container = styled.div`
  height: 3rem;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 0 12rem;
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

function Index() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  return (
    <>
      <Container>
        <NavBar handleClick={handleClick} />
      </Container>
      {click && <CategoryList />}
    </>
  );
}

export default Index;
