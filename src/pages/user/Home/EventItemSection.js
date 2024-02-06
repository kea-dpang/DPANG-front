import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const ItemSection = (props) => {
  console.log(props.title);
  console.log(props.filter);
  // TODO: 브랜드 조회해서 상품 리스트 뽑아내기
  return (
    <>
      <Wrap>
        <Title
          className="cm-XLBold36"
          to={`/user/collections/event/${props.id}`}
          state={{ title: props.title, sellerId: props.sellerId, id: props.id }}
        >
          {props.title}
        </Title>
        <Carousel sellerId={props.sellerId} filter="event" />
      </Wrap>
    </>
  );
};

export default ItemSection;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.9375rem 15.9375rem 6rem 15.9375rem;
`;
const Title = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding-bottom: 2.5rem;
`;
