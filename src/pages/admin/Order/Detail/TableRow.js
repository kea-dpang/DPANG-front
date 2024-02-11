import { customOrderStatus } from "assets/CustomName";
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
  width: 4rem;
  height: 4rem;
  padding: 1rem 0.5rem 1rem 0rem;
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

  const data = props.data

  return (
    <Row className="cm-SRegular16">
      <Col width="10rem">
        <p>{data.itemId}</p>
      </Col>
      <Col width="14.9375rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <Col width="16rem">{customOrderStatus(data.orderStatus)}</Col>
      <Col width="26rem">
        <ItemImg src={data.image} />
        <ItemName>{data.name}</ItemName>
      </Col>
      <Col width="15rem">
        {data.price} / {data.productQuantity}
      </Col>


    </Row>
  );
}

export default TableRow;
