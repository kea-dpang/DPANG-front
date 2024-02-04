import styled from "styled-components";
import RefundBox from "./RefundBox";
import Refund from "./Refund/Table";
import { useParams } from "react-router-dom";
import TempData from "assets/data/user/UserRefundData";
import { GET_refund_detail } from "@api/refund";

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
  const { id } = useParams();
  const refundData = [...TempData];
  const data = refundData[id];

  GET_refund_detail(id)
  .then((data)=>{
    console.log("성공성공", data);
  })
  .catch((error)=>{
    console.log("실패실패", error);
  })

  return (
    <Container>
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer>
          <RefundBox data={data} />
        </ReviewContainer>
      </ContentBox>

      {/* 환불에 대한 상세 페이지라면 환불에 대한 정보창을, 취소에 대한 상세 페이지라면 취소에 대한 상세 정보를 표시 */}
      <Refund data={data} />
    </Container>
  );
}
export default Index;
