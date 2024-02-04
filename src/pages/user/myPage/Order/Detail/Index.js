import styled from "styled-components";
import OrderBox from "./OrderBox";
import DetailBox from "./DetailTable";
import { useParams } from "react-router-dom";
import TempData from "assets/data/user/UserOrderData";
import { GET_order_detail } from "@api/order";
import { useState } from "react";


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
  const orderData = [...TempData];
  const data = orderData[id];
  const [orderList, setOrderList] = useState([]); 

  //id를 기준으로 값 가져오기
  GET_order_detail(id)
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
          <OrderBox data={data} />
        </ReviewContainer>
      </ContentBox>

      {/* Detail을 보여줄 테이블 */}
      <DetailBox data={data} />
    </Container>
  );
}
export default Index;