import styled from "styled-components";
import React, { useState } from "react";
import Price from "./Filter/Price";
import Brand from "./Filter/Brand";
import Category from "./Filter/Category";
import { ReactComponent as ArrowStroke } from "@images/arrowStroke.svg";

const FilterSideBar = (props) => {
  const [openSubMenu, setOpenSubMenu] = useState([
    "브랜드",
    "가격대",
    "카테고리",
  ]);

  const handleSubMenuClick = (menuName) => {
    if (openSubMenu.includes(menuName)) {
      // 배열에 메뉴 이름이 포함되어 있는지 확인
      setOpenSubMenu(openSubMenu.filter((menu) => menu !== menuName)); // 메뉴 이름을 제거
    } else {
      setOpenSubMenu([...openSubMenu, menuName]); // 메뉴 이름을 추가
    }
  };

  return (
    <Wrap>
      {props.value == "search" && (
        <>
          <MenuWrap
            $isOpen={openSubMenu.includes("카테고리")}
            onClick={() => handleSubMenuClick("카테고리")}
          >
            <MenuName
              className="cm-SBold16"
              $isOpen={openSubMenu.includes("카테고리")}
            >
              카테고리
            </MenuName>
            <Arrow $isOpen={openSubMenu.includes("카테고리")} />
          </MenuWrap>
          {openSubMenu.includes("카테고리") && <Category />}
        </>
      )}
      {/* <MenuWrap
        $isOpen={openSubMenu.includes("브랜드")}
        onClick={() => handleSubMenuClick("브랜드")}
      >
        <MenuName
          className="cm-SBold16"
          $isOpen={openSubMenu.includes("브랜드")}
        >
          브랜드
        </MenuName>
        <Arrow $isOpen={openSubMenu.includes("브랜드")} />
      </MenuWrap>
      {openSubMenu.includes("브랜드") && <Brand />} */}

      <MenuWrap
        $isOpen={openSubMenu.includes("가격대")}
        onClick={() => handleSubMenuClick("가격대")}
      >
        <MenuName
          className="cm-SBold16"
          $isOpen={openSubMenu.includes("가격대")}
        >
          가격대
        </MenuName>
        <Arrow $isOpen={openSubMenu.includes("가격대")} />
      </MenuWrap>
      {openSubMenu.includes("가격대") && <Price />}
      <Btn className="cm-SRegular16"> 조회 </Btn>
    </Wrap>
  );
};

export default FilterSideBar;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  display: flex;
  padding: 0.3125rem 0.8125rem;
  align-items: center;
  border-radius: 0.1875rem;
  background: var(--navy);
  color: var(--white);
  margin-top: 2rem;
`;
const MenuWrap = styled.button`
  background: none;
  display: flex;
  width: 14rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 1.2rem 0.2rem;
  align-items: center;
  gap: 8rem;
  border-bottom: ${(props) =>
    props.$isOpen ? "none" : "1.5px solid var(--semi-light-grey)"};
`;
const MenuName = styled.div`
  width: 4rem;
  color: var(--black);
`;
const Arrow = styled(ArrowStroke)`
  color: var(--dark-grey);
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
