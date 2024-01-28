import React from "react";
import styled from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddPhoto = ({ onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    onChange(file);
  };
  return (
    <Wrap>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload Image
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
    </Wrap>
  );
};

export default AddPhoto;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
const VisuallyHiddenInput = muistyled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
