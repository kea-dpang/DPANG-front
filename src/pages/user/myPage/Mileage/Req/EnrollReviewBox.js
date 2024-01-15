import styled from "styled-components";
import EnrollTable from "./EnrollTable";

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
  height: 37rem;
  background-color: white;
`;

function ReviewBox() {
  return (
    <Container>
      <Header className="cm-MBold24">마일리지 충전 신청</Header>

      <TableBox>
        <EnrollTable />

      </TableBox>
      ※ 입금 확인에는 시간이 소요될 수 있습니다. 2영업일 이내로 충전이 완료되지 않으면 문의주세요
    </Container>
  );
}
export default ReviewBox;
