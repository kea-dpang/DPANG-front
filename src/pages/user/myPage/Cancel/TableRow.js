import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { GET_cancel_list } from "@api/cancel";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";

const PaginationContainer = styled.div`
  width: 72rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
`;
const ItemName = styled.div`
  width: 11rem;
`;
const Column = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function TableRow({ data }) {
  const navi = useNavigate();
  //pagination에서 현재 페이지

  const period = useRecoilValue(periodAtom);

  const [currentPage, setCurrentPage] = useState(1);
  const [cancelData, setCancelData] = useState([]); //취소 목록울 저장할 STATE
  const [val, setVal] = useState({
    userId: 1,
    startDate: "",
    endDate: "",
    page: 0,
    size: 10,
    sort: "",
  });
  //page가 변경된 경우
  const handlePageChange = (_, newPage) => {
    //현재 페이지를 새로운 페이지로 변경
    setCurrentPage(newPage);
  };

  //초기 rendering시 취소 리스트에 대한 정보를 API를 통해 받아온다
  useEffect(() => {

    //취소 내역 서버로 부터 받아오기
    GET_cancel_list(val)
      .then((data) => {
        console.log(data, "API 연동 성공입니다");
        setCancelData(data); //여기는 바꿔야 됩니다
      })
      .catch((error) => {
        console.log(error, "실패입니다");
      });
  }, [val]);

  //period값 변경되면 새로운 시간으로 업데이트
  useEffect(()=>{

    setVal((prevVal)=>({
      ...prevVal, 
      startDate: period.startDate, 
      endDate: period.endDate, 
    }))


  }, [period])

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
          <Row
            key={k}
            className="cm-SRegular16"
            onClick={() => {
              navi(`/user/mypage/cancel/detail/${a.id}`);
            }}
          >
            <Col width="11rem">
              <Column>
                <p>{a.date}</p>
                <p>{a.ordernum}</p>
              </Column>
            </Col>
            <Col width="11rem">{a.state}</Col>
            <Col width="29rem">
              <ItemImg src={a.itemImg} />
              <ItemName>{a.itemName}</ItemName>
            </Col>
            <Col width="11rem">
              {a.itemMoney} / {a.amt}
            </Col>
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
            color="primary"
          />
        </Stack>
      </PaginationContainer>
    </>
  );
}

export default TableRow;
