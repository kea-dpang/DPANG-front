import styled from "styled-components";

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


function TableRow(props) {
  return props.data.map((a) => {
    return (
      <Row>
        <Col width="10rem">{a.date}</Col>
        <Col width="22rem">
            <ItemImg src={a.img}/>
            <ItemName>{a.name}</ItemName>
        </Col>
        <Col width="25rem">{a.content}</Col>
        <Col width="15rem">{a.star}</Col>
      </Row>
    );
  });
}

export default TableRow;
