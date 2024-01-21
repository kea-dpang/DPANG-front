import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/common/HeaderBar/Index'
import Footer from '../../../components/common/Footer/Index'

const ProductListPage = () => {
    return (
        <div>
                <Wrap>
                    <Header/>
                        <Outlet/>
                    <Footer />
                </Wrap>
        </div>
    );
};

export default ProductListPage;

const Wrap = styled.div`
    width: 100vw;
    max-width: 100%;
    box-sizing: border-box;
    min-width: 1550px;
    display: flex;
    flex-direction: column;
`;