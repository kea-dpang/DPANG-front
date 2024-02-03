import {
  customAskCategoryName,
  customDate,
  customStatusName,
} from "assets/CustomName";
import axios from "axios";

const url = "/api/qna";

export const GET_QnAList = async (category, state) => {
  // const accessToken = window.localStorage.getItem("accessToken");
  console.log("gggggg", category, state);
  const res = await axios({
    method: "get",
    url: url,
    // headers: {
    //     'Authorization': `Bearer ${accessToken}`
    // },

    params: {
      //query
      category: category,
      status: state,
      userId: "",
      page: 0,
      size: 100,
    },
  });
  // 커스텀
  res.data.data.content = res.data.data.content.map((item) => {
    item.category = customAskCategoryName(item.category, false);
    item.status = customStatusName(item.status);
    item.createdAt = customDate(item.createdAt);
    return item;
  });

  return res.data;
};

export const GET_QnA = async (QnAId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${QnAId}`, //path
  });
  // 커스텀
  const custom = res.data.data;
  custom.category = customAskCategoryName(res.data.data.category, false);
  custom.createdAt = customDate(res.data.data.createdAt);
  custom.status = customStatusName(res.data.data.status);
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

export const POST_Question = async (data) => {
  data.category = customAskCategoryName(data.category, true);

  console.log("data: ", data);
  const res = await axios({
    method: "post",
    url: url,
    data: {
      userId: 0,
      category: data.category,
      itemId: data.itemId,
      title: data.title,
      content: data.content,
      imageUrl: "",
    },
  });
  return res.data;
};

export const PUT_Question = async (qnaId, data) => {
  data.category = customAskCategoryName(data.category, true);
  console.log("33323232", data);
  const res = await axios({
    method: "put",
    url: `${url}/${qnaId}`,
    data: {
      itemId: 0,
      title: data.askTitle,
      category: data.category,
      question: data.askCotent,
      attachmentUrl: "",
    },
  });
  return res.data;
};
