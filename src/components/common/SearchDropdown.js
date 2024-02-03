import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
    <Autocomplete
      disablePortal
      id={props.id}
      options={props.options}
      getOptionLabel={(option) => option.name}
      sx={{ width: props.width }}
      renderInput={(params) => <TextField {...params} label="브랜드" />}
      onChange={handleValue}
    />
  );
}
