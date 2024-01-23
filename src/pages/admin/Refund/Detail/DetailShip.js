import styled from 'styled-components'

function DetailShip({data}){

    return(
        <>
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
export default DetailShip;