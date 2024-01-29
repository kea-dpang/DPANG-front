import { customAskCategoryName } from "assets/CustomName";
import axios from "axios";

const url = "/api/faq";

export const GET_FAQList = async (category) => {
  if (category === undefined) {
    // 일단 전체가 없으므로 '자주 찾는 FAQ로 지정해둠. 나중에 바꿀 것'
    category = "FAQ";
  } else {
    category = customAskCategoryName(category, true);
  }
  console.log("abc:", category);

  const res = await axios({
    method: "get",
    url: `${url}/category/${category}`,
  });
  return res.data;
};

// export const POST_Faq = async (data) => {
//   // const accessToken = window.localStorage.getItem("accessToken");

//   const res = await axios({
//     method: "post",
//     url: url,
//     // headers: {
//     //     'Authorization': `Bearer ${accessToken}`
//     // },
//     params: {
//       categoryName: filterList.topic,
//       question: filterList.hashtag,
//       answer: filterList.blog_id,
//     },
//   });

//   return res.data;
// };
