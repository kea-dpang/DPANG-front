import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TempData from "../../../../assets/datas/AdminRefundData";

export default function DataTable() {
  const navigate = useNavigate();

  const renderOrderNum = (params) => {
    return (
      <NumBox>
        <p>{params.row.date} </p>
        <p style={{ color: "var(--navy)" }}>{params.row.ordernum}</p>
      </NumBox>
    );
  };

  const renderDropBox = (params) => {
    if (params.row.type === "취소") {
      return (
        <NumBox
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Form>
            <option value="단순 변심">-----</option>
            <option value="단순 변심">취소요청</option>
            <option value="사이즈 안맞음">취소완료</option>
          </Form>
        </NumBox>
      );
    } else {
      return (
        <NumBox
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Form>
            <option value="단순 변심">-----</option>
            <option value="10">반품요청</option>
            <option value="11">회수중</option>
            <option value="13">반품완료</option>
          </Form>
        </NumBox>
      );
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "번호",
      width: 45,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox>{params.value}</NumBox>;
      },
    },
    {
      field: "eventName",
      headerName: "결제일 | 주문번호",
      width: 200,
      headerAlign: "center",
      renderCell: renderOrderNum,
    },
    {
      field: "type",
      headerName: "유형",
      width: 65,
      headerAlign: "left",
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
      field: "category",
      headerName: "상세 사유",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox>{params.row.category}</NumBox>;
      },
    },
    {
      field: "user",
      headerName: "유저",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox>{params.row.user}</NumBox>;
      },
    },
    {
      field: "state",
      headerName: "상태",
      width: 150,
      sortable: false,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox>{params.value}</NumBox>;
      },
    },
    {
      field: "center",
      headerName: "상태관리",
      width: 200,
      headerAlign: "center",
      renderCell: renderDropBox,
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
        onCellClick={(params, event) => {
          let path;
          path = "/admin/refund/" + params.id; // detail확인을 위해 클릭한 id값을 함께 넘겨준다
          navigate(path);
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
const NumBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Form = styled.select`
  width: 7rem;
  height: 2rem;
`;
