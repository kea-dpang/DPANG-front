import {
  customAskCategoryName,
  customDate,
  customStatusName,
  customStatusNameReverse,
} from "assets/CustomName";
import axios from "axios";

const url = "/api/qna";

export const GET_QnAList = async ({
  userId,
  category,
  state,
  itemId = null,
  period = { startDate: null, endDate: null },
  pageNum,
}) => {
  category = customAskCategoryName(category, true);
  state = customStatusNameReverse(state, true);
  console.log("문의조회합니다요: ", userId, category, state, period, itemId);
  console.log("페이지: ", pageNum);

  const res = await axios({
    method: "get",
    url: url,
    // headers: {
    //     'Authorization': `Bearer ${accessToken}`
    // },

    params: {
      //query
      userId: userId,
      category: category,
      itemId: itemId,
      status: state,
      startDate: period.startDate,
      endDate: period.endDate,
      page: pageNum,
      size: 10,
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

export const POST_Question = async (userId, data) => {
  data.category = customAskCategoryName(data.category, true);

  console.log("data: ", data);
  console.log("data: ", data.itemId);

  const res = await axios({
    method: "post",
    url: url,
    data: {
      userId: userId,
      category: data.category,
      itemId: data.itemId || null,
      title: data.askTitle,
      content: data.askContent,
      imageUrl: null,
    },
  });
  return res.data;
};

export const PUT_Question = async (qnaId, data) => {
  data.category = customAskCategoryName(data.category, true);
  console.log("data입니다요!: ", data);

  const res = await axios({
    method: "put",
    url: `${url}/${qnaId}`,
    data: {
      itemId: 0,
      title: data.askTitle,
      category: data.category,
      question: data.askContent,
      attachmentUrl: "",
    },
  });
  return res.data;
};

export const DELETE_QnA = async (qnaId) => {
  const res = await axios({
    method: "delete",
    url: `${url}`,
    data: {
      deleteIds: [qnaId],
    },
  });
  return res.data;
};
