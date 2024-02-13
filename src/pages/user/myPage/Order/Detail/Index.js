import styled from "styled-components";
import OrderBox from "./OrderBox";
import DetailBox from "./DetailTable";
import { useParams } from "react-router-dom";
import { GET_order_detail } from "@api/order";
import { useState, useEffect } from "react";

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
  console.log(id);
  const [orderInfo, setInfo] = useState();

  useEffect(() => {

    window.scrollTo(0, 0);
    GET_order_detail(id)
      .then((data) => {
        setInfo(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log("실패실패", error);
      });
  }, []);

  if (!orderInfo) {
    return <div></div>; // 데이터가 로드되는 동안 표시될 컴포넌트
  }

  return (
    <Container>
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer>
          <OrderBox data={orderInfo} />
        </ReviewContainer>
      </ContentBox>

      {/* Detail을 보여줄 테이블 */}
      <DetailBox data={orderInfo} />
    </Container>
  );
}
export default Index;
