import {
  customLeaveCategoryName,
  customUserCategoryName,
} from "assets/CustomName";
import axios from "axios";

const url = "/api/users";

export const GET_User = async () => {
  const userId = localStorage.getItem("userId");
  const res = await axios({
    method: "get",
    url: `${url}/${userId}`,
  });
  return res.data;
};

export const GET_UserList = async (categoryValue, searchValue, pageNum) => {
  categoryValue = customUserCategoryName(categoryValue, true);

  console.log("확인:", categoryValue);
  console.log("확인2:", searchValue);
  console.log("확인3:", pageNum);

  const res = await axios({
    method: "get",
    url: `${url}/find`,
    params: {
      category: categoryValue,
      keyword: searchValue,
      page: pageNum,
      size: 10,
    },
  });
  console.log("확인좀 해봅시다요용요요요여ㅛ용ㅇ", res.data);
  return res.data;
};

export const GET_UserDetail = async (userId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${userId}/temp`,
  });
  return res.data;
};

export const DELETE_Users = async (userId) => {
  console.log(userId);

  const res = await axios({
    method: "delete",
    url: `${url}/list`,
    data: {
      userIds: [userId],
    },
  });
  return res.data;
};
