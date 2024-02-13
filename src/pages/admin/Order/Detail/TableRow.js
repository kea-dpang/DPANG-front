import { customOrderStatus } from "assets/CustomName";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  width: 73.9375rem;
  border-bottom: 1px black solid;
  display: flex;
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
      
      <Col width="15rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <ItemColBox>
      {data.productList.map((c, f) => {
            return (
                <ItemCol
                    key={f}
                    f={f}>
      <Col width="10.8rem">
        <p>{c.productInfoDto.itemId}</p>
      </Col>
      <Col width="15.3rem">{customOrderStatus(c.orderStatus)}</Col>
      <Col width="26rem">
        <ItemImg src={c.productInfoDto.image} />
        <ItemName>{c.productInfoDto.name}</ItemName>
      </Col>
      <Col width="10.5rem">
        {c.productInfoDto.price} / {c.productQuantity}
      </Col>
      </ItemCol>
      )})}
      </ItemColBox>


    </Row>
  );
}

export default TableRow;

const ItemCol = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;