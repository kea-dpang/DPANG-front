import React from 'react';
import styled from 'styled-components';
import ItemDetailData from '../../../assets/datas/ItemDetailData';


// 상품 상세정보 section
const ProductInfo = (props) => {
    return (
        <Wrap>
            <ImgDiv>
                <Image src={props.item.detailImgUrl} alt="상품 상세설명" />
            </ImgDiv>
        </Wrap>
    );
};

export default ProductInfo;
const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const ImgDiv = styled.div`
    padding-top: 5rem;
    width: 72rem;  // div의 너비 설정
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    max-width: 100%;  // 이미지의 최대 너비를 div의 너비로 설정
    object-fit: contain;  // 이미지 비율을 유지하면서 div에 맞춤
`;