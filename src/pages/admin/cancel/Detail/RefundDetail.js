import styled from "styled-components";

function RefundDetail(props) {
  const data = props.data;

  return (
    <Container>
      <Border />
      <Table className="cm-SRegular16 ">
        <Col height="5rem">
          <ColHead>유저 ID</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.userId}</Content>

          <ColHead>사용자</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.userName}</Content>
        </Col>
        <Border />

        <Col height="5rem">
          <ColHead>총 결제 금액</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.totalAmount}마일</Content>

          <ColHead>환불 예상액</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.expectedRefundAmount}마일</Content>
        </Col>
        <Border />

      </Table>

    </Container>
  );
}

const Container = styled.div`
  width: 73.9375rem;
`;

const Table = styled.div`
  width: 73.9375rem;
`;

const Border = styled.div`
  width: 73.9375rem;
  border-bottom: 1px solid black;
`;

const Col = styled.div`
  height: ${(props) => props.height};
  display: flex;
`;
const ColHead = styled.div`
  height: 100%;
  width: 9rem;
  background-color: var(--light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: calc(${(props) => props.width} - 2rem);
  height: 100%;
  display: flex;
  align-items: center;
`;
const Blank = styled.div`
  height: 10rem;
`;
const BlankDiv = styled.div`
  width: 2rem;
`;

export default RefundDetail;
