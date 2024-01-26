import styled from "styled-components";
import { Button as MuiButton } from '@mui/material';
import * as React from 'react';
import '../../../../../styles/fonts.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DataTable from "./Table";
import { Link, useNavigate } from 'react-router-dom';


const Index = () => {
    //  상태 저장 : 예정, 진행, 종료
    const [index, setIndex] = React.useState('');

    const handleChange = (event) => {
      setIndex(event.target.value);
    };

    const navi = useNavigate();

    return (
        <>  
            <Wrap>
                <PageName className='cm-LBold30 col-Black'> 상품 관리</PageName>
                <PageSubName className='cm-MBold24 col-Navy'> 판매처 조회</PageSubName>
                {/* 검색창, 추가하기 버튼, 삭제 버튼, 조회기간 필터링 박스 */}
                <FilterSection>
                    {/* 검색창, 검색 버튼 && 추가하기 버튼*/}
                    <Section1>
                        <SearchWrap>
                            {/* 검색창 */}
                            <Paper
                                component="form"
                                sx={{ p: '0rem 1rem', display: 'flex', alignItems: 'center', width: '25rem', height: '3rem' }}
                                >
                                {/* 검색어 입력창 */}
                                <InputBase
                                    sx={{ ml: 1, flex: 1, height: '100%' }}
                                    placeholder="검색어를 입력해주세요"
                                    inputProps={{ 'aria-label': '검색어를 입력해주세요' }}
                                />
                                {/* 검색 버튼 (돋보기) */}
                                <IconButton type="button" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </SearchWrap>
                        {/* 추가하기 버튼 */}
                        <Box sx={{ '& button': { m: 1 } }}
                        onClick={()=>{navi('/admin/brand/enroll')}}>
                            {/* <StyledButton sx={{height: '3rem', backgroundColor: 'var(--navy)', p:'0rem 2.8rem'}}variant="contained" size="large"> 추가하기 </StyledButton> */}
                            <StyledButton variant="contained" size="large" > 추가하기 </StyledButton>
                        </Box>
                    </Section1>
                    {/* 삭제, 정렬 */}
                    <Section2>
                        {/* 삭제 버튼 */}
                        <Box sx={{ '& button': { m: 1 } }}>
                            <StyledButton2 variant="contained" size="small"> 삭제 </StyledButton2>
                        </Box>
                    </Section2>
                </FilterSection>
                {/* 판매처 목록 */}
                <ListSection>
                    <DataTable/>
                </ListSection>
            </Wrap>
        </>
    );
};

export default Index;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const PageName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 0rem 0.9375rem 7.5rem;
    align-items: center;
`
const PageSubName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 7.5rem 0.9375rem 7.5rem;
    align-items: center;
    font-size: 1.5rem;
`

const FilterSection = styled.div`
    display: flex;
    width: 88.9375rem;
    padding: 1.0625rem 7.5rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    //height: 6rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.625rem;
`
const Section1 = styled.div`
    display: flex;
    flex-direction: row;
    align-itmes: center;
    gap: 36rem;
    
`
const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 65.5rem;
`
const SearchWrap = styled.div`
    display: flex;
    gap: 0.875rem;
    align-items: center;
`
const StyledButton = styled(MuiButton)`
  && {
    height: 3rem;
    background-color: var(--navy);
    color: var(--white);
  }
`
const StyledButton2 = styled(MuiButton)`
    && {
        height: 2rem;
        background-color: var(--white);
        color: var(--black);
    }
`
const ListSection = styled.div`
    display: flex;
    width: 88.9375rem;
    padding: 1.0625rem 7.5rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    //height: 6rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
