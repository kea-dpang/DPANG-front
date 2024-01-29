import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const EventBrandName = ({ onChange: onParentChange }) => {
  const [isRight, setIsRight] = useState(false);
  const validation = () => {
    return isRight;
  };

  const onChange = (e) => {
    let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    const isRight = check.test(e.target.value);
    setIsRight(isRight);
    const changedValue = "9";
    onParentChange(e, changedValue);
  };

  return (
    <Wrap>
      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "61rem" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="brandname"
          type="text"
          onChange={onChange}
          error={validation()}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
              },
            },
            "& .MuiFormHelperText-root": {
              backgroundColor: "transparent", // helperText의 배경색을 투명하게 설정
            },
          }}
          placeholder="브랜드명을 입력해주세요"
          helperText={isRight ? "브랜드명이 존재하지 않습니다." : ""}
        />
      </Box>
    </Wrap>
  );
};

export default EventBrandName;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
