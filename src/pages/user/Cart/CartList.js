import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GET_CartList } from "@api/cart";
import { FormProvider, useForm } from "react-hook-form";
import CartItem from "./CartItem";

const CartList = ({ onItemCount }) => {
  const [cartList, setCartList] = useState([]);

  /* 장바구니 리스트 가져오기 */
  const getItemList = () => {
    GET_CartList()
      .then((data) => {
        setCartList(data.data);
        console.log(data.data);

        onItemCount(data.data.length); // 아이템 갯수를 부모 컴포넌트에 전달
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
            <Price className="cm-SBold16">총 가격: 0원</Price>
          </Section>

          <TotalPrice>
            <p>상품금액</p>
            <p>상품금액</p>
            <p>상품금액</p>
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
