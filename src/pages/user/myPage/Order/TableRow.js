import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import RowData from "./RowData";
import { GET_orderlist } from "@api/order";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";

const PaginationContainer = styled.div`
  width: 72rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TableRow({ data }) {
  //pagination에서 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const userId = 1; //userId는 나중에 바꿀 수 있어야 한다

  const period = useRecoilValue(periodAtom);

  const [val, setVal] = useState({
    userrId: 1,
    page: 0,
    size: 10,
    sort: "",
    startDate: period.startDate, 
    endDate: period.endDate, 

  })

  //page가 변경된 경우
  const handlePageChange = (_, newPage) => {
    //현재 페이지를 새로운 페이지로 변경
    setCurrentPage(newPage);
  };

  //order리스트를 가져올 API를 호출
  useEffect(() => {
    GET_orderlist(val)
      .then((data) => {
        console.log("성공적!!", data);
      })
      .catch((error) => {
        console.log("오류 발생", error);
      });
  }, [val]);

    //period값이 변경되면 시간 값을 업데이트
    useEffect(()=>{

      setVal((prevState)=>({
        ...prevState, 
        startDate: period.startDate, 
        endDate: period.endDate, 
      }))
  
  
    }, [period]);

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
      {/* 페이지  */}
      {currentData.map((a, i) => {
        return <RowData data={a} key={i} />;
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
