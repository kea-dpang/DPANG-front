import React from 'react';
import styled from 'styled-components';
import itemList from "../../../assets/datas/ItemData";
import Item from '../../../components/common/Item/Index';

const EventProductPage = () => {
    return (
        <>
            <Wrap>
                <Title className='cm-XLBold36'> 록시땅 원데이 찬스 </Title>
                <ItemWrap>
                    {itemList.map((item) => (
                        <Item item={item} />
                    ))}
                </ItemWrap>
            </Wrap>
        </>
    );
};

export default EventProductPage;

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