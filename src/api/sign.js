import axios from "axios";
const url = "/api/users";

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
