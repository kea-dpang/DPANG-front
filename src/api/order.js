import axios from "axios";
// 관리자 - 주문 리스트 조회

export const GET_Order = async (id) => {
    console.log("get orderlist");
    const url = `/api/order/list`;
    const res = await axios({
      method: "get",
      url: url,
      params: {
        page: 0,
        size: 20,
        sort: "",
      },
    });
    console.log("주문내역 result : ", res.data);
    return res.data;
  };


  export const PUT_Order = async (orderId, value) => {
    console.log("주문상태 수정");
    const url = `/api/seller/${orderId}`;
    const response = await axios({
      method: "put",
      url: url,
      data: {
        orderId: orderId,
        status: value.status,
        message: value.message,
      },
    });
    return response.data;
  };