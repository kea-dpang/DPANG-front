import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@components/UserHeaderBar/Index";
import EventItemSection from "./EventItemSection";
import BestItemSection from "./BestItemSection";
import Footer from "@components/UserFooter/Index";
import EventCarousel from "./EventCarousel";
import { GET_BrandEventListUser } from "@api/event";

const MyPage = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    GET_BrandEventListUser()
      .then((data) => {
        setEventData(data.content);
        console.log("이벤트 리스트 불러왔당 : ", data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrap>
        {/* 헤더 */}
        <Header />
        {/* 이벤트 배너 */}
        <EventCarousel />
        {/* 상품 슬라이더 모음 */}
        <Section>
          <BestItemSection title="지금 가장 핫한 상품🔥" filter="best" />
          {eventData
            .filter((event) => event.eventStatus === "PROCEEDING")
            .map((event, index) => (
              <EventItemSection
                key={index}
                sellerId={event.sellerId}
                title={event.eventName}
                filter="event"
                id={event.id}
              />
            ))}
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
