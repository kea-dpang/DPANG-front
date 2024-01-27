import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

const DataTable = ({
  data: initialData,
  columns,
  onRowClick,
  filterValue,
  index,
  placeholder,
}) => {
  // data 상태 관리
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);
  const [resetCheckBox, setResetCheckBox] = useState(false); // 체크박스 리셋

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
      const idsToDelete = rowsDeleted.data.map((d) => data[d.dataIndex].id);
      const newData = data.filter((item) => !idsToDelete.includes(item.id));
      setData(newData); // 삭제 완료된 데이터 리스트 업데이트
      setFilteredData(newData); // 삭제 완료된 데이터 리스트 업데이트
      setResetCheckBox(!resetCheckBox); // 체크박스 리셋

      return false; // 기본 삭제 동작 방지
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
    <div style={{ width: "100%" }}>
      <MUIDataTable
        key={resetCheckBox}
        data={filteredData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default DataTable;