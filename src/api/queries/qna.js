import { GET_QnAList } from "@api/directAsk";
import { useQuery } from "react-query";

export const useQnAList = (
  page,
  userId,
  period,
  category,
  state,
  itemId = null
) => {
  return useQuery(
    ["qnaList", page, period], // 키 배열의 값이 변경될 때마다 새로운 데이터를 가져오기
    () =>
      GET_QnAList({ userId, period, pageNum: page, category, state, itemId }),
    {
      keepPreviousData: true, // 새 페이지 데이터를 불러올 때 이전 페이지 데이터 유지
    }
  );
};
