import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// 드롭다운박스
const Category = (props) => {
    const [category, setCategory] = useState('');
    console.log(props.value);
        /* 정렬 함수 */
        const handleCategory = (e) => {
            setCategory(e.target.value);
            console.log("ss:",category);
          };
          
    return (
        <FormControl sx={{width: '18.125rem' }} >
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
                        renderValue: (selectedValue) => selectedValue ? selectedValue : props.value[0] // 드롭다운 메뉴에서 선택한 항목
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
                    {/* props의 첫번째 값은 placeholder */}
                    <MenuItem value="" disabled>
                        {props.value[0]}
                    </MenuItem>
                    {props.value.slice(1).map((menuItem) => (
                    <MenuItem value={menuItem} key={menuItem}>
                        {menuItem}
                    </MenuItem>
                    ))}
                    </TextField>
                </FormControl>
    );
};

export default Category;