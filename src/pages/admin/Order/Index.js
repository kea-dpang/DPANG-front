import styled from "styled-components";
import OrderBox from './OrderBox'
import AdminSideBar from "../../../components/common/AdminSideBar"; 

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: raw;
  
`;


const OrderContainer = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
  align-items: center;
  justify-content: center;
`;

function Index() {
  return (
    <Container>
        <AdminSideBar/>
        <OrderContainer><OrderBox /></OrderContainer>
    </Container>
  );
}
export default Index;
