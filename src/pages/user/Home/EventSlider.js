import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EventSlide = ({ character, isActive }) => {
  return (
    // <Slide className={isActive ? "active" : null}>
    // {/* TODO: event id로 주소 바꾸기 */}
    <Link to={`/user/event/brand`}>
      <Images $eventImg={character.imagePath} />
    </Link>
    // </Slide>
  );
};

export default EventSlide;

const Images = styled.div`
  min-width: 1550px;
  height: 20rem;
  background: url(${(props) => props.$eventImg}) center center / contain
    no-repeat;
`;
