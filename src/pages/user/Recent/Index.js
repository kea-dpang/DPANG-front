import React from "react";
import Header from "@components/UserHeaderBar/Index";
import styled from "styled-components";
import Footer from "@components/UserFooter/Index";
import RecentPage from "./RecentPage";

const Index = () => {
  return (
    <Wrap>
      <Header />
      <RecentPage />
      <Footer />
    </Wrap>
  );
};

export default Index;
const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  min-width: 1550px;
`;
