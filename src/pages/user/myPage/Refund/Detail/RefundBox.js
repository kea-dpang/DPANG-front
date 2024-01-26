import styled from "styled-components";
import TableHeader from "../../../../../components/common/MypageTableHeader";
import TableRow from "./TableRow";

const Container = styled.div`
  width: 72rem;
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

const TableBox = styled.div`
  background-color: white;
`;
const DetailHeader = styled.div`
  width: 72rem;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: end;
`;

function ReviewBox(props) {
  const head = [
    { width: "9rem", text: "날짜/주문번호" },
    { width: "8rem", text: "유형" },
    { width: "6rem", text: "사유" },
    { width: "9rem", text: "상태" },
    { width: "22rem", text: "상품명" },
    { width: "9rem", text: "상품금액/수량" },
    { width: "9rem", text: "환불 예정 금액 " },
  ];

  return (
    <Container>
      <Header className="cm-MBold24">환불 상세 내역</Header>
      <DetailHeader className="cm-SRegular16">주문 상세 내역</DetailHeader>
      <TableBox>
        {/* 날짜/주문번호 유형 사유 상태 상품명 상품 금액 / 수량 환불 예정 금액을 보여줄 테이블 박스 */}
        <TableHeader head={head} />
        <TableRow data={props.data} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
