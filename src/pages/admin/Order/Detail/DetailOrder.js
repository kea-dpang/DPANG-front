import styled from 'styled-components'

function DetailOrder({data}){

return(
    <>
    <Border />
    <Table className="cm-SRegular16 ">
      <Col height="5rem">
        <ColHead>주문자</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.orderer}</Content>
        <ColHead>주문번호</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.orderId}</Content>
      </Col>
      <Border />
      <Col height="5rem">
        <ColHead>사용자 주소</ColHead>
        <BlankDiv />
        <Content width="64.9375rem">{data.deliveryInfo.address} {data.deliveryInfo.detailAddress === "0" ? '' : data.deliveryInfo.detailAddress} ({data.deliveryInfo.zipCode})</Content>
      </Col>
      <Border />

      <Col height="5rem">
        <ColHead>사용자 전화번호</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.deliveryInfo.phoneNumber}</Content>
        <ColHead>주문금액</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.paymentInfo.productTotalPrice}</Content>
      </Col>
      <Border />

      <Col height="8rem">
        <ColHead>사용자 요청사항</ColHead>
        <BlankDiv />
        <Content width="64.9375rem">{data.deliveryInfo.deliveryRequest === "string" ? '' : data.deliveryInfo.deliveryRequest}</Content>
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
export default DetailOrder;