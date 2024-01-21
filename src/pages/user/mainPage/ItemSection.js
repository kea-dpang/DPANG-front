import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ItemSlider from '../mainPage/ItemSlider';


const ItemSection = (props) => {
    console.log(props.title);
    console.log(props.filter);
  return (
    <>
        <Wrap>
            <Title className='cm-XLBold36' to={`/user/collections`}> {props.title} </Title>
            <ItemSlider/>
        </Wrap>
    </>
  );
};

export default ItemSection;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.9375rem 15.9375rem 6rem 15.9375rem;
`;
const Title = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding-bottom: 2.5rem;
`

