import styled from "styled-components";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "components/common/Dropdown";
import DataTable from "components/common/DataTable";
import { useState, useEffect } from "react";
import { GET_refund_list, PUT_update_status } from "@api/refund";
import {
  customRefundReason,
  customRefundStatus,
  customRefundReasonReverse,
  customRefundStatusReverse,
} from "assets/CustomName";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuestionAlert } from "@components/SweetAlert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Index = () => {
  const navigate = useNavigate();
  const showQuestionAlert = useQuestionAlert();
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = React.useState("");
  //필터링을 해줄 dropdown 박스의 값. 첫 값은 이름, 뒤에 두 값은 필터링에 들어갈 value
  const dropdownValue = [
    "반품 상태",
    "전체",
    "환불 요청",
    "회수중",
    "환불 완료",
  ];
  const [refundList, setRefundList] = useState();
  const refundState = ["REFUND_REQUEST", "COLLECTING", "REFUND_COMPLETE"];
  const [searchVal, setSearchVal] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 0;
  const [totalItems, setTotalItems] = useState(0);

  const handlePagination = (page) => {
    console.log("지금 페이지네이션 페이지 : ", page);
    navigate(`?page=${page}`);
  };
  const handleRowClick = (rowData) => {
    //ID값 전달 위해 url에 ID값 추가
    navigate(`/admin/refund/${rowData[0]}`);
  };

  //선택한 드롭 박스의 값을 저장하기 위한 state 변수
  const [selectedCategory, setSelectedCategory] = useState(dropdownValue[0]);
  const handleCategoryChange = (newCategory) => {
    //드롭다운 박스에서 가져온 값으로 카테고리를 설정
    setVal((prev) => ({
      ...prev,
      refundReason: customRefundStatusReverse(newCategory),
    }));
  };

  const handleSearch = () => {
    setVal((prev) => ({
      ...prev,
      userId: searchVal,
    }));
  };

  const [val, setVal] = useState({
    userId: "",
    refundReason: "",
    startDate: "",
    endDate: "",
    page: 0,
    size: 10,
    sort: "",
  });

  useEffect(() => {
    setVal((prevState) => ({
      ...prevState,
      page: page,
    }));
  }, [page]);

  const toNextStep = (id, state) => {
    PUT_update_status(id, state)
      .then((data) => {
        console.log("성공-성공", data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("실패-실패", error);
        throw error;
      });
  };

  const handleChange = (id, state) => {
    showQuestionAlert({
      title: "환불 상태를 변경하시겠습니까?",
      text: "확인 클릭 시 해당 환불건에 대해서 상태가 업데이트 됩니다.",
      saveText: "변경 되었습니다.",
      onConfirm: () => toNextStep(id, state),
    });
  };

  useEffect(() => {
    GET_refund_list(val)
      .then((data) => {
        console.log("성공성공", data);
        setRefundList(data.data.content);
        setTotalItems(data.data.totalElements);
        console.log(refundList);
      })
      .catch((error) => {
        console.log("실패실패", error);
      });
  }, [val]);

  const columns = [
    { name: "refundId", label: "환불 승인 번호", options: { sort: false } },
    { name: "userId", label: "유저 ID", options: { sort: false } },
    {
      name: "refundId",
      label: "결제일 | 주문번호",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          //ID를 기준으로 데이터 찾기
          const rowData = refundList.find((row) => row.refundId === value);
          //날짜와 주문 번호를 가져옴
          if (rowData != null) {
            const date = rowData.orderDate;
            const ordernum = rowData.orderId;

            return (
              <div>
                <p>{date}</p>
                <p>{ordernum}</p>
              </div>
            );
          }
        },
      },
    },
    {
      name: "refundReason",
      label: "상세사유",
      options: {
        customBodyRender: (value) => {
          return customRefundReason(value);
        },
      },
    },
    {
      name: "refundStatus",
      label: "처리상태",
      options: {
        sort: false,
        customBodyRender: (value) => {
          return customRefundStatus(value);
        },
      },
    },
    {
      name: "product",
      label: "상품 정보",
      options: {
        sort: false,
        customBodyRender: (value) => {
          return (
            //이미지와 상품명 표시
            <div
              style={{ display: "flex", height: "6rem", alignItems: "center" }}
            >
              <img style={{ width: "5rem" }} src={value.productInfoDto.image} />
              <P>{value.productInfoDto.name}</P>
            </div>
          );
        },
      },
    },
    {
      name: "refundId",
      label: "상태 처리",
      options: {
        sort: false,
        customBodyRender: (value) => {
          const rowData = refundList.find((row) => row.refundId === value);
          if (rowData != null) {
            const state = rowData.refundStatus;
            const orderId = rowData.product.orderDetailId;

            return (
              <ButtonContainer
                style={{ width: 150 }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {state !== "REFUND_COMPLETE" ? (
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      상태처리
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={state}
                      label="상태수정"
                      onChange={(e) => {
                        handleChange(value, e.target.value);
                      }}
                    >
                      <MenuItem value="REFUND_REQUEST">환불 요청</MenuItem>
                      <MenuItem value="COLLECTING">회수중</MenuItem>
                      <MenuItem value="REFUND_COMPLETE">환불 완료</MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
              </ButtonContainer>
            );
          }
        },
      },
    },
  ];

  if (!refundList) {
    return <div />;
  }

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 환불 관리</PageName>
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
                placeholder="사용자 ID를 입력해주세요"
                inputProps={{ "aria-label": "검색어를 입력해주세요" }}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
              />
              {/* 검색 버튼 (돋보기) */}
              <IconButton
                type="button"
                aria-label="search"
                onClick={() => {
                  handleSearch();
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
            data={refundList}
            columns={columns}
            onRowClick={handleRowClick}
            filterValue={selectedCategory}
            index={"state"}
            placeholder={dropdownValue[0]}
            checkBoxCheck={false}
            onChangePage={handlePagination}
            count={totalItems}
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
  width: 5rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  width: 5.2rem;
`;

const P = styled.div`
  width: 15rem;
`;
