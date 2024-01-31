import axios from "axios";
import { customDate, customStatusName } from "assets/CustomName";
const url = "/api/events";

// 관리자 - 이벤트리스트 조회
export const GET_EventList = async () => {
  const res = await axios({
    method: "get",
    url: `${url}/admin`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  // 커스텀
  res.data.data.content = res.data.data.content.map((item) => {
    item.eventStatus = customStatusName(item.eventStatus);
    item.type = customStatusName(item.type);
    item.registrationDate = customDate(item.registrationDate);
    return item;
  });
  return res.data;
};
// 관리자 - 브랜드 이름으로 아이디 조회
export const GET_BrandName = async () => {
  const res = await axios({
    method: "get",
    url: `${url}/admin`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  return res.data;
};
// 관리자 - 브랜드 이름으로 아이디 조회
export const GET_BrandEventInfo = async (id) => {
  const res = await axios({
    method: "get",
    url: `${url}/seller/${id}`,
    params: {
      id: id,
    },
  });
  return res.data;
};
// 사용자 - 브랜드 이벤트 리스트 조회
export const GET_BrandEventListUser = async () => {
  const res = await axios({
    method: "get",
    url: `${url}/seller`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  return res.data.data;
};
// 관리자 - 이벤트 삭제
export const DELETE_Event = async (id) => {
  console.log("이벤트 삭제", id);
  const response = await axios({
    method: "delete",
    url: url,
    data: id,
  });
  return response.data;
};
// 관리자 - 브랜드 이벤트 등록
export const POST_BrandEvent = async (inputValue) => {
  console.log("brand 이벤트 등록: ", inputValue);
  const res = await axios({
    method: "post",
    url: `${url}/seller`,
    data: {
      discountRate: inputValue.discountRate,
      eventName: inputValue.eventName,
      startDate: inputValue.startDate,
      endDate: inputValue.endDate,
      imagePath: inputValue.imagePath,
      sellerId: inputValue.sellerId,
    },
  });
  return res.data;
};
// 관리자 - 브랜드 이벤트 수정
export const PUT_BrandEvent = async (id, value) => {
  console.log("브랜드 이벤트 수정");
  const response = await axios({
    method: "put",
    url: `${url}/seller/${id}`,
    data: {
      id: id,
      discountRate: value.discountRate,
      eventName: value.eventName,
      startDate: value.startDate,
      endDate: value.endDate,
      imagePath: value.imagePath,
      sellerId: "9",
      eventStatus: "WAITING",
    },
  });
  return response.data;
};
