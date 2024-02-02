import React from "react";
import Header from "@components/UserHeaderBar/Index";
import styled from "styled-components";
import CategoryResult from "./CategoryResult";
import { useParams } from "react-router-dom";
const CategorySet = () => {
  const { id } = useParams();
  return (
    <Wrap>
      <Header />
      {/* 검색 결과 아이템들 보여주기 */}
      <CategoryResult category={id} />
    </Wrap>
  );
};

export default CategorySet;
const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  min-width: 1550px;
`;
