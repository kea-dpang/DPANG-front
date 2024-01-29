import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { GET_mileage_list } from "@api/mileage";
import { customDate, customMileageStatusName } from "assets/CustomName";

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
  console.log(s);

  if (s === "승인") return "#043277";
  else if (s === "반려") return "#BCBCBC";
  else return "#FA622F";
};

function TableRow() {
  //pagination에서 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [mileageList, setMileageList] = useState([]);

  //page가 변경된 경우
  const handlePageChange = (e, newPage) => {
    //현재 페이지를 새로운 페이지로 변경
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const val = {
      userId: 1,
      status: "",
      startDate: "",
      endDate: "",
      depositorName: "",
      sortOption: "",
      page: 0,
      size: 10,
      XID: 1,
    };

    GET_mileage_list(val)
      .then((data) => {
        console.log(data.data.content);
        setMileageList(data.data.content);
      })
      .catch((error) => {
        console.error("Error fectching mileage data: ", error);
      });
  }, []);

  //한페이지당 보여줄 아이템의 개수
  const itemPerPage = 10;
  //시작 index는 현재 페이지의 첫번째 원소부터
  const start = (currentPage - 1) * itemPerPage;
  //끝 index는 start부터 보여주어야할 아이템의 개수 만큼
  const end = start + itemPerPage;
  //전체 데이터에서 시작 ~ 끝만 가져옴
  const currentData = mileageList.slice(start, end);

  return (
    <>
      {/* currentData 만큼만 rendering해줌 */}
      {currentData.map((a, i) => {
        return (
          <Row className="cm-SRegular16" key={i}>
            <Col width="18rem">{customDate(a.requestDate)}</Col>
            <Col width="18rem">{a.depositorName}</Col>
            <Col width="18rem">{a.requestedMileage} 마일</Col>
            {/* 마일리지 충전 상태에 따라 다른 상태 표시를 위하여 props로 상태 정보 넘겨줌 */}
            <Col width="18rem">
              <Status status={customMileageStatusName(a.status)}>
                {customMileageStatusName(a.status)}
              </Status>
            </Col>
          </Row>
        );
      })}
      {/* 페이지네이션 컨테이너 */}
      <PaginationContainer>
        <Stack spacing={10}>
          {/* MUI 페이지 네이션 라이브러리 이용 */}
          <Pagination
            //페이지당 아이템 개수에 따른 전체 페이지수 계산
            count={Math.ceil(mileageList.length / itemPerPage)}
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
