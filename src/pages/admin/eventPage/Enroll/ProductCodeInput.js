// ProductCodeInput.js
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";

function ProductCodeInput({ onAddProduct }) {
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
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
          onChange={handleCodeChange}
          onKeyPress={onKeyPress}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "var(--navy)",
              },
            },
          }}
          placeholder="대상 상품 코드를 입력해주세요"
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
