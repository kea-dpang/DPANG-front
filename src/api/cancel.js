import axios from "axios";

const url = "/api/cancel";

//주문한 아이템에 대한 취소 요청을 날리는 API
const POST_cancel_order = async (orderId) => {
  //서버에 같이 전달해줄 내용은 어떤 order item에 대한 취소 내용인지에 관한 것이다
  const res = await axios({
    method: "post",
    url: `${url}/${orderId}`,
  });

  return res.data;
};

//취소한 아이템에 대한 상세 내역을 확인하기 위한 요청을 날리는 API
const GET_cancel_detail = async (cancelId) => {
  //서버에 같이 전달해줄 내용은 어떤 cancel 내역에 관한 내용인지 전달해준다
  const res = await axios({
    method: "get",
    url: `${url}/${cancelId}`,
  });
  return res.data;
};

//취소한 아이템에 대한 리스트를 확인하기 위한 요청을 날리는 API
const GET_cancel_list = async (inputValue) => {
  //서버에 같이 전달해줄 내용은 유저 아이디와, 시작일, 종료일, 페이지네이션을 위한 정보들이다
  const res = await axios({
    method: "get",
    url: `${url}/`, //url은 나중에 수정해야 함다
    params: {
      userId: inputValue.userId || undefined,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || undefined,
      sort: inputValue.string || undefined,
    },
  });
  return res.data;
};
