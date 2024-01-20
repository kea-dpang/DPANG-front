import styled from "styled-components";
import EnrollTable from "./EnrollTable";
import MyPageBodyHeader from "../../../../../components/utils/MyPageBodyHeader";

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

function ReviewBox(props) {
  return (
    <Container className="cm-SBold16">
      <MyPageBodyHeader header="마일리지 충전 신청" />

      <TableBox>
        <EnrollTable userData = {props.userData} />

      </TableBox>
    </Container>
  );
}
export default ReviewBox;