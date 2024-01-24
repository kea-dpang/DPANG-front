import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import PhotoIcon from '@mui/icons-material/Photo';

const ProductDefaultEnroll = () => {
    const [eventname, setEventName] = useState('');
    const [code, setCode] = useState([]);
    const [productList, setProductList] = useState([]);
    const [salepercent, setPercent] = useState('');
    const brand = ['브랜드를 선택해주세요', 'lg생활건강', '카카오']

    // 이벤트 이름 변경 감지
    const handleNameChange = (e) => {
        setEventName(e.target.value);
    };
    // 등록 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 상품코드, 할인율, 적용상품 정보 저장
    const handleSubmit = () => {

        alert('상품 등록 성공');
    };
    return (
        <Wrap>
            <div className="cm-SBold18 col-Navy">상품 기본 정보</div>
            {/* <Section> */}
                {/* 상품 정보 입력 칸 */}
                <Table>
                    {/* 상품명 등록 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">상품명</p>
                        <ContentBox>
                            <TextField 
                                id="eventname" 
                                onChange={handleNameChange}
                                variant="outlined" 
                                InputLabelProps={{shrink: true}} 
                                sx={{
                                    '& .MuiOutlinedInput-root': { 
                                        '&.Mui-focused fieldset': { 
                                            borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                        },
                                    },
                                }}
                                placeholder="상품명을 입력해주세요"
                            />
                        </ContentBox>
                    </Row>

                    {/* 이벤트 내용(사진) */}
                    <Row>
                        <p className="cm-SBold16 col-Black">사진</p>
                        <ContentBox>
                            <Fab color="inherit" aria-label="add" sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                                <PhotoIcon color="var(--light-grey)"/>
                            </Fab>
                        </ContentBox>
                    </Row>
                </Table>
            {/* </Section> */}
        </Wrap>
    );
};

export default ProductDefaultEnroll;
const Wrap = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 10rem 6.25rem 10rem;
    flex-direction: column;
`
const Section = styled.div`
    display: flex;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
    gap: -0.0625rem;
`
const ContentBox = ({ children }) => (
    <div style={{width: "100%", margin: "1rem"}}>
    <Box
        sx={{
            '& > :not(style)': { m: 0, width: '100%' },
            display: 'flex',
            flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
    >
        {children}
    </Box>
    </div>

);
const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 69rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    // padding: 0rem 7.5rem 1rem 7.5rem;
    padding-top: 1rem;

`;
const Row = styled.div`
    border-top: 1px solid var(--black);
    &:last-child {
        border-bottom: 1px solid var(--black);
    }
    display: flex;
    p {
        background: var(--light-grey, #F4F4F4);
        /* padding: 2rem; */
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
const Content = styled.div`
    width: 100%;
    margin: 1rem;
`;
const Submit = styled.div`
    padding-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;