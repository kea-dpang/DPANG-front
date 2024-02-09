import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/system";
import { styled as styledComp } from "styled-components";
import Button from "@mui/material/Button";
import { customDate } from "assets/CustomName";

const SortButton = ({ reviewData, setSortedReviews }) => {
  const [selectedSort, setSelectedSort] = useState("latest"); //기본 설정: 최신순

  const handleSort = (sortType) => {
    setSelectedSort(sortType);

    let sortedData;
    if (sortType === "latest") {
      console.log("최신순 정렬 ");
      sortedData = [...reviewData].sort(
        (a, b) =>
          new Date(customDate(b.createdTime)) -
          new Date(customDate(a.createdTime))
      );
    } else if (sortType === "rating") {
      sortedData = [...reviewData].sort((a, b) => b.rating - a.rating);
    }
    setSortedReviews(sortedData);
  };

  return (
    // <ButtonGroupWrapper>
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
    // </ButtonGroupWrapper>
  );
};

export default SortButton;

// const ButtonGroupWrapper = styledComp("div")`
//   position: relative;
//   z-index: -1;
// `;
// const StyledBtnGroup = styled(ButtonGroup)`
//   position: relative;
//   z-index: -1;
// `;
const StyledBtn = styled(Button)(({ selected }) => ({
  color: selected ? "var(--navy)" : "var(--dark-grey)",
  border: "none",
}));
