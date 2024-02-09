import styled from "styled-components";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "components/common/Dropdown";
import DataTable from "components/common/DataTable";
import { useState, useEffect } from "react";
import { POST_charge_req } from "@api/mileage";
import { useNavigate } from "react-router-dom";
import {
  customDate,
  customMileageStatusName,
  CustomMileageStatusNameReverse,
} from "assets/CustomName";
import { useQuestionAlert } from "@components/SweetAlert";

const Index = (props) => {
  const showQuestionAlert = useQuestionAlert();
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");
  const [bool, setBool] = useState(true);
  //필터링을 해줄 dropdown 박스의 값. 첫 값은 이름, 뒤에 두 값은 필터링에 들어갈 value
  const dropdownValue = ["처리 상태", "전체", "요청", "승인", "반려"];

  const handleConfirm = (val) => {
    return POST_charge_req(val, bool)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("실패");
        throw error; // 오류를 다시 던져서 오류 처리 가능
      });
  };

  const handleRefuse = (val) => {
    return POST_charge_req(val, !bool)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("실패");
        throw error; // 오류를 다시 던져서 오류 처리 가능
      });
  };

  //승인 버튼을 누를 경우에 handling
  const handleApprove = (val) => {
    // 확인 창을 띄움
    showQuestionAlert({
      title: "신청을 승인하시겠습니까?",
      text: "확인 클릭 시 승인 됩니다.",
      saveText: "신청 승인 되었습니다.",
      onConfirm: () => handleConfirm(val),
    });
  };

  const handleReject = (val) => {
    showQuestionAlert({
      title: "신청을 반려하시겠습니까?",
      text: "확인 클릭 시 반려 됩니다.",
      saveText: "신청 반려 되었습니다.",
      onConfirm: () => handleRefuse(val),
    });
  };

  const columns = [
    { name: "chargeRequestId", label: "번호", options: { sort: false } },
    {
      name: "requestDate",
      label: "요청일자",
      options: {
        customBodyRender: (value) => {
          return customDate(value);
        },
      },
    },
    { name: "name", label: "이름" },
    { name: "depositorName", label: "입금자명" },
    { name: "requestedMileage", label: "충전 희망 금액" },
    {
      name: "chargeRequestId",
      label: "충전 상태",
      options: {
        customBodyRender: (value, tableMeta) => {
          //ID를 기준으로 데이터 찾기
          const rowData = props.mileageList.find(
            (row) => row.chargeRequestId === value
          );

          if (rowData != null) {
            const status = rowData.status;

            return status === "REQUESTED" ? (
              <ButtonBox style={{ display: "flex" }}>
                <Button
                  colour="var(--navy)"
                  onClick={() => {
                    handleApprove(value, bool);
                  }}
                >
                  승인
                </Button>
                <Button
                  colour="var(--orange)"
                  onClick={() => {
                    handleReject(value, !bool);
                  }}
                >
                  거절
                </Button>
              </ButtonBox>
            ) : customMileageStatusName(status);
          } else {

          }
        },
      },
    },
  ];

  //선택한 드롭 박스의 값을 저장하기 위한 state 변수
  const [selectedCategory, setSelectedCategory] = useState(dropdownValue[0]);
  const handleCategoryChange = (newCategory) => {
    //드롭다운 박스에서 가져온 값으로 카테고리를 설정
    setSelectedCategory(newCategory);
    props.handleCategoryChange(newCategory);
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 마일리지 관리</PageName>
        {/* 검색창, 취소 상태 필터링 박스 */}
        <FilterSection>
          {/* 취소 상태 드롭다운, 검색창*/}
          <SearchWrap>
            {/* 카테고리 선택 드롭다운*/}
            <Dropdown
              value={dropdownValue}
              width={"10rem"}
              onChange={handleCategoryChange}
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
                placeholder="입금자명을 입력해주세요"
                inputProps={{ "aria-label": "입금자명을 입력해주세요" }}
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
              />
              {/* 검색 버튼 (돋보기) */}
              <IconButton
                type="button"
                aria-label="search"
                onClick={() => {
                  props.handleSearch(searchData);
                }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </SearchWrap>
        </FilterSection>
        <ListSection>
          {/* 공용 컴포넌트 호출 */}
          <DataTable
            data={props.mileageList}
            columns={columns}
            onRowClick={() => {}}
            filterValue={CustomMileageStatusNameReverse(selectedCategory)}
            index={"status"}
            onChangePage={props.handlePagination}
            count={props.totalItems}
            checkBoxCheck={false}
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
  background-color: ${(props) => props.colour};
  width: 3rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
  margin: 0.5rem;
`;

const ButtonBox = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;
