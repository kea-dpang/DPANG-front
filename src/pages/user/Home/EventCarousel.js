import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import EventSlide from "./EventSlider"; // eventslide 컴포넌트
import { useState, useEffect } from "react";
import { GET_EventList } from "@api/event";
import { ReactComponent as Arrowcircle } from "@images/arrowStrokeVector.svg";

function EventCarousel() {
  const [event, setEvent] = useState([]);
  const getList = () => {
    GET_EventList()
      .then((data) => {
        console.log("imageUrl: ", data.data.content);
        setEvent(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getList();
  }, []);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <Arrow className="left" onClick={onClick}>
        <Arrowcircle
          style={{ transform: "scaleX(-1)", width: "1.5rem", height: "1.5rem" }}
        />
      </Arrow>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <Arrow className="right" onClick={onClick}>
        <Arrowcircle style={{ width: "1.5rem", height: "1.5rem" }} />
      </Arrow>
    );
  }
  var settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 1000, // 속도
    autoplay: true, // 자동 재생
    autoplaySpeed: 10000, // 자동 재생 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Wrap>
      <StyledSlider {...settings}>
        {event.map((character, index) => (
          <EventSlide key={index} character={character} />
        ))}
      </StyledSlider>
    </Wrap>
  );
}

export default EventCarousel;

const Arrow = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0;

  z-index: 1;

  &.left {
    left: 15%;
  }
  &.right {
    right: 15%;
  }
`;
const Wrap = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  &:hover ${Arrow} {
    opacity: 1;
  }
`;
const StyledSlider = styled(Slider)`
  width: 100%;
`;
