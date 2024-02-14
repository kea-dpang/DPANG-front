import { customPhoneNumber } from "assets/CustomName";
import styled from "styled-components";

function DetailShip(props) {
  const data = props.data;

  return (
    <Container>
      <Border />
      <TableBox className="cm-SRegular16">
        <Row height="5rem">
          <ColHeader>수신자명</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">{data.deliveryInfo.name}</DataBox>
          </Col>
          <ColHeader>수신자 연락처</ColHeader>
          <Col width="26rem">
            <DataBox width="24rem">{customPhoneNumber(data.deliveryInfo.phoneNumber)}</DataBox>
          </Col>
        </Row>
        <Border />
        <Row height="5rem">
          <ColHeader>수신자 주소</ColHeader>
          <Col width="62rem">
            <DataBox width="60rem">
              [{data.deliveryInfo.zipCode}] {data.deliveryInfo.address}
              {data.deliveryInfo.detailAddress}
            </DataBox>
          </Col>
        </Row>
        <Border />
        <Row height="5rem">
          <ColHeader>배송 메시지</ColHeader>
          <Col width="62rem">
            <DataBox width="60rem">{data.deliveryRequest}</DataBox>
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
  justify-content: end;
`;
const DataBox = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
`;

export default DetailShip;
