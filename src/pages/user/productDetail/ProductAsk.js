import React from 'react';
import styled from 'styled-components';
import ProductAskList from './AskTable';
import { ProductAskGuide } from '../../../assets/datas/ProductAskData';

const ProductReview = (props) => {
    return (
        <Wrap>
            <PageName className='cm-MBold24 col-Black'> 상품 문의 </PageName>
            <ButtonWrap>
                <Guide className='cm-SRegular16 col-SemiLightGrey'>
                    {ProductAskGuide.map((guide, index) => (
                            <div key={index}>
                                · &nbsp; {guide.context}
                            </div>
                        ))}
                </Guide>
                <Button>
                    <button className="Btn_S_Navy">문의하기</button>
                </Button>
            </ButtonWrap>
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
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 88.9375rem;
    padding: 0rem 8rem 0.9375rem 8rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    justify-content: start;
    align-items: center;
    gap: 40rem;
`
const Guide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
`
const Button = styled.div`
    display: flex;
`;