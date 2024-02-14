import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GET_CartList } from "@api/cart";
import { FormProvider, useForm } from "react-hook-form";
import CartItem from "./CartItem";
import {
  cartListAtom,
  checkedItemsAtom,
  totalAmountSelector,
} from "recoil/user/CartAtom";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

const CartList = ({ onItemCount }) => {
  // const [cartList, setCartList] = useState([]);
  const [cartList, setCartList] = useRecoilState(cartListAtom);
  const totalAmount = useRecoilValue(totalAmountSelector);

  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsAtom);

  // 페이지에 들어올 때마다 checkedItems 상태를 cartList 값으로 초기화
  // -> 새로고침이 되지 않아 전에 체크 하고 안하고 했던 checkedItems가 남아있어 전체 체크가 안되어있는 문제 해결 위해
  useEffect(() => {
    setCheckedItems(cartList);
  }, [cartList]);

  /* 장바구니 리스트 가져오기 */
  const getItemList = () => {
    GET_CartList()
      .then((data) => {
        setCartList(data.data); // 서버에서 가져온 데이터를 Recoil 상태에 저장합니다.
        // console.log("장바구니 리스트 가져오기:",data.data);
        onItemCount(data.data.length); // 아이템 개수를 부모 컴포넌트에 전달
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <>
      {cartList.length !== 0 ? (
        <Wrap>
          <Section>
            <CartWrap>
              {cartList.map((item) => (
                <CartItem key={item.itemId} item={item} />
              ))}
            </CartWrap>
            <Price className="cm-SBold18">
              총 가격: {totalAmount.toLocaleString("ko-KR")} 마일
            </Price>
          </Section>

          <TotalPrice className="cm-SBold18 col-Navy">
            <p>상품금액 {totalAmount.toLocaleString("ko-KR")} 마일</p>
            <p>+</p>
            <p>배송비 3,000 마일</p>
            <p>=</p>
            <p>
              주문 예상금액 {(totalAmount + 3000).toLocaleString("ko-KR")} 마일
            </p>
          </TotalPrice>
        </Wrap>
      ) : (
        // 장바구니에 담긴 상품이 없을 경우
        <NoWrap>
          <p className="cm-MRegular20 col-DarkGrey">
            장바구니에 담긴 상품이 없습니다.
          </p>
        </NoWrap>
      )}
    </>
  );
};

export default CartList;

const Wrap = styled.div``;
const NoWrap = styled.div`
  background: var(--light-grey, #f4f4f4);

  height: 100%;

  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  background: var(--light-grey, #f4f4f4);
  padding: 4rem 4rem 0 4rem;
  border-radius: 1rem;
`;
const CartWrap = styled.div`
  background: var(--light-grey, #f4f4f4);
  padding: 4rem 4rem 0 4rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Price = styled.div`
  margin-top: 3rem;
  border-top: 1px solid var(--dark-grey);

  padding: 3rem;
  display: flex;
  justify-content: center;
`;
const TotalPrice = styled.div`
  margin-top: 2rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
`;
