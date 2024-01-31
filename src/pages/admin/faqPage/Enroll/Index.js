import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { POST_Faq } from "@api/faq";

const EnrollPage = () => {
  //////////////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      category: "",
      question: "",
      answer: "",
    },
  });

  const watchAllFields = watch();

  const onSubmit = (data) => {
    POST_Faq(data)
      .then((data) => {
        alert("FAQ가 성공적으로 등록되었습니다.");
      })
      .catch((error) => {
        alert("FAQ 등록에 실패하였습니다. 다시 시도해 주세요.");
      });
    // alert(JSON.stringify(data));
  };
  //////////////////////////////////

  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black"> 고객센터</Title>
      <Title className="cm-SBold18 col-Navy"> FAQ관리</Title>
      <Main>
        <Option>
          <FormControl
            sx={{
              width: "11.68rem",
            }}
          >
            <TextField
              {...register("category")}
              value={watchAllFields.category} // category 필드 값 undefined(값 정의X)일 시 warning 제거 위해
              select
              variant="outlined"
              InputLabelProps={{
                shrink: true,
                style: { visibility: "hidden" }, // 레이블을 숨깁니다.
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (selectedValue) =>
                  selectedValue ? selectedValue : "카테고리", // 드롭다운 메뉴에서 선택한 항목
              }}
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "0.5rem", // 여기에 padding을 0으로 설정하세요.
                },
              }}
            >
              <MenuItem value="" disabled>
                문의 유형을 선택해주세요
              </MenuItem>
              <MenuItem value="자주 찾는 FAQ">자주 찾는 FAQ</MenuItem>
              <MenuItem value="배송">배송</MenuItem>
              <MenuItem value="취소/교환/환불">취소/교환/환불</MenuItem>
              <MenuItem value="결제">결제</MenuItem>
              <MenuItem value="회원">회원</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </TextField>
          </FormControl>
        </Option>
        <Option>
          <p>admin1</p>
        </Option>
        <Item>
          <p className="cm-XLBold36 col-Navy">Q.</p>
          <textarea
            {...register("question")}
            cols="50"
            rows="10"
            className="cm-SRegular16"
            placeholder="수령한 상품을 반품하고 싶어요."
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
        <Item>
          <p className="cm-XLBold36 col-Navy">A.</p>
          <textarea
            {...register("answer")}
            cols="50"
            rows="10"
            className="cm-SRegular16"
            placeholder={
              "수령한 상품을 반품하고 싶어요.\n\n 반품 접수 방법 \n -마이페이지 > 주문배송 > 상품선택 > 반품요청 \n -구매자의 사유로 반품 시 반품 배송비는 구매자 부담입니다. \n -판매자별 반품 배송비 지불 방법에 맞게 배송비가 지불되지 않은 경우 반품/승인이 보류되어 지연될 수 있습니다."
            }
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
      </Main>
      <Button>
        <button
          className="Btn_S_Navy"
          onClick={handleSubmit(onSubmit)}
          disabled={
            // 버튼 비활성화
            !watchAllFields.category ||
            !watchAllFields.question ||
            !watchAllFields.answer
          }
          style={
            // 버튼 비활성화 스타일
            !watchAllFields.category ||
            !watchAllFields.question ||
            !watchAllFields.answer
              ? {
                  backgroundColor: "var(--semi-light-grey)",
                  cursor: "not-allowed",
                }
              : {}
          }
        >
          등록
        </button>
      </Button>
    </Wrap>
  );
};

export default EnrollPage;

const Wrap = styled.div`
  padding: 0 7.5rem 0 7.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: end; */
`;
const Title = styled.div`
  display: flex;
  padding: 2.125rem 0rem 0.9375rem 0;
`;
const Main = styled.div`
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
`;
const Option = styled.div`
  border-top: 1px solid black;
  padding: 0.38rem;
`;
const Item = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 1.12rem;
  textarea {
    width: 62rem;
  }
  textarea::placeholder {
    white-space: pre-line;
  }
`;
const Button = styled.div`
  padding-top: 2rem;
  display: flex;
  /* align-content: flex-end; */
  justify-content: flex-end;
`;
