import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowImg } from "@images/arrowStroke.svg";
import bannerImgList from "@data/user/ProductEventDetailData";
import EventSlide from "./EventSlider"; // eventslide 컴포넌트
import { useEffect } from "react";
import { Link } from "react-router-dom";

function EventSlider() {
  const [slideIndex, setSlideIndex] = useState(0); // 이미지 슬라이드에서 어떤 이미지 보여주고 있는지 index 저장
  const [selectEvent, setSelectEvent] = useState(
    bannerImgList[slideIndex].eventBannerUrL
  ); // 선택된 이미지 저장 변수

  useEffect(() => {
    const newSelectedEvent = bannerImgList[slideIndex].eventBannerUrL;
    setSelectEvent(newSelectedEvent);
    console.log("선택된 이벤트 : ", newSelectedEvent);
  }, [slideIndex]);

  // 이미지 슬라이드 움직이게 하는 버튼 handler
  const moveToSlide = (direction) => {
    setSlideIndex(
      (prev) =>
        direction === "prev" // 왼쪽으로 가는 버튼이었다면
          ? prev === 0
            ? bannerImgList.length - 1
            : prev - 1 // 왼쪽으로 가는데, 이때 젤 첫 번째 index였다면 젤 끝 index로 가기
          : prev === bannerImgList.length - 1
          ? 0
          : prev + 1 // 오른쪽으로 가는 버튼이면 오른쪽으로 가는데, 젤 마지막 index 였다면 시작 index로 가기
    );
  };

  return (
    <>
      <Wrap>
        {/* 왼쪽 화살표 버튼 */}
        <ArrowBtn direction="prev" onClick={() => moveToSlide("prev")}>
          <StyledArrowImg direction="prev" />
        </ArrowBtn>
        {/* 이미지 슬라이드 */}
        {bannerImgList.map((character, index) => (
          <EventSlide
            key={index}
            character={character}
            isActive={index === slideIndex}
          />
        ))}
        {/* 오른쪽 화살표 버튼 */}
        <ArrowBtn direction="next" onClick={() => moveToSlide("next")}>
          <StyledArrowImg direction="next" />
        </ArrowBtn>
      </Wrap>
    </>
  );
}

export default EventSlider;

const ArrowBtn = styled.button`
  position: absolute;
  top: 50%; // 화살표가 수직으로 가운데에 있도록
  transform: translateY(-50%);
  opacity: 0; // 이미지에 마우스를 올리기 전에는 화살표가 안 보임
  transition: opacity 0.3s ease;
  // 버튼 기본값제거
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  left: ${(props) =>
    props.direction === "prev"
      ? "20%"
      : "unset"}; // 양쪽 끝으로부터 padding 주기
  right: ${(props) => (props.direction === "next" ? "20%" : "unset")};
  z-index: 1;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;

  // 이벤트 이미지에 마우스 올리면 좌우이동 화살표 보이게 하기
  &:hover ${ArrowBtn} {
    opacity: 1;
  }
`;
const StyledArrowImg = styled(ArrowImg)`
  width: 40px;
  height: 40px;
  transform: ${(props) =>
    props.direction === "prev"
      ? "rotate(90deg)"
      : "rotate(-90deg)"}; // '이전'버튼이면 90도 돌리고 아니면 -90도 돌리기
`;
