import styled from 'styled-components'

function DetailPayment({ data }) {

    return (
        <>
            <Border />
            <Table className="cm-SRegular16 ">
                <Col height="5rem">
                    <ColHead>상품 금액</ColHead>
                    <BlankDiv />
                    <Content width="28rem">{data.refundInfo.productPaymentAmount}</Content>

                    <ColHead>환불 예정액</ColHead>
                    <BlankDiv />
                    <Content width="28rem">{data.refundInfo.expectedRefundAmount}</Content>
                </Col>
                <Border />

            </Table>
            <Blank />
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
const Blank = styled.div`
  height: 10rem;
`;
const BlankDiv = styled.div`

width: 2rem;
`




export default DetailPayment;
