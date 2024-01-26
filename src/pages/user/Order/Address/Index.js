import styled from "styled-components";
import React from "react";
import '../../../../styles/fonts.css'
import AddressBox from './Change';

const Index = () => {

    return(
        <Wrap>
            <AddressBox/>
        </Wrap>
    );
};

export default Index;

const Wrap = styled.div`
width: 100vw;
align-items: center;
min-width: 84.875rem;
display: flex;
justify-content: center;
align-items: center;
`;