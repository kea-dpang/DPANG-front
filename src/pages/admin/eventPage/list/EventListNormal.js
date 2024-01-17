import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

export default function DataTable() {
    const columns = [
        { field: 'id', headerName: '번호', width: 130, headerAlign: 'center'},
        { field: 'submitDate', headerName: '이벤트 등록일', width: 200, headerAlign: 'center' },
        { field: 'eventName', headerName: '이벤트 이름', width: 200, headerAlign: 'center' },
        { field: 'eventStatus', headerName: '이벤트 상태', width: 150, sortable: false, headerAlign: 'center', renderCell: (params) => {
            let color;
            if (params.value === '진행') {
                color = 'var(--navy)';
            } else if (params.value === '대기') {
                color = 'var(--yellow)';
            } else { // 종료
                color = 'var(--orange)';
            }
            return <div style={{color: color}}>{params.value}</div>
        }},
        { field: 'eventStart', headerName: '이벤트 시작일', width: 200, headerAlign: 'center'},
        { field: 'eventEnd', headerName: '이벤트 종료일', width: 200, headerAlign: 'center'},
        ];
    // const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [rows, setRows] = useState([
            { id: 1, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '진행', eventStart: '2024-01-04 18:00:00', eventEnd: '2024-01-10 00:00:00' },
            { id: 2, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '대기', eventStart: '2024-01-04 18:00:01', eventEnd: '2024-01-10 00:00:00' },
            { id: 3, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '종료', eventStart: '2024-01-04 18:00:02', eventEnd: '2024-01-10 00:00:00' },
            { id: 4, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '종료', eventStart: '2024-01-04 18:00:03', eventEnd: '2024-01-10 00:00:00' },  
        ]);

    // 선택된 이벤트 삭제하기
    const handleDelete = () => {
        setRows(rows.filter((row) => !selectedRows.includes(row.id)));
    };

    // 정렬은 id기준이기 때문에 id값은 고유해야 한다.
    // TODO: 각 데이터들 가운데정렬
    // const rows = [
    //     { id: 1, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '진행', eventStart: '2024-01-04 18:00:00', eventEnd: '2024-01-10 00:00:00' },
    //     { id: 2, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '대기', eventStart: '2024-01-04 18:00:01', eventEnd: '2024-01-10 00:00:00' },
    //     { id: 3, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '종료', eventStart: '2024-01-04 18:00:02', eventEnd: '2024-01-10 00:00:00' },
    //     { id: 4, submitDate: '2024-01-01 00:00:00', eventName: '겨울 아우터 반값 이벤트', eventStatus: '종료', eventStart: '2024-01-04 18:00:03', eventEnd: '2024-01-10 00:00:00' },  
    // ]
  return (
    <div style={{ width: '70rem'}}>
    {/* <button onClick={handleDelete}>선택된 row 삭제</button> */}
      <DataGrid
        rows={rows}
        columns={columns}
        onSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection.selectionModel);
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
      />
    </div>
  );
}
