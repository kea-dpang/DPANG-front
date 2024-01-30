import axios from "axios";

const url = `/reviews`;

export const POST_review = async (inputValue) => {
  console.log("inputValue: ", inputValue);

  //리뷰 등록하기
  const res = await axios({
    method: "post",
    url: url,
    data: {
      reviewerId: inputValue.reviewerId,
      itemId: inputValue.itemId,
      content: inputValue.content,
      rating: inputValue.rating,
    },
  });

  return res.data;
};

export const GET_review = async (reviewId) => {
  const res = await axios({
    method: "get",
    url: `${url}/${reviewId}`,
  });

  return res.data;
};
