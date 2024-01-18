import styled from "styled-components";
import EnrollReviewBox from "./EnrollReviewBox"

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

    memberId: '12345678',
    name: '디팡이',
    email: 'dpang1@naver.com',
    date: '2024.01.01'
  
  
  }

  return (
    <Container>
      <ContentBox>
        <ReviewContainer><EnrollReviewBox userData = {UserInfo}/></ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
