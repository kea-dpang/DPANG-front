import styled from "styled-components";
import DetailBox from "./DetailBox";
import Refund from "./Refund/Index";
import { useParams } from "react-router-dom";
import { GET_cancel_detail } from "@api/cancel";
import { useEffect, useState } from "react";

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
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    GET_cancel_detail(id)
      .then((data) => {
        console.log("성공성공", data.data);
        setDetailData(data.data)

      })
      .catch((error) => {
        console.log("실패실패", error);
      })

  }, [])



  if (!detailData) {
    return <></>
  }


  return (
    <Container>
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer>
          <DetailBox data={detailData} />
        </ReviewContainer>
      </ContentBox>

      {/* 환불에 대한 상세 페이지라면 환불에 대한 정보창을, 취소에 대한 상세 페이지라면 취소에 대한 상세 정보를 표시 */}
      <Refund data={detailData} />
    </Container>
  );
}
export default Index;
