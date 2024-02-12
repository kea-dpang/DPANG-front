
import styled from "styled-components";
import { useState, useEffect } from "react";
import RowData from "./RowData";
import UserPagination from "@components/UserPagination";
import UserEmptyData from "@components/UserEmptyData";
import * as React from "react";
import { GET_order_list } from "@api/order";
import {useLocation, useNavigate} from "react-router-dom";
import { customOrderStatus } from "assets/CustomName";


function TableRow({data, selectedOrderStatus, handleChange}) {
    const [orderList, setOrderList] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page") || 0;
    const [numOfElement, setNumOfElement] = useState(0);




    const [val, setVal] = useState({
        orderId:"",
        userId: "",
        orderStatus:"",
        startDate: "",
        endDate: "",
        page: 0,
        size: 10,
        sort: "",
      });

      const handleValChange = (page) => {
        setVal((prevVal) => ({
          ...prevVal,
          page: page - 1,
        }));
      };
    
      useEffect(() => {
        setVal((prevState) => ({
          ...prevState,
          page: page,
        }));
      }, [page]);

    useEffect(() => {
        GET_order_list(val)
          .then((data) => {
            console.log("주문목록조회 성공", data);
            setOrderList(data.data.content);
            setNumOfElement(data.data.totalElements);
            console.log(orderList);
          })
          .catch((error) => {
            console.log("실패했어용", error);
          });
      }, [val]);


      return numOfElement !== 0 ? (
        <>
          {orderList != null &&
            orderList
              .filter((item) =>
                selectedOrderStatus === "전체" || selectedOrderStatus === "상태"
                  ? true
                  : item.productList.some(
                      (product) => customOrderStatus(product.orderStatus) === selectedOrderStatus
                    )
              )
              .map((c, f) => {
                return <RowData
                data={c}
                key={f}
                numOfElement={numOfElement}
                selectedOrderStatus={selectedOrderStatus}
                handleChange={handleChange}  // handleChange 함수를 전달
              />
              })}
          <UserPagination numOfElement={numOfElement} handleValChange={handleValChange} />
        </>
      ) : (
        <UserEmptyData text="조회 내역이 없어요...." />
      );
    }

export default TableRow;
