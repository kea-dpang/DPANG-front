import styled from "styled-components";
import { useState, useEffect } from "react";
import OrderBox from "./OrderBox";
import CancelBox from '@userPages/myPage/Cancel/CancelBox'
import RefundBox from '@userPages/myPage/Refund/RefundBox'
import { GET_order_list } from "@api/order";
import { customDate } from "assets/CustomName";
import UserEmptyData from "@components/UserEmptyData";

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


  useEffect(()=>{
    window.scrollTo(0, 0);

    setClickCancel(false);
    setClickRefund(false);
    setClickOrder(true);


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




  return (
    <Container>
      <ContentBox>
        <ReviewContainer>
          { clickOrder && <OrderBox handleCancelClick={handleCancelClick} handleRefundClick={handleRefundClick}/>}
          { clickCancel && <CancelBox handleRefundClick={handleRefundClick} handleOrderClick={handleOrderClick}/> }
          { clickRefund && <RefundBox handleCancelClick={handleCancelClick} handleOrderClick={handleOrderClick}/>}
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
