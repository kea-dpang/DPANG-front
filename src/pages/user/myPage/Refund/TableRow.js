import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { GET_refund_list } from "@api/refund";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";
import { customRefundReason, customRefundStatus } from "assets/CustomName";
import UserPagination from "@components/UserPagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [refundList, setRefundList] = useState([]);
  const [numOfElement, setNumOfElement] = useState(0);
  const userId = parseInt(localStorage.getItem("userId"));

  const period = useRecoilValue(periodAtom);

  const [val, setVal] = useState({
    userId: userId,
    startDate: "",
    endDate: "",
    reason: "",
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
  

  useEffect(() => {
    GET_refund_list(val)
      .then((data) => {
        console.log(" 조회성공!!", data.data.content);
        setNumOfElement(data.data.totalElements);
        setRefundList(data.data.content);
        console.log(refundList);
      })
      .catch((error) => {
        console.error("Error fectching mileage data: ", error);
      });
  }, [val]);

  useEffect(() => {
    setVal((prevVal) => ({
      ...prevVal,
      startDate: period.startDate,
      endDate: period.endDate,
    }));
  }, [period]);

  return (
    <>
      {refundList.map((a, k) => {
        return (
          <Row
            key={k}
            className="cm-SRegular16"
            onClick={() => {
              navi(`/user/mypage/refund/detail/${a.refundId}`);
            }}
          >
            <Col width="10rem">
              <Column>
                <p>{a.orderDate}</p>
                <p>{a.orderId}</p>
              </Column>
            </Col>
            <Col width="6rem">{customRefundReason(a.refundReason)}</Col>
            <Col width="10rem">{customRefundStatus(a.refundStatus)}</Col>
            <Col width="28rem">
              <ItemImg src={a.product.productInfoDto.image} />
              <ItemName>{a.product.productInfoDto.name}</ItemName>
            </Col>
            <Col width="9rem">
              {(
                a.product.productInfoDto.price * a.product.productQuantity
              ).toLocaleString()}
              /{a.product.productQuantity}
            </Col>
            <Col width="9rem">{a.expectedRefundAmount.toLocaleString()}</Col>
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
