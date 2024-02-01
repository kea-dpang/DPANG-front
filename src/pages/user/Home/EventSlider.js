import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EventSlide = ({ character, isActive }) => {
  return (
    <Slide className={isActive ? "active" : null}>
      {/* TODO: event id로 주소 바꾸기 */}
      <Link to={`/user/event/product`}>
        <Images $eventImg={character.eventBannerUrL} />
      </Link>
    </Slide>
  );
};

export default EventSlide;

const Slide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &.active {
    opacity: 1;
  }
  transition: opacity 0.3s ease-in-out;
`;

const Images = styled.div`
  min-width: 1550px;
  height: 20rem;
  background-color: white;
  background: url(${(props) => props.$eventImg}) center center / contain
    no-repeat;
`;
