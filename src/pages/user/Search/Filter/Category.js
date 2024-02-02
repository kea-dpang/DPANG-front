import styled from "styled-components";
import React, { useState } from "react";
import categoryData from "@data/user/CategoryData";
const Category = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    // TODO: 필터링 걸어서 검색하는 API 추가
    // 이미 눌려있었다면 아이템 빼기
    if (selectedItems.includes(item.title)) {
      setSelectedItems(selectedItems.filter((i) => i !== item.title));
    } else {
      // 그게 아니라면, 해당 값 필터 리스트에 추가하기
      setSelectedItems([...selectedItems, item.title]);
    }
  };
  return (
    <Wrap>
      {categoryData.map((item, index) => (
        <Item
          className="cm-SRegular16 col-Black"
          key={index}
          onClick={() => handleClick(item)}
          selected={selectedItems.includes(item.title)}
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
  color: ${({ selected }) => (selected ? "var(--orange)" : "var(--black)")};
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: var(--orange);
  }
  &:active {
    transform: scale(0.95);
  }
`;
