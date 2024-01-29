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
export const customCategoryName = (category, isReverse) => {
  const map = {
    ITEM_INQUIRY: "상품 문의",
    MEMBER_INFORMATION: "회원 정보 문의",
    DELIVERY: "배송 문의",
    EXCHANGE_CANCELLATION: "교환/취소 문의",
    ETC: "기타 문의",
  };

  const reverseMap = {
    "상품 문의": "ITEM_INQUIRY",
    "회원 정보 문의": "MEMBER_INFORMATION",
    "배송 문의": "DELIVERY",
    "교환/취소 문의": "EXCHANGE_CANCELLATION",
    "기타 문의": "ETC",
  };

  if (isReverse) {
    return reverseMap[category] || "UNKNOWN_STATUS";
  } else {
    return map[category] || "상태 미정";
  }
};

export const customMileageStatusName = (status) => {
  switch (status) {
    case "REQUESTED":
      return "요청";
    case "APPROVED":
      return "승인";
    default:
      return "반려";
  }
};

/* 2024-01-28T02:58:56.773782 -> 2024.01.28 */
export const customDate = (createdAt) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해주기
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
