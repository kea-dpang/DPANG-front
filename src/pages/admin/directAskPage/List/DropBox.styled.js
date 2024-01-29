import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";

const DropboxStyle = ({ dropTitle, dropItems, methods }) => {
  return (
    <FormControl sx={{ width: "11.68rem" }}>
      <Controller
        name={dropTitle}
        control={methods.control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            select
            value={field.value}
            onChange={field.onChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
              style: { visibility: "hidden" }, // 레이블 숨기기
            }}
            SelectProps={{
              displayEmpty: true,
              renderValue: (selectedValue) =>
                selectedValue ? selectedValue : dropTitle, // 드롭다운 메뉴에서 선택한 항목
            }}
          >
            <MenuItem value="" disabled>
              {dropTitle}
            </MenuItem>
            {dropItems.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

export default DropboxStyle;
