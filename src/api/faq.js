import { getCookie } from "@utils/cookie";
import {
  customAskCategoryName,
  customDate,
  customFAQCategoryName,
} from "assets/CustomName";
import instance from "@utils/apiInterceptor";

const url = "/api/faq";

export const GET_FAQList = async (category) => {
  if (!category) {
    // 전체
    category = "";
  } else {
    category = customFAQCategoryName(category, true);
  }
  console.log("abc:", category);

  const res = await instance({
    method: "get",
    url: `${url}/category`,
    // headers: {
    //   Authorization: `Bearer ${getCookie("accessToken")}`,
    // },
    params: {
      category: category,
      page: 0,
      size: 20,
      sort: "",
    },
  });
  const custom = res.data.data.content;
  res.data.data.content = res.data.data.content.map((item) => {
    item.category = customFAQCategoryName(item.category, false);
    return item;
  });

  console.log("custom:", custom);

  return res.data;
};

export const POST_Faq = async (data) => {
  // const accessToken = window.localStorage.getItem("accessToken");
  data.category = customFAQCategoryName(data.category, true);

  const res = await instance({
    method: "post",
    url: url,
    // headers: {
    //   // 'Authorization': `Bearer ${accessToken}`
    //   "X-DPANG-CLIENT-ID": 1,
    // },
    data: {
      category: data.category,
      question: data.question,
      answer: data.answer,
    },
  });

  return res.data;
};

export const GET_FAQ = async (faqId) => {
  console.log("faqId:", faqId);
  const res = await instance({
    method: "get",
    url: `${url}/${faqId}`,
  });
  const custom = res.data.data;
  custom.category = customFAQCategoryName(custom.category, false);
  custom.createdAt = customDate(custom.createdAt);

  console.log("custom:", custom);

  return res.data;
};

export const PUT_FAQ = async (faqId, data) => {
  data.category = customFAQCategoryName(data.category, true);

  const res = await instance({
    method: "put",
    // headers: {
    //   // 'Authorization': `Bearer ${accessToken}`
    //   "X-DPANG-CLIENT-ID": 1,
    // },
    url: `${url}/${faqId}`,
    data: {
      category: data.category,
      question: data.question,
      answer: data.answer,
    },
  });

  return res.data;
};

export const DELETE_FAQ = async (faqIdArr) => {
  console.log("delete 값", faqIdArr);

  const res = await instance({
    method: "delete",
    url: `${url}/list`,
    data: {
      faqIds: faqIdArr,
    },
  });
  return res.data;
};
