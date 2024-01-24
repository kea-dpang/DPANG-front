import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TempData from "../../../../assets/datas/AdminCancelData";

export default function DataTable() {
  const navigate = useNavigate();

  const renderOrderNum = (params) => {
    return (
      <NumBox className="cm-SRegular16">
        <p>{params.row.date} </p>
        <p style={{ color: "var(--navy)" }}>{params.row.ordernum}</p>
      </NumBox>
    );
  };

  const renderDropBox = (params) => {
    return (
      <NumBox
        className="cm-SRegular16"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {params.row.status === "취소요청" ? <Button>승인</Button> : null}
      </NumBox>
    );
  };

  const renderItemInfo = (params) => {
    return (
      <NumBox className="cm-SRegular16">
        <ItemBox>
          <ImgBox>
            <ItemImg src={params.row.itemImg} />
          </ImgBox>

          <NameBox>{params.row.itemName}</NameBox>
        </ItemBox>
      </NumBox>
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "번호",
      width: 40,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox className="cm-SRegular16">{params.value}</NumBox>;
      },
    },
    {
      field: "eventName",
      headerName: "결제일 | 주문번호",
      width: 180,
      headerAlign: "center",
      renderCell: renderOrderNum,
    },
    {
      field: "name",
      headerName: "이름",
      width: 120,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox className="cm-SRegular16">{params.row.name}</NumBox>;
      },
    },
    {
      field: "item",
      headerName: "상품정보",
      width: 400,
      headerAlign: "center",
      renderCell: renderItemInfo,
    },
    {
      field: "status",
      headerName: "상태",
      width: 140,
      sortable: false,
      headerAlign: "center",
      renderCell: (params) => {
        return <NumBox className="cm-SRegular16">{params.value}</NumBox>;
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
          path = "/admin/cancel/" + params.id; // detail확인을 위해 클릭한 id값을 함께 넘겨준다
          navigate(path);
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection={false}
        rowHeight={120}
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
  height: 100%;
`;

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImgBox = styled.div`
  height: 100%;
  width: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NameBox = styled.div`
  height: 100%;
  width: calc(400px - 6rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;
const Button = styled.button`
  height: 2rem;
  width: 4rem;
  background-color: var(--navy);
  border-radius: 3px;
  color: white;
  font-size: 14px;
`;
