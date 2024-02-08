import React from "react";
import NotFound from "@images/notFound.png";
import styled from "styled-components";
const NotFoundPage = () => {
  console.log("404 not found");
  return (
    <Wrap>
      <Image src={NotFound} />
    </Wrap>
  );
};

export default NotFoundPage;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;
const Image = styled.img`
  width: 30rem;
  height: 40rem;
`;
