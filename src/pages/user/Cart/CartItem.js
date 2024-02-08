import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckBtn } from "@images/checkBtn.svg";
import {
  DELETE_CartItem,
  POST_AddCartItem,
  POST_MinusCartItem,
} from "@api/cart";
import {
  cartListAtom,
  checkedItemsSelector,
  decreaseCountSelector,
  increaseCountSelector,
} from "recoil/user/CartAtom";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";

const CartItem = ({ item }) => {
  const [cartList, setCartList] = useRecoilState(cartListAtom); // Recoil 상태에서 cartList를 가져옵니다.
  const setIncreaseCount = useSetRecoilState(increaseCountSelector);
  const setDecreaseCount = useSetRecoilState(decreaseCountSelector);
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsSelector);

  // 체크된 아이템인지 확인
  const isChecked = checkedItems.includes(item.itemId);

  console.log(cartList);

  /* 상품 삭제 */
  const handleDeleteItem = () => {
    DELETE_CartItem(item.itemId)
      .then((data) => {
        // window.location.reload();
        setCartList((oldCartList) =>
          oldCartList.filter((itemAtom) => itemAtom.itemId !== item.itemId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* 상품 개수 */
  const handleCount = (e) => {
    if (e.target.name === "increase") {
      console.log("증가ㅣ", item.itemId);
      POST_AddCartItem(item.itemId)
        .then((data) => {
          setIncreaseCount(item.itemId);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // decrease
      POST_MinusCartItem(item.itemId)
        .then((data) => {
          setDecreaseCount(item.itemId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  /* 체크박스 클릭 핸들러 */
  const handleCheckboxClick = (e) => {
    // 체크박스 상태 변경
    setCheckedItems(item.itemId);
  };

  return (
    <Wrap>
      {/* 체크박스 */}
      <>
        <Checkbox type="checkbox" onChange={handleCheckboxClick} />
        {/* 커스텀 체크 버튼 */}
        <CheckBtn style={{ fill: isChecked ? "var(--navy)" : "none" }} />
      </>
      <ImgWrap>
        <ItemImg src={item.image} alt={item.name} />
      </ImgWrap>

      <Section>
        <Article>
          <p className="cm-SBold16">{item.name}</p>
          <DeleteBtn className="cm-SRegular16" onClick={handleDeleteItem}>
            삭제
          </DeleteBtn>
        </Article>

        <Article>
          {/* 증가 감소 박스 */}
          <CountBox className="cm-SRegular16">
            <CountBtn name="decrease" onClick={handleCount}>
              -
            </CountBtn>
            <p>{item.quantity}</p>
            <CountBtn name="increase" onClick={handleCount}>
              +
            </CountBtn>
          </CountBox>

          {/* 가격 */}
          {item.discountRate != 0 ? (
            <PriceWrap>
              {/* 원가 */}
              <p
                className="cm-XsRegular14 col-SemiLightGrey"
                style={{ textDecoration: "line-through" }}
              >
                {(item.price * item.quantity).toLocaleString("ko-KR")} 마일
              </p>
              {/* 할인율, 판매 가격 */}
              <Price>
                <p className="cm-SBold16 col-Orange">{item.discountRate}%</p>
                <p className="cm-SBold16">
                  {(item.discountPrice * item.quantity).toLocaleString("ko-KR")}{" "}
                  마일
                </p>
              </Price>
            </PriceWrap>
          ) : (
            // 원가
            <p className="cm-SBold16">
              {(item.price * item.quantity).toLocaleString("ko-KR")} 마일
            </p>
          )}
        </Article>
      </Section>
    </Wrap>
  );
};

export default CartItem;

const Wrap = styled.label`
  display: flex;
  /* align-items: center; */
  gap: 4rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  // 체크박스를 완전히 숨기지 않고, 화면 바깥으로 이동시키는 기법
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const ImgWrap = styled.div`
  width: 10rem;
  height: 10rem;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Section = styled.div`
  width: 100%;
  /* padding: 3rem 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;
const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DeleteBtn = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  border-radius: 0.1875rem;
`;
const CountBox = styled.div`
  border: 1px solid var(--dark-grey);
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const CountBtn = styled.button`
  /* border: 1px solid black; */
  background: none;
  padding: 0.1rem 0.5rem;
  font-size: 1.5rem;
`;
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Price = styled.div`
  display: flex;
  gap: 1rem;
`;
