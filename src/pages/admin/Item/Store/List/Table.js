import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TempData from '../../../../../assets/datas/AdminStoreData';

export default function DataTable() {
  const navigate = useNavigate();


    const columns = [
        { field: 'id', headerName: '번호', width: 80, headerAlign: 'left'},
        { field: 'storename', headerName: '판매처명', width: 150, headerAlign: 'left'},
        { field: 'storenumber', headerName: '판매처 연락처', width: 180, headerAlign: 'left' },
        { field: 'storeemployee', headerName: '판매처 담당 직원', width: 220, headerAlign: 'left' },
        { field: 'storedirector', headerName: '담당자', width: 160, headerAlign: 'left' },
        { field: 'finishdate', headerName: '계약 만료일', width: 150, headerAlign: 'left'},
        ];
    const [rows, setRows] = useState([...TempData]);
    const [selectedRows, setSelectedRows] = useState([]);
    
    // 선택된 이벤트 삭제하기
    const handleDelete = () => {
        setRows(rows.filter((row) => !selectedRows.includes(row.id)));
    };
  return (
    <Wrap>
    {/* <button onClick={handleDelete}>선택된 row 삭제</button> */}
      <DataGrid
        rows={rows}
        columns={columns}
        onSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection.selectionModel);
        }}

        onCellClick={(params, store) => {
            if(params.field !== "__check__") {
              let path; {
                path = "/admin/item/editstore/" + params.id;
            }
              navigate(path);
            }
        }}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
    />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 70rem;
  cursor: pointer;
`
