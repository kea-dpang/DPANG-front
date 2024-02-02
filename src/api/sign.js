import { setCookie } from "@utils/cookie";
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
  console.log(accessToken);
  const res = await axios({
    method: "post",
    url: `${authUrl}/renew-token`,
    data: {
      accessToken: refreshToken,
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
