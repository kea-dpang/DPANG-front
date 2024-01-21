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
const ItemColBox = styled.div`

display: flex;
flex-direction: column;

`

const ItemCol = styled.div`

height: 6rem;
display: flex;
${(props)=>setBorder(props.i)};
border-left: 1px solid black;

`

const ButtonBox = styled.div`

display: flex;
flex-direction: column;

`
const Button = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton(props.status)};
color: white;

`
const setButton = (s) => {


  switch (s) {
    case "결제완료":
      return { backgroundColor: 'var(--navy)', disabled: "false" };
    default:
      return { display: 'none' }

  }

}


const Button1 = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton1(props.status)};
color: white;

`
const setButton1 = (s) => {

  switch (s) {
    case "배송완료":
      return { backgroundColor: 'var(--navy)', disabled: "false" };
    default:
      return { display: 'none' }

  }

}

const Button2 = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton2(props.status)};
color: var(--navy);
border: 1px var(--navy) solid;

`
const setButton2 = (s) => {

  switch (s) {
    case "배송완료":
      return { backgroundColor: 'var(--white)', disabled: "false" };
    default:
      return { display: 'none' }

  }

}

const setBorder = (i) =>{

if(i!=0)
return {borderTop: "1px solid black"}
else
return {border: 0}

}

function TableRow({data}) {

    //pagination에서 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);

    //page가 변경된 경우
    const handlePageChange = (e, newPage) =>{
  
      //현재 페이지를 새로운 페이지로 변경
      setCurrentPage(newPage);
  
    }
  
    //한페이지당 보여줄 아이템의 개수
    const itemPerPage = 2;
    //시작 index는 현재 페이지의 첫번째 원소부터
    const start = (currentPage - 1) * itemPerPage;
    //끝 index는 start부터 보여주어야할 아이템의 개수 만큼
    const end = start + itemPerPage;
    //전체 데이터에서 시작 ~ 끝만 가져옴
    const currentData = data.slice(start, end);

  const navi = useNavigate();

  return(
    <>

  {currentData.map((a, k) => {
    return (
      <Row className="cm-SRegular16" key={k}>
        <Col width="13rem">
          <Column>
            <p>{a.date}</p>
            <p>{a.ordernum}</p>
          </Column>
        </Col>
        <Col width="11rem">{a.status}</Col>
        <ItemColBox>
          {a.item.map((b, i) => {

            return (
              <ItemCol key={i} i={i} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/order/detail') }}>
                <Col width="22rem">
                  <ItemImg src={b.img} />
                  <ItemName>{b.name}</ItemName>
                </Col>
                <Col width="11rem">{b.money} / {b.amt}</Col>

                <Col width="15rem">
                  <ButtonBox>
                    <Button status={a.status}>취소</Button>
                    {/* 버튼을 클릭하더라도 상위 요소에 대하 이벤트 버블링 발생하지 않도록 함 */}
                    <Button1 status={a.status} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/refund/enroll') }}>반품</Button1>
                    <Button2 status={a.status} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/review/enroll') }}>리뷰작성</Button2>
                  </ButtonBox>
                </Col>

              </ItemCol>
            )

          })}
        </ItemColBox>

      </Row>
    );
  })};

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