import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductDefaultEdit from "./ProductDefaultEdit";
import ProductDetailEnroll from "./ProductDetailEdit";
import { useParams } from "react-router-dom";
import ItemDetailData from "../../../../../assets/datas/ItemDetailData";
// 상품 index 페이지
const ProductEditPage = () => {
  let itemId = useParams().id;

  const navi = useNavigate();
  const [itemInfo, setItemInfo] = useState(); // 상품 상세조회 할 id값 주소에서 가져오기
  //   주소에서 가져온 id값과 일치하는 상품조회 데이터 가져오기
  useEffect(() => {
    const matchedItem = ItemDetailData.find((item) => item.id === itemId);
    setItemInfo(matchedItem);
  }, [itemId]);
  //   const [productInfo, setProductInfo] = useState({
  //     productName: "",
  //     productPrice: "",
  //     brandName: "",
  //     productImage: "",
  //     detailImage: "",
  //     stock: "",
  //   });

  const handleAddBtn = () => {
    console.log("상품 수정완료");
    console.log(itemInfo);
  };

  return (
    <>
      {itemInfo && (
        <Wrap>
          <PageName className="cm-LBold30 col-Black"> 상품 관리 </PageName>
          <PageSubName className="cm-MBold24 col-Navy"> 상품 수정</PageSubName>
          {/* 상품 내용 입력하는 공간 */}
          <InputSection>
            <ProductDefaultEdit
              productInfo={itemInfo}
              setProductInfo={setItemInfo}
            />
            <ProductDetailEnroll
              productInfo={itemInfo}
              setProductInfo={setItemInfo}
            />
            {/* 수정하기 버튼 */}
            <Button>
              <button className="Btn_S_Navy" onClick={() => handleAddBtn()}>
                수정하기
              </button>
            </Button>
          </InputSection>
        </Wrap>
      )}
    </>
  );
};

export default ProductEditPage;
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
const Button = styled.div`
  display: flex;
`;
