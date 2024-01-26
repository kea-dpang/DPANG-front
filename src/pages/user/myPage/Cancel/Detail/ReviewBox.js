import styled from "styled-components";
import Table from "./TableRow";
import TableHeader from "components/utils/TableHeader";

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
    { width: "10rem", text: "날짜/주문번호" },
    { width: "9rem", text: "유형" },
    { width: "10rem", text: "상태" },
    { width: "23rem", text: "상품명" },
    { width: "10rem", text: "상품 금액 / 수량" },
    { width: "10rem", text: "환불 예정 금액" },
  ];

  return (
    <Container>
      <Header className="cm-MBold24">취소 상세 내역</Header>
      <DetailHeader className="cm-SRegular16">주문 상세 내역</DetailHeader>
      <TableBox>
        <TableHeader head={head} />
        <Table data={props.data} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
