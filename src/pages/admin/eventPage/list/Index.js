import styled from "styled-components";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "components/common/Dropdown";
import DataTable from "components/common/AdminDataTable";
import data from "assets/data/user/EventData";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");
  const dropdownValue = ["이벤트 상태", "대기", "진행", "종료"];
  const columns = [
    { name: "id", label: "번호", options: { sort: false } },
    {
      name: "kind",
      label: "구분",
      options: {
        sort: false,
        customBodyRender: (value) => {
          let color;
          if (value === "상품") {
            color = "var(--navy)";
          } else {
            // 브랜드
            color = "var(--orange)";
          }
          return <div style={{ color: color }}>{value}</div>;
        },
      },
    },
    { name: "submitDate", label: "이벤트 등록일", options: { sort: false } },
    { name: "eventName", label: "이벤트 이름", options: { sort: false } },
    {
      name: "eventStatus",
      label: "이벤트 상태",
      options: {
        sort: false,
        customBodyRender: (value) => {
          let color;
          if (value === "진행") {
            color = "var(--navy)";
          } else if (value === "대기") {
            color = "var(--yellow)";
          } else {
            // 종료
            color = "var(--orange)";
          }
          return <div style={{ color: color }}>{value}</div>;
        },
      },
    },
    { name: "eventStart", label: "이벤트 시작일", options: { sort: false } },
    { name: "eventEnd", label: "이벤트 종료일", options: { sort: false } },
  ];
  const handleRowClick = (rowData) => {
    // rowData[0] : columns의 id / rowData[1].prop.children : columns의 kind
    // customBodyRender를 설정한 column값은 props.children까지 해줘야한다
    const path =
      rowData[1].props.children === "상품"
        ? "/admin/event/editproduct/" + rowData[0]
        : "/admin/event/editbrand/" + rowData[0];
    navigate(path);
  };

  const handleChange = (event) => {
    setIndex(event.target.value);
  };
  const handleAddBtn = () => {
    console.log("추가");
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 이벤트 관리</PageName>
        {/* 검색창, 추가하기 버튼, 삭제 버튼, 조회기간 필터링 박스 */}
        <FilterSection>
          {/* 이벤트 상태 드롭다운, 검색창*/}
          <SearchWrap>
            {/* 카테고리 선택 드롭다운*/}
            <Dropdown value={dropdownValue} width={"10rem"} />
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
          {/* 추가하기 버튼 */}
          <Button>
            <button className="Btn_S_Navy" onClick={() => handleAddBtn()}>
              추가하기
            </button>
          </Button>
        </FilterSection>
        <ListSection>
          <DataTable
            data={data}
            columns={columns}
            onRowClick={handleRowClick}
          />
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
  flex-direction: row;
  align-items: center;
  gap: 28.9rem;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Button = styled.div`
  display: flex;
`;
