/* 데이터 테이블 columns 값 */
export const AskColumns = (askDataList) => [
  { name: "qnaId", label: "번호", options: { sort: true } },
  {
    name: "category",
    label: "카테고리",
    options: {
      sort: true,
      customBodyRenderLite: (dataIndex) => {
        // const item = askDataList[dataIndex];
        // 예외처리 안할 시에는 item.category가 없다는 에러가 뜨기 때문에 해당 예외처리 로직 추기
        const item = askDataList ? askDataList[dataIndex] : undefined;
        if (!item || !item.category) {
          return <div>데이터 없음</div>;
        }
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
        // const item = askDataList[dataIndex];
        const item = askDataList ? askDataList[dataIndex] : undefined;
        if (!item || !item.status) {
          return <div>데이터 없음</div>;
        }
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
