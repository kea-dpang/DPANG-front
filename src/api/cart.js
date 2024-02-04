import axios from "axios";

const url = `/api/carts`;
const userId = window.localStorage.getItem("userId");

//장바구니 담기
export const POST_Cart = async (itemId, quantity) => {
  console.log("장바구니 담기입니당: ", itemId);
  const res = await axios({
    method: "post",
    url: `${url}/${userId}/${itemId}`,
    data: {
      itemId: itemId,
      quantity: quantity,
    },
  });
  return res.data;
};

// 장바구니 목록 조회
export const GET_CartList = async () => {
  console.log("장바구니 목록 조회입니당");
  const res = await axios({
    method: "get",
    url: `${url}/${userId}`,
  });
  return res.data;
};
// 장바구니 상품 삭제
export const DELETE_CartItem = async (itemId) => {
  console.log("장바구니 상품 삭제합니당");
  const res = await axios({
    method: "delete",
    url: `${url}/${userId}/${itemId}`,
  });
  return res.data;
};
