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
  width: 21rem;
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
      <Col width="11.9375rem">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="5rem">{data.type}</Col>
      <Col width="11rem">{data.status}</Col>
      <Col width="26rem">
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
