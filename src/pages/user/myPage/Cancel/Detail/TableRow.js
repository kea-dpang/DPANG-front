import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
height: 7rem;
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ItemName = styled.div`
  width: 11rem;
`;
const Column = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function TableRow(props) {

  const data = props.data;


  return (
    <Row className="cm-SRegular16">
      <Col width="10rem">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="9rem">{data.type}</Col>
      <Col width="10rem">{data.state}</Col>
      <Col width="23rem">
        <ItemImg src={data.itemImg} />
        <ItemName>{data.itemName}</ItemName>
      </Col>
      <Col width="10rem">{data.itemMoney} / {data.amt}</Col>
      <Col width="10rem">{data.refund}</Col>

    </Row>
  );

}

export default TableRow;
