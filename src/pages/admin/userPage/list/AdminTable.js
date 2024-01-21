import React from 'react';
import MUIDataTable from "mui-datatables";

const AdminTable = ({ data, columns, onRowClick }) => {
    console.log(data);
  const options = {
    selectableRows: 'multiple',
    onRowsDelete: (rowsDeleted) => {
      const deletedData = rowsDeleted.data.map(d => data[d.index]);
      console.log('Selected rows:', deletedData);
      return false; // prevent the default delete action
    },
    onRowClick: (rowData, rowMeta) => {
        // console.log(rowData)
        onRowClick(rowData); // 클릭된 행의 데이터를 부모 컴포넌트로 전달
    },
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default AdminTable;