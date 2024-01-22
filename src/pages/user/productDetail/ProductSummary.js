import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemData from '../../../assets/datas/ItemData';
import Price from '../searchPage/filterComp/Price';

const ProductSummary = (props) => {
    // const [item, setItem] = useState(null);
    // const itemId = props.id;

    return(
        <>
            <Wrap>
                {/* 카테고리 */}
                <div className='cm-SRegular16 col-Black'>{ItemData[0].category} {'>'} {ItemData[0].sub_category} </div>
                {/* 상품 사진 & 이름, 가격, 수량 */}
                <SummaryWrap>
                    {/* 상품 사진 */}
                    <ProductImg $imgUrl={ItemData[0].imgUrl}/>
                    {/* 상품 이름 / 가격 / 판매자 / 상품선택 / 좋아요 / 장바구니 */}
                    <ContextWrap>
                        {/* 상품 이름 */}
                        <div className='cm-XLBold36 col-Black'> {ItemData[0].name}</div>
                        {/* 상품 가격 */}
                        <PriceWrap>
                            
                        </PriceWrap>
                    </ContextWrap>
                </SummaryWrap>
            </Wrap>
        </>
    );
};

export default ProductSummary;

const Wrap = styled.div`
    display: flex;
    padding: 1.625rem 15.9375rem;
    flex-direction: column;
    align-items: flex-start;
`
const SummaryWrap = styled.div`
    padding-top: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.9375rem;
`
const ProductImg = styled.div`
    width: 30.97175rem;
    height: 28.86906rem;
    background: url(${props => props.$imgUrl}) center center / cover no-repeat;
`
const ContextWrap = styled.div`
    padding-left: 3rem;
`
const PriceWrap = styled.div`

`
