/* 답변 대기, 답변 완료 */
export const customStatusName = (status) => {
  switch (status) {
    case "PROCESSING":
      return "답변 대기";
    case "COMPLETED":
      return "답변 완료";
    case "PROCEEDING":
      return "진행";
    case "WAITING":
      return "대기";
    case "END":
      return "종료";
    case "seller":
      return "브랜드";
    case "item":
      return "상품";
    default:
      return "상태 미정";
  }
};
/* [문의] 상품, 회원정보, 상품확인, 배송, 교환/취소, 기타 */
export const customAskCategoryName = (category, isReverse) => {
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

/* [FAQ] 자주 찾는 FAQ, 배송, 취소/교환/환불, 기타, 결제, 회원 */
export const customFAQCategoryName = (category, isReverse) => {
  const map = {
    FAQ: "자주 찾는 FAQ",
    SHIPPING: "배송",
    CANCELLATION_REFUND_EXCHANGE: "취소/교환/환불",
    PAYMENT: "결제",
    MEMBER: "회원",
    ETC: "기타",
  };

  const reverseMap = {
    "자주 찾는 FAQ": "FAQ",
    배송: "SHIPPING",
    "취소/교환/환불": "CANCELLATION_REFUND_EXCHANGE",
    결제: "PAYMENT",
    회원: "MEMBER",
    기타: "ETC",
    전체: " ",
  };

  if (isReverse) {
    return reverseMap[category] || "UNKNOWN_STATUS";
  } else {
    return map[category] || "상태 미정";
  }
};

/* [회원]  */
export const customUserCategoryName = (category, isReverse) => {
  const map = {
    EMPLOYEENUMBER: "사원번호",
    EMAIL: "이메일",
    NAME: "이름",
    ALL: "ALL",
  };

  const reverseMap = {
    사원번호: "EMPLOYEENUMBER",
    이메일: "EMAIL",
    이름: "NAME",
    ALL: "ALL",
  };

  if (isReverse) {
    return reverseMap[category] || "UNKNOWN_STATUS";
  } else {
    return map[category] || "상태 미정";
  }
};
