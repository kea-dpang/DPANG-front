import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@components/UserHeaderBar/Index";
import Footer from "@components/UserFooter/Index";

const Index = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box; // 100vw를 주고, padding을 주니까 가로스크롤이 생기므로
  min-width: 1550px;
`;

export default Index;
