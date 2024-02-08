import React, { useState, useEffect, useRef } from "react";
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
  // ref 생성
  const infoRef = useRef(null);
  const reviewRef = useRef(null);
  const askRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    GET_ItemInfo(itemId)
      .then((data) => {
        console.log("상품 상세보기 data : ", data);
        setItemInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrap>
        {itemInfo && (
          <>
            {/* 상품 미리보기 (사진, 이름, 장바구니 담기 등) */}
            <ProductSummary item={itemInfo} />
            {/* 상품정보, 후기, 문의 nav bar */}
            {/* {isRefsReady && ( */}
            <div style={{ position: "sticky", top: "0" }}>
              <ProductDetailNav
                handleScrollInfo={() => handleScroll(infoRef)}
                handleScrollReview={() => handleScroll(reviewRef)}
                handleScrollAsk={() => handleScroll(askRef)}
                infoRef={infoRef}
                reviewRef={reviewRef}
                askRef={askRef}
                item={itemInfo}
              />
            </div>
            {/* )} */}

            {/* 상품정보, 후기, 문의 section */}
            <div ref={infoRef}>
              <ProductInfo item={itemInfo} />
            </div>
            <div ref={reviewRef}>
              <ProductReview item={itemInfo} />
            </div>
            <div ref={askRef}>
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
