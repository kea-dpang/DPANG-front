import React, { useEffect } from "react";
import styled from "styled-components";
// import '../../styles/fontStyle.scss';
import { ReactComponent as ArrowStroke } from "../../assets/images/arrowStroke.svg";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserSideBar = () => {
  // const isOrderActive = useMatch("/order*");
  // const isRefundActive = useMatch("/refund*");
  const navigate = useNavigate();

  // 현재 경로가 "order" 또는 "refund"를 포함하는지 확인합니다.
  const isOrderActive = useMatch("/order*");
  const isRefundActive = useMatch("/refund*");
  const isCancelActive = useMatch("/cancel*");

  const getToProp = () => {
    if (isOrderActive) return "order";
    if (isRefundActive) return "refund";
    if (isCancelActive) return "cancel";
  };

  return (
    <Wrap>
      <h1 className="cm-MBold24 col-Navy">마이 페이지</h1>

      <NavWrap>
        {/* <Nav to="order"> */}
        {/* <Nav
          to="order"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return (
              location.pathname.includes("order") ||
              location.pathname.includes("refund")
            );
          }}
        > */}
        {/* <Nav to="order" isActive={() => isOrderActive || isRefundActive}> */}
        <Nav
          to={getToProp()}
          isActive={() => isOrderActive || isRefundActive || isCancelActive}
        >
          <p className="cm-SBold18 col-DarkGrey">주문·배송 조회</p>
          <StyledArrowStroke />
        </Nav>

        <Nav to="directAsk">
          <p className="cm-SBold18 col-DarkGrey">1:1 문의</p>
          <StyledArrowStroke />
        </Nav>
        <Nav to="faq">
          <p className="cm-SBold18 col-DarkGrey">FAQ</p>
          <StyledArrowStroke />
        </Nav>
      </NavWrap>

      <NavWrap>
        <Nav to="userinfo">
          <p className="cm-SBold18 col-DarkGrey">회원정보</p>
          <StyledArrowStroke />
        </Nav>
        <Nav to="review">
          <p className="cm-SBold18 col-DarkGrey">리뷰관리</p>
          <StyledArrowStroke />
        </Nav>
        <Nav to="mileage">
          <p className="cm-SBold18 col-DarkGrey">마일리지 충전 내역</p>
          <StyledArrowStroke />
        </Nav>
      </NavWrap>
    </Wrap>
  );
};

export default UserSideBar;

const Wrap = styled.div`
  /* background-color: pink; */
  height: 38.375rem;

  /* flex: 1; */
  width: 14rem;

  padding: 3.375rem 3.25rem 3.375rem 0;

  display: flex;
  flex-direction: column;
  gap: 3.05931rem;

  /* width: 100%; */
  /* max-width: 500px; */
  /* min-width: 20rem; */
  /* width: 20rem; */
`;
const NavWrap = styled.div`
  /* background-color: bisque; */

  display: flex;
  flex-direction: column;
`;

const StyledArrowStroke = styled(ArrowStroke)`
  transform: rotate(-90deg);
  color: var(--dark-grey);
`;

// const Nav = styled(Link)`
const Nav = styled(NavLink)`
  padding: 1.19rem;
  display: flex;
  justify-content: space-between;

  background: none;
  border: 1px solid var(--semi-light-grey, #cfcfcf);

  &:hover {
    background: var(--light-grey, #f4f4f4);
    p {
      color: var(--navy);
    }
  }
  &.active {
    // 이 부분에 선택된 링크의 스타일을 추가합니다.
    background: var(--navy, #f4f4f4);
    p {
      color: var(--white);
    }
    ${StyledArrowStroke} {
      color: var(--white); // 화살표 색상을 변경하는 부분
    }
  }
`;
