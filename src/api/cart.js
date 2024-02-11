import instance from "@utils/apiInterceptor";

const url = `/api/carts`;
const userId = window.localStorage.getItem("userId");

//장바구니 담기
export const POST_Cart = async (itemId, quantity) => {
  console.log("장바구니 담기입니당: ", itemId);
  console.log(userId);
  const res = await instance({
    method: "post",
    url: `${url}/${userId}`,
    data: {
      itemId: itemId,
      quantity: quantity,
    },
  });
  return res.data;
};

// 장바구니 목록 조회
export const GET_CartList = async () => {
  const userId = localStorage.getItem("userId");
  console.log("장바구니 목록 조회입니당");
  const res = await instance({
    method: "get",
    url: `${url}/${userId}`,
  });
  return res.data;
};

// 장바구니 상품 삭제
export const DELETE_CartItem = async (itemId) => {
  console.log("장바구니 상품 삭제합니당");
  const res = await instance({
    method: "delete",
    url: `${url}/${userId}/${itemId}`,
  });
  return res.data;
};

/* 장바구니에 상품 1개 추가 */
export const POST_AddCartItem = async (itemId) => {
  console.log("instance,count:", itemId, 1);
  const res = await instance({
    method: "post",
    url: `${url}/${userId}`,
    data: {
      itemId: itemId,
      quantity: 1,
    },
  });
  return res.data;
};
/* 장바구니 상품 1개 감소 */
export const POST_MinusCartItem = async (itemId) => {
  console.log("instance", itemId);
  const userId = localStorage.getItem("userId");

  const res = await instance({
    method: "post",
    url: `${url}/${userId}/${itemId}/minus`,
  });
  return res.data;
};
