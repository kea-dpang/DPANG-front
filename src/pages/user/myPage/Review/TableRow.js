import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { GET_review_list } from "@api/review";
import { customDate } from "assets/CustomName";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";
import UserPagination from "@components/UserPagination";
import UserEmptyData from "@components/UserEmptyData";

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

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ItemName = styled.div`
  width: 18rem;
  height: 5rem;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

//문자열이 너무 길어지면 잘라주기
function trimContent(str) {
  if (str.length > 30) return str.slice(0, 30) + ".......";
  else return str;
}

function TableRow(props) {
  const id = parseInt(localStorage.getItem("userId"), 10);
  const [numOfElement, setNumOfElement] = useState(10);

  //기간 값 설정
  const period = useRecoilValue(periodAtom);
  const [val, setVal] = useState({
    reviewerId: id, //skwn
    page: 0,
    size: 10,
    sort: "",
    startDate: period.startDate,
    endDate: period.endDate,
  });

  const [reviewData, setReviewData] = useState([]);

  //val 값이 변경되면 다시 값 가져오기
  useEffect(() => {
    GET_review_list(val)
      .then((data) => {
        console.log(data);
        setReviewData(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [val]);

  //period값이 변경되면 시간 값을 업데이트
  useEffect(() => {
    setVal((prevState) => ({
      ...prevState,
      startDate: period.startDate,
      endDate: period.endDate,
    }));
  }, [period]);

  //하위 component에서 전달받은 새로운 val 값으로 업데이트 해준다
  const handleValChange = (page) => {
    setVal((prevVal) => ({
      ...prevVal,
      page: page - 1,
    }));
  };

  if (!reviewData) {
    <UserEmptyData text="리뷰 작성 내역이 없어요....." />;
  }

  return (
    <>
      {reviewData.numberOfElements === 0 ? (
        <UserEmptyData text="리뷰 작성 내역이 없어요....." />
      ) : (
        <>
          {reviewData.map((a, i) => {
            return (
              <Row
                className="cm-SRegular16"
                key={i}
                onClick={() => {
                  props.handleClick(a);
                }}
              >
                <Col width="10rem">{customDate(a.createdTime)}</Col>
                <Col width="22rem">
                  <ItemImg src={a.itemThumbnailImage} />
                  <ItemName>{a.itemName}</ItemName>
                </Col>
                <Col width="25rem">{trimContent(a.content)}</Col>
                <Col width="15rem">
                  <Rating name="read-only" value={a.rating} readOnly />
                </Col>
              </Row>
            );
          })}

          <UserPagination
            numOfElement={numOfElement}
            handleValChange={handleValChange}
          />
        </>
      )}
    </>
  );
}

export default TableRow;
