import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import Header from "@components/UserHeaderBar/Index";
import { useNavigate } from "react-router-dom";
import Footer from "@components/UserFooter/Index";
import { GET_CartList } from "@api/cart";
import { Link } from "react-router-dom";
import {
  cartListAtom,
  checkedItemsAtom,
  totalAmountSelector,
} from "recoil/user/CartAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useErrorAlert, useQuestion2Alert } from "@components/SweetAlert";

const CartPage = () => {
  /* TODO: 버튼 비활성화 */
  /*
  [버튼 비활성화]
  마일리지 부족할 경우
  장바구니 아무것도 안담겨 있을 경우
  */
  const [cartItemCount, setCartItemCount] = useState(); // 장바구니에 아이템이 담겨있는지 체크
  const cartListCheck = useRecoilValue(cartListAtom);

  const checkedItems = useRecoilValue(checkedItemsAtom);
  //
  const totalAmount = useRecoilValue(totalAmountSelector);
  const navigate = useNavigate();
  // alert
  const showQuestion2Alert = useQuestion2Alert();
  const showErrorAlert = useErrorAlert();

  useEffect(() => {
    if (cartItemCount === 0) {
      console.log("장바구니에 아이템이 없습니다.");
    }
  }, [cartItemCount]);

  const handleItemCount = (count) => {
    setCartItemCount(count);
  };

  useEffect(() => {
    console.log("바뀔 때마다...checkedItem:", checkedItems);
  }, [checkedItems]);

  const handleBtn = () => {
    console.log("제발좀되어라...checkedItem:", checkedItems);
    if (checkedItems.length === 0) {
      showErrorAlert({
        title: "주문할 상품을 선택해 주세요.",
        text: "",
      });
    } else {
      navigate("/user/order");
      localStorage.setItem("orderList", JSON.stringify(checkedItems));
    }
  };

  return (
    <>
      <Header />
      <Wrap>
        <CartWrap>
          <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>
          <Main>
            <CartList onItemCount={handleItemCount} />
          </Main>
          {/* {cartItemCount > 0 && ( */}
          {cartListCheck.length > 0 && (
            <OrderBtn
              className="Btn_M_Navy"
              // to={"/user/order"}
              onClick={handleBtn}
            >
              주문하기
            </OrderBtn>
          )}
        </CartWrap>
      </Wrap>
      <Footer />
    </>
  );
};

export default CartPage;

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
const Main = styled.div`
  /* height: 30rem; // CartList의 NoWrap 스타일 컴포넌트에 height 100%를 주기 위한 설정 */
  min-height: 30rem;
  /* background: var(--light-grey, #f4f4f4); */
`;
const OrderBtn = styled.button`
  /* padding: 1.3rem 0; */
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
`;
