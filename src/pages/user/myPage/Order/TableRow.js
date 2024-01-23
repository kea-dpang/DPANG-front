import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import ArrowImg from '../../../../assets/images/UpArrowVector.svg'
import RowData from "./RowData";


const PaginationContainer = styled.div`

width: 72rem;
height: 5rem;
display: flex;
justify-content: center;
align-items: center;

`


function TableRow({ data }) {


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

      {currentData.map((a) => {

        return <RowData data={a}/>;

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