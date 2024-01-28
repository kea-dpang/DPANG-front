import React from "react";
import styled from "styled-components";
import FilterSideBar from "./FilterSideBar";
import ItemData from "@data/user/ItemData";
import Item from "@components/ProductCard/Index";

const SearchResult = (props) => {
  const total = 19; //TODO: 검색결과 api에서 가져오기

  return (
    <Wrap>
      <FilterSideBar />
      <Right>
        {/* 검색 결과 개수 + 추천순, 최신순 등 정렬 */}
        <Section className="cm-XsRegular14">
          <div> 총 {total} 건</div>
          <OrderWrap>
            <div> 추천순 </div>
            <div> 판매순 </div>
          </OrderWrap>
        </Section>
        <ListSection>
          {ItemData.map((item) => (
            <Item key={item.id} value={item} />
          ))}
        </ListSection>
      </Right>
    </Wrap>
  );
};

export default SearchResult;
const Wrap = styled.div`
  // align-items: center;
  // display: flex;
  // flex-direction: row;
  display: inline-flex;
  align-items: flex-start;
  gap: 0.25rem;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
`;
const Section = styled.div`
  display: flex;
  // padding: 3.25rem 21.1875rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 35.75rem;
`;
const OrderWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;
const ListSection = styled.div`
  display: flex;
  width: 46.4375rem;
  flex-direction: row; // 가로로 배치
  flex-wrap: wrap; // 너비 초과 시 아래로 내려감    align-items: center;
  justify-content: center;
  align-items: center;
`;
