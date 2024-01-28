// ProductList.js
import React from "react";
import { Box, Chip, Stack } from "@mui/material";
import styled from "styled-components";

function ProductList({ productList, onProductDelete }) {
  return (
    <Wrap>
      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "61rem" },
          display: "flex",
          flexDirection: "column",
          height: "3rem",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={1}>
          {productList.map((product, index) => (
            <Chip
              key={index}
              label={product}
              onDelete={() => onProductDelete(product)}
            />
          ))}
        </Stack>
      </Box>
    </Wrap>
  );
}

export default ProductList;
const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
