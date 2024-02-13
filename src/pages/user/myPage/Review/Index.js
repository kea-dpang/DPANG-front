import styled from "styled-components";
import ReviewBox from "./ReviewBox";
import { useState, useEffect } from "react";
import DetailPopUp from "@userPages/myPage/Review/Detail/Index"

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
  min-height: calc(100vh);
`;


function Index() {
  const [popUpState, setPopUpState] = useState(false);
  const [reviewValue, setReviewValue] = useState();

  const handleClick = (a) => {

    setReviewValue(a);
    setPopUpState(true);

  }

  const handleClose = () =>{

    setPopUpState(false);

  }

  useEffect(()=>{

    window.scrollTo(0, 0);
  }, [])

  return (
    <Container>

      <ContentBox>
      {popUpState && <DetailPopUp value={reviewValue} handleClose={handleClose}/>}
        {/* 정보를 표시해줄 component를 호출 */}
        <ReviewContainer>
          <ReviewBox handleClick={handleClick} />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
