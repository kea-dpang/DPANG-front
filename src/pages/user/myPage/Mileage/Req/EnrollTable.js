import styled from "styled-components";
import { GlobalStyle } from "../../../../../styles/GlobalStyled";
import { useState } from "react";

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
const Text = styled.p`

color: ${(props)=>props.colour};


`
const TextBox = styled.div`

display: flex;
flex-direction: column;


`

function EnrollTable() {

  const [money, setMoney] = useState(0);

  return (
    <Table className="cm-SBold16">
      <Border />
      <GlobalStyle />
      <Box height="6rem">
        <ColBox height="6rem">이메일</ColBox>
        <InputBox width="26rem" className="cm-SRegular16"></InputBox>

        <ColBox height="6rem">이름</ColBox>

        <InputBox width="26rem"></InputBox>
      </Box>

      <Border />
      <GlobalStyle />
      <Box height="6rem">
        <ColBox height="6rem">충전 희망 마일리지</ColBox>
        <InputBox width="62rem" className="cm-SRegular16">
          <TextArea className="cm-SRegular16" onChange={(e)=>{setMoney(e.target.value)}}/>
          <Text colour="var(--dark-grey)">마일</Text>
        </InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="7rem">
        <ColBox height="7rem">입금자명</ColBox>
        <InputBox width="62rem" className="cm-SRegular16">
          <TextBox>
          <TextArea className="cm-SRegular16"/> 
          <Text colour="red">※ 입금자명이 정확해야 충전이 완료될 수 있습니다!입금자명을 정확하게 입력해주세요</Text>
          </TextBox>
        </InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="6rem">
        <ColBox height="6rem">입금금액</ColBox>
        <InputBox width="62rem" className="cm-SRegular16">{money} 원</InputBox>
      </Box>
      <Border />

      <GlobalStyle />
      <Box height="6rem">
        <ColBox height="6rem">입금계좌</ColBox>
        <InputBox width="62rem" className="cm-SRegular16">카카오뱅크 3333-23-1239024</InputBox>
      </Box>
      <Border />
    </Table>
  );
}
export default EnrollTable;
