import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const EventDate = ({ label, date, onChange }) => {
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label={label} value={date} onChange={onChange} />{" "}
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Wrap>
  );
};

export default EventDate;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
