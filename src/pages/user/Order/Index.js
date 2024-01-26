import styled from "styled-components";
import React, { useState } from "react";
import CartList from "../Cart/CartList";
import Header from "../../../components/common/UserHeaderBar/Index";
import TempItemData from "../../../assets/data/user/UserCartData";
import Checkbox from "@mui/material/Checkbox";
import "../../../styles/fonts.css";
import OrderBox from "./OrderBox";

const Index = () => {
  const [brandSelection, setBrandSelection] = useState({});

  const handleBrandSelection = (brand, selected) => {
    setBrandSelection((prevState) => ({
      ...prevState,
      [brand]: selected,
    }));
  };

  const BrandPrice = (brand) => {
    let totalPrice = 0;
    TempItemData.filter(
      (item) => item.brand === brand && brandSelection[brand]
    ).forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // 각 브랜드별로 선택된 상품의 가격을 합산
    Object.entries(brandSelection).forEach(([brand, selected]) => {
      if (selected) {
        totalPrice += BrandPrice(brand);
      }
    });

    return totalPrice;
  };

  return (
    <>
      <Wrap>
        <Header />
        <Title className="cm-LBold30 col-DarkNavy">주문하기</Title>
        <InputSection>
          <OrderBox />
        </InputSection>
        <OrderButton>
          <p className="cm-SBold16 col-White">
            {calculateTotalPrice() + 3000} 마일 결제하기
          </p>
        </OrderButton>
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
  padding: 2.25rem 15.9375rem 2.25rem 15.9375rem;
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
`;

const OrderButton = styled.button`
  display: flex;
  width: 84.8125rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  background: var(--navy, #043277);
  margin-top: 2rem;
`;
