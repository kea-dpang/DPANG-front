import React from "react";
import Header from "@components/UserHeaderBar/Index";
import Footer from "@components/UserFooter/Index";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const EventPage = ({ userType }) => {
  return (
    <Wrap>
      <Header />
      <Title className="cm-LBold30">진행중인 이벤트</Title>
      <Outlet />
      <Footer />
    </Wrap>
  );
};

export default EventPage;
const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 15.9375rem 0rem 15.9375rem;
`;
