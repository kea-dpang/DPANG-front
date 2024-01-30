import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DataTable from "../../../../components/common/AdminDataTable";
import { faqManageData } from "../../../../assets/data/admin/AdminFaqData";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import DropboxStyle from "@adminPages/directAskPage/List/DropBox.styled";
import { useForm } from "react-hook-form";
import { GET_FAQList } from "@api/faq";

const columns = [
  { name: "postId", label: "번호", options: { sort: true } },
  { name: "category", label: "카테고리", options: { sort: true } },
  { name: "question", label: "제목", options: { sort: true } },
  { name: "authorId", label: "작성자", options: { sort: true } },
];

const FaqListPage = () => {
  ////////////////////////////////
  const methods = useForm();
  const { watch } = methods;

  const categoryValue = watch("문의 유형");
  ////////////////////////////////

  const navigate = useNavigate();
  const [faqDataList, setFaqDataList] = useState();

  /* 서버에서 1:1문의 리스트 가져오기 */
  useEffect(() => {
    GET_FAQList(categoryValue)
      .then((data) => {
        setFaqDataList(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryValue]);

  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    console.log("선택된 행 상세 페이지로 이동:", row);
    navigate(`${row[0]}`);
  };

  /* 표에서 삭제된 id 값 */
  const handleRowDelete = (rowDelted) => {
    const faqIdArrDeleted = rowDelted.data.map((item) => item.dataIndex);
    console.log("delete 값", faqIdArrDeleted);
  };
  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black"> 고객센터</Title>
      <h2 className="cm-SBold18 col-Navy" style={{ paddingBottom: "3rem" }}>
        FAQ 관리
      </h2>
      <Option>
        {/* 드롭박스 */}
        <DropboxStyle
          dropTitle={"문의 유형"}
          dropItems={[
            "전체",
            "자주 찾는 FAQ",
            "배송",
            "취소/교환/환불",
            "기타",
            "결제",
            "회원",
          ]}
          methods={methods}
        />

        <Link className="Btn_M_Navy" to="enroll">
          추가하기
        </Link>
      </Option>
      {faqDataList && (
        <DataTable
          data={faqDataList}
          columns={columns}
          onRowClick={handleRowClick}
          index={"category"}
          filterValue={categoryValue}
          placeholder={""}
          onRowsDelete={handleRowDelete}
        />
      )}
    </Wrap>
  );
};

export default FaqListPage;

const Wrap = styled.div`
  padding: 0 7.5rem 0 7.5rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  padding: 2.125rem 0rem 0.9375rem 0;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
`;
