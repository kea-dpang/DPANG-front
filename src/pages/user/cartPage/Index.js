import styled from "styled-components";
import React from "react";
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartPrice from "./CartPrice";
import Header from "../../../components/common/HeaderBar/Index";

const Index = () => {

    return (

        <>
        <Wrap>
            <Header/>
            <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>
        </Wrap>
        </>
    );
}

export default Index;

const Wrap = styled.div`
    width: 100vw;
    align-items: center;
    min-width: 1550px;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 2.25rem 15.9375rem 0rem 15.9375rem;
`;

const InputSection = styled.div`
    display: flex;
    width: 66.25rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    flex-direction: column;
    align-items: center;
    gap: 2.3125rem;
`;