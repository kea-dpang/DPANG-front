import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

const DataTable = ({
  data: initialData,
  columns,
  onRowClick,
  onRowsDelete,
  onChangePage,
  filterValue,
  index,
  placeholder,
  count,
}) => {
  // data 상태 관리
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);
  const [resetCheckBox, setResetCheckBox] = useState(false); // 체크박스 리셋
  const [newData, setNewData] = useState("");

  // data가 바뀔 때마다 렌더링
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // 드롭박스 필터링
  useEffect(() => {
    // 선택된 드롭다운값이 placeholder일때 : 필터링 x
    if (filterValue === placeholder) {
      setFilteredData(data);
    } else if (filterValue === "전체") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item[index] === filterValue);
      setFilteredData(filtered); // 필터링된 데이터로 상태 업데이트
    }
  }, [data, filterValue, index, placeholder]);

  const options = {
    selectableRows: "multiple",
    // 데이터 삭제
    onRowsDelete: (rowsDeleted) => {
      console.log("rowsDeleted: ", rowsDeleted);
      const idsToDelete = rowsDeleted.data.map((d) => data[d.dataIndex].id);
      const newData = data.filter((item) => !idsToDelete.includes(item.id));
      setData(newData); // 삭제 완료된 데이터 리스트 업데이트
      setFilteredData(newData); // 삭제 완료된 데이터 리스트 업데이트
      setResetCheckBox(!resetCheckBox); // 체크박스 리셋
      const rowsDeletedUpdated = {
        ...rowsDeleted,
        data: rowsDeleted.data.map((d) => ({
          ...d,
          dataIndex: filteredData[d.dataIndex][columns[0].name],
        })),
      };

      onRowsDelete(rowsDeletedUpdated);
      return false; // 기본 삭제 동작 방지
    },
    // 데이터 클릭 (상세조회)
    onRowClick: (rowData, rowMeta) => {
      onRowClick(rowData); // 클릭된 행의 데이터를 부모 컴포넌트로 전달
    },
    //pagination
    serverSide: true,
    count: count,
    rowsPerPage: 10, // 한페이지에 보여주는 데이터 개수
    rowsPerPageOptions: [10, 20, 25], // 선택 가능 (5,10,15)
    pagination: true, // 페이지네이션 활성화
    onChangePage: (currentPage) => {
      // 페이지네이션 변경 감지
      onChangePage(currentPage);
    },
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
