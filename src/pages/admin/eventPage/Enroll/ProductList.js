// ProductList.js
import React from "react";
import { Box, Chip, Stack } from "@mui/material";
import styled from "styled-components";

function ProductList({ productList, onProductDelete, status }) {
  console.log("productList: ", productList);
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
        {status === "post" ? (
          <Stack direction="row" spacing={1}>
            {productList.map((product, index) => (
              <Chip
                key={index}
                label={product} // 혹은 itemId
                onDelete={() => onProductDelete(product)}
              />
            ))}
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            {productList.map((product, index) => (
              <Chip
                key={index}
                label={product.itemId} // 혹은 itemId
                onDelete={() => onProductDelete(product.itemId)}
              />
            ))}
          </Stack>
        )}
      </Box>
    </Wrap>
  );
}

export default ProductList;
const Wrap = styled.div`
  width: 100%;
  margin: 1rem;
`;
