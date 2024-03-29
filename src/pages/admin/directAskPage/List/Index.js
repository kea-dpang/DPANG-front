import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { askManageData } from "../../../../assets/data/admin/AdminAskData";
import DropboxStyle from "./DropBox.styled";
import { FormProvider, useForm } from "react-hook-form";
import { GET_QnAList } from "@api/directAsk";
import { AskColumns } from "./ColumnData";
import DataTable from "@components/DataTable";
import { useLocation } from "react-router-dom";

const DirectAskPage = () => {
  ////////////////////////////////
  const methods = useForm();
  const { watch } = methods;

  const categoryValue = watch("문의 유형");
  const stateValue = watch("처리 상태");

  useEffect(() => {
    console.log("문의 유형:", categoryValue);
    console.log("처리 상태:", stateValue);
  }, [categoryValue, stateValue]);
  //////////////////////////////

  const navigate = useNavigate();
  const [askDataList, setAskDataList] = useState();
  // 페이지네이션
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // url에서 searchparameter 저장(페이지)
  const [page, setPage] = useState(searchParams.get("page") || 0);
  const [totalData, setTotalData] = useState(0);

  /* 서버에서 1:1문의 리스트 가져오기 */
  useEffect(() => {
    navigate(`?page=${page}`);
    GET_QnAList({
      userId: undefined,
      category: categoryValue,
      state: stateValue,
      pageNum: page,
    })
      .then((data) => {
        console.log("값:", data.data.content);
        setAskDataList(data.data.content);
        setTotalData(data.data.totalElements);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryValue, stateValue, page]);

  /* 페이지네이션 버튼 핸들러 */
  const handlePagination = (page) => {
    console.log("지금 페이지네이션 페이지 : ", page);
    setPage(page);
  };

  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    // setSelectedRow(row); // 클릭된 행의 정보를 상태로 업데이트
    console.log("선택된 행 상세 페이지로 이동:", row);
    navigate(`${row[0]}`);
  };

  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black">고객센터</Title>

      <h2 className="cm-SBold18 col-Navy" style={{ paddingBottom: "3rem" }}>
        1:1 문의 관리
      </h2>

      <Option>
        {/* 드롭박스 */}
        <DropboxStyle
          dropTitle={"문의 유형"}
          dropItems={["회원 정보", "상품", "배송", "교환/취소", "기타"]}
          methods={methods}
        />
        <DropboxStyle
          dropTitle={"처리 상태"}
          dropItems={["답변 대기", "답변 완료"]}
          methods={methods}
        />
      </Option>

      {/* 테이블 */}
      {askDataList && (
        <DataTable
          data={askDataList}
          columns={AskColumns(askDataList)}
          onRowClick={handleRowClick}
          checkBoxCheck={false}
          onChangePage={handlePagination}
          count={totalData}
        />
      )}
      {/* <button className="Btn_M_Navy">선택 삭제</button> */}
    </Wrap>
  );
};

export default DirectAskPage;

const Wrap = styled.div`
  padding: 0 7.5rem 0 7.5rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  padding: 2.125rem 0 1.13rem 0;
`;
const Option = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 3rem;
`;
