
import styled from "styled-components";
import { useState, useEffect } from "react";
import RowData from "./RowData";
import UserPagination from "@components/UserPagination";
import UserEmptyData from "@components/UserEmptyData";
import * as React from "react";
import { GET_order_list } from "@api/order";
import { customOrderStatus } from "assets/CustomName";


function TableRow({data, selectedOrderStatus, handleChange, handleSearch, count}) {

    console.log(data);

    const orderList = data;
    

    const [val, setVal] = useState({
        userId: "",
        orderStatus:"",
        startDate: "",
        endDate: "",
        page: 0,
        size: 10,
        sort: "",
      });


    // useEffect(() => {
    //     GET_order_list(val)
    //       .then((data) => {
    //         console.log("List 조회 성공~", data);
    //         setOrderList(data.data.content);
    //         setNumOfElement(data.data.totalElements);
    //         console.log("씨발", orderList);
    //       })
    //       .catch((error) => {
    //         console.log("실패했어용", error);
    //       });
    //   }, [val]);

      return count !== 0 ? (
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
              .map((a, f) => {
                return <RowData
                data={a}
                key={f}
                numOfElement={count}
                selectedOrderStatus={selectedOrderStatus}
                handleChange={handleChange}  // handleChange 함수를 전달
                handleSearch={handleSearch}
              />
              })}
        </>
      ) : (
        <UserEmptyData text="조회 내역이 없어요...." />
      );
    }

export default TableRow;
