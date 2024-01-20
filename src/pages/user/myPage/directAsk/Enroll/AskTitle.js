import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const AskTitle = ({ detail, pageCheck }) => {
    // const [AskTitle, setAskTitle] = useState(detail.title);
    const [askTitle, setAskTitle] = useState(detail ? detail.title : ''); // detail.title이 없을 때 빈 문자열('')로 초기화

    const handleTitleChange = (e) => {
        setAskTitle(e.target.value);
    };
    useEffect(() => {
        if(pageCheck) {
            setAskTitle('');
        } else if(detail) {
            setAskTitle(detail.title);
        }
        console.log("askTitle:", askTitle)
    }, [detail, pageCheck]);
    

    return (
        <Wrap>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '61rem' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="Title" 
                    // disabled={detail.askState === '답변 완료'}
                    disabled={detail ? detail.askState === '답변 완료' : false}
                    onChange={handleTitleChange}
                    variant="outlined" 
                    // placeholder="제목을 입력해주세요"
                    placeholder={"제목을 입력해주세요"} 
                    value={askTitle} // AskTitle 값이 있으면 AskTitle, 없으면 "제목을 입력해주세요"
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
        </Wrap>
    );
};

export default AskTitle;

const Wrap = styled.div`
    display: flex;
`;