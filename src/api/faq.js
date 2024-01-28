const { default: axios } = require("axios");

export const POST_Faq = async (data) => {
  // const accessToken = window.localStorage.getItem("accessToken");

  const url = "/api/posts";

  const res = await axios({
    method: "post",
    url: url,
    // headers: {
    //     'Authorization': `Bearer ${accessToken}`
    // },
    params: {
      categoryName: filterList.topic,
      question: filterList.hashtag,
      answer: filterList.blog_id,
    },
  });

  return res.data;
};
