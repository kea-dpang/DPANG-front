import { customDate, customStatusName } from "assets/CustomName";
import instance from "@utils/apiInterceptor";

const url = "/api/events";

// 관리자 - 이벤트리스트 조회
export const GET_EventList = async (page) => {
  const res = await instance({
    method: "get",
    url: `${url}/admin`,
    params: {
      page: page,
      size: 10,
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
  const res = await instance({
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
// 관리자 - 브랜드 이벤트 상세 조회
export const GET_BrandEventInfo = async (id) => {
  const res = await instance({
    method: "get",
    url: `${url}/seller/${id}`,
    params: {
      id: id,
    },
  });
  return res.data;
};
// 관리자 - 상품 이벤트 상세 조회
export const GET_ItemEventInfo = async (id) => {
  console.log("상품 이벤트 상세조회 할게요");
  const res = await instance({
    method: "get",
    url: `${url}/item/${id}`,
    params: {
      id: id,
    },
  });
  return res.data;
};
// 사용자 - 브랜드 이벤트 리스트 조회
export const GET_BrandEventListUser = async () => {
  const res = await instance({
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
// 사용자 - 상품 이벤트 리스트 조회
export const GET_ProductEventListUser = async () => {
  const res = await instance({
    method: "get",
    url: `${url}/item`,
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
  const response = await instance({
    method: "delete",
    url: url,
    data: id,
  });
  return response.data;
};
// 관리자 - 브랜드 이벤트 등록
export const POST_BrandEvent = async (inputValue) => {
  console.log("brand 이벤트 등록: ", inputValue);
  const res = await instance({
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
// 관리자 - 상품 이벤트 등록
export const POST_ItemEvent = async (inputValue) => {
  console.log("상품 이벤트 등록: ", inputValue);
  const res = await instance({
    method: "post",
    url: `${url}/item`,
    data: {
      discountRate: inputValue.discountRate,
      eventName: inputValue.eventName,
      startDate: inputValue.startDate,
      endDate: inputValue.endDate,
      imagePath: inputValue.imagePath,
      targetItems: inputValue.targetItems,
    },
  });
  return res.data;
};
// 관리자 - 브랜드 이벤트 수정
export const PUT_BrandEvent = async (id, value) => {
  console.log("브랜드 이벤트 수정");
  const response = await instance({
    method: "put",
    url: `${url}/seller/${id}`,
    data: {
      id: id,
      discountRate: value.discountRate,
      eventName: value.eventName,
      startDate: value.startDate,
      endDate: value.endDate,
      imagePath: value.imagePath,
      sellerId: value.sellerId,
      eventStatus: "WAITING",
    },
  });
  return response.data;
};
// 관리자 - 상품 이벤트 수정
export const PUT_ItemEvent = async (id, value) => {
  console.log("상품 이벤트 수정");
  console.log(
    "value:",
    value.targetItems.map((item) => item.itemId)
  );
  const response = await instance({
    method: "put",
    url: `${url}/item/${id}`,
    data: {
      id: id,
      discountRate: value.discountRate,
      eventName: value.eventName,
      startDate: value.startDate,
      endDate: value.endDate,
      imagePath: value.imagePath,
      targetItems: value.targetItems.map((item) => item.itemId),
    },
  });
  return response.data;
};
