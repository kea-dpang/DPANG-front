import styled from "styled-components";
import React, { useState } from "react";
import "@styles/fonts.css";
import BrandEventPage from "./BrandEventEditPage";
import { useParams } from "react-router-dom";

// 브랜드 이벤트 수정 index 페이지
const Index = () => {
  const { eventId } = useParams(); // URL에서 eventId 가져오기

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 이벤트 관리</PageName>
        <PageSubName className="cm-MBold24 col-Navy">
          브랜드 이벤트 수정
        </PageSubName>

        {/* 이벤트 내용 수정하는 공간 */}
        <InputSection>
          <BrandEventPage eventId={eventId} />
        </InputSection>
      </Wrap>
    </>
  );
};

export default Index;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
`;
const PageSubName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 7.5rem 0.9375rem 7.5rem;
  align-items: center;
  font-size: 1.5rem;
`;
const InputSection = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
