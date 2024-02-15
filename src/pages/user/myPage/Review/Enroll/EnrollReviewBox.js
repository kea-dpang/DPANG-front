import styled from "styled-components";
import EnrollTable from "./EnrollTable";

const Container = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

const TableBox = styled.div`
  height: 43rem;
  background-color: white;
`;

function ReviewBox(props) {
  return (
    <Container>
      <TableBox>
        <EnrollTable id={props.itemID} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
