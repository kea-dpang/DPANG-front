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

  //사용자 navbar에서 클릭한 경우에 handling
  const handleClick = () => {
    setClick(!click);
  };

  //카테고리 리스트를 펼쳤을때, 리스트 밖 영역을 클릭하는 경우의 handling
  const handlePopUpClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Container>
        {/* 사용자 상단에 위치하는 navbar 불러오기 */}
        <NavBar handleClick={handleClick} />
      </Container>
      {/* click여부에 따라 보였다가 안보였다가 */}
      {/* 카테고리 리스트를 팝업처럼 다른 요소와 독립적으로 띄워서 보여줌 */}
      {click && <CategoryList handleClick={handlePopUpClick} />}
    </>
  );
}

export default Index;
