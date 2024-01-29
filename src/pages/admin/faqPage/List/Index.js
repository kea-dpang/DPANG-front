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
  { name: "id", label: "번호", options: { sort: true } },
  { name: "category", label: "카테고리", options: { sort: true } },
  { name: "title", label: "제목", options: { sort: true } },
  { name: "writer", label: "작성자", options: { sort: true } },
];

const FaqListPage = () => {
  ////////////////////////////////
  const methods = useForm();
  const { watch } = methods;

  const categoryValue = watch("문의 유형");

  useEffect(() => {
    console.log("문의 유형:", categoryValue);
  }, [categoryValue]);
  ////////////////////////////////

  const navigate = useNavigate();
  const [faqDataList, setFaqDataList] = useState();

  /* 서버에서 1:1문의 리스트 가져오기 */
  useEffect(() => {
    GET_FAQList(categoryValue)
      .then((data) => {
        console.log("값:", data.data.content);
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

      <DataTable
        data={faqManageData}
        columns={columns}
        onRowClick={handleRowClick}
      />
      <button className="Btn_M_Navy">선택 삭제</button>
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
const StyledButton = withStyles({
  // Material UI의 Button 컴포넌트를 스타일링
  root: {
    backgroundColor: "var(--navy)",
    color: "var(--white)",
    border: "none",
    "&:hover": {
      backgroundColor: "var(--navy)",
      border: "none",
    },
  },
})(Button);
const StyledButton2 = withStyles({
  // Material UI의 Button 컴포넌트를 스타일링
  root: {
    backgroundColor: "var(--white)",
    border: "1px solid var(--navy)",
    color: "var(--black)",
    "&:hover": {
      backgroundColor: "var(--white)",
      border: "1px solid var(--navy)",
    },
  },
})(Button);
