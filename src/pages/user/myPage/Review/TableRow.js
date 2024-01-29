import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState,useEffect } from "react";
import axios from "axios";

const Row = styled.div`
  width: 72rem;
  height: 6rem;
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

const PaginationContainer = styled.div`
  width: 72rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ItemName = styled.div`
  width: 11rem;
`;
function trimContent(str) {
  if (str.length > 30) return str.slice(0, 30) + ".......";
}

function TableRow(props) {

  const data = props.data;
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage-1) * itemPerPage;
  const end = start + itemPerPage;
  const currentData = data.slice(start, end);

  const handlePageChange = (_, newPage) =>{

    setCurrentPage(newPage);
    
  }


  return (
    <>
      {currentData.map((a, i) => {

        return (
          <Row className="cm-SRegular16" key={i}>
            <Col width="10rem">{a.date}</Col>
            <Col width="22rem">
              <ItemImg src={a.img} />
              <ItemName>{a.name}</ItemName>
            </Col>
            <Col width="25rem">{trimContent(a.content)}</Col>
            <Col width="15rem">
              <Rating name="read-only" value={a.star} readOnly />
            </Col>
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
            color="primary"
          />
        </Stack>
      </PaginationContainer>
    </>
  );
}

export default TableRow;
