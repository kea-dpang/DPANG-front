import styled from "styled-components";
import OrderBox from "./OrderBox";
import DetailBox from './DetailTable'


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
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer><OrderBox/></ReviewContainer>
      </ContentBox>

      {/* Detail을 보여줄 테이블 */}
      <DetailBox />

    </Container>
  );
}
export default Index;
