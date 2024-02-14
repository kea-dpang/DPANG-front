import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DataTable from "@components/AdminDataTable";
import { GET_order_list, PUT_change_status } from "@api/order";
import Dropdown from "@components/Dropdown";
import { customOrderStatus, customOrderStatusReverse } from "assets/CustomName";
import { useLocation, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuestionAlert } from "@components/SweetAlert";

const Index = () => {
  const navigate = useNavigate();
  const showQuestionAlert = useQuestionAlert();
  const dropdownValue = [
    "상태",
    "전체",
    "주문승인",
    "결제완료",
    "배송요청",
    "배송준비",
    "배송중",
    "배송완료",
    "취소/환불",
  ];
  const [orderList, setOrderList] = useState();
  const orderState = [
    "ORDER_RECEIVED",
    "PAYMENT_COMPLETED",
    "DELIVERY_REQUESTED",
    "PREPARING_FOR_DELIVERY",
    "IN_DELIVERY",
    "DELIVERY_COMPLETED",
    "CANCELLED",
  ];
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
    navigate(`/admin/order/${rowData[0]}`);
  };

  const [selectedCategory, setSelectedCategory] = useState(dropdownValue[0]);
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    // 드롭다운 박스에서 가져온 값으로 카테고리를 설정
    setVal((prev) => ({
      ...prev,
      orderStatus: customOrderStatusReverse(newCategory),
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
    orderStatus: "",
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
    PUT_change_status(id, state)
      .then((data) => {
        console.log("성공", data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("실패", error);
        console.error("에러 상세정보:", error.response.data); // 에러 세부 정보 로깅
        throw error;
      });
  };

  // 이전 상태를 기억하는 변수 추가
  const [previousStatus, setPreviousStatus] = useState("");

  // 상태 처리 함수 수정
  const handleChange = (orderDetailId, state) => {
    // "주문승인"으로 돌아가는 경우 막음
    if (previousStatus === "ORDER_RECEIVED" && state !== "ORDER_RECEIVED") {
      console.error("주문 승인 상태로는 다시 돌아갈 수 없습니다");
      return;
    }

    showQuestionAlert({
      title: "주문 상태를 변경하시겠습니까?",
      text: "확인 클릭 시 해당 주문건에 대해서 상태가 업데이트 됩니다.",
      saveText: "변경 되었습니다.",
      onConfirm: () => {
        // 상태 변경 시 이전 상태 업데이트
        setPreviousStatus(val.orderStatus);
        toNextStep(orderDetailId, state);
      },
    });
  };

  useEffect(() => {
    GET_order_list(val)
      .then((data) => {
        console.log("주문목록조회 성공", data);
        setOrderList(data.data.content);
        setTotalItems(data.data.totalElements);
        console.log(orderList);
      })
      .catch((error) => {
        console.log("실패했어용", error);
      });
  }, [val]);

  // 테이블 column
  const columns = [
    {
      name: "orderId",
      label: "날짜 | 주문번호",
      options: {
        sort: false,
        customBodyRender: (value) => {
          console.log("colum: ", value);
          const rowData = orderList.find((row) => row.orderId === value);
          if (rowData != null) {
            const orderDate = rowData.orderDate;
            const orderId = rowData.orderId;

            return (
              <div>
                <p>{orderDate}</p>
                <p>{orderId}</p>
              </div>
            );
          }
        },
      },
    },
    {
      name: "orderId",
      label: "상품 정보",
      options: {
        sort: false,
        customBodyRender: (value) => {
          const rowData = orderList.find((row) => row.orderId === value);
          const orderDetail = rowData.productList;
          console.log("orderDetail", orderDetail);
          return orderDetail.map((item) => {
            const image = item.productInfoDto.image;
            const name = item.productInfoDto.name;
            return (
              // {orderDetail.map((item) => )}
              <div
                style={{
                  display: "flex",
                  height: "6rem",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "5rem" }} src={image} />
                <P>{name}</P>
              </div>
            );
          });
        },
      },
    },
    {
      name: "orderId",
      label: "상품금액 / 수량",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const rowData = orderList.find((row) => row.orderId === value);
          const orderDetail = rowData.productList;
          console.log("orderDetail", orderDetail);
          return orderDetail.map((item) => {
            const price = item.productInfoDto.price;
            const productQuantity = item.productQuantity;

            return (
              <div>
                <p>
                  {price} / {productQuantity}
                </p>
              </div>
            );
          });
        },
      },
    },
    { name: "orderer", label: "주문 아이디", sort: false },
    {
      name: "orderId",
      label: "상태",
      options: {
        sort: false,
        customBodyRender: (value) => {
          const rowData = orderList.find((row) => row.orderId === value);
          const orderDetail = rowData.productList;
          console.log("orderDetail", orderDetail);
          return orderDetail.map((item) => {
            const orderState = item.orderStatus;
            return (
              <div>
                <p>{customOrderStatus(orderState)}</p>
              </div>
            );
          });
        },
      },
    },
    {
      name: "orderId",
      label: "상태 처리",
      options: {
        sort: false,
        customBodyRender: (value) => {
          const rowData = orderList.find((row) => row.orderId === value);
          const orderDetail = rowData.productList;
          if (rowData != null) {
            const state = rowData.orderStatus;
            const orderId = rowData.productList.orderDetailId;
            return orderDetail.map((item) => {
              return (
                <ButtonContainer
                  style={{ width: 150 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {state !== "CANCELLED" ? (
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
                        <MenuItem value="ORDER_RECEIVED">주문승인</MenuItem>
                        <MenuItem value="PAYMENT_COMPLETED">결제완료</MenuItem>
                        <MenuItem value="DELIVERY_REQUESTED">배송요청</MenuItem>
                        <MenuItem value="PREPARING_FOR_DELIVERY">
                          베송준비
                        </MenuItem>
                        <MenuItem value="IN_DELIVERY">배송중</MenuItem>
                        <MenuItem value="DELIVERY_COMPLETED">배송완료</MenuItem>
                        <MenuItem value="CANCELLED">취소/환불</MenuItem>
                      </Select>
                    </FormControl>
                  ) : null}
                </ButtonContainer>
              );
            });
          }
        },
      },
    },
  ];

  if (!orderList) {
    return <div />;
  }

  return (
    <>
      <Wrap>
        <PageName>
          <p className="cm-LBold30 col-Black">주문 관리</p>
          <p className="cm-MBold24 col-Navy">주문내역 확인</p>
        </PageName>

        <FilterSection>
          <SearchWrap>
            <Dropdown
              value={dropdownValue}
              onChange={handleCategoryChange}
              width={"10rem"}
            />
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
          {/* {orderList && ( */}
          <DataTable
            data={orderList}
            columns={columns}
            onRowClick={handleRowClick}
            filterValue={selectedCategory}
            index={"orderState"}
            placeholder={dropdownValue[0]}
            checkBoxCheck={false}
            onChangePage={handlePagination}
            count={totalItems}
          />
          {/* )} */}
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
  gap: 1.31rem;
  flex-direction: column;
`;

const FilterSection = styled.div`
  display: flex;
  width: 88.9375rem;
  padding: 1.0625rem 7.5rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: row;
  align-items: between;
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
