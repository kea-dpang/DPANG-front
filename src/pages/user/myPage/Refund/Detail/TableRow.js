import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { customRefundReason, customRefundStatus } from "assets/CustomName";

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
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <Col width="8rem">{customRefundReason(data.returnInfo.reason)}</Col>
      <Col width="8rem">{customRefundStatus(data.refundStatus)}</Col>
      <Col width="28rem">
        <ItemImg src={data.product.productInfoDto.image} />
        <ItemName>{data.product.productInfoDto.name}</ItemName>
      </Col>
      <Col width="9rem">
        {data.product.productInfoDto.price} / {data.product.productQuantity}
      </Col>
      <Col width="9rem">{data.refundInfo.expectedRefundAmount}</Col>
    </Row>
  );
}

export default TableRow;
