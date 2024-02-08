import React from "react";
import Header from "@components/UserHeaderBar/Index";
import styled from "styled-components";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";
import Footer from "@components/UserFooter/Index";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // 검색어 저장
  const query = searchParams.get("query");

  return (
    <Wrap>
      <Header />
      {/* 검색 결과 아이템들 보여주기 */}
      <SearchResult keyword={query} />
      <Footer />
    </Wrap>
  );
};

export default SearchPage;
const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  min-width: 1550px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25rem 15.9375rem;
`;
