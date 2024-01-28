import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const SortButton = ({ reviewData, setSortedReviews }) => {
  const [selectedSort, setSelectedSort] = useState("latest"); //기본 설정: 최신순

  const handleSort = (sortType) => {
    setSelectedSort(sortType);

    let sortedData;
    if (sortType === "latest") {
      sortedData = [...reviewData].sort(
        (a, b) => new Date(b.enrollDate) - new Date(a.enrollDate)
      );
    } else if (sortType === "rating") {
      sortedData = [...reviewData].sort((a, b) => b.star - a.star);
    }
    setSortedReviews(sortedData);
  };

  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <StyledBtn
        onClick={() => handleSort("latest")}
        selected={selectedSort === "latest"}
      >
        최신순
      </StyledBtn>
      <StyledBtn
        onClick={() => handleSort("rating")}
        selected={selectedSort === "rating"}
      >
        평점순
      </StyledBtn>
    </ButtonGroup>
  );
};

export default SortButton;

const StyledBtn = styled(Button)(({ selected }) => ({
  color: selected ? "var(--navy)" : "var(--dark-grey)",
  border: "none",
}));
