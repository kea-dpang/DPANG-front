import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import ProductDefaultEnroll from "./ProductDefaultEnroll";
import ProductDetailEnroll from "./ProductDetailEnroll";

// 상품 이벤트 등록 index 페이지
const ProductEnrollPage = () => {
    const navi = useNavigate();
    const [productInfo, setProductInfo] = useState({
        productName: '',
        productPrice: '',
        brandName: '',
        productImage: '',
        detailImage: '',
        stock: '',
    });

    const handleAddBtn = () => {
        console.log('상품 등록완료');
        console.log(productInfo);
    }

    return (
        <>
            <Wrap>
                <PageName className="cm-LBold30 col-Black"> 상품 관리 </PageName>
                <PageSubName className='cm-MBold24 col-Navy'> 상품 등록</PageSubName>
                {/* 이벤트 내용 입력하는 공간 */}
                <InputSection>
                <ProductDefaultEnroll productInfo={productInfo} setProductInfo={setProductInfo} />
                    <ProductDetailEnroll productInfo={productInfo} setProductInfo={setProductInfo} />
                    {/* 등록하기 버튼 */}
                    <Button>
                        <button className="Btn_S_Navy" onClick={() => handleAddBtn()}>추가하기</button>
                    </Button>
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
`
const InputSection = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem 6rem 7.5rem;
    flex-direction: column;
    align-items: center;
    gap: -0.0625rem;
`
const Button = styled.div`
    display: flex;
`;
