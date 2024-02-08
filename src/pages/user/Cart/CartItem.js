import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckBtn } from "@images/checkBtn.svg";
import { DELETE_CartItem } from "@api/cart";

const CartItem = ({ item }) => {
  /* 상품 삭제 */
  const handleDeleteItem = () => {
    DELETE_CartItem(item.itemId)
      .then((data) => {
        console.log("상품삭제했당: ", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(item);
  return (
    <Wrap>
      {/* 체크박스 */}
      <>
        <Checkbox type="checkbox" />
        {/* 커스텀 체크 버튼 */}
        <CheckBtn />
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
            <CountBtn>-</CountBtn>
            <p>1</p>
            <CountBtn>+</CountBtn>
          </CountBox>

          {/* 가격 */}
          <PriceWrap>
            <p
              className="cm-XsRegular14 col-SemiLightGrey"
              style={{ textDecoration: "line-through" }}
            >
              {item.price}
            </p>
            <Price>
              <p className="cm-SBold16 col-Orange">{item.discountRate}%</p>
              <p className="cm-SBold16">{item.discountPrice}</p>
            </Price>
          </PriceWrap>
        </Article>
      </Section>
    </Wrap>
  );
};

export default CartItem;

const Wrap = styled.div`
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
