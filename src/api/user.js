import {
  customLeaveCategoryName,
  customUserCategoryName,
} from "assets/CustomName";
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

export const DELETE_UserLeave = async (password, checkedState, note) => {
  const userId = localStorage.getItem("userId");

  //속성 값이 true인 경우에만 checkedArr 배열에 추가
  let checkedArr = Object.entries(checkedState)
    .filter(([key, value]) => value) // value가 true인 경우만 선택
    .map(([key]) => key); // 속성명만 선택

  // 카테고리명 배열 커스텀
  checkedArr = checkedArr.map(customLeaveCategoryName);
  console.log(checkedArr);

  const res = await axios({
    method: "delete",
    url: `${url}/withdrawal/${userId}`,
    data: {
      oldPassword: password,
      reason: [checkedState],
      message: note,
    },
  });
  return res.data;
};
