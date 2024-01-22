import styled from "styled-components";
import Table from "./Table";

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

`



function ReviewBox(props) {

  return (
    <Container>
      <Header className="cm-MBold24">{props.data.type} 상세 내역</Header>
      <DetailHeader className="cm-SRegular16">주문 상세 내역</DetailHeader>
      <TableBox>
        <Table data={props.data} />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
