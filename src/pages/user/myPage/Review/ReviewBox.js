import styled from "styled-components";
import Table from "./TableRow";
import PeriodSelector from "../../../../components/common/PeriodSelector";
import MyPageBodyHeader from "../../../../components/utils/MyPageBodyHeader";
import TableHeader from '../../../../components/utils/TableHeader'
import TempData from '../../../../assets/datas/UserReviewList'

const Container = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

const Header = styled.div`
  width: 72rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #043277;
  border-bottom: 1px #043277 solid;
`;
const CalenderBox = styled.div`
  height: 17rem;
  width: 72rem;
  background-color: white;

`;
const TableBox = styled.div`
  height: 43rem;
  background-color: white;
`;
const DetailHeader = styled.div`

width: 72rem;
height: 5rem;
background-color: white;
display: flex;
align-items: end;

`

function ReviewBox() {

  const head = [{width: "10rem", text: '작성일자'}, {width: "22rem", text: '상품명'}, {width: "25rem", text: '내용'}, {width: "15rem", text: '평점'},]
  return (
    <Container>
      <MyPageBodyHeader header="리뷰 관리"/>
      <DetailHeader className="cm-SRegular16">최근 리뷰 관리</DetailHeader>
      {/* 기간 조회 필터 */}
      <CalenderBox><PeriodSelector /></CalenderBox>
      <TableBox>
        <TableHeader head={head}/>
        <Table data={TempData}/>
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
