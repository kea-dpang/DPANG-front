import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import '../../../../styles/fonts.css';
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
    const [eventname, setEventName] = useState('');
    const [code, setCode] = useState([]);
    const [brandname, setBrandname] = useState('');
    const [salepercent, setPercent] = useState('');
    const [eventimage, setEventImage] = useState([]);
    const [eventstart, setEventStart] = useState(null);
    const [eventend, setEventEnd] = useState(null);
    const [showAlert, setShowAlert] = useState(false); // 등록 성공 alert 보여주기

    // 이벤트 이름 변경 감지
    const handleNameChange = (e) => {
        setEventName(e.target.value);
    };
    // 이벤트 시작일 변경 감지
    const handleStartChange = (date) => {
        setEventStart(date);
    };
    // 이벤트 종료일 변경 감지
    const handleEndChange = (date) => {
        setEventEnd(date);
    };
    // 브랜드이름 변경 감지
    const handleBrandChange = (e) => {
        setBrandname(e.target.value);
    }
    // 이벤트 할인율 변경 감지
    const handlePercentChange = (e) => {
        setPercent(e.target.value);
    }
    const handleImageChange = (e) => {
        setEventImage(e.target.value);
    };
    // 등록 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 브랜드이름, 할인율 정보 저장
    const handleSubmit = () => {
        console.log("이벤트 이름: ", eventname);
        console.log("브랜드 이름", brandname);
        console.log("이벤트 할인율", salepercent);
        console.log("이벤트 시작일: ",eventstart);
        console.log("이벤트 종료일: ",eventend);
        //setShowAlert(true); // Alert 보여주기
        alert('상품 등록 성공');
    };

    return (
        <>  
            <Wrap>
                {/* 상품 정보 입력 칸 */}
                <Table>
                    {/* 이벤트 이름 등록 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 이름</p>
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
                                    placeholder="이벤트 이름을 입력해주세요"
                                />
                            </Box>
                        </Content>
                    </Row>
                    {/* 이벤트 시작일 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 시작일</p>
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
                                        <DatePicker label="이벤트 시작일" value={eventstart} onChange={handleStartChange} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Content>
                    </Row>
                    {/* 이벤트 종료일 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 종료일</p>
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
                                        <DatePicker label="이벤트 종료일" value={eventend} onChange={handleEndChange} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Content>
                    </Row>
                    {/* 브랜드 이름 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">브랜드 이름</p>
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
                                id="brandname" 
                                onChange={handleBrandChange}
                                variant="outlined" 
                                InputLabelProps={{shrink: true}} 
                                sx={{
                                    '& .MuiOutlinedInput-root': { 
                                        '&.Mui-focused fieldset': { 
                                            borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                        },
                                    },
                                }}
                                placeholder="브랜드명을 입력해주세요"
                            />
                            </Box>
                        </Content>
                    </Row>
                    {/* 이벤트 할인율 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 할인율</p>
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
                                id="salepercent" 
                                onChange={handlePercentChange}
                                variant="outlined" 
                                InputLabelProps={{shrink: true}} 
                                sx={{
                                    '& .MuiOutlinedInput-root': { 
                                        '&.Mui-focused fieldset': { 
                                            borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                        },
                                    },
                                }}
                                placeholder="이벤트 할인율을 입력해주세요."
                            />
                            </Box>
                        </Content>
                    </Row>
                    {/* 이벤트 내용(사진) */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 내용</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <Fab color="inherit" aria-label="add">
                                <PhotoIcon color="var(--light-grey)"/>
                            </Fab>
                            </Box>
                        </Content>
                    </Row>
                </Table>

                {/* 등록버튼 */}
                <Submit>
                    <button type='submit' className='Btn_S_Navy' onClick={handleSubmit}>이벤트 등록</button>
                </Submit>

                {/* Alert
                {showAlert && (
                    <Stack 
                        sx={{ 
                            width: '85%', 
                            position: 'fixed', // 화면에 고정
                            top: 0, // 화면의 가장 위에 배치
                            right: 0, // 화면의 가장 오른쪽에 배치
                            zIndex: 9999, // 가장 앞쪽에 배치
                        }} 
                        spacing={2}
                    >
                        <Alert onClose={() => setShowAlert(false)}>이벤트가 등록되었습니다.</Alert>
                    </Stack>
                )} */}
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