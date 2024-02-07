import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterSideBar from "./FilterSideBar";
import Item from "@components/ProductCard/Index";
import { GET_ItemFilterListUser } from "@api/Item";

const SearchResult = (props) => {
  console.log("query: ", props);
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  const [filterData, setFilterData] = useState({
    category: null,
    subCategory: null,
    minPrice: null,
    maxPrice: null,
    sellerId: null,
    keyword: props.keyword,
  });

  const getItemList = () => {
    GET_ItemFilterListUser(
      filterData.category,
      filterData.subCategory,
      filterData.minPrice,
      filterData.maxPrice,
      null,
      filterData.keyword,
      0,
      20
    )
      .then((data) => {
        console.log("넘겨받은 아이템 리스트 데이터 : ", data.data.content);
        setItemList(data.data.content); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("아이템 리스트 가져오기 실패", error);
      });
  };
  const handlePriceChange = (newPrice) => {
    setFilterData((prevState) => ({
      ...prevState,
      minPrice: newPrice[0],
      maxPrice: newPrice[1],
    }));
  };
  const handleCategoryChange = (newCate) => {
    setFilterData((prevState) => ({
      ...prevState,
      category: newCate,
    }));
  };

  useEffect(() => {
    getItemList();
  }, []);
  useEffect(() => {
    getItemList();
  }, [filterData.minPrice, filterData.maxPrice]);

  return (
    <Wrap>
      {itemList.length > 0 && (
        <>
          <Title className="cm-LBold30">
            <div className="col-Navy">'{props.keyword}'</div>
            <div className="cm-LRegular30"> &nbsp; 에 대한 검색 결과</div>
          </Title>
          <Content>
            <FilterSideBar
              onPriceChange={handlePriceChange}
              onCategoryChange={handleCategoryChange}
            />
            {/* <FilterSideBar value={"search"} /> */}
            <Right>
              {/* 검색 결과 개수 + 추천순, 최신순 등 정렬 */}
              <Section className="cm-XsRegular14">
                <div> 총 {itemList.length} 건</div>
                <OrderWrap>
                  <div> </div>
                  <div> </div>
                </OrderWrap>
              </Section>
              <ListSection>
                {itemList.map((item) => (
                  <Item key={item.id} value={item} />
                ))}
              </ListSection>
            </Right>
          </Content>
        </>
      )}
    </Wrap>
  );
};

export default SearchResult;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25rem 15.9375rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
`;
const Section = styled.div`
  display: flex;
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
  width: 46rem;
  flex-direction: row; // 가로로 배치
  flex-wrap: wrap; // 너비 초과 시 아래로 내려감    align-items: center;
  justify-content: start;
  align-items: center;
`;
