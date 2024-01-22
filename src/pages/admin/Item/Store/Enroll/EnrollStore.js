import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import '../../../../../styles/fonts.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Fab from '@mui/material/Fab';
import PhotoIcon from '@mui/icons-material/Photo';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Index = () => {
    const [storename, setStoreName] = useState('');
    const [storenumber, setStoreNumber] = useState('');
    const [storeemployee, setStoreEmployee] = useState('');
    const [storedirector, setStoreDirector] = useState('');
    const [finishdate, setFinishDate] = useState('');

    // 판매처명 변경 감지
    const handleNameChange = (e) => {
        setStoreName(e.target.value);
    };
    // 판매처 연락처 변경 감지
    const handleNumberChange = (e) => {
        setStoreNumber(e.target.value);
    };

    //판매처 담당 직원 변경 감지
    const handleEmployeeChange = (e) => {
        setStoreEmployee(e.target.value);
    };

    //담당자 변경 감지
    const handleDirectorChange = (e) => {
        setStoreDirector(e.target.value);
    };

    // 계약 종료일 변경 감지
    const handleDateChange = (e) => {
        setFinishDate(e.target.value);
    };



    // 등록 버튼 : 판매처명, 판매처 연락처, 판매처 담당 직원,, 담당자, 계약 만료일 정보 저장
    const handleSubmit = () => {
        console.log("판매처명: ", storename);
        console.log("판매처 연락처", storenumber);
        console.log("판매처 담당 직원", storeemployee);
        console.log("담당자", storedirector);
        console.log("계약 만료일", finishdate);
        //setShowAlert(true); // Alert 보여주기
        alert('판매처 등록 성공');
    };

    return (
        <>  
            <Wrap>
                {/* 상품 정보 입력 칸 */}
                <Table>
                    {/* 판매처명 등록 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">판매처명</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '61rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    id="storename" 
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
                                    placeholder="판매처를 입력해주세요"
                                />
                            </Box>
                        </Content>
                    </Row>

                    {/*판매처 연락처 등록*/}
                    <Row>
                        <p className="cm-SBold16 col-Black">판매처 연락처</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '61rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    id="storenumber" 
                                    onChange={handleNumberChange}
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="판매처 연락처를 입력해주세요"
                                />
                            </Box>
                        </Content>
                    </Row>

                    {/*판매처 담당 직원, 담당자*/}
                    <Row>
                        <p className="cm-SBold16 col-Black">판매처 담당 직원</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '30.5rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    id="storeemployee" 
                                    onChange={handleEmployeeChange}
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="판매처 담당 직원"
                                />
                            </Box>
                        </Content>
                        <p className="cm-SBold16 col-Black">담당자</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '30.5rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    id="storeDirector" 
                                    onChange={handleDirectorChange}
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="담당자"
                                />
                            </Box>
                        </Content>
                    </Row>

                    {/* 계약 종료일 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">계약 종료일</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '61rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="계약 종료일" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Content>
                    </Row>
 
                    {/* 비고 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">비고</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '61rem', height: '16rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& > :not(style)': { m: 0, width: '61rem', height: '16rem' },
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="비고"
                                />
                            </Box>
                        </Content>
                    </Row>
                </Table>

                {/* 등록버튼 */}
                <Submit>
                    <button type='submit' className='Btn_S_Navy' onClick={handleSubmit}>판매처 등록</button>
                </Submit>

            </Wrap>
        </>
    );
};

export default Index;

const Wrap = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem 6.25rem 7.5rem;
    flex-direction: column;
    align-items: center;
    gap: -0.0625rem;
`
const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem 1rem 7.5rem;
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