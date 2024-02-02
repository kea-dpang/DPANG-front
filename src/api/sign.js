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

/* 비밀번호 찾기 */
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
/*  */
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
