import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "@components/Dropdown";
// import DataTable from "@components/AdminDataTable";
import DataTable from "@components/DataTable";
import { useNavigate } from "react-router-dom";
import { GET_EventList, DELETE_Event } from "@api/event";
import { useLocation } from "react-router-dom";

// 이벤트 리스트 페이지
const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // url에서 searchparameter 저장(페이지)
  const [page, setPage] = useState(searchParams.get("page") || 0);
  const [totalData, setTotalData] = useState(0);
  console.log("지금 페이지는 page: ", page);

  const navigate = useNavigate();
  const dropdownValue = ["이벤트 상태", "대기", "진행", "종료"];
  const columns = [
    { name: "id", label: "번호", options: { sort: false } },
    {
      name: "type",
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
    {
      name: "registrationDate",
      label: "이벤트 등록일",
      options: { sort: false },
    },
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
    { name: "startDate", label: "이벤트 시작일", options: { sort: false } },
    { name: "endDate", label: "이벤트 종료일", options: { sort: false } },
  ];
  // 선택된 카테고리 상태
  const [selectedDropValue, setSelectedDropValue] = useState(dropdownValue[0]);
  const handleCategoryChange = (newDropValue) => {
    setSelectedDropValue(newDropValue);
  };
  const [event, setEvent] = useState([]);
  // useEffect(() => {
  //   GET_EventList()
  //     .then((data) => {
  //       setEvent(data.data.content);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
    navigate(`?page=${page}`);
    console.log("렌더링 렌더링");
    GET_EventList(page)
      .then((data) => {
        setEvent(data.data.content);
        setTotalData(data.data.totalElements);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  // 페이지네이션 버튼 핸들러
  const handlePagination = (page) => {
    console.log("지금 페이지네이션 페이지 : ", page);
    setPage(page);
  };
  const handleRowsDelete = (rowsDeleted) => {
    const dataIndexArray = rowsDeleted.data.map((item) => item.dataIndex);
    DELETE_Event(dataIndexArray)
      .then((data) => {
        console.log("이벤트 삭제");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("삭제: ", rowsDeleted);
  };
  const handleRowClick = (rowData) => {
    // rowData[0] : columns의 id / rowData[1].prop.children : columns의 kind
    // customBodyRender를 설정한 column값은 props.children까지 해줘야한다
    const path =
      rowData[1].props.children === "상품"
        ? "/admin/event/editproduct/" + rowData[0]
        : "/admin/event/editbrand/" + rowData[0];
    navigate(path);
  };
  const handleAddBtn = () => {
    navigate("/admin/event/enrollproduct");
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
            <Dropdown
              value={dropdownValue}
              onChange={handleCategoryChange}
              width={"10rem"}
            />
          </SearchWrap>
          {/* 추가하기 버튼 */}
          <Button>
            <button className="Btn_S_Navy" onClick={() => handleAddBtn()}>
              추가하기
            </button>
          </Button>
        </FilterSection>
        <ListSection>
          {event.length > 0 && (
            <DataTable
              data={event}
              columns={columns}
              onRowClick={handleRowClick}
              onRowsDelete={handleRowsDelete}
              filterValue={selectedDropValue}
              index={"eventStatus"}
              placeholder={dropdownValue[0]}
              onChangePage={handlePagination}
              count={totalData}
            />
          )}
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
  gap: 56rem;
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
