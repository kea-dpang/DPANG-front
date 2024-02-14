import styled from "styled-components";
import EnrollReviewBox from "./EnrollReviewBox";
import MyPageBodyHeader from "components/common/MyPageBodyHeader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 30rem);
`;

const ReviewContainer = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

function Index() {
  const { id } = useParams();

  useEffect(()=>{
    window.scrollTo(0, 0);


  }, [])
  return (
    <Container>
      <ContentBox>
        <MyPageBodyHeader header="리뷰 등록" />
        <ReviewContainer>
          <EnrollReviewBox itemID={id} />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
