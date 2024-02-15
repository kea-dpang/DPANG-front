import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import RowData from "./RowData";
import { GET_order_list } from "@api/order";
import { useRecoilValue } from "recoil";
import { periodAtom } from "recoil/user/PeriodSelectAtom";
import UserPagination from "@components/UserPagination";
import UserEmptyData from "@components/UserEmptyData";



function TableRow({ data }) {
  //pagination에서 현재 페이지
  const [orderList, setOrderList] = useState([]);

  const period = useRecoilValue(periodAtom);
  const userId = localStorage.getItem("userId");
  const [numOfElement, setNumOfElement] = useState(0);

  const [val, setVal] = useState({
    userId: parseInt(userId, 10),
    page: 0,
    size: 10,
    sort: "",
    startDate: period.startDate,
    endDate: period.endDate,
  });

  //하위 component에서 전달받은 새로운 val 값으로 업데이트 해준다
  const handleValChange = (page) => {
    setVal((prevVal) => ({
      ...prevVal,
      page: page - 1,
    }));
  };

  //order리스트를 가져올 API를 호출
  useEffect(() => {
    GET_order_list(val)
      .then((data) => {
        setOrderList(data.data.content);
        setNumOfElement(data.data.totalElements);
      })
      .catch((error) => {
        console.log("orderlist 받아오기 실수", error);
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


  return numOfElement != 0 ? (
    <>
      {/* 페이지  */}
      {orderList != null &&
        orderList.map((a, i) => {
          return <RowData data={a} key={i} numOfElement={numOfElement} />;
        })}

      <UserPagination
        numOfElement={numOfElement}
        handleValChange={handleValChange}
      />
    </>
  ) : <UserEmptyData text="조회 내역이 없어요...."/>

}

export default TableRow;
