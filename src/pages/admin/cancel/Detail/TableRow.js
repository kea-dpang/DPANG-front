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
      <Col width="13.9375rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderID}</p>
        </Column>
      </Col>
      <Col width="9rem">
        <Column>
          <p>{data.cancelRequestDate}</p>
        </Column>
      </Col>
      <Col width="8rem">{customOrderStatus(data.product.orderStatus)}</Col>
      <Col width="21rem">
        <ItemImg src={data.product.productInfoDto.image} /> &nbsp; &nbsp;
        <ItemName>{data.product.productInfoDto.name}</ItemName>
      </Col>
      <Col width="9rem">
        {data.product.productInfoDto.price.toLocaleString()} / {data.product.productQuantity}
      </Col>
      <Col width="9rem">{data.expectedRefundAmount.toLocaleString()}</Col>
    </Row>
  );
}

export default TableRow;
