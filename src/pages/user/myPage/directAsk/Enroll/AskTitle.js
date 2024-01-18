import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const AskTitle = () => {
    const [AskTitle, setAskTitle] = useState('');

    const handleTitleChange = (e) => {
        setAskTitle(e.target.value);
    };

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
        </Wrap>
    );
};

export default AskTitle;

const Wrap = styled.div`
    display: flex;
`;