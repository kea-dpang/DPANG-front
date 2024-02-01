import React from "react";
import styled from "styled-components";
import Item from "../../../components/common/ProductCard/Index";

const ItemSlide = ({ items, isActive }) => {
  console.log("items: ", items);
  return (
    <Slide className={isActive ? "active" : null}>
      {items.map((item) => (
        <Item key={item.itemId} value={item} />
      ))}
    </Slide>
  );
};

export default ItemSlide;

const Slide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0;
  &.active {
    opacity: 1;
  }
  transition: opacity 0.3s ease-in-out;
`;
