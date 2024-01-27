import axios from "axios";

export const GET_QnAList = async () => {
  // const accessToken = window.localStorage.getItem("accessToken");

  const url = "/api/qna";

  const res = await axios({
    method: "get",
    url: url,
    // headers: {
    //     'Authorization': `Bearer ${accessToken}`
    // },
    params: {
      page: 0,
      size: 100,
    },
  });

  return res.data;
};
