import styled from 'styled-components'

function DetailOrder({data}){

return(
    <>
    <Border />
    <Table className="cm-SRegular16 ">
      <Col height="5rem">
        <ColHead>주문아이디</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.orderer}</Content>
        <ColHead>주문 번호</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.orderId}</Content>
      </Col>
      <Border />
      <Col height="5rem">
        <ColHead>사용자 이름</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.username}</Content>

        <ColHead>전화번호</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.phonenumber}</Content>
      </Col>
      <Border/>
      <Col height="5rem">
        <ColHead>사용자 주소</ColHead>
        <BlankDiv />
        <Content width="64.9375rem">{data.address}, {data.detailaddress}</Content>
      </Col>
      <Border />

      <Col height="5rem">
        <ColHead>주문 상품</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.name}</Content>
        <ColHead>주문금액</ColHead>
        <BlankDiv />
        <Content width="28rem">{data.price * data.productQuantity}</Content>
      </Col>
      <Border />

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