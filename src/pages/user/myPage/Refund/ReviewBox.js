import styled from "styled-components";
import Table from "./Table";
import PeriodSelector from "../../../../components/common/PeriodSelector";
import OrderBox from '../../../../components/common/OrderBox/Index'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import MyPageBodyHeader from "../../../../components/utils/MyPageBodyHeader";

const Container = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

const Header = styled.div`
  width: 72rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #043277;
  border-bottom: 1px #043277 solid;
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

`
const OrderOverviewBox = styled.div`

height: 15rem;
width: 72rem;
display: flex;
align-items: center;


`

const NavBox = styled.div`

display: flex;

`
const NaviBar = styled.div`

width: 10rem;
height: 3rem;
background-color: ${(props)=>props.colour};
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
color: white;


`

function ReviewBox() {

  const navi = useNavigate();

const [amt, setAmt] = useState([0, 1, 2, 0, 3])

  return (
    <Container>
      <MyPageBodyHeader header="취소·환불 관리"/>
      <OrderOverviewBox className="cm-SRegular16"><OrderBox amt={amt}/></OrderOverviewBox>
      <DetailHeader className="cm-SRegular16">최근 취소 관리</DetailHeader>
      <CalenderBox><PeriodSelector /></CalenderBox>
      <NavBox className="cm-SBold18">
      <NaviBar colour="var(--dark-grey)" onClick={()=>{navi("/user/mypage/temp/order")}}>주문/배송 조회</NaviBar>
      <NaviBar colour="var(--navy)" >반품 조회</NaviBar>
      <NaviBar colour="var(--dark-grey)" onClick={()=>{navi("/user/mypage/temp/cancel")}}>취소 조회</NaviBar>
      </NavBox>
      <TableBox>
        <Table />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
