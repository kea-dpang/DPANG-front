import React from "react";
import styled from "styled-components";
import Header from "@components/UserHeaderBar/Index";
import EventBanner from "./EventBanner";
import ItemSection from "./ItemSection";
import Footer from "@components/UserFooter/Index";
import EventCarousel from "./EventCarousel";

const MyPage = () => {
  return (
    <>
      <Wrap>
        {/* 헤더 */}
        <Header />
        {/* 이벤트 배너 */}
        <EventCarousel />
        {/* 상품 슬라이더 모음 */}
        <Section>
          <ItemSection title="지금 가장 핫한 상품🔥" filter="hot" />
          <ItemSection title="록시땅 원데이 찬스✨" filter="event" />
        </Section>
        <Footer />
      </Wrap>
    </>
  );
};

export default MyPage;

const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 4rem;
`;
