import styled from "styled-components";
import * as React from "react";
import "../../../../styles/fonts.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { userListData } from "../../../../assets/data/admin/AdminUserData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropboxStyle from "@adminPages/directAskPage/List/DropBox.styled";
import { useForm } from "react-hook-form";
import { GET_UserList } from "@api/user";
import { useState } from "react";
import DataTable from "@components/DataTable";
import { useLocation } from "react-router-dom";

const columns = [
  { name: "userId", label: "번호", options: { sort: true } },
  { name: "employeeNumber", label: "사원번호", options: { sort: true } },
  { name: "email", label: "이메일", options: { sort: true } },
  { name: "name", label: "이름", options: { sort: true } },
  { name: "joinDate", label: "입사일", options: { sort: true } },
];

const UserListPage = () => {
  ////////////////////////////////////
  const methods = useForm();
  const { watch, register, handleSubmit } = methods;
  ////////////////////////////////////

  const navigate = useNavigate();
  const [askDataList, setAskDataList] = useState();
  // 페이지네이션
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // url에서 searchparameter 저장(페이지)
  const [page, setPage] = useState(searchParams.get("page") || 0);
  const [totalData, setTotalData] = useState(0);

  /* 서버에서 회원 리스트 가져오기 */
  const handleGetUserList = (categoryValue, searchValue) => {
    GET_UserList(categoryValue, searchValue, page)
      .then((data) => {
        console.log("확인좀하자:", data.data.content);

        setAskDataList(data.data.content);
        setTotalData(data.data.totalElements);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* 처음에 회원 리스트 가져오기*/
  useEffect(() => {
    handleGetUserList("ALL", "", page);
  }, [page]);

  // 체크용 나중에 지우자
  useEffect(() => {
    console.log("ddafasdfasfdasdd", totalData);
  }, [totalData]);

  /* 서치바 검색하기 버튼 클릭 시 필터링 걸어주기 */
  const onSubmit = (data) => {
    handleGetUserList(data["분류"], data.searchValue, page);
  };

  /* 페이지네이션 버튼 핸들러 */
  const handlePagination = (page) => {
    console.log("지금 페이지네이션 페이지 : ", page);
    setPage(page);
  };

  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    // setSelectedRow(row); // 클릭된 행의 정보를 상태로 업데이트
    navigate(`${row[0]}`);
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 회원 관리</PageName>
        <FilterSection>
          <Section1>
            <SearchWrap>
              {/* 회원 드롭박스 */}
              <DropboxStyle
                dropTitle={"분류"}
                dropItems={["사원번호", "이메일", "이름"]}
                methods={methods}
                selected={"이름"}
              />
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
                  {...register("searchValue")}
                />
                {/* 검색 버튼 (돋보기) */}
                <IconButton
                  type="button"
                  aria-label="search"
                  onClick={handleSubmit(onSubmit)}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </SearchWrap>
          </Section1>
        </FilterSection>

        {/* 목록 */}
        <ListSection>
          {askDataList && (
            <DataTable
              data={askDataList}
              columns={columns}
              onRowClick={handleRowClick}
              checkBoxCheck={false}
              onChangePage={handlePagination}
              count={totalData}
            />
          )}
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
