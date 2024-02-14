import { customRefundReason } from "assets/CustomName";
import styled from "styled-components";

function DetailCancel(props) {
  const data = props.data.returnInfo;

  return (
    <>
      <Container>
        <Border />
        <TableBox className="cm-SRegular16">
          <Row height="6rem">
            <ColHeader>취소 사유</ColHeader>
            <Col width="62rem">
              <DataBox width="60rem">{customRefundReason(data.refundReason)}</DataBox>
            </Col>
          </Row>

          <Border />

          <Row height="15rem">
            <ColHeader>비고</ColHeader>
            <Col width="62rem">
              <DataBox width="60rem">{data.note}</DataBox>
            </Col>
          </Row>
          <Border />
        </TableBox>
      </Container>
    </>
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

export default DetailCancel;
