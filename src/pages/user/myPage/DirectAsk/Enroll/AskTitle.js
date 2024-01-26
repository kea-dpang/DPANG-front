import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const AskTitle = ({ control, detail }) => {
  return (
    <Wrap>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "61rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <Controller
          name="askTitle"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              id="Title"
              value={field.value}
              onChange={field.onChange}
              disabled={detail ? detail.askState === "답변 완료" : false}
              variant="outlined"
              // placeholder="제목을 입력해주세요"
              placeholder={"제목을 입력해주세요"}
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
      </Box>
    </Wrap>
  );
};

export default AskTitle;

const Wrap = styled.div`
  display: flex;
`;
