import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { faqManageData } from '../../../../assets/datas/AdminFaqData';

const EditPage = () => {
    let params = useParams().faqId;
    const faqData = faqManageData.find(data => parseInt(params));

    const [category, setCategory] = useState(faqData.category);

    const [title, setTitle] = useState(faqData.title);
    const [content, setContent] = useState(faqData.content);

    const handleCategory = (e) => {
        setCategory(e.target.value);
        console.log("ss:",category);
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    return (
        <Wrap>
            <Title className='cm-LBold30 col-Black'> 고객센터</Title>
            <Title className='cm-SBold18 col-Navy'> FAQ관리</Title>
            <Main>
                <Option>
                    <FormControl sx={{ width: '11.68rem', 
                        // height: '2.43rem' 
                        }} >
                        <TextField
                            select
                            value={category}
                            onChange={handleCategory}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                                style: { visibility: 'hidden' }, // 레이블을 숨깁니다.
                            }}
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (selectedValue) => selectedValue ? selectedValue : "카테고리" // 드롭다운 메뉴에서 선택한 항목
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: category ? 'var(--navy)' : '',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--navy)',
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '0.5rem', // 여기에 padding을 0으로 설정하세요.
                                },
                            }}
                        >
                            <MenuItem value="" disabled>
                                문의 유형을 선택해주세요
                            </MenuItem>
                            <MenuItem value='자주하는 FAQ'>자주하는 FAQ</MenuItem>
                            <MenuItem value='배송'>배송</MenuItem>
                            <MenuItem value='취소/교환/환불'>취소/교환/환불</MenuItem>
                            <MenuItem value='결제' >결제</MenuItem>
                            <MenuItem value='회원' >회원</MenuItem>
                            <MenuItem value='기타' >기타</MenuItem>
                        </TextField>
                    </FormControl>
                </Option>
                <Option>
                    <p>admin1</p>
                </Option>
                <Item>
                    <p className='cm-XLBold36 col-Navy'>Q.</p>
                    <textarea 
                        cols="50" 
                        rows="10"
                        className='cm-SRegular16'
                        value={title}
                        onChange={handleTitleChange}
                        // placeholder='수령한 상품을 반품하고 싶어요.'
                        style={{ padding: '2rem' }}
                    ></textarea>
                </Item>
                <Item>
                    <p className='cm-XLBold36 col-Navy'>A.</p>
                    <textarea 
                        cols="50" 
                        rows="10"
                        value={content}
                        onChange={handleContentChange}
                        // placeholder={'수령한 상품을 반품하고 싶어요.\n\n 반품 접수 방법 \n -마이페이지 > 주문배송 > 상품선택 > 반품요청 \n -구매자의 사유로 반품 시 반품 배송비는 구매자 부담입니다. \n -판매자별 반품 배송비 지불 방법에 맞게 배송비가 지불되지 않은 경우 반품/승인이 보류되어 지연될 수 있습니다.'}
                        style={{ padding: '2rem' }}
                    ></textarea>
                </Item>
            </Main>
            <Button>
                <button className="Btn_S_Navy">수정</button>
            </Button>
        </Wrap>
    );
};

export default EditPage;

const Wrap = styled.div`
    padding: 0 7.5rem 0 7.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* align-items: end; */
`;
const Title = styled.div`
    display: flex;
    padding: 2.125rem 0rem 0.9375rem 0;
`;
const Main = styled.div`
    /* border-top: 1px solid black; */
    border-bottom: 1px solid black;

`;
const Option = styled.div`
    border-top: 1px solid black;
    padding: 0.38rem;
`;
const Item = styled.div`
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 1.12rem;
    textarea {
        width: 62rem;
    }
    textarea::placeholder {
    white-space: pre-line;
}
`;
const Button = styled.div`
    padding-top: 2rem;
    display: flex;
    /* align-content: flex-end; */
    justify-content: flex-end;
`;
