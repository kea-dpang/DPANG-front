import styled from "styled-components";
import { GlobalStyle } from "../../../../../styles/GlobalStyled";

const Table = styled.div`
  width: 72rem;
  height: 35rem;
  margin-top: 2rem;
  z-index: 5;
`;
const Border = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
`;
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
`;
const InputBox = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;

`;

const TextArea = styled.textarea`
  width: 18rem;
  height: 1.2rem;
  resize: none;
  outline: none;
  padding: 10px;
`;

function EnrollTable() {
  return (
    <Table className="cm-SBold16">
      <Border />
      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">이메일</ColBox>
        <InputBox width="26rem"></InputBox>

        <ColBox height="7rem">이름</ColBox>

        <InputBox width="26rem"></InputBox>
      </Box>

      <Border />
      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">충전 희망 마일리지</ColBox>
        <InputBox width="62rem">
          <TextArea /> 마일
        </InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">입금자명</ColBox>
        <InputBox width="62rem">
          <TextArea /> ※ 입금자명이 정확해야 충전이 완료될 수 있습니다!입금자명을 정확하게 입력해주세요
        </InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">입금금액</ColBox>
        <InputBox width="62rem"></InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">입금계좌</ColBox>
        <InputBox width="62rem"></InputBox>
      </Box>
      <Border />
    </Table>
  );
}
export default EnrollTable;
