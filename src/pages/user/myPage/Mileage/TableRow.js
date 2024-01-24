import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Row = styled.div`
  width: 72rem;
  height: 4rem;
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

const Status = styled.div`
  width: 5.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => getColour(props.status)};
  color: white;
  border-radius: 3px;
`;

const PaginationContainer = styled.div`
  width: 72rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// props의 데이터를 이용하여 데이터에 따라 다른 색을 props로 넘겨줌
const getColour = (s) => {
  switch (s) {
    case "승인":
      return "#043277";
    case "반려":
      return "#BCBCBC";
    default:
      return "#FA622F";
  }
};

function TableRow({ data }) {
  //pagination에서 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  //page가 변경된 경우
  const handlePageChange = (e, newPage) => {
    //현재 페이지를 새로운 페이지로 변경
    setCurrentPage(newPage);
  };

  //한페이지당 보여줄 아이템의 개수
  const itemPerPage = 9;
  //시작 index는 현재 페이지의 첫번째 원소부터
  const start = (currentPage - 1) * itemPerPage;
  //끝 index는 start부터 보여주어야할 아이템의 개수 만큼
  const end = start + itemPerPage;
  //전체 데이터에서 시작 ~ 끝만 가져옴
  const currentData = data.slice(start, end);

  return (
    <>
      {/* currentData 만큼만 rendering해줌 */}
      {currentData.map((a) => {
        return (
          <>
            <Row className="cm-SRegular16">
              <Col width="18rem">{a.date}</Col>
              <Col width="18rem">{a.name}</Col>
              <Col width="18rem">{a.money} 마일</Col>
              {/* 마일리지 충전 상태에 따라 다른 상태 표시를 위하여 props로 상태 정보 넘겨줌 */}
              <Col width="18rem">
                <Status status={a.status}>{a.status}</Status>
              </Col>
            </Row>
          </>
        );
      })}
      {/* 페이지네이션 컨테이너 */}
      <PaginationContainer>
        <Stack spacing={10}>
          {/* MUI 페이지 네이션 라이브러리 이용 */}
          <Pagination
            //페이지당 아이템 개수에 따른 전체 페이지수 계산
            count={Math.ceil(data.length / itemPerPage)}
            //페이지는 현재 페이지
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </PaginationContainer>
    </>
  );
}

export default TableRow;
