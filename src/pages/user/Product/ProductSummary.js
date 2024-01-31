import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemDetailData from "../../../assets/data/user/ItemDetailData";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import NumberBadge from "./Numbers";
import Button from "@mui/material/Button";
import { ReactComponent as CartImg } from "../../../assets/images/cart.svg";
import { ReactComponent as LikeImg } from "../../../assets/images/heart.svg";

const ProductSummary = (props) => {
  // 세일가격
  const saleprice =
    props.item.itemPrice -
    (props.item.itemPrice * props.item.discountRate) / 100;
  // 선택 개수
  const [count, setCount] = useState(1);
  // 총 가격
  const [totalPrice, setTotalPrice] = useState(saleprice * count);
  useEffect(() => {
    setTotalPrice(saleprice * count);
  }, [count]);

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <Wrap>
        {/* 상품 사진 & 카테고리 */}
        <ImgWrwap className="cm-SRegular16 col-Black">
          {/* 카테고리 */}
          <CategoryWrap>
            <Nav to=""> {props.item.category} </Nav>
            <div> {">"}</div>
            <Nav to=""> {props.item.subCategory} </Nav>
          </CategoryWrap>
          {/* 상품 사진 */}
          <ProductImg $imgUrl={props.item.itemImage} />
        </ImgWrwap>

        {/* 상품 이름 / 가격 / 판매자 / 상품선택 / 좋아요 / 장바구니 */}
        <ContextWrap>
          {/* 상품 이름 */}
          <div className="cm-XLBold36 col-Black"> {props.item.itemName}</div>
          {/* 상품 별점 및 리뷰 수 */}
          <ReviewWrap>
            <Rating
              name="read-only"
              value={props.item.averageRating}
              readOnly
            />
            <div className="cm-SBold16 col-Black">
              {props.item.reviews.length}
            </div>
          </ReviewWrap>
          {/* 상품 가격 */}
          {props.item.discountRate !== 0 ? (
            <PriceWrap>
              <DiscountWrap className="cm-SBold18">
                <div className="col-Orange"> {props.item.discountRate}%</div>
                <div className="col-Black"> {saleprice.toLocaleString()} </div>
              </DiscountWrap>
              <div
                className="cm-SBold16 col-SemiLightGrey"
                style={{ textDecoration: "line-through" }}
              >
                {props.item.itemPrice}
              </div>
            </PriceWrap>
          ) : (
            <DiscountWrap style={{ paddingTop: "1rem" }} className="cm-SBold18">
              <div className="col-Black"> {props.item.itemPrice} </div>
            </DiscountWrap>
          )}
          {/* 판매자 */}
          <BrandWrap className="cm-SRegular16">
            <div> 판매자 </div>
            <div> {props.item.sellerId} </div>
          </BrandWrap>
          {/* 상품선택 */}
          <SelectWrap>
            {/* 수량선택 박스 */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="cm-SRegular16" style={{ width: "4rem" }}>
                상품선택
              </div>
              <AmountBox>
                <div className="cm-SBold16 col-Navy">
                  {" "}
                  {props.item.itemName}{" "}
                </div>
                <SelectPriceWrap>
                  {/* 수량 선택 */}
                  <NumberBadge count={count} setCount={setCount} />
                  {/* 최종 값 */}
                  <div className="cm-SRegular16 col-Black">
                    {" "}
                    {totalPrice.toLocaleString()}원
                  </div>
                </SelectPriceWrap>
              </AmountBox>
            </div>

            {/* 장바구니 & 위시리스트 */}
            <div>
              <ButtonWrap className="cm-SBold16">
                <LikeButton
                  $isLiked={liked}
                  onClick={handleLike}
                  width="30"
                  height="30"
                />
                <Button
                  style={{
                    backgroundColor: "navy",
                    color: "white",
                    padding: "10px 20px",
                  }}
                >
                  <CartImg fill="var(--white)" /> &nbsp; 장바구니에 추가
                </Button>
              </ButtonWrap>
            </div>
          </SelectWrap>
        </ContextWrap>
      </Wrap>
    </>
  );
};

export default ProductSummary;

const Wrap = styled.div`
  display: flex;
  padding: 1.625rem 15.9375rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const CategoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;
const ImgWrwap = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
`;
const Nav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const ProductImg = styled.div`
  width: 30.97175rem;
  height: 28.86906rem;
  background: url(${(props) => props.$imgUrl}) center center / cover no-repeat;
`;
const ContextWrap = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ReviewWrap = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: none;
  gap: 0.2rem;
`;
const PriceWrap = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`;
const DiscountWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const BrandWrap = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4375rem;
`;
const SelectWrap = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.8rem;
`;
const AmountBox = styled.div`
  display: flex;
  padding: 1.375rem 1.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border: 1px solid var(--semi-light-grey);
`;
const SelectPriceWrap = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  gap: 17.0625rem;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;
const LikeButton = styled(LikeImg)`
  cursor: pointer;
  fill: ${(props) =>
    props.$isLiked
      ? "var(--orange)"
      : "none"}; // liked가 true면 색 채우기, false면 빈 값
`;
