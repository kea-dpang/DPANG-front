import { useQuery } from "react-query";

// 커스텀 훅
export const useUser = (id) => {
  return useQuery(["user", id], () => getUser(id));
};

// export const useUpdateUser = () => {
//   return useMutation(updateUser, {
//     onSuccess: () => {
//       // 데이터가 성공적으로 수정되었을 때 캐시 업데이트
//       queryClient.invalidateQueries("user");
//     },
//   });
// };
