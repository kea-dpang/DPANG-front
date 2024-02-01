import axios from "axios";

const url = "/api/users";
export const GET_User = async (userId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${userId}`,
  });
  return res.data;
};
