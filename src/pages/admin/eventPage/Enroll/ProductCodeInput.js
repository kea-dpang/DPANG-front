// ProductCodeInput.js
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";

function ProductCodeInput({ onAddProduct }) {
  const [code, setCode] = useState("");
  const [isRight, setIsRight] = useState(false);
  const validation = () => {
    return isRight;
  };

  const handleCodeChange = (e) => {
    let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    const isRight = check.test(e.target.value);
    setIsRight(isRight);
    console.log("isRight: ", isRight);
    setCode(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && isRight) {
      e.preventDefault();
      onAddProduct(code);
      setCode("");
    }
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
          id="code"
          value={code}
          type="text"
          onChange={handleCodeChange}
          onKeyPress={onKeyPress}
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
          placeholder="대상 상품 코드를 입력해주세요"
          helperText={isRight ? "상품이 존재하지 않습니다." : ""}
        />
      </Box>
    </Wrap>
  );
}

export default ProductCodeInput;
const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
