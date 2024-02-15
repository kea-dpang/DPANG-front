import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import NumberBadge from "./Numbers";
import Button from "@mui/material/Button";
import { ReactComponent as CartImg } from "@images/cart.svg";
import { ReactComponent as LikeImg } from "@images/heart.svg";
import { categoryFormat, subCategoryFormat } from "assets/CustomName";
import { POST_Cart } from "@api/cart";
import { useQuestionFunctionAlert } from "@components/SweetAlert";

const ProductSummary = (props) => {
  console.log("summary: ", props);
  // 세일가격
  const saleprice =
    props.item.price - (props.item.price * props.item.discountRate) / 100;
  // 선택 개수
  const [count, setCount] = useState(1);
  // 총 가격
  const [totalPrice, setTotalPrice] = useState(saleprice * count);
  useEffect(() => {
    setTotalPrice(saleprice * count);
  }, [count]);

  const showQuestionAlert = useQuestionFunctionAlert();
  const handleAddCart = () => {
    showQuestionAlert({
      title: "장바구니에 상품이 추가되었습니다.",
      text: "장바구니 페이지로 이동하시겠습니까?",
      saveText: "",
      navi: "/user/cart",
      onConfirm: async () => {
        try {
          const data = await POST_Cart(props.item.id, count);
          console.log("장바구니 등록 성공 야호!", data);
        } catch (error) {
          console.log("장바구니 등록에 실패했습니다 ㅠㅠㅠ", error);
        }
      },
    });
  };
  return (
    <>
      <Wrap>
        {/* 상품 사진 & 카테고리 */}
        <ImgWrap className="cm-SRegular16 col-Black">
          {/* 카테고리 */}
          <CategoryWrap className="cm-SRegular16 col-White">
            <Nav
              style={{ backgroundColor: "var(--navy)", color: "var(--white)" }}
            >
              카테고리
            </Nav>
            <div style={{ color: "var(--black)" }}> {">"}</div>
            <Nav
              to={`/user/categories/${categoryFormat(
                props.item.category,
                true
              )}`}
            >
              {categoryFormat(props.item.category, false)}
            </Nav>
            {props.item.subCategory && (
              <>
                <div style={{ color: "var(--black)" }}> {">"}</div>
                <Nav to="">
                  {subCategoryFormat(props.item.subCategory, false)}
                </Nav>
              </>
            )}
          </CategoryWrap>
          {/* 상품 사진 */}
          <ProductImg $imgUrl={props.item.thumbnailImage} />
        </ImgWrap>

        {/* 상품 이름 / 가격 / 판매자 / 상품선택 / 좋아요 / 장바구니 */}
        <ContextWrap>
          {/* 상품 이름 */}
          <div className="cm-XLBold36 col-Black"> {props.item.name}</div>
          {/* 상품 별점 및 리뷰 수 */}
          <ReviewWrap>
            <Rating
              name="read-only"
              value={props.item.averageRating}
              readOnly
            />
            <div className="cm-SRegular16 col-Black">
              ( {props.item.reviewCount} )
            </div>
          </ReviewWrap>
          {/* 상품 가격 */}
          {props.item.discountRate !== 0 ? (
            <PriceWrap>
              <DiscountWrap className="cm-SBold18">
                <div className="col-Orange"> {props.item.discountRate}%</div>
                <div className="col-Black">
                  {saleprice.toLocaleString()} 마일
                </div>
              </DiscountWrap>
              <div
                className="cm-SBold16 col-SemiLightGrey"
                style={{ textDecoration: "line-through" }}
              >
                {props.item.price.toLocaleString()} 마일
              </div>
            </PriceWrap>
          ) : (
            <DiscountWrap style={{ paddingTop: "1rem" }} className="cm-SBold18">
              <div className="col-Black">
                {props.item.price.toLocaleString()}마일
              </div>
            </DiscountWrap>
          )}
          {/* 판매자 */}
          <BrandWrap className="cm-SRegular16">
            <div> 판매자 </div>
            <div> {props.item.sellerName} </div>
          </BrandWrap>
          {/* 상품선택 */}
          <SelectWrap>
            {/* 수량선택 박스 */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="cm-SRegular16" style={{ width: "4rem" }}>
                상품선택
              </div>
              <AmountBox>
                <div className="cm-SBold16 col-Navy"> {props.item.name} </div>
                <SelectPriceWrap>
                  {/* 수량 선택 */}
                  <NumberBadge count={count} setCount={setCount} />
                  {/* 최종 값 */}
                  <div className="cm-SRegular16 col-Black">
                    {totalPrice.toLocaleString()}마일
                  </div>
                </SelectPriceWrap>
              </AmountBox>
            </div>

            {/* 장바구니 */}
            <div>
              <ButtonWrap className="cm-SBold16">
                <Button
                  style={{
                    backgroundColor: "navy",
                    color: "white",
                    padding: "10px 20px",
                  }}
                  onClick={handleAddCart}
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
  align-items: center;
`;
const ImgWrap = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
`;
const Nav = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: var(--light-navy);
  padding: 0.5rem 1rem;
  border-radius: 3rem;
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
  padding-top: 1rem;
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
  gap: 16rem;
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
