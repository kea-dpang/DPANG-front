import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/UserHeaderBar/Index";
import Footer from "@components/UserFooter/Index";
import ProductSummary from "./ProductSummary";
import ProductDetailNav from "./ProductDetailNav";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import ProductAsk from "@userPages/Product/ProductAsk";
import { GET_ItemInfo } from "@api/Item";
const ProductDetail = () => {
  const { itemId } = useParams();
  // 어떤 nav가 눌려있는지 - 상품 정보, 후기, 문의
  const [clicked, setClicked] = useState(1);
  const [itemInfo, setItemInfo] = useState(); // 상품 상세조회 할 id값 주소에서 가져오기

  useEffect(() => {
    GET_ItemInfo(itemId)
      .then((data) => {
        console.log("상품 상세보기 data : ", data.data);
        setItemInfo(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // clicked 정보가 바뀔 때마다 해당 위치로 이동하기
  useEffect(() => {
    console.log("clicked: ", clicked);
  }, [clicked]);

  return (
    <>
      <Wrap>
        <Header />
        {itemInfo && (
          <>
            {/* 상품 미리보기 (사진, 이름, 장바구니 담기 등) */}
            <ProductSummary item={itemInfo} />
            {/* 상품정보, 후기, 문의 nav bar */}
            <ProductDetailNav clicked={clicked} setClicked={setClicked} />
            {/* 상품정보, 후기, 문의 section
                        {clicked === 1 && <ProductInfo item={itemInfo}/>}
                        {clicked === 2 && <ProductReview item={itemInfo}/>}
                        {clicked === 3 && <ProductAsk item={itemInfo}/>} */}
            {/* 상품정보, 후기, 문의 section */}
            <ProductInfo item={itemInfo} />
            <ProductReview item={itemInfo} />
            <ProductAsk item={itemInfo} />
          </>
        )}
        <Footer />
      </Wrap>
    </>
  );
};

export default ProductDetail;

const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 1550px;
`;
