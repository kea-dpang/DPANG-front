import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductDefaultEnroll from "./ProductDefaultEnroll";
import ProductDetailEnroll from "./ProductDetailEnroll";
import { POST_Item } from "@api/Item";

// 상품 이벤트 등록 index 페이지
const ProductEnrollPage = () => {
  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [productInfo, setProductInfo] = useState({
    itemName: "",
    itemPrice: "",
    sellerId: "",
    itemImage: "",
    category: "",
    subCategory: "",
    images: "",
    stockQuantity: "",
  });
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      productInfo.itemName !== "" &&
      productInfo.itemPrice !== "" &&
      productInfo.sellerId &&
      productInfo.itemImage &&
      productInfo.category &&
      productInfo.images &&
      productInfo.stockQuantity
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    productInfo.itemName,
    productInfo.itemPrice,
    productInfo.sellerId,
    productInfo.itemImage,
    productInfo.category,
    productInfo.images,
    productInfo.stockQuantity,
  ]);

  const handleSubmit = () => {
    console.log("상품 등록한다: ", productInfo);
    POST_Item(productInfo)
      .then((data) => {
        console.log("상품 등록");
        navi(`/admin/product`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 상품 관리 </PageName>
        <PageSubName className="cm-MBold24 col-Navy"> 상품 등록</PageSubName>
        {/* 이벤트 내용 입력하는 공간 */}
        <InputSection>
          <ProductDefaultEnroll
            productInfo={productInfo}
            setProductInfo={setProductInfo}
          />
          <ProductDetailEnroll
            productInfo={productInfo}
            setProductInfo={setProductInfo}
          />
          {/* 등록버튼 */}
          <Submit>
            <button
              onClick={handleSubmit}
              type="submit"
              className="Btn_S_Navy"
              disabled={!isFormValid}
              style={
                !isFormValid
                  ? {
                      backgroundColor: "var(--semi-light-grey)",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              추가하기
            </button>
          </Submit>
        </InputSection>
      </Wrap>
    </>
  );
};

export default ProductEnrollPage;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
`;
const PageSubName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 7.5rem 0.9375rem 8.5rem;
  align-items: center;
  font-size: 1.5rem;
`;
const InputSection = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6rem 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
const Submit = styled.div`
  display: flex;
  justify-content: flex-end;
`;
