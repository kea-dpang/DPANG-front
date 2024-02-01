import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DataTable from "@components/AdminDataTable";
import { GET_Order, PUT_Order } from "@api/order";
import Dropdown from "@components/Dropdown";
import data from "@data/admin/AdminOrderData";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();

  // 테이블 column
  const columns = [
    {name: "id", label: "번호", options: {sort: false}},

    {
      name: "id",
      label: "날짜 | 주문번호",
      options: {
        sort: false ,
        customBodyRender: (value, tableMeta) => {

          const rowData = data.find(row => row.id == value);
          const orderDate = rowData['orderDate'];
          const orderId = rowData['orderId'];

          return (
            <div>
              <p>{orderDate}</p>
              <p>{orderId}</p>
            </div>
          );
        },
      },
    },
    {name: "id", label: "상품 정보", options: {sort: false, customBodyRender: (value, tableMeta)=> {
      const rowData = data.find(row => row.id == value);
      const img = rowData['imgUrl'];
      const name = rowData['name'];

      return (

        <div style={{display:"flex", height: "6rem", alignItems: "center"}}>
          <img style={{width: "5rem"}} src = {img} />
          <P>{name}</P>
        </div>
      )
    }}},
    {name: "id", label: "상품금액 / 수량", options: {sort: false, customBodyRender: (value, tableMeta)=> {
      const rowData =data.find(row => row.id == value);
      const price = rowData['price'];
      const quantity = rowData['productQuantity'];

      return (
        <div>
          <p>{price} / {quantity}</p>
        </div>
      )
    }}},
    {name: "orderer", label: "주문 아이디", sort: false},
    {name: "orderStatus", label: "상태", sort: false},
    {
      name: "orderStatus",
      label: "상태 처리",
      options: {
        sort: false,
        customBodyRender: (value) => {

          return(<ButtonContainer>

            {value !== '배송 완료' ? <Button>다음 단계</Button>: null}
          </ButtonContainer>
          )
        }
      },
    },
  ];

  const [order, setOrder] = useState([]);
  useEffect(() => {
    GET_Order()
      .then((data) => {
        setOrder(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dropdownValue = [
    "상태",
    "결제 완료",
    "배송 요청",
    "배송 준비중",
    "배송중",
    "배송 완료"
  ];

  const handleRowClick = (rowData) => {
    navigate(`/admin/order/${rowData[0]}`)
  };
  


  const [selectedDropValue, setSelectedDropValue]=useState(dropdownValue[0]);
  const handleStatusChange = (newStatus) => {
    setSelectedDropValue(newStatus);
  };

  return(

    <>
      <Wrap>

        <PageName>
        <p className="cm-LBold30 col-Black">주문 관리</p>
        <p className="cm-MBold24 col-Navy">주문내역 확인</p>
        </PageName>

        <FilterSection>

            <Dropdown
              value = {dropdownValue}
              onChange = {handleStatusChange}
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
              />
              {/* 검색 버튼 (돋보기) */}
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
        </FilterSection>

        <ListSection>
          <DataTable
            data={data}
            columns={columns}
            onRowClick={handleRowClick}
            filterValue={selectedDropValue}
            index={"orderStatus"}
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
  gap: 47.93rem;
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

