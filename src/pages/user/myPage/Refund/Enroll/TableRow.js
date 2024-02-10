import { GET_order_item_detail } from "@api/order";
import { customOrderStatus } from "assets/CustomName";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const setBorder = (i) => {
  if (i != 0) return { borderTop: "1px solid black" };
  else return { border: 0 };
};

function TableRow(props) {
  const navi = useNavigate();
  const { id, orderId } = useParams();
  const [orderData, setOrderData] = useState();

  console.log(id, orderId);

  useEffect(() => {
    GET_order_item_detail(id, orderId)
      .then((data) => {
        console.log("성공", data);
        setOrderData(data.data);
      })
      .catch((error) => {
        console.log("실패", error);
      });
  }, []);

  if (!orderData) {
    return <></>;
  }

  return (
    <Row className="cm-SRegular16">
      <Col width="14rem">
        <Column>
          <p>{customOrderStatus(orderData.orderStatus)}</p>
        </Column>
      </Col>

      <Col width="26rem">
        <ItemImg src={orderData.productInfoDto.image} />
        <ItemName>{orderData.productInfoDto.name}</ItemName>
      </Col>
      <Col width="18rem">
        {orderData.productInfoDto.price} / {orderData.productQuantity}
      </Col>
      <Col width="14rem">{orderData.productInfoDto.price - 3000}</Col>
    </Row>
  );
}

export default TableRow;
