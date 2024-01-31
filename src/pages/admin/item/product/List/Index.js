import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "@components/Dropdown";
import DataTable from "@components/AdminDataTable";
import { GET_ItemList, DELETE_Item, GET_ItemInfo } from "@api/Item";

// 상품 등록 관리자 페이지
const Index = () => {
  // 테이블 column
  const columns = [
    { name: "itemId", label: "상품 ID", options: { sort: false } },
    {
      name: "itemImage",
      label: "대표 이미지",
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <img
              src={value}
              alt="상품 이미지"
              style={{ width: "100px", height: "100px" }}
            />
          );
        },
      },
    },
    { name: "itemName", label: "상품명", sort: false },
    { name: "discountRate", label: "카테고리" },
    { name: "discountPrice", label: "상세 카테고리" },
    { name: "wishlistCheck", label: "재고량" },
  ];
  // 드롭박스 placeholder 값 + 후보값
  // const dropdownValue = [
  //   "카테고리를 선택해주세요",
  //   "패션",
  //   "뷰티",
  //   "스포츠/레저",
  //   "디지털/가전",
  //   "인테리어",
  //   "출산/유아동",
  //   "생활",
  // ];
  const dropdownValue = [
    "카테고리를 선택해주세요",
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
    "category7",
  ];
  const [item, setItem] = useState([]);
  useEffect(() => {
    GET_ItemList()
      .then((data) => {
        setItem(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRowsDelete = (rowsDeleted) => {
    const dataIndexArray = rowsDeleted.data.map((item) => item.dataIndex);
    DELETE_Item(dataIndexArray)
      .then((data) => {
        console.log("상품 삭제");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("삭제: ", rowsDeleted);
  };

  const navigate = useNavigate();
  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    navigate(`${row[0]}`);
  };
  const handleAddBtn = () => {
    navigate("/admin/product/enroll");
  };
  // 선택된 카테고리 상태
  const [selectedDropValue, setSelectedDropValue] = useState(dropdownValue[0]);
  const handleDropChange = (newDropValue) => {
    setSelectedDropValue(newDropValue);
  };
  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 상품 관리 </PageName>
        <FilterSection>
          <SearchWrap>
            {/* 카테고리 선택 드롭다운*/}
            <Dropdown
              value={dropdownValue}
              onChange={handleDropChange}
              width={"15rem"}
            />
            {/* 검색창 */}
            <Paper
              component="form"
              sx={{
                p: "0rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
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
        {/* 이벤트 목록 */}
        <ListSection>
          <DataTable
            data={item}
            columns={columns}
            onRowClick={handleRowClick}
            onRowsDelete={handleRowsDelete}
            filterValue={selectedDropValue}
            index={"itemId"}
            placeholder={dropdownValue[0]}
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
  gap: 23.9rem;
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
