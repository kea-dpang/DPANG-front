import styled from "styled-components";
import Header from "../../../../../components/common/UserHeaderBar/Index";
import EnrollReviewBox from "./EnrollReviewBox";
import DetailTable from "./DetailTable";
import { useParams } from "react-router-dom";

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

  return (
    <Container>
      <ContentBox>
        <DetailTable itemID={id} />
        <ReviewContainer>
          <EnrollReviewBox />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
