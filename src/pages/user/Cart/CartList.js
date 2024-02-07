import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { GET_CartList } from "@api/cart";
import { FormProvider, useForm } from "react-hook-form";

const CartList = (setSelectedItems) => {
  const [cartItems, setCartItems] = useState([]);
  const [CheckedTotalPrice, setCheckedTotalPrice] = useState(0);
  /* 장바구니 리스트 가져오기 */
  const getItemList = () => {
    GET_CartList()
      .then((data) => {
        console.log("cartItem data: ", data.data);
        setCartItems(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getItemList();
  }, []);
  ///////////////////////////////////////////////////////

  /* 체크박스 체크 */
  const methods = useForm();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    isSubmitting,
    formState: { errors },
  } = methods;

  const watchAllFields = watch();

  useEffect(() => {
    console.log("watchAllFields:", watchAllFields);

    /* itemId별로 값 나누기 (체크표시:check, 개수별 가격:price, num:개수)  */
    const newObj = Object.keys(watchAllFields).reduce((acc, key) => {
      const match = key.match(/(\D*)(\d+)/);
      if (match) {
        const [, prefix, id] = match;
        if (!acc[id]) acc[id] = {};
        if (prefix) {
          acc[id][prefix] = watchAllFields[key];
        } else {
          acc[id]["check"] = watchAllFields[key];
        }
      }
      return acc;
    }, {});

    console.log(newObj);
    /* check가 true인 항목의 price 값 모두 더하기 */
    const totalPrice = Object.values(newObj).reduce((total, item) => {
      if (item.check) {
        total += item.price;
      }
      return total;
    }, 0);

    console.log(totalPrice);

    setCheckedTotalPrice(totalPrice);
  }, [watchAllFields]);
  ///////////////////////////////////////////////////////

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   cartItems.forEach((item) => {
  //     if (item.checked) {
  //       totalPrice += item.price * item.quantity;
  //     }
  //   });
  //   return totalPrice;
  // };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const updateChecked = (itemId, checked) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) => {
        console.log("preveItem: ", prevItem);
        if (prevItem.id === itemId) {
          return {
            ...prevItem,
            checked: checked,
          };
        }
        console.log("장바구니 상품 선택:", cartItems);
        return prevItem;
      })
    );
  };

  return (
    <Wrap>
      <FormProvider {...methods}>
        <Container>
          {cartItems.map((item) => (
            <CartItem
              key={item.itemId}
              item={item}
              updateQuantity={updateQuantity}
              updateChecked={updateChecked}
              // updateItemPrice={updateItemPrice}
            />
          ))}

          <TotalPrice>
            <p className="cm-SBold16 col-Black">
              총 가격: {Number(CheckedTotalPrice).toLocaleString("ko-KR")}원
            </p>
          </TotalPrice>
        </Container>
        <PriceBox>
          <p className="cm-SBold16 col-Navy">
            상품금액 {Number(CheckedTotalPrice).toLocaleString("ko-KR")}원
          </p>
          <p className="cm-SBold16 col-Navy">+</p>
          <p className="cm-SBold16 col-Navy">배송비 3,000원</p>
          <p className="cm-SBold16 col-Navy">=</p>
          <p className="cm-SBold16 col-Navy">
            {/* 주문 예상 금액 {calculateTotalPrice() + 3000}원 */}
            주문 예상 금액{" "}
            {Number(CheckedTotalPrice + 3000).toLocaleString("ko-KR")}원
          </p>
        </PriceBox>
      </FormProvider>
    </Wrap>
  );
};

export default CartList;

const Wrap = styled.div`
  width: 74.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background: var(--light-grey, #f4f4f4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const TotalPrice = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const PriceBox = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  /* padding: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11rem;
  margin-top: 2rem;
  margin-bottom: 2rem; */
`;
