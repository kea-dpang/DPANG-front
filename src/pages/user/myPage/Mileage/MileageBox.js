import styled from "styled-components";
import PeriodSelector from "../../../../components/common/PeriodSelector"
import Table from "./Table";

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

function MileageBox() {
  return (
    <Container>
      <Header className="cm-MBold24">마일리지 충전 내역</Header>
      <DetailHeader className="cm-SRegular16">최근 마일리지 충전 신청 내역</DetailHeader>
      <CalenderBox><PeriodSelector /></CalenderBox>
      <TableBox>
        <Table />
      </TableBox>
    </Container>
  );
}
export default MileageBox;
