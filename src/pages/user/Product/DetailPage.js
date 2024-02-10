import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductSummary from "./ProductSummary";
import ProductDetailNav from "./ProductDetailNav";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import ProductAsk from "@userPages/Product/ProductAsk";
import { GET_ItemInfo } from "@api/Item";

const DetailPage = () => {
  const { itemId } = useParams();
  const [itemInfo, setItemInfo] = useState(); // 상품 상세조회 할 id값 주소에서 가져오기

  const getList = () => {
    GET_ItemInfo(itemId)
      .then((data) => {
        console.log("상품 상세보기 data : ", data);
        setItemInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Wrap>
        {itemInfo && (
          <>
            {/* 상품 미리보기 (사진, 이름, 장바구니 담기 등) */}
            <ProductSummary item={itemInfo} />
            {/* 상품정보, 후기, 문의 nav bar */}
            <div style={{ position: "sticky", top: "0" }}>
              <ProductDetailNav item={itemInfo} />
            </div>
            {/* 상품정보, 후기, 문의 section */}
            <div id="info">
              <ProductInfo item={itemInfo} />
            </div>
            <div id="review">
              <ProductReview item={itemInfo} />
            </div>
            <div id="ask">
              <ProductAsk item={itemInfo} />
            </div>
          </>
        )}
      </Wrap>
    </>
  );
};

export default DetailPage;

const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 1550px;
`;
