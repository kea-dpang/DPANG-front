import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const EventDiscount = ({ onChange }) => {
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
          id="salepercent"
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
          placeholder="이벤트 할인율을 입력해주세요."
        />
      </Box>
    </Wrap>
  );
};

export default EventDiscount;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
