import styled from "styled-components";
import { GlobalStyle } from '../../../../styles/GlobalStyled'

const Table = styled.div`
  width: 72rem;
  height: 26rem;
  margin-top: 2rem;
  z-index: 5;
`;
const Border = styled.div`

width: 72rem;
border-bottom: 1px black solid;

`
const Box = styled.div`
  height: ${(props) => props.height};
  width: 72rem;
  display: flex;
  
`;

const ColBox = styled.div`

heigth: ${(props) => props.height};
width: 10rem;
background-color: var(--light-grey);
display: flex;
justify-content: center;
align-items: center;
z-index: 1;

`
const InputBox = styled.div`

height: ${(props) => props.height};
width: 62rem;
display: flex;
align-items: center;
justify-content: center;

`

const TextArea = styled.textarea`

width: 58rem;
height: 16rem;
resize: none;
outline: none;
padding: 10px;

`

function EnrollTable() {
  return (
    <Table>
            <Border />
      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">평점</ColBox>
      </Box>

      <Border />
      <Box height="19rem">
        <ColBox height="19rem">리뷰 작성</ColBox>
        <InputBox>
          <TextArea />
        </InputBox>
      </Box>
      <Border />
    </Table>
  );
}
export default EnrollTable;
