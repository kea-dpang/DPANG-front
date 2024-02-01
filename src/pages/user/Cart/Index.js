import styled from "styled-components";
import React, { useState } from "react";
import CartItem from "./CartItem";
import CartList from "./CartList";
import Header from "../../../components/common/UserHeaderBar/Index";
import TempItemData from "../../../assets/data/user/UserCartData";
import "../../../styles/fonts.css";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {

  return (
    <>
      <Wrap>
        <Header />
        <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>

        <InputSection>
          <CartList />
        </InputSection>

      </Wrap>
    </>
  );
};

export default Index;

const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;

const InputSection = styled.div`
  display: flex;
  width: 66.25rem;
  min-height: calc(100vh - 30rem);
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: column;
  align-items: center;
  gap: 2.3125rem;
  justify-content: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;

const SubContainer = styled.div`
  width: 74.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.38rem;
`;

const TotalPriceBox = styled.div`
  width: 74.8125rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 14.8125rem;
`;

const OrderButton = styled.button`
  display: flex;
  width: 74.625rem;
  height: 4.1875rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  background: var(--navy, #043277);
  margin-top: 2rem;
`;
