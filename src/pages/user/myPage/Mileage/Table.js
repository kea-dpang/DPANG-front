import styled from "styled-components";
import TempData from '../../../../assets/datas/UserMileageData'
import TableRow from "./TableRow";


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
        <Col width="18rem" className="cm-SBold18">요청 일자</Col>
        <Col width="18rem" className="cm-SBold18">입금자명</Col>
        <Col width="18rem" className="cm-SBold18">충전희망 금액</Col>
        <Col width="18rem" className="cm-SBold18">내역</Col>
      </Head>

      <TableRow data = {TempData}/>

    </TableBox>
  );
}
export default Table;
