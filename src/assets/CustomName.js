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
      return;
  }
};
export const customStatusNameReverse = (status) => {
  switch (status) {
    case "답변 대기":
      return "PROCESSING";
    case "답변 완료":
      return "COMPLETED";
    default:
      return;
  }
};
/* [문의] 상품, 회원정보, 상품확인, 배송, 교환/취소, 기타 */
export const customAskCategoryName = (category, isReverse) => {
  const map = {
    ITEM_INQUIRY: "상품",
    MEMBER_INFORMATION: "회원 정보",
    DELIVERY: "배송",
    EXCHANGE_CANCELLATION: "교환/취소",
    ETC: "기타",
  };

  const reverseMap = {
    상품: "ITEM_INQUIRY",
    "회원 정보": "MEMBER_INFORMATION",
    배송: "DELIVERY",
    "교환/취소": "EXCHANGE_CANCELLATION",
    기타: "ETC",
  };

  if (isReverse) {
    return reverseMap[category] || undefined;
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
      return "REJECTED";
    default:
      return undefined;
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
// 상품 카테고리 이름 커스텀
export const categoryFormat = (category, isToServer) => {
  const map = {
    패션: "FASHION",
    뷰티: "BEAUTY",
    "스포츠/레저": "SPORTS_LEISURE",
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
    여성의류: "women_clothes",
    남성의류: "men_clothes",
    언더웨어: "underwear",
    신발: "SHOES",
    잡화: "bags_wallets_accessories",
    액세서리: "jewelry_watches_accessories",
  };

  const reverseMap = {
    women_clothes: "여성의류",
    men_clothes: "남성의류",
    underwear: "언더웨어",
    shoes: "신발",
    bags_wallets_accessories: "잡화",
    jewelry_watches_accessories: "액세서리",
  };

  if (isToServer) {
    return map[category] || category;
  } else {
    return reverseMap[category] || category;
  }
};

/* 회원탈퇴 */
export const customLeaveCategoryName = (category) => {
  switch (category) {
    case "고객서비스 불만":
      return "SERVICE_COMPLAIN";
    case "배송 불만":
      return "DELIVERY_COMPLAIN";
    case "환불정책 불만":
      return "REFUND_POLICY_COMPLAIN";
    case "방문빈도 낮음":
      return "LESS_FREQUENT_VISITS";
    case "상품가격 불만":
      return "ITEM_PRICE_COMPLAIN";
    case "개인정보 유출 우려":
      return "PRIVACY_LEAKAGE_COMPLAIN";
    case "신뢰도 불만":
      return "RELIABILITY_COMPLAIN";
    case "퇴사":
      return "COMPANY_LEAVE";
    default:
      return "상태 미정";
  }
};

export const customOrderStatus = (status) => {
  switch (status) {
    case "ORDER_RECIEVED":
      return "주문승인";
    case "PAYMENT_COMPLETED":
      return "결제완료";
    case "DELIVERY_REQUESTED":
      return "배송요청";
    case "PREPARING_FOR_DELIVERY":
      return "배송준비";
    case "IN_DELIVERY":
      return "배송중";
    case "DELIVERY_COMPLETED":
      return "배송완료";
    default:
      return "취소/환불";
  }
};

export const customOrderStatusReverse = (status) => {
  switch (status) {
    case "주문승인":
      return "ORDER_RECIEVED";
    case "결제완료":
      return "PAYMENT_COMPLETED";
    case "배송요청":
      return "DELIVERY_REQUESTED";
    case "배송준비":
      return "PREPARING_FOR_DELIVERY";
    case "배송중":
      return "IN_DELIVERY";
    case "배송완료":
      return "DELIVERY_COMPLETED";
    case "취소/환불":
      return "CANCELLED";
    default:
      return undefined;
  }
};

export const customRefundStatus = (status) => {
  switch (status) {
    case "REFUND_REQUEST":
      return "환불 요청";
    case "COLLECTING":
      return "회수중";
    default:
      return "환불 완료";
  }
};

export const customRefundStatusReverse = (status) => {
  switch (status) {
    case "환불 요청":
      return "REFUND_REQUEST";
    case "회수중":
      return "COLLECTING";
    case "환불 완료":
      return "REFUND_COMPLETE";
    default:
      return undefined;
  }
};

// export const customRefundStatusReverse = (status) =>{
// switch(status){
//   case "환불 요청":
//     return "REFUND_REQUEST";
//   case "회수중":
//     return "COLLECTING";
//   case "환불 완료":
//     return ""
// }

// }

export const customRefundReason = (status) => {
  switch (status) {
    case "SIZE_NOT_MATCH":
      return "사이즈 안맞음";
    case "SIMPLE_CHANGE":
      return "단순변심";
    case "PRODUCT_DISCONTENT":
      return "상품불만";
    case "DELIVERY_DELAY":
      return "배송지연";
    case "WRONG_DELIVERY":
      return "제품 오배송";
    default:
      return "기타";
  }
};

export const customRefundReasonReverse = (status) => {
  switch (status) {
    case "사이즈 안맞음":
      return "SIZE_NOT_MATCH";
    case "단순변심":
      return "SIMPLE_CHANGE";
    case "상품불만":
      return "PRODUCT_DISCONTENT";
    case "배송지연":
      return "DELIVERY_DELAY";
    case "제품 오배송":
      return "WRONG_DELIVERY";
    case "기타":
      return "OTHERS";
    default:
      return undefined;
  }
};

export const customPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, ''); // 숫자 이외의 문자 제거
  const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/);

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return phoneNumber;
}