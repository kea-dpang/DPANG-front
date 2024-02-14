import styled from "styled-components";
import { React } from "react";
import { Link } from "react-router-dom";

// 최근 조회 상품 카드
const RecentWatchedItem = (item) => {
  const saleprice =
    item.item.price - (item.item.price * item.item.discountRate) / 100;

  return (
    <>
      <Wrap>
        {/* 상품 사진 * 위시리스트 버튼 */}
        <ItemImgWrap>
          <ItemImg
            to={`/user/products/${item.item.id}`}
            $imgurl={item.item.thumbnailImage}
          />
        </ItemImgWrap>
        {/* 상품 상세 - 상품 이름 & 원가, 할인율, 할인가격 */}
        <ProductInfoWrap
          to={`/user/products/${item.item.id}`}
          $imgurl={item.item.imgUrl}
        >
          {/* 상품 이름 */}
          <div className="cm-XsBold14">{item.item.name}</div>
          {/* 가격 */}
          <PriceWrap>
            {item.item.discountRate != 0 ? (
              <>
                {/* 원래가격 */}
                <div
                  className="cm-XsRegular12 col-SemiLightGrey"
                  style={{ textDecoration: "line-through" }}
                >
                  {item.item.price.toLocaleString()}마일
                </div>
                {/* 할인율 & 현재 판매가격 */}
                <SaleWrap className="cm-XsBold14">
                  <div className="col-Orange"> {item.item.discountRate}%</div>
                  <div> {saleprice.toLocaleString()}마일</div>
                </SaleWrap>
              </>
            ) : (
              // 할인율이 0일 때는 원가만 보여줌
              <SaleWrap className="cm-XsBold14">
                <div> {item.item.price.toLocaleString()}마일</div>
              </SaleWrap>
            )}
          </PriceWrap>
        </ProductInfoWrap>
      </Wrap>
    </>
  );
};

export default RecentWatchedItem;

const Wrap = styled.div`
  display: flex;
  padding: 0.9375rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const ItemImgWrap = styled.div`
  position: relative;
  z-index: -1;
  pointer-events: none;
`;
const ItemImg = styled(Link)`
  pointer-events: auto;
  z-index: 1;
  width: 8rem;
  height: 10rem;
  display: block;
  background: ${(item) =>
    `url(${item.$imgurl}) lightgray 50% / cover no-repeat`};
`;
const ProductInfoWrap = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 10rem;
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
