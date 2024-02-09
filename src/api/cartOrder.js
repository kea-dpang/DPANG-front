import axios from "axios";

const userUrl = "/api/users";
// const orderUrl = "/api"

/* 사용자 주소 조회 */
export const GET_Address = async () => {
  const userId = localStorage.getItem("userId");
  const res = await axios({
    method: "get",
    url: `${userUrl}/${userId}/address`,
  });
  return res.data;
};
/* 사용자 주소 수정 */
export const PATCH_Address = async (data) => {
  const userId = localStorage.getItem("userId");
  const res = await axios({
    method: "patch",
    url: `${userUrl}/${userId}/address`,
    data: {
      phoneNumber: data.phoneNumber,
      zipCode: data.zipCode,
      address: data.address,
      detailAddress: data.detailAddress,
    },
  });
  return res.data;
};
