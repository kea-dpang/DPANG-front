import React, { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AskEnrollPage = () => {
    const [AskTitle, setAskTitle] = useState('');
    const [Content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setAskTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

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
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '61rem' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        id="Title" 
                        onChange={handleTitleChange}
                        variant="outlined" 
                        placeholder="제목을 입력해주세요"
                        InputLabelProps={{shrink: true}} 
                        sx={{
                            '& .MuiOutlinedInput-root': { 
                                '&.Mui-focused fieldset': { 
                                    borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                },
                            },
                        }}
                    />
                </Box>
            </Item>

            <Item>
                <p>내용</p>

                <FakePlaceholder show={!Content}>
                    <p style={{ fontWeight:'700' }}> 1:1 문의 작성 전 확인해주세요!<br /></p>
                    <p style={{ fontWeight:'700', color: 'var(--orange, #FA622F)'}}>‼️ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다.<br /><br /></p>

                    <p style={{ fontWeight:'700' }}>주문취소<br /></p>
                    [주문완료] 상태일 경우에만 주문 취소 가능합니다. (배송준비중 이후 취소불가)<br />
                    [마이페이지 - 주문내역 상세페이지]에서 직접  취소하실 수 있습니다.<br /><br />

                    <p style={{ fontWeight:'700' }}>배송<br /></p>
                    배송일 및 배송시간 지정은 불가능합니다. (예약배송 포함)<br />
                    주문 이후 주소지, 결제수단 변경 등 정보수정 불가능합니다.<br /><br />

                    <p style={{ fontWeight:'700' }}>교환/반품<br /></p>
                    단순 변심으로 인한 반품은 고객에게 반품비 청구됩니다.<br />
                </FakePlaceholder>
                <textarea 
                    cols="50" 
                    rows="10" 
                    onChange={handleContentChange}
                    value={Content}
                ></textarea>

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


