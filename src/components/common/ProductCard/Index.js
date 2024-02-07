import styled from "styled-components";
import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as CartImg } from "@images/cart.svg";
import { ReactComponent as LikeImg } from "assets/images/heart.svg";
import { POST_Cart } from "@api/cart";
import { useQuestionAlert } from "@components/SweetAlert";

// 상품 미리보기 (카드)
const Item = (props) => {
  // console.log("상품 카드 가져온 정보 props : ", props);
  const saleprice =
    props.value.price - (props.value.price * props.value.discountRate) / 100;

  const navigate = useNavigate();
  const showQuestionAlert = useQuestionAlert();

  const handleCartAdd = () => {
    showQuestionAlert({
      title: "장바구니에 상품이 추가되었습니다.",
      text: "장바구니 페이지로 이동하시겠습니까?",
      saveText: "",
      navi: "",
      onConfirm: async () => {
        try {
          const data = await POST_Cart(props.value.id, 1);
          console.log("장바구니 등록 성공 야호!", data);
          navigate(`/user/cart`);
        } catch (error) {
          console.log("장바구니 등록에 실패했습니다 ㅠㅠㅠ", error);
        }
      },
    });
  };

  return (
    <>
      <Wrap>
        {/* 상품 사진 * 위시리스트 버튼 */}
        <ItemImgWrap>
          <ItemImg
            to={`/user/products/${props.value.id}`}
            $imgurl={props.value.thumbnailImage}
          />
          {/* <LikeButton $isLiked={liked} onClick={handleLike} /> */}
        </ItemImgWrap>
        {/* 장바구니 버튼 */}
        <CartBtnWrap className="cm-SRegular16" onClick={handleCartAdd}>
          <CartImg style={{ width: "20px", height: "20px" }} /> 담기
        </CartBtnWrap>
        {/* 상품 상세 - 상품 이름 & 원가, 할인율, 할인가격 */}
        <ProductInfoWrap
          to={`/user/products/${props.value.id}`}
          $imgurl={props.value.imgUrl}
        >
          {/* 상품 이름 */}
          <div className="cm-SRegular16">{props.value.name}</div>
          {/* 가격 */}
          <PriceWrap>
            {props.value.discountRate != 0 ? (
              <>
                {/* 원래가격 */}
                <div
                  className="cm-XsRegular14 col-SemiLightGrey"
                  style={{ textDecoration: "line-through" }}
                >
                  {" "}
                  {props.value.price}원
                </div>
                {/* 할인율 & 현재 판매가격 */}
                <SaleWrap className="cm-SBold16">
                  <div className="col-Orange"> {props.value.discountRate}%</div>
                  <div> {saleprice.toLocaleString()}원</div>
                </SaleWrap>
              </>
            ) : (
              // 할인율이 0일 때는 원가만 보여줌
              <SaleWrap className="cm-SBold16">
                <div> {props.value.price.toLocaleString()}원</div>
              </SaleWrap>
            )}
          </PriceWrap>
        </ProductInfoWrap>
      </Wrap>
    </>
  );
};

export default Item;

const Wrap = styled.div`
  display: flex;
  padding: 0.9375rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const ItemImgWrap = styled.div`
  position: relative;
`;
const ItemImg = styled(Link)`
  width: 13.1875rem;
  height: 16.9375rem;
  display: block;
  background: ${(props) =>
    `url(${props.$imgurl}) lightgray 50% / cover no-repeat`};
`;
const LikeButton = styled(LikeImg)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  fill: ${(props) =>
    props.$isLiked
      ? "var(--orange)"
      : "none"}; // liked가 true면 색 채우기, false면 빈 값
`;
const CartBtnWrap = styled.button`
  display: flex;
  width: 13.1875rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  background: none;
  border-radius: 0.1875rem;
  border: 1px solid var(--semi-light-grey);
`;
const ProductInfoWrap = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 13.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  word-break: break-all; // 줄바꿈
`;
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;
const SaleWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.4rem;
  gap: 0.8rem;
`;
