import styled from "styled-components";
import PeriodSelector from "components/common/PeriodSelector";
import TableRow from "./TableRow";
import TableHeader from "components/common/MypageTableHeader";
import MyPageBodyHeader from "components/common/MyPageBodyHeader";

const Container = styled.div`
  width: 72rem;
  /* min-height: calc(100vh - 30rem); */
`;

const CalenderBox = styled.div`
  height: 11rem;
  width: 72rem;
  background-color: white;
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
      <MyPageBodyHeader header="마일리지 충전 내역" />
      <DetailHeader className="cm-SRegular16">
        최근 마일리지 충전 신청 내역
      </DetailHeader>
      <CalenderBox>
        <PeriodSelector />
      </CalenderBox>
      {/* 데이터를 보여줄 테이블 */}
      <TableBox>
        <TableHeader head={header} />
        <TableRow />
      </TableBox>
    </Container>
  );
}
export default MileageBox;
