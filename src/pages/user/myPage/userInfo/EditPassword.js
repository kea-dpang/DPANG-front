import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const EditPassword = () => {
    const handleSubmit = () => {

    }

    return (
        <Wrap>
            <Title>
                <h1 className='cm-LBold30'>비밀번호 재설정</h1>
            </Title>

            <Main>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1, width: '33.3125rem' },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="current-pass" label="현재 비밀번호" variant="outlined" />
                    <TextField id="new-pass" label="신규 비밀번호" variant="outlined" />
                    <TextField id="new-pass-check" label="신규 비밀번호 확인" variant="outlined" />
                    {/* 유효성 검사 시 */}
                    {/* <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    /> */}
                </Box>
                
                <Submit>
                    <button type='submit' className='Btn_M_Navy'>비밀번호 재설정</button>
                </Submit>

            </Main>
        </Wrap>
    );
};

export default EditPassword;

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
const Main = styled.div`
    padding: 3rem 0 3rem 3rem;
    /* display: flex;
    flex-direction: column; */
`;
const Submit = styled.div`
    padding-top: 10rem;
    display: flex;
    justify-content: flex-end;
`;