import React, { useState } from "react";
import TempItemData from "../../../assets/data/user/UserCartData";
import CartItem from "./CartItem";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../../../styles/fonts.css";

const CartList = () => {
  const [brandSelection, setBrandSelection] = useState(true);

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

  const renderBrandBoxes = () => {
    const brands = [...new Set(TempItemData.map((item) => item.brand))];

    return brands.map((brand) => {
      // 브랜드에 해당하는 아이템만 필터링
      const filteredItems = TempItemData.filter((item) => item.brand === brand);

      return (
        <MainContainer>
          <Box
            key={brand}
            sx={{
              "& > :not(style)": { m: 0, width: "74.8125rem" },
              background: "var(--light-grey, #F4F4F4)",
              display: "flex",
              flexDirection: "column",
              gap: "1.375rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              padding="1rem 0rem 0rem 1.2rem"
            >
              <Checkbox
                checked={brandSelection[brand] || false}
                onChange={(e) => handleBrandSelection(brand, e.target.checked)}
              />
              <p className="cm-SRegular16 col-Black" key={brand}>
                {brand}
              </p>
            </Box>
            <BrandItems>
              {brandSelection[brand] &&
                filteredItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
            </BrandItems>
            <BrandPriceBox>
              {brandSelection[brand] && (
                <p className="cm-SBold16 col-Black">{BrandPrice(brand)}마일</p>
              )}
            </BrandPriceBox>
          </Box>
        </MainContainer>
      );
    });
  };

  return <>{renderBrandBoxes()}</>;
};

export default CartList;

const MainContainer = styled.div`
  width: 74.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 74.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.38rem;
`;

const BrandItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.3125rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem 0rem 0rem;
`;

const BrandPriceBox = styled.div`
  width: 74.8125rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
