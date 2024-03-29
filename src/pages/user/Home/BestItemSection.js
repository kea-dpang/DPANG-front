import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const BestItemSection = (props) => {
  console.log(props.title);
  console.log(props.filter);
  return (
    <>
      <Wrap>
        <Title
          className="cm-XLBold36"
          to={`/user/collections/best`}
          state={{ title: props.title }}
        >
          {props.title}
        </Title>
        <Carousel />
      </Wrap>
    </>
  );
};

export default BestItemSection;

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
