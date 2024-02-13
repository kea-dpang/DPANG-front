import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductSummary from "./ProductSummary";
import ProductDetailNav from "./ProductDetailNav";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import ProductAsk from "@userPages/Product/ProductAsk";
import RecentWatched from "./RecentWatched";
import { GET_ItemInfo } from "@api/Item";

const DetailPage = () => {
  const { itemId } = useParams();
  const [itemInfo, setItemInfo] = useState(); // 상품 상세조회 할 id값 주소에서 가져오기
  let watched = JSON.parse(localStorage.getItem("watched") || "[]");

  const getInfo = () => {
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
    getInfo();
    window.scrollTo({ top: 0 });
  }, [itemId]);
  // 최근 본 상품 localstorage에 저장
  useEffect(() => {
    if (!itemInfo) return;

    // itemId가 이미 배열에 있는지 검사
    const existingItem = watched.find((item) => item.id === itemInfo.id);

    // itemId가 이미 배열에 있다면 제거 (중복제거)
    if (existingItem) {
      watched = watched.filter((item) => item.id !== itemInfo.id);
    }

    // 최근본 상품 배열의 맨 앞에 추가
    watched.unshift({
      id: itemInfo.id,
      name: itemInfo.name,
      thumbnailImage: itemInfo.thumbnailImage,
      price: itemInfo.price,
      discountRate: itemInfo.discountRate,
    });

    // 최근 본 상품의 최대 크기는 12. 넘어가면 가장 오래된 것부터 삭제
    if (watched.length > 12) {
      watched.pop();
    }
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [itemInfo]);

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
            <RecentWatched />
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
