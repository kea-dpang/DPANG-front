import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkedItemsAtom } from "recoil/user/CartAtom";
import styled from "styled-components";

const OrderList = ({ orderItemList }) => {
  return (
    <Wrap>
      {orderItemList.map((item) => (
        <Wrap2 key={item.itemId}>
          <Section>
            <ImgWrap>
              <ItemImg src={item.image} alt={item.name} />
            </ImgWrap>
            <p className="cm-SBold16">{item.name}</p>
          </Section>

          <Article>
            <p>{item.quantity} 개</p>

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
                    {(item.discountPrice * item.quantity).toLocaleString(
                      "ko-KR"
                    )}{" "}
                    마일
                  </p>
                </Price>
              </PriceWrap>
            ) : (
              // 원가
              <PriceWrap className="cm-SBold16">
                {(item.price * item.quantity).toLocaleString("ko-KR")} 마일
              </PriceWrap>
            )}
          </Article>
        </Wrap2>
      ))}
    </Wrap>
  );
};

export default OrderList;

const Wrap = styled.div``;

const Wrap2 = styled.label`
  display: flex;
  justify-content: space-between;
  background: var(--light-grey, #f4f4f4);
  padding: 1rem 0.9rem;
`;

const ImgWrap = styled.div`
  width: 5rem;
  height: 7rem;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Section = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Article = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20rem;
`;
const Price = styled.div`
  display: flex;
  gap: 1rem;
`;
