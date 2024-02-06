import axios from "axios";
import { categoryFormat, subCategoryFormat } from "assets/CustomName";

const url = "/api/items";
// 관리자 - 상품 등록
export const POST_Item = async (inputValue) => {
  // 카테고리 커스텀
  if (inputValue.subCategory !== "") {
    inputValue.subCategory = subCategoryFormat(inputValue.subCategory, false);
  } else {
    inputValue.subCategory = null;
  }
  console.log("상품 등록 subcategory: ", inputValue.subcategory);
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
export const GET_ItemList = async (page) => {
  console.log("get itemlist");
  const res = await axios({
    method: "get",
    url: url,
    params: {
      page: page,
      size: 10,
      sort: "",
    },
  });
  // 카테고리 커스텀
  res.data.data.content = res.data.data.content.map((item) => {
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
    url: `${url}/card/list`,
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
    url: `${url}/${id}/detail`,
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
// 사용자 - 인기상품 조회
export const GET_HotItemList = async () => {
  console.log("인기상품 조회");
  const res = await axios({
    method: "get",
    url: `${url}/popular/list`,
    params: {
      page: 0,
      size: 20,
      sort: "",
    },
  });
  return res.data;
};
// 사용자 - 아이템 검색 필터링
export const GET_ItemFilterListUser = async (
  category,
  subCategory,
  minPrice,
  maxPrice,
  sellerId,
  keyword,
  page,
  size
) => {
  console.log(
    "사용자 아이템 검색 필터링 합니다요: ",
    category,
    typeof category
  );
  const res = await axios({
    method: "get",
    url: url,
    params: {
      category: category,
      subCategory: subCategory,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sellerId: sellerId,
      keyword: keyword,
      page: page,
      size: size,
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
    url: url,
    data: { itemIds: itemId },
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
