import styled from "styled-components";
import Table from "./TableRow";
import PeriodSelector from "components/common/PeriodSelector";
import OrderBox from "components/common/ProductProgressBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageBodyHeader from "components/common/MyPageBodyHeader";
import TableHeader from "@components/MypageTableHeader";
import TempData from "assets/data/user/UserRefundData";

const Container = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

const CalenderBox = styled.div`
  height: 11rem;
  width: 72rem;
  background-color: white;
`;
const TableBox = styled.div`
  height: 43rem;
  background-color: white;
`;
const DetailHeader = styled.div`
  width: 72rem;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: end;
`;
const OrderOverviewBox = styled.div`
  height: 15rem;
  width: 72rem;
  display: flex;
  align-items: center;
`;

const NavBox = styled.div`
  display: flex;
`;
const NaviBar = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: ${(props) => props.colour};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

function ReviewBox(props) {
  const navi = useNavigate();

  const header = [
    { text: "날짜/주문번호", width: "10rem" },
    { text: "취소 신청일", width: "9rem" },
    { text: "상품명", width: "23rem" },
    { text: "사유", width: "8rem" },
    { text: "상태", width: "6rem" },
    { text: "상품금액/수량", width: "8rem" },
    { text: "환불 예정 금액", width: "8rem" },
  ];

  return (
    <Container>
      <MyPageBodyHeader header="취소·환불 관리" />
      <OrderOverviewBox className="cm-SRegular16">
        <OrderBox amt={props.orderOverview} />
      </OrderOverviewBox>
      <DetailHeader className="cm-SRegular16">최근 취소 관리</DetailHeader>
      <CalenderBox>
        <PeriodSelector />
      </CalenderBox>
      <NavBox className="cm-SBold18">
        <NaviBar
          colour="var(--dark-grey)"
          onClick={props.handleOrderClick}
        >
          주문/배송 조회
        </NaviBar>
        <NaviBar colour="var(--navy)">반품 조회</NaviBar>
        <NaviBar
          colour="var(--dark-grey)"
          onClick={props.handleCancelClick}
        >
          취소 조회
        </NaviBar>
      </NavBox>
      <TableBox>
        <TableHeader head={header} />
        <Table data={TempData} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
