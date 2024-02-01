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
    url: url,
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
