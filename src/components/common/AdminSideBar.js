import styled from "styled-components";
import logo from "../../assets/images/adminSideBar/logoDark.png"
import {ReactComponent as Menu} from "../../assets/images/adminSideBar/hamburgerMenu.svg"
import { ReactComponent as People } from "../../assets/images/adminSideBar/adminSidePeople.svg";
import { ReactComponent as Product } from "../../assets/images/adminSideBar/adminSideItem.svg";
import { ReactComponent as Event } from "../../assets/images/adminSideBar/adminSideEvent.svg";
import { ReactComponent as Stuff } from "../../assets/images/adminSideBar/adminSideSetting.svg";
import { ReactComponent as Order } from "../../assets/images/adminSideBar/adminSideComputer.svg";
import { ReactComponent as Refund } from "../../assets/images/adminSideBar/adminSideRefund.svg";
import { ReactComponent as Ask } from "../../assets/images/adminSideBar/adminSideAsk.svg";
import { ReactComponent as Admin } from "../../assets/images/adminSideBar/adminSidePerson.svg";
import { ReactComponent as ArrowStroke } from "../../assets/images/arrowStroke.svg";
import { useState } from "react";
import { Link } from 'react-router-dom';


// 관리자 페이지 사이드 바 컴포넌트
const AdminSideBar = () => {
    const [openSubMenu, setOpenSubMenu] = useState(null); // 초기상태는 닫힌상태

    const handleSubMenuClick = (menuName) => {
        if (openSubMenu === menuName){ // 이미 열려있는 메뉴를 클릭하면
            setOpenSubMenu(null); // 메뉴를 닫히게 한다
        } else{ // 열려있지 않은 메뉴를 클릭하면
            setOpenSubMenu(menuName); // 해당 메뉴를 연다
        }
    }
    return(
        <>
            <Wrap>
            {/* 디팡 로고 & 메뉴바 로고*/}
                <LogoBar>
                    <img src={logo} alt="logo" style={{ transform: 'rotate(-6.386deg)' }}/>
                    <Menu style={{color: 'var(--white)'}}/>
                </LogoBar>

            {/* 회원관리, 상품관리, 이벤트 관리 ... 메뉴 리스트 */}
                <MenuWrap>
                {/* 회원관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap $isOpen={openSubMenu === '회원관리'} onClick={() => handleSubMenuClick('회원관리')}>
                        <Left>
                            <People style={{color: openSubMenu === '회원관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '회원관리'}>회원관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '회원관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '회원관리' 
                        && <OpenMenuWrap>
                            <Nav> - 회원목록 확인 </Nav>
                            <Nav> - 마일리지 관리 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 상품관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap $isOpen={openSubMenu === '상품관리'} onClick={() => handleSubMenuClick('상품관리')}>
                        <Left>
                            <Product style={{color: openSubMenu === '상품관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '상품관리'}>상품관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '상품관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '상품관리' 
                        && <OpenMenuWrap>
                            <Nav> - 판매처 관리 </Nav>
                            <Nav> - 상품 관리 </Nav>
                            <Nav> - 판매 모니터링 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 이벤트관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap style={{gap: "6.8rem"}} $isOpen={openSubMenu ==='이벤트관리'} onClick={() => handleSubMenuClick('이벤트관리')}>
                        <Left>
                            <Event style={{color: openSubMenu === '이벤트관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '이벤트관리'}>이벤트관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '이벤트관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '이벤트관리' 
                        && <OpenMenuWrap>
                            <Nav to="list"> - 이벤트 관리 </Nav>
                            <Nav to="enroll"> - 이벤트 등록 </Nav>
                            <Nav to="edit"> - 이벤트 수정 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 재고관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap $isOpen={openSubMenu === '재고관리'} onClick={() => handleSubMenuClick('재고관리')}>
                        <Left>
                            <Stuff style={{color: openSubMenu === '재고관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '재고관리'}>재고관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '재고관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '재고관리' 
                        && <OpenMenuWrap>
                            <Nav> - 재고 모니터링 </Nav>
                            <Nav> - 재고 검수 </Nav>
                            <Nav> - 재고 주문/입고 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 주문관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap style={{gap: "7.54rem"}} $isOpen={openSubMenu ==='주문관리'} onClick={() => handleSubMenuClick('주문관리')}>
                    <Left>
                            <Order style={{color: openSubMenu === '주문관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '주문관리'}>주문관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '주문관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '주문관리' 
                        && <OpenMenuWrap>
                            <Nav> - 주문내역 확인 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 환불관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap $isOpen={openSubMenu === '환불관리'} onClick={() => handleSubMenuClick('환불관리')}>
                    <Left>
                            <Refund style={{color: openSubMenu === '환불관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '환불관리'}>환불관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '환불관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '환불관리' 
                        && <OpenMenuWrap>
                            <Nav> - 환불정책 설정 </Nav>
                            <Nav> - 반품/환불 반영 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 고객센터 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap style={{gap: "7.525rem"}} $isOpen={openSubMenu ==='고객센터'} onClick={() => handleSubMenuClick('고객센터')}>
                        <Left>
                            <Ask style={{color: openSubMenu === '고객센터' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '고객센터'}>고객센터</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '고객센터'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '고객센터' 
                        && <OpenMenuWrap>
                            <Nav> - FAQ 관리 </Nav>
                            <Nav> - 1:1 문의관리 </Nav>
                        </OpenMenuWrap>
                    }
                {/* 관리자관리 */}
                    {/* 상위메뉴 */}
                    <SubMenuWrap style={{gap: "6.8rem"}} $isOpen={openSubMenu ==='관리자관리'} onClick={() => handleSubMenuClick('관리자관리')}>
                        <Left>
                            <Admin style={{color: openSubMenu === '관리자관리' ? 'var(--white)' : 'var(--semi-light-grey)'}}/>
                            <MenuName $isOpen={openSubMenu === '관리자관리'}>관리자관리</MenuName>
                        </Left>
                        <Arrow $isOpen={openSubMenu === '관리자관리'}/>
                    </SubMenuWrap>
                    {/* 클릭하면 열리는 상세메뉴 */}
                    {
                        openSubMenu === '관리자관리' 
                        && <OpenMenuWrap>
                            <Nav> - 주문내역 확인 </Nav>
                            <Nav> - 배송상태 업데이트 </Nav>
                        </OpenMenuWrap>
                    }
                </MenuWrap>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 19.0625rem;
    background: var(--navy);
`
const LogoBar = styled.div`
    display: inline-flex;
    padding: 2.1875rem 2.21875rem;
    align-items: center;
    gap: 4.75rem;
`
const MenuWrap = styled.div`
    display: flex;
    width: 19.0625rem;
    height: 100vh;
    padding-top: 3.75rem;
    flex-direction: column;
    align-items: flex-start;
    // gap: 1.1875rem;
`
const SubMenuWrap = styled.button`
    background: none;
    display: flex;
    width: 19.0625rem;
    padding: 1.2rem 2.0625rem;
    align-items: center;
    gap: 7.65rem;
    background-color: ${props => props.$isOpen ? 'var(--light-navy)' : 'var(--navy)'};
`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1.0625rem;
`
const MenuName = styled.div`
    color: ${props => props.$isOpen ? 'var(--white)' : 'var(--semi-light-grey)'};
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`
const Arrow = styled(ArrowStroke)`
    color: ${props => props.$isOpen ? 'var(--white)' : 'var(--semi-light-grey)'};
    transform: ${props => props.$isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
`
const OpenMenuWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 1.375rem;
    background-color: var(--light-navy);
`
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
`
export default AdminSideBar;