import React, { useEffect } from 'react';
import styled from 'styled-components';

const ProductDetailNav = ({ clicked, setClicked }) => {
    const handleClick = (id) => {
        switch(id) {
            case 'detail':
                setClicked(1);
                break;
            case 'review':
                setClicked(2);
                break;
            case 'ask':
                setClicked(3);
                break;
            default:
                break;
        }
    };
    
    return (
        <Wrap className='cm-SBold18'>
            {/* clicked 상태값이 각 Btn의 상태값과 같은지 true, false 넘겨주어서 버튼 색 바꾸기 */}
            <NavBtn onClick={() => handleClick('detail')} data-clicked={clicked === 1}>상품 정보</NavBtn>
            <NavBtn onClick={() => handleClick('review')} data-clicked={clicked === 2}>후기</NavBtn>
            <NavBtn onClick={() => handleClick('ask')} data-clicked={clicked === 3}>문의</NavBtn>
        </Wrap>
    );
};

export default ProductDetailNav;

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5rem;
`
const NavBtn = styled.button`
    display: flex;
    width: 24rem;
    height: 3.5rem;
    justify-content: center;
    padding-top: 1rem 10.125rem;
    align-items: center;
    border: 1px solid var(--dark-grey);
    background-color: ${(props) => (props['data-clicked'] ? 'var(--white)' : 'var(--light-grey)')};
    color: ${(props) => (props['data-clicked'] ? 'var(--navy)' : 'var(--dark-grey)')};
`
// const NavBtn = styled.button`
//     display: inline-flex;
//     padding: 1rem 10.125rem;
//     align-items: center;
//     border: 1px solid var(--dark-grey);
//     background-color: ${(props) => (props.clicked ? 'var(--white)' : 'var(--light-grey)')};
//     color: ${(props) => (props.clicked ? 'var(--navy)' : 'var(--dark-grey)')};
// `