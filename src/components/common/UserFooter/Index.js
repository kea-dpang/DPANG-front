import styled from "styled-components";
import ImageBox from "./ImageBox";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BorderBar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--navy);

`;

const P = styled.div`
color: black;
height: 1.2rem;

`

function Index() {
  return (
    <Container>
      <BorderBar>
      <ImageBox />
      <P className="cm-SRegular16">상호: (주) 디팡테크 | 대표자명: 강석훈</P>
      <P className="cm-SRegular16">사업자 등록 번호: 00-000-0000 | 통신판매업 신고 번호: 제0000-경기성남-0000호</P>
      <P className="cm-SRegular16">연락처: 031-750-8539 | 팩스: 00-00-000 | 이메일: dpang@gachon.ac.kr</P>
      <P className="cm-SRegular16">경기도 성남시 수정구 성남대로 1342</P>
      <P />
        <P className="cm-SRegular16">&copy; Copyright 2024 DPANG all rights reserved</P>
        
      </BorderBar>
    </Container>
  );
}
export default Index;
