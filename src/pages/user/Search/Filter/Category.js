import styled from "styled-components";
import React from "react";
import categoryData from "@data/user/CategoryData";
const Category = () => {
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <Wrap>
      {categoryData.map((item, index) => (
        <Item
          className="cm-SRegular16 col-Black"
          key={index}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </Item>
      ))}{" "}
    </Wrap>
  );
};

export default Category;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const Item = styled.div`
  width: 17.5625rem;
  padding: 0.3rem 3rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: var(--navy);
  }
`;
