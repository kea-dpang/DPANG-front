import { setCookie } from "@utils/cookie";
import { customLeaveCategoryName } from "assets/CustomName";
import axios from "axios";
const url = "/api/users/register";
const authUrl = "/api/auth";

/* sign, login */

/* 회원가입 */
export const POST_User = async (data) => {
  // data.category = customAskCategoryName(data.category, true);
  console.log(data);

  const res = await axios({
    method: "post",
    url: `${authUrl}/join`,
    data: {
      email: data.email,
      password: data.password,
      role: "USER",
      employeeNumber: data.employeeId,
      name: data.name,
      joinDate: data.joinDate,
    },
  });
  return res.data;
};

/* auth 로그인 */
export const POST_Login = async (data) => {
  const res = await axios({
    method: "post",
    url: `${authUrl}/login`,
    data: {
      email: data.email,
      password: data.password,
    },
  });
  return res.data;
};

/* 로그인>비밀번호 찾기 */
/* 이메일로 코드 전송 */
export const POST_Code = async (email) => {
  const res = await axios({
    method: "post",
    url: `${authUrl}/send-verification-code`,
    params: {
      email: email,
    },
  });
  return res.data;
};
/* 비밀번호 재설정 */
export const POST_newPassword = async (data) => {
  console.log(data);
  const res = await axios({
    method: "post",
    url: `${authUrl}/reset-password`,
    data: {
      email: data.email,
      code: data.code,
      newPassword: data.newPassword,
    },
  });
  return res.data;
};

/* 토큰 갱신 */
// TODO: 토큰 갱신 시 accessToken이 아니라 refreshToken을 서버에 보내줘야 하는 것 -> 현재는 accessToken을 보내주는 것으로 되어 있음..
export const POST_newToken = async (refreshToken) => {
  // console.log(accessToken);
  const res = await axios({
    method: "post",
    url: `${authUrl}/renew-token`,
    data: {
      refreshToken: refreshToken,
    },
  });

  // // 쿠키에 새로 발급된 토큰 저장하기
  // setCookie("accessToken", res.data.accessToken, {
  //   expires: 7,
  //   path: "/",
  // });
  // setCookie("accessToken", res.data.refreshToken, {
  //   expires: 7,
  //   path: "/",
  // });

  return res.data; // accessToken, refreshToken 발급
};

/* 비밀번호 변경 */
export const POST_changePassword = async (data) => {
  const emailValue = localStorage.getItem("email");
  const res = await axios({
    method: "post",
    url: `${authUrl}/change-password`,
    data: {
      email: emailValue,
      oldPassword: data.current,
      newPassword: data.new,
    },
  });
  return res.data;
};

/* 회원탈퇴 */
export const DELETE_UserLeave = async (password, checkedState, note) => {
  const userId = localStorage.getItem("userId");
  console.log(checkedState);
  //속성 값이 true인 경우에만 checkedArr 배열에 추가
  let checkedArr = Object.entries(checkedState)
    .filter(([key, value]) => value) // value가 true인 경우만 선택
    .map(([key]) => key); // 속성명만 선택

  // 카테고리명 배열 커스텀
  checkedArr = checkedArr.map(customLeaveCategoryName);
  console.log(checkedArr);

  const res = await axios({
    method: "delete",
    url: `${authUrl}/users/${userId}`,
    data: {
      password: password,
      reason: checkedArr,
      message: note,
    },
  });
  return res.data;
};
