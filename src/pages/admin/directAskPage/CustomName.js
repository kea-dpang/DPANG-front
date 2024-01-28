/* 답변 대기, 답변 완료 */
export const customStatusName = (status) => {
  switch (status) {
    case "PROCESSING":
      return "답변 대기";
    case "COMPLETED":
      return "답변 완료";
    default:
      return "상태 미정";
  }
};
/* [문의] 상품, 회원정보, 상품확인, 배송, 교환/취소, 기타 */
export const customCategoryName = (category) => {
  switch (category) {
    case "ITEM_INQUIRY":
      return "상품 문의";
    case "MEMBER_INFORMATION":
      return "회원 정보 문의";
    case "DELIVERY":
      return "배송 문의";
    case "EXCHANGE_CANCELLATION":
      return "교환/취소 문의";
    case "ETC":
      return "기타 문의";
    default:
      return "상태 미정";
  }
};
/* 2024-01-28T02:58:56.773782 -> 2024.01.28 */
export const customDate = (createdAt) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해주기
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
