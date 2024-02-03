import styled from "styled-components";
import Table from "./Table";
import PeriodSelector from "components/common/PeriodSelector";
import OrderBox from "components/common/ProductProgressBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageBodyHeader from "components/common/MyPageBodyHeader";

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

function ReviewBox() {
  //최근 30일 주문 처리 현황표에 넣을 변수. 임시로 로직 없이 숫자로만. 차후에 분류하고 처리하는 과정이 필요해요
  const [amt, setAmt] = useState([0, 1, 2, 0, 3]);

  const navi = useNavigate();

  return (
    <Container>
      <MyPageBodyHeader header="주문·배송 조회" />
      {/* 최근 30일 주문 처리 내역 확인 box */}
      <OrderOverviewBox className="cm-SRegular16">
        <OrderBox amt={amt} />
      </OrderOverviewBox>
      <DetailHeader className="cm-SRegular16">최근 주문 관리</DetailHeader>
      <CalenderBox>
        <PeriodSelector />
      </CalenderBox>
      {/* 바로가기 위한 탭 */}
      <NavBox className="cm-SBold18">
        <NaviBar colour="var(--navy)">주문/배송 조회</NaviBar>
        <NaviBar
          colour="var(--dark-grey)"
          onClick={() => {
            navi("/user/mypage/refund");
          }}
        >
          반품 조회
        </NaviBar>
        <NaviBar
          colour="var(--dark-grey)"
          onClick={() => {
            navi("/user/mypage/cancel");
          }}
        >
          취소 조회
        </NaviBar>
      </NavBox>
      {/* 정보를 보여줄 table */}
      <TableBox>
        <Table />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
