import React from "react";
import MUIDataTable from "mui-datatables";
import { askManageData } from "../../assets/data/admin/AdminAskData";

const DataTable = ({ data, columns, setRowProps, onRowClick }) => {

  console.log("DataTable props:", { data, columns, setRowProps, onRowClick });

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
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
};

export default DataTable;
