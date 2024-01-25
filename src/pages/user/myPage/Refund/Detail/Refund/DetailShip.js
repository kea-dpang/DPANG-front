import styled from "styled-components";

function DetailShip(props) {
  return (
    <Container>
      <Border />
      <TableBox className="cm-SRegular16">
        <Row height="6rem">
          <ColHeader>회수자명</ColHeader>
          <Col width="26rem">{props.data.username}</Col>
          <ColHeader>배송자 연락처</ColHeader>
          <Col width="26rem">{props.data.userphone}</Col>
        </Row>
        <Border />
        <Row height="6rem">
          <ColHeader>회수처 주소</ColHeader>
          <Col width="62rem">{props.data.useradd}</Col>
        </Row>
        <Border />
        <Row height="6rem">
          <ColHeader>회수 메시지</ColHeader>
          <Col width="62rem">{props.data.usermessage}</Col>
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
`;

export default DetailShip;
