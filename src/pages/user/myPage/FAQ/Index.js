import React, { useEffect } from "react";
import styled from "styled-components";
import FaqList from "pages/user/myPage/FAQ/FAQList";

const FaqPage = () => {
  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">FAQ</h1>
      </Title>
      <Main>
        <FaqList />
      </Main>
    </Wrap>
  );
};

export default FaqPage;

const Wrap = styled.div``;
const Title = styled.div`
  /* padding-top: 3.375rem; */
  display: flex;
  /* width: 72.5rem; */
  height: 8rem;
  align-items: center;

  border-bottom: 1px solid var(--black);
`;
const Main = styled.div`
  /* padding-top: 5rem; */
`;
