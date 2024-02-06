import axios from "axios";

const url = "/api/refund";

//특정 제품에 대한 반품 요청을 날리는 API
export const POST_refund_order = async (inputValue) => {
  //서버에 전달해줄 값은 어떤 order ID에 대한 것인지와 취소 사유, 취소 관련 남길 말, 그리고 회수시 배송 요청사항이다
  console.log("서버가 쓸 내용은?", inputValue);
  const res = await axios({
    method: "post",
    url: `${url}/${inputValue.orderId}`,
    data: {
      refundCategory: inputValue.refundCategory,
      refundMessage: inputValue.refudMessage || undefined,
      refundShipmentMessage: inputValue.refundShipmentMessage,
    },
  });
  return res.data;
};

//특정 환불에 대한 목록을 조회하기 위한 API
export const GET_refund_detail = async (refundId) => {
  //서버에게 전달해줄 값은 어떤 refund에 대한 것인지이다
  const res = await axios({
    method: "get",
    url: `${url}/${refundId}`,
  });
  return res.data;
};

//환불에 대한 목록을 조회하기 위한 API
export const GET_refund_list = async (inputValue) => {
  //서버에게 전달해줄 값은 어떤 user인지, 조회 시작 기간, 조회 종료 기간, 환불 사유, 페이지 네이션 관련 내용들이다
  console.log("서버로 전달할 데이터는", inputValue);

  const res = await axios({
    method: "get",
    url: `${url}/list`,
    params: {
      userId: inputValue.userId || undefined,
      startDate: inputValue.startDate || undefined,
      endDate: inputValue.endDate || undefined,
      reason: inputValue.reason || undefined,
      page: inputValue.page || undefined,
      size: inputValue.size || 10,
      sort: inputValue.sort || undefined,
    },
  });
  return res.data;
};

//환불에 대한 진행상태를 다음 단계로 업데이트 시키게 하기 위한 서버로의 API 요청
export const PUT_update_status = async (orderId, nextState) => {
  console.log(orderId, "dedededed", nextState);
  const res = await axios({
    method: "put",
    url: `${url}/${orderId}`,
    data: {
      status: nextState,
    },
  });
  return res.data;
};
