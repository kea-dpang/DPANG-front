import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputEdit = ({ value, id, placeholder, onChange }) => {
  return (
    <Wrap>
      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "100%" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={value}
          id={id}
          onChange={onChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
              },
            },
          }}
          placeholder={placeholder}
        />
      </Box>
    </Wrap>
  );
};

export default InputEdit;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
