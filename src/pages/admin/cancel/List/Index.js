import styled from "styled-components";
import * as React from "react";
import "../../../../styles/fonts.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DataTable from "./EventListNormal";

const Index = () => {
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");

  const handleChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 취소 리스트 관리</PageName>
        {/* 검색창, 추가하기 버튼, 삭제 버튼, 조회기간 필터링 박스 */}
        <FilterSection>
          {/* 검색창, 이벤트 분류 필터링, 검색 버튼 && 추가하기 버튼*/}
          <Section1>
            {/* 환불 상태 분류, 검색창*/}
            <SearchWrap>
              {/* 환불 상태 분류 */}
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">분류</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={index}
                  label="index"
                  onChange={handleChange}
                  sx={{ height: "3rem" }}
                >
                  <MenuItem value=""> 없음 </MenuItem>
                  <MenuItem value={10}>취소 요청</MenuItem>
                  <MenuItem value={20}>취소 승인</MenuItem>
                </Select>
              </FormControl>
              {/* 검색창 */}
              <Paper
                component="form"
                sx={{
                  p: "0rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "25rem",
                  height: "3rem",
                }}
              >
                {/* 검색어 입력창 */}
                <InputBase
                  sx={{ ml: 1, flex: 1, height: "100%" }}
                  placeholder="검색어를 입력해주세요"
                  inputProps={{ "aria-label": "검색어를 입력해주세요" }}
                />
                {/* 검색 버튼 (돋보기) */}
                <IconButton type="button" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </SearchWrap>
          </Section1>
        </FilterSection>
        {/* 이벤트 목록 */}
        <ListSection>
          <DataTable />
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
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
`;
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
`;
const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  align-itmes: center;
  gap: 27rem;
`;

const SearchWrap = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
`;

const ListSection = styled.div`
  display: flex;
  width: 88.9375rem;
  padding: 1.0625rem 7.5rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  //height: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;