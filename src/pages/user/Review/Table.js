import styled from "styled-components";
import TableRow from "./TableRow";
import TempData from '../../../assets/datas/UserReviewList'

const Head = styled.div`
  height: 3rem;
  width: 72rem;
  background-color: #043277;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableBox = styled.div`
  height: 43rem;
  width: 72rem;
  
`;
const Col = styled.div`

width: ${(props)=>props.width};
color: white;
display: flex;
align-items: center;
justify-content: center;

`


function Table() {
  return (
    <TableBox>
      <Head>
        <Col width="10rem">작성 일자</Col>
        <Col width="22rem">상품명</Col>
        <Col width="25rem">내용</Col>
        <Col width="15rem">평점</Col>
      </Head>

      <TableRow data = {TempData}/>

    </TableBox>
  );
}
export default Table;
