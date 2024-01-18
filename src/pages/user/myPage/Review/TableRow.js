import styled from "styled-components";
import Rating from '@mui/material/Rating';

const Row = styled.div`
  width: 72rem;
  height: 6rem;
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

const ItemImg = styled.img`
width: 5rem;
height: 5rem;

`
const ItemName = styled.div`

width: 11rem;

`
function trimContent(str){

  if(str.length > 30)
  return str.slice(0, 30) + '.......'


}


function TableRow(props) {
  return props.data.map((a) => {
    return (
      
      <Row className="cm-SRegular16">
        <Col width="10rem">{a.date}</Col>
        <Col width="22rem">
            <ItemImg src={a.img}/>
            <ItemName>{a.name}</ItemName>
        </Col>
        <Col width="25rem">{trimContent(a.content)}</Col>
        <Col width="15rem"><Rating name="read-only" value={a.star} readOnly /></Col>
      </Row>
    );
  });
}

export default TableRow;
