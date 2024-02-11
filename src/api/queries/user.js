import { GET_User } from "@api/user";
import { useQuery } from "react-query";

// 커스텀 훅
// export const useUser = () => {
//   return useQuery(["user", id], () => GET_User(id));
// };

// 마이페이지>회원정보조회
export const useUser = () => {
  return useQuery("user", GET_User);
};

// export const useUpdateUser = () => {
//   return useMutation(updateUser, {
//     onSuccess: () => {
//       // 데이터가 성공적으로 수정되었을 때 캐시 업데이트
//       queryClient.invalidateQueries("user");
//     },
//   });
// };
