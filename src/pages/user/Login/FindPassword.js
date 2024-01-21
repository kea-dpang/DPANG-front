import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { display } from '@mui/system';
import { TermsData } from '../../../assets/datas/UserTermsData';
import {ReactComponent as CheckBtn} from '../../../assets/images/checkBtn.svg'
// import { Checkbox } from '@mui/material';

const FindPasswordPage = () => {
    const [form, setForm] = useState({
        email: '',
        confirm: '',
        newPassword: '',
        newPasswordCheck: '',
    });

    const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
    };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };
    
    return (
        <Wrap>
            <BoxContainer as="form" onSubmit={handleSubmit}>
                <h1 className='cm-XLBold36'>비밀번호 찾기</h1>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1,},
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Main>
                        <ItemWrap>
                            <p>이메일</p>
                            <Item>
                                <TextField id="employeeId" variant="outlined" name="email" onChange={handleInputChange} style={{width:'33rem'}}/>
                                <StyledButton className='Btn_M_White' width={'9rem'}>인증번호 전송</StyledButton>
                            </Item>
                        </ItemWrap>

                        <ItemWrap>
                            <p>인증번호</p>
                            <Item>
                                <TextField id="employeeId" variant="outlined" name="confirm" onChange={handleInputChange} style={{width:'33rem'}}/>
                                <StyledButton className='Btn_M_White' width={'9rem'}>확인</StyledButton>
                            </Item>
                        </ItemWrap>
                        <ItemWrap>
                            <p>신규 비밀번호</p>
                            <Item>
                                <TextField id="employeeId" variant="outlined" name="newPassword" onChange={handleInputChange} style={{width:'33rem'}}/>
                            </Item>
                        </ItemWrap>
                        <ItemWrap>
                            <p>신규 비밀번호 확인</p>
                            <Item>
                                <TextField id="employeeId" variant="outlined" name="newPasswordCheck" onChange={handleInputChange} style={{width:'33rem'}}/>
                            </Item>
                        </ItemWrap>
                    </Main>
                </Box>

                <Submit>
                    <StyledButton type='submit' className='Btn_M_Navy' width={'20rem'}>비밀번호 변경</StyledButton>
                </Submit>
            </BoxContainer>
        </Wrap>
    );
};

export default FindPasswordPage;

const Wrap = styled.div`
    width: 100vW;
    /* height: 100vh; */
    min-height: 60rem;
    max-width: 100%;
    box-sizing: border-box;
    /* min-width: ; */

    /*  */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const BoxContainer = styled.div`
    width: 76.4375rem;
    /* height: 108.9375rem; */
    padding: 3rem;
    box-sizing: border-box;

    background: var(--white);
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 4.44rem;

    text-align: center;

    /* 자식에게 border 주기 */
    & > *:not(:last-child) {
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--black);
        width: 100%;
    }
`;
const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;

`;
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.69rem;
`;
const Submit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.89rem;
`;
const StyledButton = styled.button`
    width: ${(props) => props.width};
`;

// 중앙정렬 되면서 버튼 없는 컴포넌트도 중앙정렬 되어서 정렬이 안맞는 문제 해결 위해 컴포넌트 하나 더 넣기
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
