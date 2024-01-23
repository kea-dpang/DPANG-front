import styled from "styled-components";

const Wrap = styled.div`
  width: 71rem;
  display: flex;
  flex-direction: column;
`;

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
  height: ${(props)=>props.height};
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

`;
const DetailHeader = styled.div`
  width: 72rem;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: end;
`;

function Table(props) {
  return (
    <Wrap>


      <DetailHeader className="cm-SRegular18">결제 상세 내역</DetailHeader>
      <Container>
        <Border />
        <TableBox className="cm-SRegular16">
          <Row height="6rem">
            <ColHeader>상품 합계 금액</ColHeader>
            <Col width="26rem">{props.data.itemMoney}</Col>
            <ColHeader>환불 예정 금액</ColHeader>
            <Col width="26rem">{props.data.refund}</Col>
          </Row>

          <Border />

          <Row height="6rem">
            <ColHeader>환불 상태</ColHeader>
            <Col width="62rem">{props.data.state}</Col>
          </Row>
          <Border />
        </TableBox>
      </Container>


      
      <DetailHeader />
    </Wrap>
  );
}
export default Table;
