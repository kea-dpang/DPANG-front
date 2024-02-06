import styled from "styled-components";
import Table from "./TableRow";
import MyPageBodyHeader from "components/common/MyPageBodyHeader";
import TableHeader from "@components/MypageTableHeader";

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
    { width: "13rem", text: "날짜/주문번호" },
    { width: "11rem", text: "상태" },
    { width: "22rem", text: "상품명" },
    { width: "11rem", text: "상품 금액 / 수량" },
    { width: "15rem", text: "관리" },
  ];
  return (
    <Container>
      <MyPageBodyHeader header="주문 상세 내역" />
      <DetailHeader className="cm-SRegular16">주문 상세 내역</DetailHeader>
      <TableBox>
        <TableHeader head={head} />
        <Table data={props.data} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
