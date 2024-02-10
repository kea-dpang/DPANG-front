import axios from "axios";

const url = `/api/orders`;

export const POST_OrderInfo = async (inputValue) => {
  console.log("주문하기: ", inputValue);
  const res = await axios({
    method: "post",
    url: url,
    data: {
      name: inputValue.name,
      phoneNumber: inputValue.phoneNumber,
      zipCode: inputValue.zipCode,
      address: inputValue.address,
      detailAddress: inputValue.detailAddress,
      deliveryRequest: inputValue.deliveryRequest,
      itemId: inputValue.itemId,
      quantity: inputValue.quantity,
    },
  });
  return res.data;
};

export const GET_Order = async () => {
  console.log("get orderlist");
  const res = await axios({
    method: "get",
    url: `${url}/list`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  console.log("주문내역 result : ", res.data);
  return res.data;
};

export const PUT_change_status = async (orderId, inputValue) => {
  const res = await axios({
    method: "put",
    url: `${url}/${orderId}`,
  });
  return res.data;
};

// export const GET_OrderList = async (orderId, inputValue) => {
//   console.log("주문상세조회");
//   const response = await axios({
//     method: "get",
//     url: `${url}/${orderId}`,
//     data: {},
//   });
// };

export const GET_order_list = async (inputValue) => {
  console.log("서버로 전달할 데이터는", inputValue);

  const res = await axios({
    method: "get",
    url: `${url}`,
    params: {
      userId: inputValue.userId,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      orderStatus: inputValue.status || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || undefined,
      sort: inputValue.sort || undefined,
    },
  });

  return res.data;
};

export const GET_order_detail = async (orderId) => {
  console.log("서버로 전달할 데이터는", orderId);

  const res = await axios({
    method: "get",
    url: `${url}/${orderId}`,
  });

  return res.data;
};

export const GET_order_item_detail = async (id, orderId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${orderId}/detail/${id}`,
  });

  return res.data;
};
