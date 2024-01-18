import styled from "styled-components";
import * as React from 'react';
import { useState, useEffect } from "react";
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
import TempData from '../../../../assets/datas/EventData'
import TempDetailData from '../../../../assets/datas/ProductEventDetailData'

const Index = ({ eventId }) => {
    const [eventData, setEventData] = useState(null);
    const [eventname, setEventName] = useState('');
    const [code, setCode] = useState([]);
    const [productList, setProductList] = useState([]);
    const [salepercent, setPercent] = useState('');
    const [eventimage, setEventImage] = useState([]);
    const [eventstart, setEventStart] = useState('');
    const [eventend, setEventEnd] = useState('');
    const [showAlert, setShowAlert] = useState(false); // 등록 성공 alert 보여주기

    useEffect(() => {
        const matchedData = TempDetailData.find(data => data.eventId === Number(eventId));
        setEventData(matchedData);
      }, [eventId]);

    useEffect (() => {
        console.log(eventData);
    }, [eventData]);

    // 이벤트 이름 변경 감지
    const handleNameChange = (e) => {
        setEventName(e.target.value);
    };
    // 이벤트 시작일 변경 감지
    const handleStartChange = (e) => {
        setEventStart(e.target.value);
    };
    // 이벤트 종료일 변경 감지
    const handleEndChange = (e) => {
        setEventEnd(e.target.value);
    };
    // 대상상품코드 변경 감지
    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };
    // 대상상품코드 추가할 때 엔터눌러서 추가하기 (최종 상품등록 x)
    const onKeyPress = (e) => {
        if (e.key === "Enter") { // enter key 누르면
            e.preventDefault(); // 최종 상품등록 버튼이 눌리는 것을 방지
            setProductList([...productList, code]); // productList에 code 추가
            setCode(''); // 텍스트박스 리셋
        }
    }
    // 적용상품 삭제
    const handleItemDelete = (productToDelete) => () => {
        setProductList(productList.filter((product) => product !== productToDelete));
    };
    // 이벤트 할인율 변경 감지
    const handlePercentChange = (e) => {
        setPercent(e.target.value);
    }
    const handleImageChange = (e) => {
        setEventImage(e.target.value);
    };
    // 등록 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 상품코드, 할인율, 적용상품 정보 저장
    const handleSubmit = () => {
        console.log("이벤트 이름: ", eventname);
        console.log("적용상품", productList);
        console.log("이벤트 할인율", salepercent);
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
                                {/* <TextField 
                                    id="eventstart" 
                                    onChange={handleStartChange}
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="이벤트 시작일을 입력해주세요"
                                /> */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="이벤트 시작일" />
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
                                        <DatePicker label="이벤트 종료일" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Content>
                    </Row>
                    {/* 대상 상품 코드 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">대상 상품 코드</p>
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
                                    id="code" 
                                    value={code} // TextField의 value를 code로 설정
                                    onChange={handleCodeChange}
                                    onKeyPress={onKeyPress} // 입력을 감지하는 이벤트 추가
                                    variant="outlined" 
                                    InputLabelProps={{shrink: true}} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': { 
                                            '&.Mui-focused fieldset': { 
                                                borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                            },
                                        },
                                    }}
                                    placeholder="대상 상품 코드를 입력해주세요"
                                />
                            </Box>
                        </Content>
                    </Row>
                    {/* 이벤트 적용 상품 */}
                    <Row>
                        <p className="cm-SBold16 col-Black">이벤트 적용 상품</p>
                        <Content>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 0, width: '61rem' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '3rem',
                                    justifyContent: 'center',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <Stack direction="row" spacing={1}>
                            {productList.map((product, index) => 
                                <Chip key={index} label={product} onDelete={handleItemDelete(product)} />
                            )}
                        </Stack>
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