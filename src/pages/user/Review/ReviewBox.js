import styled from "styled-components";
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
  height: 17rem;
  width: 72rem;
  background-color: white;
`;
const TableBox = styled.div`
  height: 43rem;
  background-color: white;
`;

function ReviewBox() {
  return (
    <Container>
      <Header>리뷰관리</Header>
      <CalenderBox></CalenderBox>
      <TableBox>
        <Table />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
