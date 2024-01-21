import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

const Category = ({ detail, pageCheck }) => {
    const [category, setCategory] = useState('');
    const [askState, setAskState] = useState('');
    // const [category, setCategory] = useState(params === undefined ? detail.category : '');

    useEffect(() => {
        // console.log("params:", params);
        console.log("pageCheck:", pageCheck)

        if(pageCheck) {
            setCategory('');
      } else {

        console.log("detail:", detail);
        
    
        if (detail) {
            setCategory(detail.category);
            setAskState(detail.askState);
            console.log("category:", category);
            console.log("askState:", askState);
        } else {
          setAskState(undefined)
        }
      }
    }, [detail, askState, pageCheck]);

    
    
    const handleCategory = (e) => {
      setCategory(e.target.value);
      console.log("ss:",category);
    };

    
    return (
        <Wrap>
            <FormControl sx={{ m: 1, width: '33.3125rem' }} >
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
                    disabled: askState == "답변 완료", // params가 undefined일 때 드롭박스 비활성화
                    displayEmpty: true,
                    // renderValue: params !== undefined ? category : () => "문의 유형을 선택해주세요", 
                    // renderValue: params !== undefined ? undefined : () => "문의 유형을 선택해주세요",
                    // renderValue={(selectedValue) => params !== undefined ? () => selectedValue : () => "문의 유형을 선택해주세요"}
                    // renderValue: (selectedValue) => params !== undefined ? selectedValue : "문의 유형을 선택해주세요"
                    renderValue: (selectedValue) => selectedValue ? selectedValue : "문의 유형을 선택해주세요" // 드롭다운 메뉴에서 선택한 항목
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
                    <MenuItem value='취소/반품'>취소/반품</MenuItem>
                    <MenuItem value='배송'>배송</MenuItem>
                    <MenuItem value='마일리지'>마일리지</MenuItem>
                    <MenuItem value='회원' >회원</MenuItem>
                    <MenuItem value='서비스/오류/기타' >서비스/오류/기타</MenuItem>

                </TextField>
            </FormControl>
        </Wrap>
    );
};

export default Category;

const Wrap = styled.div`
    display:flex;
`;
