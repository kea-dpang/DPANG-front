import axios from "axios";

const url = `/api/mileage`;

//사용자의 마일리지 정보를 가져오는 API
export const GET_mileage = async (userId, clientId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${userId}`,
    //header에 token 값을 넣어준다
    headers: {
      "X-DPANG-CLIENT-ID": clientId,
    },
  });

  return res.data;
};

//마일리지 신청 처리 API
export const POST_mileage_request = async (inputValue) => {
  console.log(inputValue);
  const res = await axios({
    //유저 ID, 충전액, 충전 신청자 입력
    method: "post",
    url: `${url}/recharge-requests`,
    data: {
      userId: inputValue.userId,
      amount: inputValue.amount,
      depositor: inputValue.depositor,
    },
    //header에 token값을 넣어준다
    headers: {
      "X-DPANG-CLIENT-ID": inputValue.XID,
    },
  });
  return res.data;
};

//특정 user의 ID 정보 토대로 마일리지 신청 내역 리스트를 제공
export const GET_mileage_list = async (inputValue) => {
  console.log(inputValue);

  //parameter 값과 함께 api요청을 보낸다
  const res = await axios({
    method: "get",
    url: `${url}/recharge-requests`,
    params: {
      userId: inputValue.userId,
      status: inputValue.status || undefined,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      depositorName: inputValue.depositorName || undefined,
      sortOption: inputValue.sortOption || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || undefined,
      sort: "ID",
    },
    headers: {
      "X-DPANG-CLIENT-ID": inputValue.XID,
    },
  });

  return res.data;
};

export const GET_admin_mileage_list = async (inputValue) => {
  console.log(inputValue);

  //parameter 값과 함께 api요청을 보낸다
  const res = await axios({
    method: "get",
    url: `${url}/recharge-requests`,
    params: {
      userId: inputValue.userId || undefined,
      status: inputValue.status || undefined,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      depositorName: inputValue.depositorName || undefined,
      sortOption: inputValue.sortOption || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || undefined,
      sort: "ID",
    },
    headers: {
      "X-DPANG-CLIENT-ID": inputValue.XID,
    },
  });

  return res.data;
};
