import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@components/UserHeaderBar/Index";
import Footer from "@components/UserFooter/Index";

const ProductListPage = () => {
  return (
    <div>
      <Wrap>
        <Header />
        <Outlet />
        <Footer />
      </Wrap>
    </div>
  );
};

export default ProductListPage;

const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;
  min-width: 1550px;
`;
