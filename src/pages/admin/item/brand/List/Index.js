import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "@components/Dropdown";
import DataTable from "@components/AdminDataTable";
import { GET_BrandList, DELETE_Brand } from "@api/Brand";

// 상품 등록 관리자 페이지
const Index = () => {
  // 테이블 column
  const columns = [
    { name: "id", label: "판매처 ID", options: { sort: false } },
    { name: "name", label: "판매처명" },
    { name: "phone", label: "판매자 연락처" },
    { name: "sellerStaff", label: "판매처 담당 직원" },
    { name: "manager", label: "자사 담당자" },
    { name: "expiryDate", label: "계약 만료일" },
  ];
  const [dropdownValue, setDropdownValue] = useState(["브랜드를 선택해주세요"]);
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    GET_BrandList()
      .then((data) => {
        setBrand(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log("미친 확인 바로 고:", brand);
  }, [brand]);

  const handleRowsDelete = (rowsDeleted) => {
    const dataIndexArray = rowsDeleted.data.map((item) => item.dataIndex);
    DELETE_Brand(dataIndexArray)
      .then((data) => {
        console.log("브랜드 삭제");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("삭제: ", rowsDeleted);
  };

  useEffect(() => {
    setDropdownValue([
      "브랜드를 선택해주세요",
      ...new Set(brand.map((item) => item.name)),
    ]);
  }, [brand]);

  const navigate = useNavigate();
  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    navigate(`${row[0]}`);
  };
  const handleAddBtn = () => {
    navigate("/admin/brand/enroll");
  };
  // 선택된 브랜드 상태
  const [selectedDropValue, setSelectedDropValue] = useState(dropdownValue[0]);
  const handleDropChange = (newDropValue) => {
    setSelectedDropValue(newDropValue);
  };
  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 판매처 관리 </PageName>
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
          {brand.length > 0 && (
            <DataTable
              data={brand}
              columns={columns}
              onRowClick={handleRowClick}
              onRowsDelete={handleRowsDelete}
              filterValue={selectedDropValue}
              index={"name"}
              placeholder={dropdownValue[0]}
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
