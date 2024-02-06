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
  //ID를 기준으로 데이터 찾기
  console.log("data:", props.data);

  const data = props.data;

  return (
    <Row className="cm-SRegular16">
      <Col width="16.9375rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderID}</p>
        </Column>
      </Col>
      <Col width="11rem">{customOrderStatus(data.product.orderStatus)}</Col>
      <Col width="26rem">
        <ItemImg src={data.product.productInfoDto.image} />
        <ItemName>{data.product.productInfoDto.name}</ItemName>
      </Col>
      <Col width="10rem">
        {data.product.productInfoDto.price} / {data.product.productQuantity}
      </Col>
      <Col width="10rem">{data.expectedRefundAmount}</Col>
    </Row>
  );
}

export default TableRow;
