import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowImg } from "@images/arrowStroke.svg";
import itemList from "@data/user/ItemData";
import ItemSlide from "./ItemSlideWrap";

function ItemSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // slideIndex가 업데이트될 때마다 콘솔에 출력
    console.log("선택된 아이템 그룹 인덱스 : ", slideIndex);
  }, [slideIndex]);

  const moveToSlide = (direction) => {
    setSlideIndex((prev) =>
      direction === "prev"
        ? prev === 0
          ? Math.floor(Math.ceil(itemList.length / 4)) - 1
          : prev - 1
        : prev === Math.floor(Math.ceil(itemList.length / 4)) - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <>
      <Wrap>
        <ArrowBtn direction="prev" onClick={() => moveToSlide("prev")}>
          <StyledArrowImg direction="prev" />
        </ArrowBtn>
        {/* 아이템 리스트에서 4개씩 끊어서 그룹화하고, 각 그룹을 슬라이드로 렌더링 */}
        {Array(Math.ceil(itemList.length / 4))
          .fill()
          .map((_, i) => (
            <ItemSlide
              key={i}
              items={itemList.slice(i * 4, (i + 1) * 4)}
              isActive={i === slideIndex}
            />
          ))}
        <ArrowBtn direction="next" onClick={() => moveToSlide("next")}>
          <StyledArrowImg direction="next" />
        </ArrowBtn>
      </Wrap>
    </>
  );
}

export default ItemSlider;

const Wrap = styled.div`
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    position: relative;
    }
`;
const ArrowBtn = styled.button`
  position: absolute;
  top: 50%; // 화살표가 수직으로 가운데에 있도록
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
  // 버튼 기본값제거
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  left: ${(props) =>
    props.direction === "prev"
      ? "8%"
      : "unset"}; // 양쪽 끝으로부터 padding 주기
  right: ${(props) => (props.direction === "next" ? "8%" : "unset")};
  z-index: 1;
`;
const StyledArrowImg = styled(ArrowImg)`
  width: 40px;
  height: 40px;
  transform: ${(props) =>
    props.direction === "prev"
      ? "rotate(90deg)"
      : "rotate(-90deg)"}; // '이전'버튼이면 90도 돌리고 아니면 -90도 돌리기
`;
