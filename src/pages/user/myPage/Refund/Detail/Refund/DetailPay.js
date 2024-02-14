import { customRefundStatus } from "assets/CustomName";
import styled from "styled-components";

function DetailPay(props) {
  const data = props.data.refundInfo;
  return (
    <Container>
      <Border />
      <TableBox className="cm-SRegular16">
        <Row height="6rem">
          <ColHeader>상품 합계 금액</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">
              {data.productPaymentAmount.toLocaleString()} 마일
            </DataBox>
          </Col>
          <ColHeader>환불 예정 금액</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">
              {data.expectedRefundAmount.toLocaleString()} 마일
            </DataBox>
          </Col>
        </Row>

        <Border />

        <Row height="6rem">
          <ColHeader>환불 상태</ColHeader>
          <Col width="62rem">
            <DataBox width="60rem">
              {customRefundStatus(data.refundStatus)}
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
  height: ${(props) => props.height};
  width: 72rem;
  display: flex;
`;
const ColHeader = styled.div`
  width: 10rem;
  height: 100%;
  background-color: var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: end;
`;
const DataBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;
`;

export default DetailPay;
