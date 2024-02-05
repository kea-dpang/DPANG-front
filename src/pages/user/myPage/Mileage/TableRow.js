import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { GET_mileage_list } from "@api/mileage";
import { customDate, customMileageStatusName } from "assets/CustomName";
import UserPagination from "@components/UserPagination";
import { periodAtom } from "recoil/user/PeriodSelectAtom";

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

// props의 데이터를 이용하여 데이터에 따라 다른 색을 props로 넘겨줌
const getColour = (s) => {
  if (s === "승인") return "#043277";
  else if (s === "반려") return "#BCBCBC";
  else return "#FA622F";
};

function TableRow() {
  //local storage에서 ID 값 가져오기
  const id = parseInt(localStorage.getItem("userId"), 10);

  const [mileageList, setMileageList] = useState([]);
  const [numOfElement, setNumOfElement] = useState(0);

  //recoil통해 날짜 기간 값 받아오기
  const period = useRecoilValue(periodAtom);

  const [val, setVal] = useState({
    userId: id,
    status: "",
    startDate: period.startDate,
    endDate: period.endDate,
    depositorName: "",
    sortOption: "",
    page: 0,
    size: 10,
    XID: 1,
  });

  //하위 component에서 전달받은 새로운 val 값으로 업데이트 해준다
  const handleValChange = (page) => {
    setVal((prevVal) => ({
      ...prevVal,
      page: page - 1,
    }));
  };

  //val이 변경될때마다 mileage 리스트를 업데이트 받는다
  useEffect(() => {
    GET_mileage_list(val)
      .then((data) => {
        console.log(data);
        setNumOfElement(data.data.totalElements);
        setMileageList(data.data.content);
      })
      .catch((error) => {
        console.error("Error fectching mileage data: ", error);
        //오류가 나는 경우에는 리스트를 빈 값으로 초기화
        setMileageList([]);
      });
  }, [val]);

  //기간 설정 탭에서 조회 일자가 변경되는 경우에는 val 값을 다시 설정시켜준다
  useEffect(() => {
    //이전 값 그대로 가져오되 start랑 enddate는 새로 업데이트
    setVal((prevVal) => ({
      ...prevVal,
      startDate: period.startDate,
      endDate: period.endDate,
    }));
  }, [period]);

  return (
    <>
      {/* currentData 만큼만 rendering해줌 */}
      {mileageList.map((a, i) => {
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
      {/* pagination component에 리스트에서 원소의 개수, 전달해줄 value값, 그리고 값이 변경되었을때, state를 업데이트 시켜줄 함수를 props로 보낸다 */}
      <UserPagination
        numOfElement={numOfElement}
        handleValChange={handleValChange}
      />
    </>
  );
}

export default TableRow;
