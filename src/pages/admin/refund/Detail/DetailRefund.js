import { customRefundReason } from 'assets/CustomName';
import styled from 'styled-components'

function DetailRefund({data}){

return(
    <>
    <Border />
    <Table className="cm-SRegular16 ">
      <Col height="5rem">
        <ColHead>성명</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.userName}</Content>

        <ColHead>유저 ID</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.userId}</Content>
      </Col>
      <Border />
      <Col height="5rem">
        <ColHead>반품 사유</ColHead>
        <BlankDiv />
        <Content width="64.9375rem">{customRefundReason(data.reason)}</Content>
      </Col>
      <Border />

      <Col height="20rem">
        <ColHead>비고</ColHead>
        <BlankDiv />
        <Content width="64.9375rem">{data.returnInfo.note}</Content>
      </Col>
    </Table>

    <Border />
</>

)



}


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
const BlankDiv = styled.div`

width: 2rem;
`
export default DetailRefund;