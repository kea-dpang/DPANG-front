import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TempData from "../../../../assets/data/user/EventData";

export default function DataTable() {
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "번호", width: 45 },
    {
      field: "kind",
      headerName: "구분",
      width: 65,
      renderCell: (params) => {
        let color;
        if (params.value === "상품") {
          color = "var(--navy)";
        } else {
          // 브랜드
          color = "var(--orange)";
        }
        return <div style={{ color: color }}>{params.value}</div>;
      },
    },
    { field: "submitDate", headerName: "이벤트 등록일", width: 200 },
    { field: "eventName", headerName: "이벤트 이름", width: 200 },
    {
      field: "eventStatus",
      headerName: "이벤트 상태",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        let color;
        if (params.value === "진행") {
          color = "var(--navy)";
        } else if (params.value === "대기") {
          color = "var(--yellow)";
        } else {
          // 종료
          color = "var(--orange)";
        }
        return <div style={{ color: color }}>{params.value}</div>;
      },
    },
    { field: "eventStart", headerName: "이벤트 시작일", width: 200 },
    { field: "eventEnd", headerName: "이벤트 종료일", width: 200 },
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
        onCellClick={(params, event) => {
          if (params.field !== "__check__") {
            let path;
            if (params.row.kind === "상품") {
              path = "/admin/event/editproduct/" + params.id; // 'admin/event/editproduct/eventid' 로 이동
            } else {
              // 브랜드
              path = "/admin/event/editbrand/" + params.id; // 'admin/event/editbrand/eventid' 로 이동
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
`;
