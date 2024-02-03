import axios from "axios";
import { categoryFormat, subCategoryFormat } from "assets/CustomName";

const url = "/api/items";
// 관리자 - 상품 등록
export const POST_Item = async (inputValue) => {
  // 카테고리 커스텀
  if (inputValue.subCategory !== "") {
    inputValue.subCategory = subCategoryFormat(inputValue.subCategory, false);
  } else {
    inputValue.subCategory = "WOMEN_CLOTHES";
  }
  console.log("상품 등록");
  const res = await axios({
    method: "post",
    url: url,
    data: {
      sellerId: inputValue.sellerId,
      itemName: inputValue.itemName,
      category: categoryFormat(inputValue.category, true),
      subCategory: inputValue.subCategory,
      itemPrice: parseInt(inputValue.itemPrice, 10),
      stockQuantity: parseInt(inputValue.stockQuantity, 10),
      itemImage: inputValue.itemImage,
      images: [inputValue.images],
    },
  });
  return res.data;
};
// 관리자 - 상품 리스트 조회
export const GET_ItemList = async () => {
  console.log("get itemlist");
  const res = await axios({
    method: "get",
    url: `${url}/manage/list`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  // 카테고리 커스텀
  res.data.data = res.data.data.map((item) => {
    item.category = categoryFormat(item.category, false);
    item.subCategory = subCategoryFormat(item.subCategory, false);
    return item;
  });
  console.log("상품 목록 result : ", res.data);
  return res.data;
};
// 사용자 - 상품 리스트 조회
export const GET_ItemListUser = async () => {
  console.log("아이템 카드리스트 조회에옹");
  const res = await axios({
    method: "get",
    url: `${url}/cardlist`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  return res.data;
};
// 관리자 - 상품 상세 조회 (사용자)
export const GET_ItemInfo = async (id) => {
  console.log("아이템 상세정보 조회");
  const res = await axios({
    method: "get",
    url: `${url}/${id}`,
  });
  return res.data.data;
};
// 사용자 - 상품별 리뷰 조회
export const GET_ItemReview = async (id) => {
  console.log("아이템 리뷰 조회");
  const res = await axios({
    method: "get",
    url: `${url}/${id}/reviews`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  return res.data;
};
// 관리자 - 상품 삭제
export const DELETE_Item = async (itemId) => {
  console.log("상품 삭제", itemId);
  const response = await axios({
    method: "delete",
    url: `${url}/${itemId}/list`,
  });
  return response.data;
};
// 관리자 - 상품 수정
export const PUT_Item = async (id, value) => {
  console.log("상품 수정");
  const response = await axios({
    method: "put",
    url: `${url}/${id}`,
    data: {
      itemName: value.itemName,
      category: value.category,
      subCategory: value.subCategory,
      itemPrice: value.itemPrice,
      discountRate: value.discountRate,
      stockQuantity: value.stockQuantity,
      itemImage: value.itemImage,
      images: value.images,
    },
  });
  return response.data;
};
