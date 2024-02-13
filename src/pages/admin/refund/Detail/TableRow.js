import { customRefundReason, customRefundStatus } from "assets/CustomName";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Row = styled.div`
  width: 73.9375rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
  height: 6rem;
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
  height: 6rem;
  box-sizing: border-box;
  padding: 2rem;
  align-items: center;
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
      <Col width="10.9375rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <Col width="8rem">{data.refundRequestDate}</Col>
      <Col width="9rem">{customRefundReason(data.refundReason)}</Col>
      <Col width="8rem">{customRefundStatus(data.refundStatus)}</Col>
      <Col width="20rem">
        <ItemImg src={data.product.productInfoDto.image} />
        <ItemName>{data.product.productInfoDto.name}</ItemName>
      </Col>
      <Col width="9rem">
        {(data.product.productInfoDto.price * data.product.productQuantity).toLocaleString()} / {data.product.productQuantity}
      </Col>
      <Col width="9rem">{data.expectedRefundAmount.toLocaleString()}</Col>


    </Row>
  );
}

export default TableRow;
