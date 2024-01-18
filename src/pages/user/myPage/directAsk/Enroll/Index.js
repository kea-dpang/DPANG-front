import React, { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import AskTitle from './AskTitle';
import AskContent from './AskContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AskEnrollPage = () => {

    return (
        <Wrap>
            <Title>
                <h1 className='cm-LBold30'>1:1 문의</h1>
            </Title>
            <Item>
                <p>유형</p>
                <Category/>
            </Item>

            <Item>
                <p>제목</p>
                <AskTitle/>
            </Item>

            <Item>
                <p>내용</p>
                <AskContent/>
            </Item>

            <Submit>
                <button type='submit' className='Btn_M_Navy'>문의접수</button>
            </Submit>
        </Wrap>
    );
};

export default AskEnrollPage;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    display: flex;
    height: 8rem;
    align-items: center;

    border-bottom: 1px solid var(--black);
`;

const Item = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    gap: 6.44rem;
    
    position: relative;
    textarea {
        width: 61rem;
        height: 32.75rem;
        border-radius: 0.3125rem;
        border: 1px solid var(--dark-grey, #BCBCBC);
        background: var(--white, #FFF);
        margin: 8px; // margin을 주고 싶은 경우
        padding: 1rem; // padding을 주고 싶은 경우
        box-sizing: border-box;

        &:focus {
            border-color: var(--dark-grey, #BCBCBC); // 클릭했을 때 테두리 색상
            outline: none; // 대부분의 브라우저에서 텍스트 필드에 자동으로 적용되는 아웃라인을 제거
    
        }
    }
`;
const FakePlaceholder = styled.div`
    position: absolute;
    top: 5rem;
    left: 13rem;
    right: 0;
    /* margin: 1rem; */

    pointer-events: none; // 텍스트 영역을 클릭했을 때 가짜 placeholder에 의해 방해받지 않도록 설정
    opacity: ${props => (props.show ? 1 : 0)}; // show prop에 따라 보여지거나 숨겨짐
    /* transition: opacity 0.25s; */
    color: var(--dark-grey, #BCBCBC);
    /* margin: 1rem; */

    line-height: 1.25rem;
`;

const Submit = styled.div`
    padding-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;


