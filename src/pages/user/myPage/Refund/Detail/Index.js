import styled from "styled-components";
import ReviewBox from "./ReviewBox";
import Cancel from './Cancel/Index'
import Refund from './Refund/Index'

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

  const state = '취소';

  return (
    <Container>
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer><ReviewBox state={state}/></ReviewContainer>
      </ContentBox>

      {/* 환불에 대한 상세 페이지라면 환불에 대한 정보창을, 취소에 대한 상세 페이지라면 취소에 대한 상세 정보를 표시 */}
      {state==="환불" ? <Refund /> : <Cancel />}

    </Container>
  );
}
export default Index;
