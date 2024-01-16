import styled from "styled-components";
import EnrollTable from "./EnrollTable";

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
  height: 43rem;
  background-color: white;
`;

function ReviewBox() {
  return (
    <Container>
            <Header className="cm-MBold24">리뷰 등록</Header>

      <TableBox>
        <EnrollTable />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
