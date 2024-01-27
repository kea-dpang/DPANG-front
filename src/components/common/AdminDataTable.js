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
      onRowClick(rowData); // 클릭된 행의 데이터를 부모 컴포넌트로 전달
    },
    setRowProps: setRowProps, // 외부에서 받아온 setRowProps 함수 사용
  };
  return (

    <div style={{ width: "100%" }}>
      <MUIDataTable data={filteredData} columns={columns} options={options} />

    </div>
  );
};

export default DataTable;
