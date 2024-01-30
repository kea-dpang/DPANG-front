import {
  customAskCategoryName,
  customFAQCategoryName,
} from "assets/CustomName";
import axios from "axios";
const url = "/api/faq";

export const GET_FAQList = async (category) => {
  if (!category) {
    // 전체
    category = "";
  } else {
    category = customFAQCategoryName(category, true);
  }
  console.log("abc:", category);

  const res = await axios({
    method: "get",
    url: `${url}/category`,
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

  const res = await axios({
    method: "post",
    url: url,
    headers: {
      // 'Authorization': `Bearer ${accessToken}`
      "X-DPANG-CLIENT-ID": 1,
    },
    data: {
      category: data.category,
      question: data.question,
      answer: data.answer,
    },
  });

  return res.data;
};
