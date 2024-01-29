import axios from "axios";

const url = `/api/reviews`;

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
