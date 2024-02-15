import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { GET_cancel_list } from "@api/cancel";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";
import UserPagination from "@components/UserPagination";
import UserEmptyData from "@components/UserEmptyData";

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
  width: 18rem;
  padding: 2rem;
  box-sizing: border-box;
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

  const userId = localStorage.getItem("userId");

  const period = useRecoilValue(periodAtom);
  const [numOfElement, setNumOfElement] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [cancelData, setCancelData] = useState([]); //취소 목록울 저장할 STATE
  const [val, setVal] = useState({
    userId: userId,
    startDate: "",
    endDate: "",
    page: 0,
    size: 10,
    sort: "",
  });
  //하위 component에서 전달받은 새로운 val 값으로 업데이트 해준다
  const handleValChange = (page) => {
    setVal((prevVal) => ({
      ...prevVal,
      page: page - 1,
    }));
  };

  //초기 rendering시 취소 리스트에 대한 정보를 API를 통해 받아온다
  useEffect(() => {
    //취소 내역 서버로 부터 받아오기
    GET_cancel_list(val)
      .then((data) => {
        console.log(data, "API 연동 성공입니다");
        setNumOfElement(data.data.totalElements);
        setCancelData(data.data.content); //여기는 바꿔야 됩니다
      })
      .catch((error) => {
        console.log(error, "실패입니다");
      });
  }, [val]);

  //period값 변경되면 새로운 시간으로 업데이트
  useEffect(() => {
    setVal((prevVal) => ({
      ...prevVal,
      startDate: period.startDate,
      endDate: period.endDate,
    }));
  }, [period]);

  return numOfElement > 0 ? (
    <>
      {cancelData.map((a, k) => {
        return (
          <Row
            key={k}
            className="cm-SRegular16"
            onClick={() => {
              navi(`/user/mypage/cancel/detail/${a.cancelId}`);
            }}
          >
            <Col width="10rem">
              <Column>
                <p>{a.orderDate}</p>
                <p>{a.orderId}</p>
              </Column>
            </Col>
            <Col width="10rem">
              <Column>
                <p>{a.cancelRequestDate}</p>
              </Column>
            </Col>
            <Col width="25rem">
              <ItemImg src={a.product.productInfoDto.image} />
              <ItemName>{a.product.productInfoDto.name}</ItemName>
            </Col>
            <Col width="13rem">
              {(
                a.product.productInfoDto.price * a.product.productQuantity
              ).toLocaleString()}
              /{a.product.productQuantity}
            </Col>
            <Col width="14rem">{a.expectedRefundAmount.toLocaleString()}</Col>
          </Row>
        );
      })}
      <UserPagination
        numOfElement={numOfElement}
        handleValChange={handleValChange}
      />
    </>
  ) : (
    <UserEmptyData text="조회 내역이 없어요...." />
  );
}

export default TableRow;
