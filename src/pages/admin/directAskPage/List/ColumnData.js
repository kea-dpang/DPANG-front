const customStatusName = (status) => {
  switch (status) {
    case "PROCESSING":
      return "답변 대기";
    case "COMPLETED":
      return "답변 완료";
    default:
      return "상태 미정";
  }
};
const customCategoryName = (category) => {
  switch (category) {
    case "ITEM_INQUIRY":
      return "상품 문의";
    case "MEMBER_INFORMATION":
      return "회원 정보 문의";
    case "ITEM_CONFIRMATION":
      return "상품 확인 문의";
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

/* 데이터 테이블 columns 값 */
export const AskColumns = (askDataList) => [
  { name: "qnaId", label: "번호", options: { sort: true } },
  {
    name: "category",
    label: "카테고리",
    options: {
      sort: true,
      customBodyRenderLite: (dataIndex) => {
        const item = askDataList[dataIndex];
        const customCategory = customCategoryName(item.category);
        return <div>{customCategory}</div>;
      },
    },
  },
  { name: "title", label: "제목", options: { sort: true } },
  {
    name: "status",
    label: "상태",
    options: {
      sort: true,
      customBodyRenderLite: (dataIndex) => {
        const item = askDataList[dataIndex];
        const customStatus = customStatusName(item.status);
        return (
          <div
            style={{
              color:
                customStatus === "답변 대기" ? "var(--orange)" : "var(--black)",
            }}
          >
            {customStatus}
          </div>
        );
      },
    },
  },
];
