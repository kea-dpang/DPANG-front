import { customUserCategoryName } from "assets/CustomName";
import axios from "axios";

const url = "/api/users";

export const GET_User = async (userId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${userId}`,
  });
  return res.data;
};

export const GET_UserList = async (categoryValue, searchValue) => {
  categoryValue = customUserCategoryName(categoryValue, true);

  console.log("확인:", categoryValue);
  console.log("확인2:", searchValue);
  const res = await axios({
    method: "get",
    url: `${url}/find`,
    params: {
      category: categoryValue,
      keyword: searchValue,
      page: 0,
      size: 100,
    },
  });
  return res.data;
};

export const GET_UserDetail = async (userId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${userId}/temp`,
  });
  return res.data;
};
