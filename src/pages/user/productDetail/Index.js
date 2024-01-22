import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../../components/common/HeaderBar/Index';
import Footer from '../../../components/common/Footer/Index';
import ProductSummary from './ProductSummary';

const ProductDetail = () => {
    const { itemId } = useParams();

    return (
        <>
            <Wrap>
                <Header/>
                <ProductSummary id={itemId}/>
                <Footer />
            </Wrap>
        </>
    );
};

export default ProductDetail;

const Wrap = styled.div`
    width: 100vw;
    align-items: center;
    min-width: 1550px;
`;
