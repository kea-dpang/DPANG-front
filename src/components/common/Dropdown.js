import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// 드롭다운박스 props - data값, width
const Dropdown = (props) => {
  // 선택된 값
  const [selected, setSelected] = useState("");

  const handleValue = (e) => {
    setSelected(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <FormControl sx={{ width: props.width }}>
      <TextField
        select
        value={selected}
        onChange={handleValue}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          style: { visibility: "hidden" }, // 레이블을 숨깁니다.
        }}
        SelectProps={{
          displayEmpty: true,
          renderValue: (selectedValue) =>
            selectedValue ? selectedValue : props.value[0], // 드롭다운 메뉴에서 선택한 항목
        }}
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: selected ? "var(--navy)" : "",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--navy)",
            },
        }}
      >
        {/* props의 첫번째 값은 placeholder */}
        <MenuItem value="" disabled>
          {props.value[0]}
        </MenuItem>
        {props.value.slice(1).map((menuItem) => (
          <MenuItem value={menuItem} key={menuItem}>
            {menuItem}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default Dropdown;
