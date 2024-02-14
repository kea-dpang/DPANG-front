import styled from "styled-components";
import EnrollReviewBox from "./EnrollBox";
import { useEffect } from "react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 30rem);
`;

const ReviewContainer = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

function Index() {

  const UserInfo = {
    memberId: localStorage.getItem('userId'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
  };

  useEffect(()=>{

    window.scrollTo(0, 0);

  }, [])

  return (
    <Container>
      <ContentBox>
        <ReviewContainer>
          <EnrollReviewBox userData={UserInfo} />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
