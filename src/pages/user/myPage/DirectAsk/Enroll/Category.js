import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

// 부모 컴포넌트에서 control 객체를 props로 전달받음
const Category = ({ control, detail }) => {
  return (
    <Wrap>
      <FormControl sx={{ m: 1, width: "61rem" }}>
        <Controller
          name="category"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              select
              value={field.value}
              onChange={field.onChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
                style: { visibility: "hidden" }, // 레이블을 숨깁니다.
              }}
              SelectProps={{
                disabled: detail && detail.status == "답변 완료", // 드롭박스 비활성화
                displayEmpty: true,
                renderValue: (selectedValue) =>
                  selectedValue ? selectedValue : "문의 유형을 선택해주세요", // 드롭다운 메뉴에서 선택한 항목
              }}
              sx={{ width: "33.3125rem" }}
            >
              <MenuItem value="" disabled>
                문의 유형을 선택해주세요
              </MenuItem>
              <MenuItem value="상품 문의">상품 문의</MenuItem>
              <MenuItem value="회원 정보 문의">회원 정보 문의</MenuItem>
              <MenuItem value="배송 문의">배송 문의</MenuItem>
              <MenuItem value="교환/취소 문의">교환/취소 문의</MenuItem>
              <MenuItem value="기타 문의">기타 문의</MenuItem>
            </TextField>
          )}
        />
      </FormControl>
    </Wrap>
  );
};

export default Category;

const Wrap = styled.div`
  display: flex;
  /* padding-top: 1rem; */
`;
