import styled from "styled-components";

function RefundDetail(props) {

  const data = props.data[props.id];
  return (
    <Container>
      <Border />
      <Table className="cm-SRegular16 ">
        <Col height="5rem">
          <ColHead>회수자명</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.username}</Content>

          <ColHead>회수자 연락처</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.userphone}</Content>
        </Col>
        <Border />

        <Col height="7rem">
          <ColHead>회수주소</ColHead>
          <BlankDiv />
          <Content width="64.9375rem">{data.useradd}</Content>
        </Col>
        <Border />
        <Col height="15rem">
          <ColHead>회수메시지</ColHead>
          <BlankDiv />
          <Content width="64.9375rem">{data.refundmessage}</Content>
        </Col>
      </Table>
      <Border />

      <Blank />

      <Border />
      <Table className="cm-SRegular16 ">
        <Col height="5rem">
          <ColHead>상품 금액</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.itemMoney}</Content>

          <ColHead>환불 예정액</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.refund}</Content>
        </Col>
        <Border />

        <Col height="5rem">
          <ColHead>환불 상태</ColHead>
          <BlankDiv />
          <Content width="64.9375rem">{data.state}</Content>
        </Col>
      </Table>
      <Border />
      <Blank />
      <Border />
      <Table className="cm-SRegular16 ">
        <Col height="5rem">
          <ColHead>취소 사유</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.category}</Content>

          <ColHead>신청자</ColHead>
          <BlankDiv />
          <Content width="28rem">{data.user}</Content>
        </Col>
        <Border />

        <Col height="20rem">
          <ColHead>비고</ColHead>
          <BlankDiv />
          <Content width="64.9375rem">{data.content}</Content>
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
