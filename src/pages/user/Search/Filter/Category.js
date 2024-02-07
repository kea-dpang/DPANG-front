import styled from "styled-components";
import React, { useState } from "react";
import categoryData from "@data/user/CategoryData";
const Category = ({ category, setCategory }) => {
  // const [selected, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    if (category === item.title) {
      setCategory(null); // 선택된 항목이 다시 클릭되면 선택 해제
    } else {
      setCategory(item.title); // 다른 항목이 클릭되면 선택
    }
  };

  return (
    <Wrap>
      {categoryData.map((item, index) => (
        <Item
          className="cm-SRegular16 col-Black"
          key={index}
          onClick={() => handleClick(item)}
          selected={category}
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
  width: 10.5625rem;
  padding: 0.3rem 0rem;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({ selected, children }) =>
    selected === children ? "var(--orange)" : "var(--black)"};
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: var(--orange);
  }
  &:active {
    transform: scale(0.95);
  }
`;
