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
`;

function UserPagination(props) {
  //초기에 설정할 첫 페이지는 1페이지
  const [currentPage, setCurrentPage] = useState(1);
  //page가 변경된 경우

  const handlePageChange = (e, newPage) => {
    //이전 값에서 페이지 값만 변경시켜준다
    setCurrentPage(newPage);
    props.handleValChange(newPage);
  };

  //한페이지당 보여줄 아이템의 개수
  const itemPerPage = 10;

  //  페이지네이션 컨테이너
  return (
    <PaginationContainer>
      {/* spacing은 숫자간 간격이다 */}
      <Stack spacing={10}>
        {/* MUI 페이지 네이션 라이브러리 이용 */}
        <Pagination
          //페이지당 아이템 개수에 따른 전체 페이지수 계산. props로 넘긴 numOfElement 나누기 itemPerPage로 페이지수를 계산해준다
          count={Math.ceil(props.numOfElement / itemPerPage)}
          //페이지는 현재 페이지
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </PaginationContainer>
  );
}
export default UserPagination;
