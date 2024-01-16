import styled from "styled-components";

const Row = styled.div`
  width: 72rem;
  height: 4rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
  
`;

const Col = styled.div`
  width: ${(props)=>props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status = styled.div`

width: 5.5rem;
height: 2.5rem;
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props)=> getColour(props.status)};
color: white;
border-radius: 3px;

`
// props의 데이터를 이용하여 데이터에 따라 다른 색을 props로 넘겨줌
const getColour = (s) =>{

  switch(s) {
    case '승인':
      return '#043277';
    case '반려':
      return '#BCBCBC';
    default:
      return '#FA622F';

  }

}


function TableRow(props) {
  return props.data.map((a) => {
    return (
      <Row className="cm-SRegular16">
        <Col width="18rem">{a.date}</Col>
        <Col width="18rem">{a.name}</Col>
        <Col width="18rem">{a.money}</Col>
        {/* 마일리지 충전 상태에 따라 다른 상태 표시를 위하여 props로 상태 정보 넘겨줌 */}
        <Col width="18rem"><Status status={a.status}>{a.status}</Status></Col>
      </Row>
    );
  });
}

export default TableRow;
