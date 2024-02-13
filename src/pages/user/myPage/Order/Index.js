import styled from "styled-components";
import { useState, useEffect } from "react";
import OrderBox from "./OrderBox";
import CancelBox from '@userPages/myPage/Cancel/CancelBox'
import RefundBox from '@userPages/myPage/Refund/RefundBox'
import { GET_order_list } from "@api/order";
import { customDate } from "assets/CustomName";

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

  const [clickOrder, setClickOrder] = useState(true);
  const [clickCancel, setClickCancel] = useState(false);
  const [clickRefund, setClickRefund] = useState(false);
  const [recentOrderData, setRecentOrderData] = useState();
  const userId = localStorage.getItem("userId");
  const orderOverview = [0, 0, 0, 0, 0, 0];

  useEffect(()=>{

    setClickCancel(false);
    setClickRefund(false);
    setClickOrder(true);

    window.scrollTo(0, 0);
    const currentDate = new Date();
    const prevDate = new Date();
    prevDate.setDate(currentDate.getDate()-30);

    console.log(currentDate);

    const val  = {
      userId: parseInt(userId, 10),
      page: 0,
      size: 100,
      sort: "",
      endDate: customDate(currentDate),
      startDate: customDate(prevDate),
    };

    GET_order_list(val)
    .then((data)=>{
      console.log("최근 30일 주문 데이터 조회 성공!!", data.data.content);
      setRecentOrderData(data.data.content);
    })
    .catch((error)=>{
      console.log("최근 30일 주문 데이터 조회 실패", error);
    })

  }, [])




  const handleOrderClick = () =>{

    setClickCancel(false);
    setClickRefund(false);
    setClickOrder(true);

  } 

  const handleRefundClick = () =>{

    setClickCancel(false);
    setClickOrder(false);
    setClickRefund(true);

  }


  const handleCancelClick = () => {

    setClickOrder(false);
    setClickRefund(false);
    setClickCancel(true);

  }
  if (!recentOrderData) {
    return <></>; // 혹은 다른 로딩 상태를 표시할 JSX를 반환할 수 있습니다.
  }

  if (recentOrderData.length === 0) {
    return <p>No recent orders found.</p>; // 데이터가 비어있는 경우 표시할 메시지
  }
  
  recentOrderData.map((a, i) => {
    a.productList.map((b, k) => {
      switch(b.orderStatus){
        case "PAYMENT_COMPLETED":
          orderOverview[0] = orderOverview[0] + 1;
          break;
        case "DELIVERY_REQUESTED":
          orderOverview[1] = orderOverview[1] + 1;
          break;
        case "PREPARING_FOR_DELIVERY":
          orderOverview[2] = orderOverview[2] + 1;
          break;
        case "IN_DELIVERY":
          orderOverview[3] = orderOverview[3] + 1;
          break;
        case "DELIVERY_COMPLETED":
          orderOverview[4] = orderOverview[4] + 1;
          break;
        default: 
          orderOverview[5] = orderOverview[5] + 1;
          break;

      }
    });
  });

console.log(orderOverview);

  return (
    <Container>
      <ContentBox>
        <ReviewContainer>
          { clickOrder && <OrderBox handleCancelClick={handleCancelClick} handleRefundClick={handleRefundClick} orderOverview={orderOverview}/>}
          { clickCancel && <CancelBox handleRefundClick={handleRefundClick} handleOrderClick={handleOrderClick} orderOverview={orderOverview}/> }
          { clickRefund && <RefundBox handleCancelClick={handleCancelClick} handleOrderClick={handleOrderClick} orderOverview={orderOverview}/>}
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
