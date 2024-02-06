import styled from "styled-components";

function DetailRefund(props) {
  return (
    <Container>
      <Border />
      <TableBox className="cm-SRegular16">
        <Row height="6rem">
          <ColHeader>상품 합계 금액</ColHeader>
          <Col width="26rem"><DataBox>{props.data.totalAmount.toLocaleString()}</DataBox></Col>
          <ColHeader>환불 예정 금액</ColHeader>
          <Col width="26rem"><DataBox>{props.data.expectedRefundAmount.toLocaleString()}</DataBox></Col>
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
  background-color: black;
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

width: 24rem;

`
export default DetailRefund;
