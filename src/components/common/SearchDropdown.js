import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

export default function SearchDropdown(props) {
  const [selected, setSelected] = useState("");

  const handleValue = (event, newValue) => {
    console.log("selected: ", newValue);
    if (newValue) {
      setSelected(newValue.id);
      props.onChange(newValue.id);
    } else {
      setSelected("");
      props.onChange("");
    }
  };
  return (
    <div style={{ width: "100%", margin: "1rem" }}>
      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "100%" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <Autocomplete
          disablePortal
          id={props.id}
          options={props.options}
          getOptionLabel={(option) => option.name}
          sx={{ width: props.width }}
          renderInput={(params) => <TextField {...params} label="브랜드" />}
          onChange={handleValue}
        />
      </Box>
    </div>
  );
}
