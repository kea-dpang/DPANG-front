import styled from "styled-components";
import React from "react";
import Price from "./Filter/Price";

function valuetext(value) {
  return `${value}°C`;
}

const FilterSideBar = (props) => {
  return (
    <Wrap>
      <Price />
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
`;
