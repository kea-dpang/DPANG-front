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

  const data = props.data

  return (
    <Row className="cm-SRegular16">
      <Col width="14.9375rem">
        <Column>
          <p>{data.orderdate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <Col width="16rem">{data.orderStatus}</Col>
      <Col width="26rem">
        <ItemImg src={data.imgUrl} />
        <ItemName>{data.name}</ItemName>
      </Col>
      <Col width="15rem">
        {data.price} / {data.productQuantity}
      </Col>


    </Row>
  );
}

export default TableRow;
