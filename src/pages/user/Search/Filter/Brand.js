import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { GET_BrandList } from "@api/Brand";

const Brand = () => {
  const [brand, setBrand] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    GET_BrandList()
      .then((data) => {
        setBrand(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (item) => {
    // 이미 눌려있었다면 아이템 빼기
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      // 그게 아니라면, 해당 값 필터 리스트에 추가하기
      setSelectedItems([...selectedItems, item]);
    }
  };
  return (
    <>
      {brand.length > 0 && (
        <Wrap>
          {brand.map((item, index) => (
            <Item
              className="cm-SRegular16 col-Black"
              key={index}
              onClick={() => handleClick(item.name)}
              selected={selectedItems.includes(item.name)}
            >
              {item.name}
            </Item>
          ))}
        </Wrap>
      )}
    </>
  );
};

export default Brand;

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
  color: ${({ selected }) => (selected ? "var(--orange)" : "var(--black)")};
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: var(--orange);
  }
  &:active {
    transform: scale(0.95);
  }
`;
