import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import '../../../../styles/fonts.css';
import ProductEventPage from '../enroll/ProductEventPage';
import BrandEventPage from '../enroll/BrandEventPage';

// 브랜드 이벤트 수정 index 페이지
const Index = () => {
    // 상품이벤트 or 브랜드 이벤트 버튼 클릭상태 저장 (기본 : 상품 이벤트)
    const [activeNav, setActiveNav] = useState('상품 이벤트');

    const handleNavClick = (navName) => {
        setActiveNav(navName);
    };
    return (
        <>  
            <Wrap>
                <PageName className='cm-LBold30 col-Black'> 이벤트 관리</PageName>
                <PageSubName className='cm-MBold24 col-Navy'> 브랜드 이벤트 수정</PageSubName>
                {/* 상품 이벤트 & 브랜드 이벤트 선택 버튼 */}
                <ProductBrandTab> 
                    <Nav className='cm-SRegular16' $isActive={activeNav === '상품 이벤트'} onClick={() => handleNavClick('상품 이벤트')}> 상품 이벤트</Nav>
                    <Nav className='cm-SRegular16' $isActive={activeNav === '브랜드 이벤트'} onClick={() => handleNavClick('브랜드 이벤트')}> 브랜드 이벤트</Nav>
                </ProductBrandTab>
                {/* 이벤트 내용 입력하는 공간 */}
                <InputSection>
                    {activeNav === '상품 이벤트' ? <ProductEventPage /> : <BrandEventPage />}
                </InputSection>
            </Wrap>
        </>
    );
};

export default Index;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const PageName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 0rem 0.9375rem 7.5rem;
    align-items: center;
`
const PageSubName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 7.5rem 0.9375rem 7.5rem;
    align-items: center;
    font-size: 1.5rem;
`
const ProductBrandTab = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem;
    align-items: flex-start;
`
const Nav = styled.div`
    display: flex;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: var(--hi, 0.625rem);
    border-radius: 0.9375rem 0.9375rem 0rem 0rem;

    // 상품 이벤트 or 브랜드 이벤트 선택
    background-color: ${props => props.$isActive ? 'var(--navy)' : 'var(--semi-light-grey)'};
    color: var(--white);
    cursor: pointer;
`
const InputSection = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem 6.25rem 7.5rem;
    flex-direction: column;
    align-items: center;
    gap: -0.0625rem;
`
