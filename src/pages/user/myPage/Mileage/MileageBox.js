import styled from "styled-components";
import PeriodSelector from "../../../../components/common/PeriodSelector";
import TableRow from "./TableRow";
import TableHeader from "../../../../components/utils/TableHeader";
import TempData from "../../../../assets/datas/UserMileageData";

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
`;

function MileageBox() {

  //테이블의 header에 들어갈 값과 row의 너비
  const header = [
    { text: "요청일자", width: "18rem" },
    { text: "입금자명", width: "18rem" },
    { text: "충전희망 금액", width: "18rem" },
    { text: "내역", width: "18rem" },
  ];

  return (
    <Container>
      <Header className="cm-MBold24">마일리지 충전 내역</Header>
      <DetailHeader className="cm-SRegular16">
        최근 마일리지 충전 신청 내역
      </DetailHeader>
      <CalenderBox>
        <PeriodSelector />
      </CalenderBox>
      {/* 데이터를 보여줄 테이블 */}
      <TableBox>
        <TableHeader head={header} />
        <TableRow data={TempData} />
      </TableBox>
    </Container>
  );
}
export default MileageBox;
