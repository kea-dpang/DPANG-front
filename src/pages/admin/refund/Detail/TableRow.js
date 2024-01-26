import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  width: 73.9375rem;
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
  width: 19rem;
`;
const Column = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



function TableRow(props) {

  console.log(props.id)

  const data = props.data[props.id];

  return (
    <Row className="cm-SRegular16">
      <Col width="10.9375rem">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="9rem">{data.type} / {data.category}</Col>
      <Col width="10rem">{data.state}</Col>
      <Col width="24rem">
        <ItemImg src={data.itemImg} />
        <ItemName>{data.itemName}</ItemName>
      </Col>
      <Col width="10rem">
        {data.itemMoney} / {data.amt}
      </Col>
      <Col width="10rem">{data.refund}</Col>


    </Row>
  );
}

export default TableRow;
