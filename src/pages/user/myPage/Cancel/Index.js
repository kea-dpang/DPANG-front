import styled from "styled-components";
import CancelBox from "./CancelBox";

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
  return (
    <Container>
      <ContentBox>
        {/* 리스트를 보여줄 테이블 */}
        <ReviewContainer>
          <CancelBox />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
