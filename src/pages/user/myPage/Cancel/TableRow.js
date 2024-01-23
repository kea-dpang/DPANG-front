import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";


const PaginationContainer = styled.div`

width: 72rem;
height: 5rem;
display: flex;
justify-content: center;
align-items: center;

`
const Row = styled.div`
height: 7rem;
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
  
`;
const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemImg = styled.img`
width: 5rem;
height: 5rem;

`
const ItemName = styled.div`

width: 11rem;

`
const Column = styled.div`

width: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


function TableRow({ data }) {

  const navi = useNavigate();
  //pagination에서 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  //page가 변경된 경우
  const handlePageChange = (_, newPage) => {

    //현재 페이지를 새로운 페이지로 변경
    setCurrentPage(newPage);

  }

  //한페이지당 보여줄 아이템의 개수
  const itemPerPage = 5;
  //시작 index는 현재 페이지의 첫번째 원소부터
  const start = (currentPage - 1) * itemPerPage;
  //끝 index는 start부터 보여주어야할 아이템의 개수 만큼
  const end = start + itemPerPage;
  //전체 데이터에서 시작 ~ 끝만 가져옴
  const currentData = data.slice(start, end);

  return (

    <>
      {currentData.map((a, k) => {
        return (

          <Row key={k} className="cm-SRegular16" onClick={() => { navi(`/user/mypage/temp/cancel/detail/${a.id}`) }}>
            <Col width="10rem">
              <Column>
                <p>{a.date}</p>
                <p>{a.ordernum}</p>
              </Column>
            </Col>
            <Col width="9rem">{a.type}</Col>
            <Col width="10rem">{a.state}</Col>
            <Col width="23rem">
              <ItemImg src={a.itemImg} />
              <ItemName>{a.itemName}</ItemName>
            </Col>
            <Col width="10rem">{a.itemMoney} / {a.amt}</Col>
            <Col width="10rem">{a.refund}</Col>

          </Row>
        );
      })}

      <PaginationContainer>
        <Stack spacing={10}>
          {/* MUI 페이지 네이션 라이브러리 이용 */}
          <Pagination
            //페이지당 아이템 개수에 따른 전체 페이지수 계산
            count={Math.ceil(data.length / itemPerPage)}
            //페이지는 현재 페이지
            page={currentPage}
            onChange={handlePageChange}
            color="primary" />
        </Stack>
      </PaginationContainer>
    </>
  )
}

export default TableRow;