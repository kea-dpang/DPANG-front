import React from 'react';
import Logo from '../../../assets/images/logo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { display } from '@mui/system';

const LoginPage = ({ userType }) => {
    const handleSubmit = () => {

    }
    console.log(userType)
    
    return (
        <Wrap>
            <LogoImg src={Logo} alt="Logo" />
            <BoxContainer>
                {userType==="user" ? <h1 className='cm-MBold24'>사용자 로그인</h1> : <h1 className='cm-MBold24'>관리자 로그인</h1>}
                
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1, width: 'calc(100% - 1rem)'},
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="current-pass" label="ID" variant="outlined" />
                    <TextField id="new-pass-check" label="PASSWORD" variant="outlined" />
                </Box>
                
                <Submit>
                    <StyledButton type='submit' className='Btn_M_Navy'>로그인</StyledButton>
                    <StyledButton type='submit' className='Btn_M_White'>회원가입</StyledButton>
                </Submit>
            </BoxContainer>
        </Wrap>
    );
};

export default LoginPage;

const Wrap = styled.div`
    width: 100vW;
    height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    /* min-width: ; */

    /*  */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const LogoImg = styled.img`
    width: 16.4375rem;
    height: 5.5625rem;  
`;
const BoxContainer = styled.div`
    width: 41.9735rem;
    height: 37.5625rem;
    padding: 3rem;
    box-sizing: border-box;
    background: var(--white);
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 4.44rem;
`;
const Submit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.89rem;
`;
const StyledButton = styled.button`
    width: 100%;
`;