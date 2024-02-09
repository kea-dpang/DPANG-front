import axios from "axios";

const url = "/api/cancel";

//주문한 아이템에 대한 취소 요청을 날리는 API
//마이페이지 주문 리스트에서 버튼 클릭 이벤트 통해 날림
export const POST_cancel_order = async (orderId) => {
  //서버에 같이 전달해줄 내용은 어떤 order item에 대한 취소 내용인지에 관한 것이다
  const res = await axios({
    method: "post",
    url: `${url}/${orderId}`,
  });

  return res.data;
};

//취소한 아이템에 대한 상세 내역을 확인하기 위한 요청을 날리는 API
//마이페이지 취소 내역에서 특정 리스트를 클릭하여 페이지 로딩되면 조회
export const GET_cancel_detail = async (cancelId) => {
  //서버에 같이 전달해줄 내용은 어떤 cancel 내역에 관한 내용인지 전달해준다
  const res = await axios({
    method: "get",
    url: `${url}/${cancelId}`,
  });
  return res.data;
};

//취소한 아이템에 대한 리스트를 확인하기 위한 요청을 날리는 API
//마이페이지에서 취소 리스트 조회 페이지로 이동하면 로딩 user-mypage-cancel-tablerow
export const GET_cancel_list = async (inputValue) => {
  //서버에 같이 전달해줄 내용은 유저 아이디와, 시작일, 종료일, 페이지네이션을 위한 정보들이다

  console.log("서버로 전달할 데이터는", inputValue);

  const res = await axios({
    method: "get",
    url: `${url}/list`, //url은 나중에 수정해야 함다
    params: {
      userId: inputValue.userId,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || undefined,
      sort: inputValue.sort || undefined,
    },
  });
  return res.data;
};
