import { React, useState } from "react";
import styled from "styled-components";
import ReviewData from "assets/data/user/UserProductReviewData";
import SortButton from "@components/Sort/SortButton";
import ReviewBox from "./ReviewBox";

const ProductReview = (props) => {
  const [sortedReviews, setSortedReviews] = useState(ReviewData);

  return (
    <Wrap>
      <PageName className="cm-MBold24 col-Black"> 상품 후기 </PageName>

      {/* 리뷰 총 개수 & 정렬 */}
      <TotalSortWrap>
        <div className="cm-SRegular18">총 {ReviewData.length} 개</div>
        {/* 최신순 정렬, 평점순 정렬 */}
        <SortButton
          reviewData={ReviewData}
          setSortedReviews={setSortedReviews}
        />
      </TotalSortWrap>

      {/* 리뷰 내용 리스트 */}
      <ReviewWrap>
        {sortedReviews.map((review, index) => (
          <ReviewBox key={index} value={review} />
        ))}
      </ReviewWrap>
    </Wrap>
  );
};

export default ProductReview;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 8rem;
  align-items: center;
`;
const TotalSortWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 58.375rem;
  padding: 2.125rem 0rem 0.9375rem 10rem;
`;
const ReviewWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  // padding: 2.125rem 10rem 0.9375rem 10rem;
  padding-top: 2.215rem;
`;
