import styled from "styled-components";

const Container = styled.div`
  width: 73.9375rem;
`;

const Table = styled.div`
  width: 73.9375rem;
`;

const Border = styled.div`
  width: 73.9375rem;
  height: 1px;
  background-color: black;
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

`
const Content = styled.div`


width: ${(props)=>props.width};
height: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow-y: scroll;


`

function DetailBox(props) {

    const data = props.data[1];

  return (
    <Container>
      <Border />
      <Table className = "cm-SRegular16 ">
        <Col height="5rem">
            <ColHead>취소 사유</ColHead>
            <Content width="28rem">{data.category}</Content>

            <ColHead>신청자</ColHead>
            <Content width="28rem">{data.user}</Content>


        </Col>
        <Border />

        <Col height="15rem">
        <ColHead>비고</ColHead>
        <Content width="64.9375rem">{data.content}</Content>

        </Col>
      </Table>
      <Border />
    </Container>
  );
}
export default DetailBox;
