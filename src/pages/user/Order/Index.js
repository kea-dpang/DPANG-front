import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/UserHeaderBar/Index";
import "../../../styles/fonts.css";
import Footer from "@components/UserFooter/Index";
import { ReactComponent as Arrow } from "@images/arrowStroke.svg";
import OrderList from "./OrderList";
import EnrollAddress from "./Enroll/Address";
import Address from "./Address";

const OrderPage = () => {
  const [addressInfo, setAddressInfo] = useState({
    name: "윤서진",
    phoneNumber: "010-1234-5678",
    zipCode: "461831",
    address: "경기 성남시 수정구 복호동 495",
    detailAddress: "AI공학관 411",
  });
  // api로 회원의 배송지 정보 가져오기
  useEffect(() => {}, []);

  const [FoldCheck, setFoldCheck] = useState([
    { id: 0, name: "배송지", check: true },
    { id: 1, name: "주문", check: true },
  ]);

  /* 메뉴 fold 관리 */
  const handleClick = (menuId) => {
    console.log("메뉴 클릭");
    setFoldCheck(
      FoldCheck.map((item) =>
        item.id === menuId ? { ...item, check: !item.check } : item
      )
    );
  };
  /*  */
  return (
    <>
      <Header />
      <Wrap>
        <CartWrap>
          <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>

          <Main>
            <Menu onClick={() => handleClick(0)}>
              <p>배송지 정보</p>
              <Arrow
                style={
                  FoldCheck[0].check ? { transform: "rotate(180deg)" } : {}
                }
              />
            </Menu>
            {FoldCheck[0].check &&
              (!addressInfo ? (
                <EnrollAddress data={addressInfo} />
              ) : (
                <Address data={addressInfo} />
              ))}

            <Menu onClick={() => handleClick(1)}>
              <p>주문 정보</p>
              <Arrow
                style={
                  FoldCheck[1].check ? { transform: "rotate(180deg)" } : {}
                }
              />
            </Menu>
            {FoldCheck[1].check && <OrderList />}
          </Main>
          <OrderBtn className="Btn_M_Navy">78,000원 결제하기</OrderBtn>
        </CartWrap>
      </Wrap>
      <Footer />
    </>
  );
};

export default OrderPage;
const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;

  box-sizing: border-box;
`;
const CartWrap = styled.div`
  padding: 0 15rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;
const Main = styled.div``;
const Menu = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  &:hover {
    cursor: pointer; // 마우스를 올렸을 때 커서를 포인터로 변경
  }
`;
const OrderBtn = styled.button`
  width: 100%;
`;
