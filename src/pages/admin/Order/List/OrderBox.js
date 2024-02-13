
import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "@components/Dropdown";
import { customOrderStatus, customOrderStatusReverse } from "assets/CustomName";
import {useLocation, useNavigate} from "react-router-dom";
import TableHeader from "@components/MypageTableHeader";
import TableRow from "./TableRow";
import { GET_order_list } from "@api/order";

const OrderBox = (props) => {

    const navigate = useNavigate();

    const dropdownValue = [
        "상태",
        "전체",
        "주문승인",
        "결제완료",
        "배송요청",
        "배송준비",
        "배송중",
        "배송완료",
        "취소/환불"
      ];
      const [orderList, setOrderList] = useState([]);
      const [searchVal, setSearchVal] = useState();
    
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const page = searchParams.get("page") || 0;
      const [totalItems, setTotalItems] = useState(0);
    
      const handlePagination = (page) => {
        console.log("지금 페이지네이션 페이지 : ", page);
        navigate(`?page=${page}`);
        setVal((prev) => ({
          ...prev,
          page: page,
        }));
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
          page: 0,
        }))
      }

      const [val, setVal] = useState({
        userId: undefined,
        orderStatus:"",
        startDate: "",
        endDate: "",
        page: 0,
        size: 10,
        sort: "",
      });
    
    



      useEffect(() => {
        GET_order_list(val)
          .then((data) => {
            console.log("주문목록조회 성공", data);
            setOrderList(data.data.content);
            setTotalItems(data.data.totalElements);
          })
          .catch((error) => {
            console.log("실패했어용", error);
          });
      }, [val]);

                
      useEffect(() => {
        setVal((prevState) => ({
          ...prevState,
          page: page,
        }));
      }, [page]);




    const head = [
        { width: "2rem", text: "" },
        { width: "11rem", text: "날짜 | 주문번호" },
        { width: "11rem", text: "주문아이디" },
        { width: "22rem", text: "상품정보" },
        { width: "13rem", text: "상품 금액 / 수량" },
        { width: "15rem", text: "상태" },
        { width: "15rem", text: "상태 처리"},
      ];

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
              value = {dropdownValue}
              onChange = {handleCategoryChange}
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
                handleSearch(searchVal);
              }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            </SearchWrap>
        </FilterSection>
        <ListSection>
          
          {/* {orderList && ( */}
          <TableBox>
            <TableHeader head={head} />
            <TableRow
                data={orderList}
                filterValue={selectedCategory}
                index={"orderState"}
                placeholder={dropdownValue[0]}
                onChangePage={handlePagination}
                count={totalItems}
                selectedOrderStatus={selectedCategory} // 선택된 orderStatus를 전달합니다
                handleSearch={handleSearch}
                />
            
        </TableBox>
          {/* )} */}
        </ListSection>
      </Wrap>   
    </>



      )


}

export default OrderBox;


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

const P = styled.div`
width: 15rem;
`;

const TableBox = styled.div`
  background-color: white;
`;


