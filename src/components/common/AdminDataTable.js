import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

const DataTable = ({
  data,
  columns,
  onRowClick,
  filterValue,
  index,
  placeholder,
}) => {
  // filterValue : 선택된 드롭박스 값. index: 필터링 조건 적용할 index. placeholder: 카테고리 선택 안 할 때 기본값
  const [filteredData, setFilteredData] = useState(data);
  // 드롭박스 필터링
  useEffect(() => {
    // 선택된 드롭다운값이 placeholder일때 : 필터링 x
    if (filterValue === placeholder) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item[index] === filterValue);
      setFilteredData(filtered); // 필터링된 데이터로 상태 업데이트
    }
  }, [data, filterValue, index]);

  const options = {
    selectableRows: "multiple",
    onRowsDelete: (rowsDeleted) => {
      const deletedData = rowsDeleted.data.map((d) => data[d.index]);
      console.log("Selected rows:", deletedData);
      return false; // prevent the default delete action
    },
    onRowClick: (rowData, rowMeta) => {
      // state 값이 '답변완료'일 경우 클릭 이벤트를 무시합니다.
      // if (rowData[3] === '답변완료') {
      //     console.log('답변완료 상태의 행은 클릭할 수 없습니다.');
      //     return;
      // }
      // console.log(rowData)
      onRowClick(rowData); // 클릭된 행의 데이터를 부모 컴포넌트로 전달
    },
    // setRowProps: (row, dataIndex, rowIndex) => {
    //   if (askManageData[dataIndex].state === '답변완료') {
    //       // '답변완료' 상태의 행에 대해 투명도를 조절하여 비활성화처럼 보이게 합니다.
    //       return {
    //           style: { backgroundColor: 'var(--dark-grey)', opacity: 0.5, pointerEvents: 'none' },
    //       };
    //   }
    // },
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <MUIDataTable data={filteredData} columns={columns} options={options} />
    </div>
  );
};

export default DataTable;
