import React from 'react';
import styled from 'styled-components';
import itemList from "../../../assets/datas/ItemData";
import Item from '../../../components/common/Item/Index';

const BestProductPage = () => {
    return (
        <>
            <Wrap>
                <Title className='cm-XLBold36'> 지금 가장 핫한 상품 🔥 </Title>
                <ItemWrap>
                    {itemList.map((item) => (
                        <Item key={item.id} value={item} />
                    ))}
                </ItemWrap>
            </Wrap>
        </>
    );
};

export default BestProductPage;

const Wrap = styled.div`
    display: flex;
    // padding: 1.9375rem 15.9375rem;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    padding: 5rem 0rem;
`
const ItemWrap = styled.div`
    width: 70rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3.0625rem;
`