import React from "react";
import bannerImgList from "@data/user/ProductEventDetailData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import EventSlide from "./EventSlider"; // eventslide 컴포넌트

function EventCarousel() {
  var settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 3000, // 속도
    autoplay: true, // 자동 재생
    autoplaySpeed: 6000, // 자동 재생 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    // arrow: true,
  };

  return (
    <Wrap>
      <StyledSlider {...settings}>
        {bannerImgList.map((character, index) => (
          <EventSlide key={index} character={character} />
        ))}
      </StyledSlider>
    </Wrap>
  );
}

export default EventCarousel;

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3rem;
`;
const StyledSlider = styled(Slider)`
  width: 100%;
`;
