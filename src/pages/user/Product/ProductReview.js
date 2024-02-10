import { React, useEffect, useState } from "react";
import styled from "styled-components";
import SortButton from "@components/Sort/SortButton";
import ReviewBox from "./ReviewBox";
import { GET_ItemReview } from "@api/Item";
import { ReactComponent as Message } from "@images/messageDot.svg";

const ProductReview = (props) => {
  const [reviewData, setReviewData] = useState([]);
  const [sortedReviews, setSortedReviews] = useState([]);

  useEffect(() => {
    GET_ItemReview(props.item.id)
      .then((data) => {
        console.log("리뷰 Data:", data.data);
        setReviewData(data.data);
        setSortedReviews(data.data);
      })
      .catch((error) => {
        // API 요청 실패
        console.error("리뷰데이터 가져오기 실패", error);
      });
  }, []);

  useEffect(() => {
    setSortedReviews(reviewData);
  }, [reviewData]);
  return (
    <Wrap>
      <PageName className="cm-MBold24 col-Black"> 상품 후기 </PageName>

      {/* 리뷰 총 개수 & 정렬 */}
      <TotalSortWrap>
        <div className="cm-SRegular18">총 {reviewData.length} 개</div>
        {/* 최신순 정렬, 평점순 정렬 */}
        <SortButton
          reviewData={reviewData}
          setSortedReviews={setSortedReviews}
        />
      </TotalSortWrap>

      {sortedReviews.length !== 0 ? (
        // {/* 리뷰 내용 리스트 */}
        <ReviewWrap>
          {sortedReviews.map((review, index) => (
            <ReviewBox key={index} value={review} />
          ))}
        </ReviewWrap>
      ) : (
        <NoContent className="cm-SRegular16 col-DarkGrey">
          <Message
            style={{
              color: "var(--dark-grey)",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
          <div>아직 작성된 리뷰가 없어요. </div>
          <div>첫 리뷰를 등록해보세요!</div>
        </NoContent>
      )}
    </Wrap>
  );
};

export default ProductReview;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  padding-top: 10rem;
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
const NoContent = styled.div`
  width: 66rem;
  padding: 5rem 15rem;
  box-sizing: border-box;
  margin-left: 11rem;
  background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
`;
