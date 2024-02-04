import { IronOutlined } from "@mui/icons-material";
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

export const GET_review_list = async (inputValue) => {

  console.log("서버로 전달할 데이터", inputValue)

  const res = await axios({
    method: "get",
    url: `${url}/${inputValue.reviewerId}/reviewlist`,
    page: 0,
    size: 10,
    sort: "",
  });

  return res.data;
};
