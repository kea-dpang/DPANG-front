import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TempData from "../../../../assets/datas/EventData";

export default function DataTable() {
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "번호", width: 45, headerAlign: "center" },
    {
      field: "kind",
      headerName: "유형",
      width: 65,
      headerAlign: "center",
      renderCell: (params) => {
        let color;
        if (params.value === "취소") {
          color = "var(--navy)";
        } else {
          // 환불
          color = "var(--orange)";
        }
        return <div style={{ color: color }}>{params.value}</div>;
      },
    },
    {
      field: "eventStart",
      headerName: "사유",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "submitDate",
      headerName: "상품명",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "eventName",
      headerName: "상품 금액/수량",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "eventStatus",
      headerName: "예상 환불액",
      width: 150,
      sortable: false,
      headerAlign: "center",
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
    {
      field: "eventEnd",
      headerName: "상태관리",
      width: 200,
      headerAlign: "center",
    },
  ];
  const [rows, setRows] = useState([...TempData]);
  const [selectedRows, setSelectedRows] = useState([]);

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
