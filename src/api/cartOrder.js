import instance from "@utils/apiInterceptor";

const userUrl = "/api/users";
const orderUrl = "/api/orders";

/* 사용자 주소 조회 */
export const GET_Address = async () => {
  const userId = localStorage.getItem("userId");
  const res = await instance({
    method: "get",
    url: `${userUrl}/${userId}/address`,
  });
  return res.data;
};
/* 사용자 주소 수정 */
export const PATCH_Address = async (data) => {
  const userId = localStorage.getItem("userId");
  const res = await instance({
    method: "patch",
    url: `${userUrl}/${userId}/address`,
    data: {
      phoneNumber: data.phoneNumber,
      zipCode: data.zipCode,
      address: data.address,
      detailAddress: data.detailAddress,
    },
  });
  console.log("instance:", res);
  return res.data;
};

/* 주문하기 */
export const POST_Order = async (addressInfo, checkedItems) => {
  console.log("addressInfo", addressInfo);
  console.log("checkedItems", checkedItems);

  const userId = localStorage.getItem("userId");

  // checkedItems 형식 변환
  const formattedItems = checkedItems.map((item) => ({
    itemId: item.itemId, // id를 itemId로 변환
    quantity: item.quantity, // quantity는 그대로 사용
  }));
  console.log("formattedItems", formattedItems);

  const res = await instance({
    method: "post",
    url: `${orderUrl}`,
    headers: {
      "X-DPANG-CLIENT-ID": userId,
    },
    data: {
      deliveryInfo: {
        name: addressInfo.name,
        phoneNumber: addressInfo.phoneNumber | "",
        zipCode: addressInfo.zipCode,
        address: addressInfo.address,
        detailAddress: addressInfo.detailAddress | "",
      },
      deliveryRequest: "string",
      orderIteminfo: formattedItems,
    },
  });
  return res.data;
};
