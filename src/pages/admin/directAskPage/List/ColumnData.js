import {
  customCategoryName,
  customStatusName,
} from "../../../../assets/CustomName";

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
        // const customCategory = customCategoryName(item.category);
        return <div>{item.category}</div>;
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
        // const customStatus = customStatusName(item.status);
        return (
          <div
            style={{
              color:
                item.status === "답변 대기" ? "var(--orange)" : "var(--black)",
            }}
          >
            {item.status}
          </div>
        );
      },
    },
  },
];
