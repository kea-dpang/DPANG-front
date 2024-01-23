import React from 'react';
import styled from 'styled-components';
import ProductAskList from './AskTable';

const ProductReview = (props) => {
    return (
        <Wrap>
            <PageName className='cm-MBold24 col-Black'> 상품 문의 </PageName>
            <ProductAskList/>
        </Wrap>
    );
};

export default ProductReview;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5rem;
`
const PageName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 0rem 0.9375rem 8rem;
    align-items: center;
`