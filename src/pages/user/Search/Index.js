import React from "react";
import Header from "@components/UserHeaderBar/Index";
import styled from "styled-components";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // 검색어 저장
  const query = searchParams.get("query");

  return (
    <Wrap>
      <Header />
      {/* '~'에 대한 검색 결과 */}
      <Title className="cm-LBold30">
        <div className="col-Navy">'{query}'</div>
        <div className="cm-LRegular30"> &nbsp; 에 대한 검색 결과</div>
      </Title>
      {/* 검색 결과 아이템들 보여주기 */}
      <SearchResult keyword={query} />
    </Wrap>
  );
};

export default SearchPage;
const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25rem 15.9375rem;
`;
