import styled from "styled-components";
import TableRow from "./TableRow";
import OrderData from "../../../assets/data/admin/AdminOrderData";

const Head = styled.div`
  height: 3.4375rem;
  width: 79.8125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--light-navy, #114899);
`;

const TableBox = styled.div`
  height: 40rem;
  width: 79.8125rem;
  justify-content: center;
  align-items: center;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function Table() {
  return (
    <TableBox>
      <Head>
        <Col width="15rem">날짜/주문번호</Col>
        <Col width="22rem">상품명</Col>
        <Col width="13rem">상품 금액 / 수량</Col>
        <Col width="15rem">주문 아이디</Col>
        <Col width="15rem">상태 관리</Col>
      </Head>
      <TableRow data={OrderData} />
    </TableBox>
  );
}
export default Table;
