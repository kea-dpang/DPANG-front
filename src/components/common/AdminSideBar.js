import styled from "styled-components";
import logo from "@images/adminSideBar/logoDark.png";
import { ReactComponent as Menu } from "@images/adminSideBar/hamburgerMenu.svg";
import { ReactComponent as People } from "@images/adminSideBar/adminSidePeople.svg";
import { ReactComponent as Product } from "@images/adminSideBar/adminSideItem.svg";
import { ReactComponent as Event } from "@images/adminSideBar/adminSideEvent.svg";
import { ReactComponent as Stuff } from "@images/adminSideBar/adminSideSetting.svg";
import { ReactComponent as Order } from "@images/adminSideBar/adminSideComputer.svg";
import { ReactComponent as Refund } from "@images/adminSideBar/adminSideRefund.svg";
import { ReactComponent as Ask } from "@images/adminSideBar/adminSideAsk.svg";
import { ReactComponent as Admin } from "@images/adminSideBar/adminSidePerson.svg";
import { ReactComponent as ArrowStroke } from "@images/arrowStroke.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

// 관리자 페이지 사이드 바 컴포넌트
const AdminSideBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null); // 초기상태는 닫힌상태

  const handleSubMenuClick = (menuName) => {
    if (openSubMenu === menuName) {
      // 이미 열려있는 메뉴를 클릭하면
      setOpenSubMenu(null); // 메뉴를 닫히게 한다
    } else {
      // 열려있지 않은 메뉴를 클릭하면
      setOpenSubMenu(menuName); // 해당 메뉴를 연다
    }
  };
  return (
    <>
      <Wrap>
        {/* 디팡 로고 & 메뉴바 로고*/}
        <LogoBar to="monitoring">
          <img
            src={logo}
            alt="logo"
            style={{ transform: "rotate(-6.386deg)" }}
          />
          {/* <Menu style={{ color: "var(--white)" }} /> */}
        </LogoBar>

        {/* 회원관리, 상품관리, 이벤트 관리 ... 메뉴 리스트 */}
        <MenuWrap>
          {/* 회원관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            $isOpen={openSubMenu === "회원관리"}
            onClick={() => handleSubMenuClick("회원관리")}
          >
            <Left>
              <People
                style={{
                  color:
                    openSubMenu === "회원관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "회원관리"}>회원관리</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "회원관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "회원관리" && (
            <OpenMenuWrap>
              <Nav to="user"> - 회원목록 확인 </Nav>
              <Nav to="mileage"> - 마일리지 관리 </Nav>
            </OpenMenuWrap>
          )}
          {/* 상품관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            $isOpen={openSubMenu === "상품관리"}
            onClick={() => handleSubMenuClick("상품관리")}
          >
            <Left>
              <Product
                style={{
                  color:
                    openSubMenu === "상품관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "상품관리"}>상품관리</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "상품관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "상품관리" && (
            <OpenMenuWrap>
              <Nav to="brand"> - 판매처 관리 </Nav>
              <Nav to="product"> - 상품 관리 </Nav>
              <Nav to="monitoring"> - 판매 통계 </Nav>
            </OpenMenuWrap>
          )}
          {/* 이벤트관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            style={{ gap: "6.8rem" }}
            $isOpen={openSubMenu === "이벤트관리"}
            onClick={() => handleSubMenuClick("이벤트관리")}
          >
            <Left>
              <Event
                style={{
                  color:
                    openSubMenu === "이벤트관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "이벤트관리"}>
                이벤트관리
              </MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "이벤트관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "이벤트관리" && (
            <OpenMenuWrap>
              <Nav to="event"> - 이벤트 관리 </Nav>
              <Nav to="event/enrollproduct"> - 이벤트 등록 </Nav>
            </OpenMenuWrap>
          )}
          {/* 재고관리 */}
          {/* 상위메뉴 */}
          {/* <SubMenuWrap
            $isOpen={openSubMenu === "재고관리"}
            onClick={() => handleSubMenuClick("재고관리")}
          >
            <Left>
              <Stuff
                style={{
                  color:
                    openSubMenu === "재고관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "재고관리"}>재고관리</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "재고관리"} />
          </SubMenuWrap> */}
          {/* 클릭하면 열리는 상세메뉴 */}
          {/* {openSubMenu === "재고관리" && (
            <OpenMenuWrap>
              <Nav> - 재고 통계 </Nav>
              <Nav> - 재고 검수 </Nav>
              <Nav> - 재고 주문/입고 </Nav>
            </OpenMenuWrap>
          )} */}
          {/* 주문관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            style={{ gap: "7.54rem" }}
            $isOpen={openSubMenu === "주문관리"}
            onClick={() => handleSubMenuClick("주문관리")}
          >
            <Left>
              <Order
                style={{
                  color:
                    openSubMenu === "주문관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "주문관리"}>주문관리</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "주문관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "주문관리" && (
            <OpenMenuWrap>
              <Nav to="order"> - 주문내역 확인 </Nav>
            </OpenMenuWrap>
          )}
          {/* 환불관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            $isOpen={openSubMenu === "환불관리"}
            onClick={() => handleSubMenuClick("환불관리")}
          >
            <Left>
              <Refund
                style={{
                  color:
                    openSubMenu === "환불관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "환불관리"}>환불관리</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "환불관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "환불관리" && (
            <OpenMenuWrap>
              <Nav to="refund"> - 환불 관리 </Nav>
              <Nav to="cancel"> - 취소 관리</Nav>
            </OpenMenuWrap>
          )}
          {/* 고객센터 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            style={{ gap: "7.525rem" }}
            $isOpen={openSubMenu === "고객센터"}
            onClick={() => handleSubMenuClick("고객센터")}
          >
            <Left>
              <Ask
                style={{
                  color:
                    openSubMenu === "고객센터"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "고객센터"}>고객센터</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "고객센터"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "고객센터" && (
            <OpenMenuWrap>
              <Nav to="faq"> - FAQ 관리 </Nav>
              <Nav to="directask"> - 1:1 문의관리 </Nav>
            </OpenMenuWrap>
          )}
          {/* 관리자관리 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            style={{ gap: "6.8rem" }}
            $isOpen={openSubMenu === "관리자관리"}
            onClick={() => handleSubMenuClick("관리자관리")}
          >
            <Left>
              <Admin
                style={{
                  color:
                    openSubMenu === "관리자관리"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "관리자관리"}>
                관리자관리
              </MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "관리자관리"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "관리자관리" && (
            <OpenMenuWrap>
              <Nav> - 주문내역 확인 </Nav>
              <Nav> - 배송상태 업데이트 </Nav>
            </OpenMenuWrap>
          )}
          {/* 통계 */}
          {/* 상위메뉴 */}
          <SubMenuWrap
            style={{ gap: "9.2rem" }}
            $isOpen={openSubMenu === "통계"}
            onClick={() => handleSubMenuClick("통계")}
          >
            <Left>
              <Stuff
                style={{
                  color:
                    openSubMenu === "통계"
                      ? "var(--white)"
                      : "var(--semi-light-grey)",
                }}
              />
              <MenuName $isOpen={openSubMenu === "통계"}>통계</MenuName>
            </Left>
            <Arrow $isOpen={openSubMenu === "통계"} />
          </SubMenuWrap>
          {/* 클릭하면 열리는 상세메뉴 */}
          {openSubMenu === "통계" && (
            <OpenMenuWrap>
              <Nav to="monitoring"> - 통계 </Nav>
            </OpenMenuWrap>
          )}
        </MenuWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 19.0625rem;
  background: var(--navy);
`;
const LogoBar = styled(Link)`
  display: inline-flex;
  padding: 2.1875rem 2.21875rem;
  align-items: center;
  gap: 4.75rem;
`;
const MenuWrap = styled.div`
  display: flex;
  width: 19.0625rem;
  min-height: 100vh;
  padding-top: 3.75rem;
  flex-direction: column;
  align-items: flex-start;
`;
const SubMenuWrap = styled.button`
  background: none;
  display: flex;
  width: 19.0625rem;
  padding: 1.2rem 2.0625rem;
  align-items: center;
  gap: 7.65rem;
  background-color: ${(props) =>
    props.$isOpen ? "var(--light-navy)" : "var(--navy)"};
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.0625rem;
`;
const MenuName = styled.div`
  color: ${(props) =>
    props.$isOpen ? "var(--white)" : "var(--semi-light-grey)"};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Arrow = styled(ArrowStroke)`
  color: ${(props) =>
    props.$isOpen ? "var(--white)" : "var(--semi-light-grey)"};
  transform: ${(props) => (props.$isOpen ? "rotate(0deg)" : "rotate(-90deg)")};
`;
const OpenMenuWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1rem;
  gap: 1.375rem;
  background-color: var(--light-navy);
`;
const Nav = styled(Link)`
  box-sizing: border-box;
  background: none;
  display: flex;
  width: 19.0625rem;
  padding: 0rem 3.5rem;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;

  color: var(--white);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default AdminSideBar;
