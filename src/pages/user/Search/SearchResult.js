import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterSideBar from "./FilterSideBar";
import Item from "@components/ProductCard/Index";
import { GET_ItemFilterListUser } from "@api/Item";
import { categoryFormat } from "assets/CustomName";
import { ReactComponent as Search } from "@images/noSearch.svg";

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
      category: categoryFormat(newCate, true),
    }));
  };

  useEffect(() => {
    getItemList();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getItemList();
  }, [filterData.minPrice, filterData.maxPrice, filterData.category]);

  return (
    <Wrap>
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
          {itemList.length !== 0 ? (
            <ListSection>
              {itemList.map((item) => (
                <Item key={item.id} value={item} />
              ))}
            </ListSection>
          ) : (
            <>
              <NoContent className="cm-MRegular20">
                <Search
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
                검색 결과가 없습니다
                <div className="cm-SRegular16">
                  입력하신 검색어가 정확한지 확인해 주세요
                </div>
                <div className="cm-SRegular16">
                  비슷한 다른 검색어를 입력해 보세요
                </div>
              </NoContent>
            </>
          )}
        </Right>
      </Content>
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
const NoContent = styled.div`
  width: 46rem;
  padding: 10rem 10rem;
  box-sizing: border-box;
  // background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  line-height: 2;
`;
