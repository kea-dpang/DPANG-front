import styled from "styled-components";
import Header from "../../../../components/common/HeaderBar/Index";
import EnrollReviewBox from "./EnrollReviewBox"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

const HeaderBox = styled.div`
  width: 100vw;
  height: 30rem;
  background-color: snow;
`;
const ContentBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 30rem);
  background-color: snow;
`;
const NavBox = styled.div`
  width: 17rem;
  min-height: calc(100vh - 30rem);
  background-color: #000000;
  color: white;
`;
const ReviewContainer = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

function Index() {
  return (
    <Container>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <ContentBox>
        <NavBox>네브바</NavBox>
        <ReviewContainer><EnrollReviewBox /></ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
