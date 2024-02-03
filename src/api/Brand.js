import axios from "axios";
const url = `/api/seller`;
// 관리자 - 판매처 리스트 조회
export const GET_BrandList = async (page) => {
  console.log("get brandlist");
  const res = await axios({
    method: "get",
    url: url,
    params: {
      page: page,
      size: 10,
    },
  });
  console.log("판매처 목록 result : ", res.data);
  return res.data;
};
// 관리자 - 판매자 상세정보 조회
export const GET_BrandInfo = async (id) => {
  console.log("get brand info");
  const url = `/api/seller/${id}`;
  const res = await axios({
    method: "get",
    url: url,
    params: {
      id: id,
    },
  });
  console.log("브랜드 정보 result : ", res.data);
  return res.data;
};
// 관리자 - 판매처 등록
export const POST_Brand = async (inputValue) => {
  console.log("brand 등록");
  const res = await axios({
    method: "post",
    url: url,
    data: {
      name: inputValue.name,
      phone: inputValue.phone,
      sellerStaff: inputValue.sellerStaff,
      manager: inputValue.manager,
      expiryDate: inputValue.expiryDate,
      note: inputValue.note,
    },
  });
  return res.data;
};
// 관리자 - 판매처 삭제
export const DELETE_Brand = async (brandId) => {
  console.log("브랜드 삭제", brandId);
  const response = await axios({
    method: "delete",
    url: url,
    data: brandId,
  });
  return response.data;
};
// 관리자 - 판매처 수정
export const PUT_Brand = async (id, value) => {
  console.log("브랜드 수정");
  const url = `/api/seller/${id}`;
  const response = await axios({
    method: "put",
    url: url,
    data: {
      id: id,
      name: value.name,
      phone: value.phone,
      sellerStaff: value.sellerStaff,
      manager: value.manager,
      expiryDate: value.expiryDate,
      note: value.note,
    },
  });
  return response.data;
};
