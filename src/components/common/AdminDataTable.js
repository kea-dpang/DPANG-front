import React from "react";
import MUIDataTable from "mui-datatables";
import { askManageData } from "../../assets/data/admin/AdminAskData";

const DataTable = ({ data, columns, onRowClick }) => {
  console.log(data);

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
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
};

export default DataTable;
