import React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const Category = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (e) => {
      setCategory(e.target.value);
      console.log(category);
    };

    return (
        <Wrap>
            <FormControl sx={{ m: 1, width: '33.3125rem' }} >
                <TextField
                  select
                  value={category}
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                    style: { visibility: 'hidden' }, // 레이블을 숨깁니다.
                  }}
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: category !== "" ? undefined : () => "문의 유형을 선택해주세요",
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: category ? 'var(--navy)' : '',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--navy)',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    문의 유형을 선택해주세요
                  </MenuItem>
                    <MenuItem value='refund'>취소/반품</MenuItem>
                    <MenuItem value='delivery'>배송</MenuItem>
                    <MenuItem value='point'>마일리지</MenuItem>
                    <MenuItem value='member'>회원</MenuItem>
                    <MenuItem value='etc'>서비스/오류/기타</MenuItem>
                </TextField>
            </FormControl>
        </Wrap>
    );
};

export default Category;

const Wrap = styled.div`
    display:flex;
`;
