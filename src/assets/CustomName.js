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

export const CustomMileageStatusNameReverse = (status) => {
  switch (status) {
    case "요청":
      return "REQUESTED";
    case "승인":
      return "APPROVED";
    case "반려":
      return "REJECTED"
    default:
      return "전체";
  }



}

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
// 상품 카테고리 이름 커스텀
export const categoryFormat = (category, isToServer) => {
  const map = {
    패션: "FASHION",
    뷰티: "BEAUTY",
    "스포츠/레저": "SPORT_LEISURE",
    "디지털/가전": "DIGITAL_ELECTRONICS",
    인테리어: "INTERIOR",
    "출산/유아동": "BABY",
    생활: "LIFE",
  };

  const reverseMap = {
    FASHION: "패션",
    BEAUTY: "뷰티",
    SPORT_LEISURE: "스포츠/레저",
    DIGITAL_ELECTRONICS: "디지털/가전",
    INTERIOR: "인테리어",
    BABY: "출산/유아동",
    LIFE: "생활",
  };

  if (isToServer) {
    return map[category] || category;
  } else {
    return reverseMap[category] || category;
  }
};
// 상품 서브카테고리 이름 커스텀
export const subCategoryFormat = (category, isToServer) => {
  const map = {
    여성의류: "WOMEN_CLOTHES",
    남성의류: "MEN_CLOTHES",
    언더웨어: "UNDERWEAR",
    신발: "SHOES",
    잡화: "BAGS_WALLETS_ACCESSORIES",
    액세서리: "JEWELRY_WATCHES_ACCESSORIES",
  };

  const reverseMap = {
    WOMEN_CLOTHES: "여성의류",
    MEN_CLOTHES: "남성의류",
    UNDERWEAR: "언더웨어",
    SHOES: "신발",
    BAGS_WALLETS_ACCESSORIES: "잡화",
    JEWELRY_WATCHES_ACCESSORIES: "액세서리",
  };

  if (isToServer) {
    return map[category] || category;
  } else {
    return reverseMap[category] || category;
  }
};
