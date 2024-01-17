import styled from "styled-components";
import Table from "./Table";
import RequestTable from "./RequestTable";

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

const TableBox = styled.div`
  background-color: white;
`;
const DetailHeader = styled.div`

width: 72rem;
height: 5rem;
background-color: white;
display: flex;
align-items: end;

`



function ReviewBox() {

  return (
    <Container>
      <Header className="cm-MBold24">제품 반품 신청</Header>
      <DetailHeader className="cm-SRegular16">주문 상세 내역</DetailHeader>

      <TableBox>
        <Table />
      </TableBox>

      <RequestTable />
    </Container>
  );
}
export default ReviewBox;
