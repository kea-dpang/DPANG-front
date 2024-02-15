import styled from "styled-components";

function DetailPay(props) {
  const data = props.data;

  return (
    <Container>
      <Border />
      <TableBox className="cm-SRegular16">
        <Row>
          <ColHeader>상품 합계 금액</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">
              {data.paymentInfo.productTotalPrice.toLocaleString()} 마일
            </DataBox>
          </Col>
          <ColHeader>배송비</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">
              {data.paymentInfo.deliveryFee.toLocaleString()} 마일
            </DataBox>
          </Col>
        </Row>

        <Border />
      </TableBox>
    </Container>
  );
}

const Container = styled.div`
  width: 72rem;
`;
const Border = styled.div`
  height: 1px;
  width: 72rem;
  border-bottom: 1px solid black;
`;

const TableBox = styled.div`
  height: 20rem;
  width: 72rem;
`;
const Row = styled.div`
  height: 6rem;
  width: 72rem;
  display: flex;
`;
const ColHeader = styled.div`
  width: 10rem;
  height: 6rem;
  background-color: var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  height: 6rem;
  width: ${(props) => props.width};
  display: flex;
  justify-content: end;
`;

const DataBox = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
`;

export default DetailPay;
