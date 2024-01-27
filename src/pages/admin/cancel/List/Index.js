import styled from "styled-components";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "components/common/Dropdown";
import DataTable from "components/common/AdminDataTable";
import data from "assets/data/admin/AdminCancelData";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");
  const dropdownValue = ["취소 상태", "취소 요청", "취소 완료"];
  const columns = [
    
    { name: "id", label: "번호", options: { sort: false } },
    {
      name: "orderinfo",
      label: "결제일 | 주문번호",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {

          const rowData = data[tableMeta.rowIndex];
          const date = rowData['date'];
          const ordernum = rowData['ordernum'];

          return (
            <div>
              <p>{date}</p>
              <p>{ordernum}</p>
            </div>
          );
        },
      },
    },
    { name: "name", label: "이름"},
    { name: "iteminfo", label: "상품 정보", options: { sort: false, customBodyRender: (value, tableMeta)=>{



      const rowData = data[tableMeta.rowIndex];
      const img = rowData['itemImg'];
      const name = rowData['itemName'];

      return (

        <div style={{display: "flex", height: "6rem", alignItems: "center"}}>
          <img style={{width: "5rem"}} src = {img} />
          <p>{name}</p>


        </div>


      )



    } } },
    {
      name: "status",
      label: "취소 상태",
      options: {
        sort: false,
        customBodyRender: (value) => {
          let color;
          if (value === "취소승인") {
            color = "var(--navy)";
          } else {
            color = "var(--yellow)";
          }
     
          return <div style={{ color: color }}>{value}</div>;
        },
      },
    },

    { name: "statusreview", label: "상태 관리하기", options: {customBodyRender: (value, tableMeta) => {

      const rowData = data[tableMeta.rowIndex];
      const val = rowData['status'];

      return val === '취소요청' ? <Button>승인</Button> : null;

    } },
  }

  ];
  const handleRowClick = (rowData) => {

    navigate(`/admin/cancel/${rowData[0]}`)

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
  align-items: center;
  justify-content: center;
  background-color: var(--navy);
  width: 3rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
`;
