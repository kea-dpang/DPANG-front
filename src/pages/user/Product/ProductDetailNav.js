import React, { useState, useEffect } from "react";
import styled from "styled-components";
const ProductDetailNav = ({
  handleScrollInfo,
  handleScrollReview,
  handleScrollAsk,
  infoRef,
  reviewRef,
  askRef,
}) => {
  const [selected, setSelected] = useState("info");
  useEffect(() => {
    const onScroll = () => {
      const infoOffset = infoRef.current.offsetTop - 10 || 0;
      const reviewOffset = reviewRef.current.offsetTop - 10 || 0;
      const askOffset = askRef.current.offsetTop - 10 || 0;

      if (window.scrollY + 1 > askOffset) {
        setSelected("ask");
      } else if (window.scrollY + 0.5 >= reviewOffset) {
        setSelected("review");
      } else if (window.scrollY + 10 > infoOffset) {
        setSelected("info");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Wrap className="cm-SBold18">
      <NavBtn
        onClick={() => {
          handleScrollInfo();
          setSelected("info");
        }}
        data-clicked={selected === "info"}
      >
        상품 정보
      </NavBtn>
      <NavBtn
        onClick={() => {
          handleScrollReview();
          setSelected("review");
        }}
        data-clicked={selected === "review"}
      >
        후기
      </NavBtn>
      <NavBtn
        onClick={() => {
          handleScrollAsk();
          setSelected("ask");
        }}
        data-clicked={selected === "ask"}
      >
        문의
      </NavBtn>
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
const NavBtn = styled.button`
  display: flex;
  width: 24rem;
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
