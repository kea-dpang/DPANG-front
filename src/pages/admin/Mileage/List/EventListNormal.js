import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TempData from "../../../../assets/data/admin/AdminMileageData";

export default function DataTable() {
  const handleButtonClick = (id) => {
    console.log(id);
  };

  const renderEditButton = (params) => {
    // kind 값이 "요청"인 경우에만 버튼 렌더링
    if (params.row.kind === "대기") {
      return (
        <>
          <Button
            colour="var(--navy)"
            onClick={() => handleButtonClick(params.id)}
          >
            승인
          </Button>
          <Button
            colour="var(--orange)"
            onClick={() => handleButtonClick(params.id)}
          >
            거절
          </Button>
        </>
      );
    }
    return null; // 다른 경우에는 아무것도 렌더링하지 않음
  };

  const columns = [
    { field: "id", headerName: "번호", width: 60, headerAlign: "left" },
    {
      field: "kind",
      headerName: "처리상태",
      width: 120,
      headerAlign: "left",
      renderCell: (params) => {
        let color;
        if (params.value === "승인") {
          color = "var(--navy)";
        } else if (params.value === "거절") {
          color = "var(--semi-light-grey)";
        } else {
          // 환불
          color = "var(--orange)";
        }
        return <div style={{ color: color }}>{params.value}</div>;
      },
    },
    {
      field: "requestdate",
      headerName: "요청날짜",
      width: 220,
      headerAlign: "left",
    },
    {
      field: "companyid",
      headerName: "사원번호",
      width: 150,
      headerAlign: "left",
    },
    {
      field: "name",
      headerName: "이름",
      width: 100,
      headerAlign: "left",
    },
    {
      field: "payname",
      headerName: "입금자명",
      width: 100,
      headerAlign: "left",
    },
    {
      field: "money",
      headerName: "충전 희망 금액",
      width: 150,
      sortable: false,
      headerAlign: "left",
    },
    {
      field: "edit",
      headerName: "승인/거절",
      width: 200,
      headerAlign: "left",
      renderCell: renderEditButton,
    },
  ];

  const [rows, setRows] = useState([...TempData]);
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <Wrap>
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
        checkboxSelection={false}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 70rem;
  cursor: pointer;
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
  background-color: ${(props) => props.colour};
  color: white;
  margin: 5px;
  border-radius: 3px;
`;
