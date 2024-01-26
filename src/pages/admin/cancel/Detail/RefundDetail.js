import styled from "styled-components";

function RefundDetail(props) {

  const data = props.data[props.id];
  return (
    <Container>
      <Border />
      <Table className="cm-SRegular16 ">
        <Col height="5rem">
          <ColHead>성명</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.name}</Content>

          <ColHead>사용자</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.user}</Content>
        </Col>
        <Border />

        <Col height="5rem">
          <ColHead>상품가</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.itemMoney}마일</Content>

          <ColHead>환불액</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.refund}마일</Content>
        </Col>
        <Border />

        <Col height="5rem">
          <ColHead>환불 상태</ColHead>
          <BlankDiv />
          <Content width="64.9375rem">{data.status}</Content>
        </Col>
      </Table>
      <Border />

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
`


export default RefundDetail;
