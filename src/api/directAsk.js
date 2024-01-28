import axios from "axios";

const url = "/api/qna";

export const GET_QnAList = async () => {
  // const accessToken = window.localStorage.getItem("accessToken");

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

export const GET_QnA = async (QnAId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${QnAId}`,
  });
  return res.data;
};

export const PUT_Answer = async (QnAId, answer) => {
  console.log("확인용:", QnAId, answer);
  const res = await axios({
    method: "put",
    url: `${url}/${QnAId}/answer`,
    data: {
      responderId: 2,
      answer: answer,
    },
  });
  return res.data;
};
