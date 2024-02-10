import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
const ProductDetailNav = ({ item }) => {
  const [selected, setSelected] = useState("info");
  const handleClick = (section) => {
    setSelected(section);
  };
  return (
    <Wrap className="cm-SBold18">
      <Nav
        to="info"
        spy={true}
        smooth={true}
        data-clicked={selected === "info"}
        onSetActive={() => setSelected("info")}
      >
        상품 정보
      </Nav>
      <Nav
        to="review"
        spy={true}
        smooth={true}
        data-clicked={selected === "review"}
        onSetActive={() => setSelected("review")}
      >
        후기 ({item.reviewCount})
      </Nav>
      <Nav
        to="ask"
        spy={true}
        smooth={true}
        data-clicked={selected === "ask"}
        onSetActive={() => setSelected("ask")}
      >
        문의
      </Nav>
    </Wrap>
  );
};

export default ProductDetailNav;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
`;
const Nav = styled(Link)`
  cursor: pointer;
  display: flex;
  width: 25rem;
  height: 3.5rem;
  justify-content: center;
  padding-top: 1rem 10.125rem;
  align-items: center;
  border: 1px solid var(--dark-grey);
  background-color: ${(props) =>
    props["data-clicked"] ? "var(--white)" : "var(--light-grey)"};
  color: ${(props) =>
    props["data-clicked"] ? "var(--navy)" : "var(--dark-grey)"};
`;
