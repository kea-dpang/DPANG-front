import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DataTable from "../../../../components/common/AdminDataTable";
import { userListData } from "../../../../assets/data/admin/AdminUserData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import EventListComp from "./EventList";

// 회원정보페이지 테이블에 필요한 정보
// const columns = [
//     {field: 'id', headerName: '번호', width: 150},
//     {field: 'memberId', headerName: '사원번호', width: 200},
//     {field: 'email', headerName: '이메일', width: 400},
//     {field: 'name', headerName: '이름', width: 200},
//     {field: 'joinDate', headerName: '입사일', width: 200},
// ]
const columns = [
  { name: "id", label: "번호", options: { sort: true } },
  { name: "memberId", label: "사원번호", options: { sort: true } },
  { name: "email", label: "이메일", options: { sort: true } },
  { name: "name", label: "이름", options: { sort: true } },
  { name: "joinDate", label: "입사일", options: { sort: true } },
];

const UserListPage = () => {
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");
  const navigate = useNavigate();
  // const [selectedRow, setSelectedRow] = React.useState(null); // 클릭된 행의 정보를 저장할 상태

  const handleChange = (event) => {
    setIndex(event.target.value);
  };
  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    // setSelectedRow(row); // 클릭된 행의 정보를 상태로 업데이트
    console.log("dddd", row);
    navigate(`${row[0]}`);
  };
  //   useEffect(() =>  {
  //     console.log("부모로 잘 들어오나~?:",selectedRow)
  //   },[selectedRow])
  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 회원 관리</PageName>
        {/* 검색창, 추가하기 버튼, 삭제 버튼, 조회기간 필터링 박스 */}
        <FilterSection>
          {/* 검색창, 이벤트 분류 필터링, 검색 버튼 && 추가하기 버튼*/}
          <Section1>
            {/* 이벤트 분류, 검색창*/}
            <SearchWrap>
              {/* 이벤트 분류 */}
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
                  <MenuItem value={10}>사원번호</MenuItem>
                  <MenuItem value={20}>이메일</MenuItem>
                  <MenuItem value={30}>이름</MenuItem>
                  <MenuItem value={30}>입사일</MenuItem>
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
          {/* 삭제, 정렬 */}
          <Section2>
            {/* 삭제 버튼 */}
            <Box sx={{ "& button": { m: 1 } }}>
              <StyledButton2 variant="contained" size="small">
                {" "}
                삭제{" "}
              </StyledButton2>
            </Box>

            {/* 정렬 */}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">정렬</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={index}
                label="index"
                onChange={handleChange}
                sx={{ height: "2rem", display: "flex" }}
              >
                <MenuItem value=""> 없음 </MenuItem>
                <MenuItem value={10}>최신순</MenuItem>
                <MenuItem value={20}>최신순</MenuItem>
                <MenuItem value={30}>최신순</MenuItem>
              </Select>
            </FormControl>
          </Section2>
        </FilterSection>

        {/* 이벤트 목록 */}
        <ListSection>
          {/* <DataTable columns={columns} rows={userListData} onRowClick={handleRowClick}/> table의 row 정보 (이후에 서버에서 가져올 정보) */}
          <DataTable
            data={userListData}
            columns={columns}
            onRowClick={handleRowClick}
          />
        </ListSection>
      </Wrap>
    </>
  );
};

export default UserListPage;
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
  align-items: center;
  gap: 27rem;
`;
const Section2 = styled.div`
  width: 100%;
  display: flex;
  /* gap: 65.5rem; */
  justify-content: space-between;
`;
const SearchWrap = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
`;
const StyledButton = styled(MuiButton)`
  && {
    height: 3rem;
    background-color: var(--navy);
    color: var(--white);
  }
`;
const StyledButton2 = styled(MuiButton)`
  && {
    height: 2rem;
    background-color: var(--white);
    color: var(--black);
  }
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
