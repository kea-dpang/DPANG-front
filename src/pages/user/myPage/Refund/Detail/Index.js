import styled from "styled-components";
import ReviewBox from "./ReviewBox";
import Cancel from './Cancel/Index'
import Refund from './Refund/Index'
import { useParams } from "react-router-dom";
import TempData from '../../../../../assets/datas/RefundData'

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

  const {id} = useParams();
  const refundData = [...TempData];
  const data = refundData[id];


  return (
    <Container>
      {/* 주문 상세 정보를 보여줄 table의 component를 호출 */}
      <ContentBox>
        <ReviewContainer><ReviewBox data={data}/></ReviewContainer>
      </ContentBox>

      {/* 환불에 대한 상세 페이지라면 환불에 대한 정보창을, 취소에 대한 상세 페이지라면 취소에 대한 상세 정보를 표시 */}
      {data.type==="환불" ? <Refund data={data}/> : <Cancel data={data}/>}

    </Container>
  );
}
export default Index;
