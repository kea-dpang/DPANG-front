import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterSideBar from "@userPages/Search/FilterSideBar";
import Item from "@components/ProductCard/Index";
import { GET_ItemFilterListUser } from "@api/Item";
import { categoryFormat } from "assets/CustomName";
import { ReactComponent as Search } from "@images/noSearch.svg";

const CategoryResult = (props) => {
  console.log("query: ", props);
  const [filterData, setFilterData] = useState({
    category: props.category,
    subCategory: null,
    minPrice: null,
    maxPrice: null,
    sellerId: null,
  }); // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  const getItemList = () => {
    GET_ItemFilterListUser(
      filterData.category,
      null,
      filterData.minPrice,
      filterData.maxPrice,
      null,
      null,
      0,
      10
    )
      .then((data) => {
        setItemList(data.data.content);
      })
      .catch((error) => {
        console.log(error);
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
    if (newCate !== null) {
      setFilterData((prevState) => ({
        ...prevState,
        category: categoryFormat(newCate, true),
      }));
    }
  };

  useEffect(() => {
    getItemList();
  }, [filterData]);

  useEffect(() => {
    setFilterData((prevState) => ({
      ...prevState,
      category: props.category,
    }));
  }, [props.category]);

  return (
    <Wrap>
      {itemList && (
        <>
          <Title className="cm-LBold30">
            <div className="col-Navy">
              {categoryFormat(props.category, false)}
            </div>
          </Title>
          <Content>
            <FilterSideBar
              onPriceChange={handlePriceChange}
              onCategoryChange={handleCategoryChange}
            />
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
                    해당 카테고리의 상품이 없습니다.
                    <div className="cm-SRegular16">
                      더욱 많은 상품들을 가져올게요!
                    </div>
                    <div className="cm-SRegular16">조금만 기다려주세요~</div>
                  </NoContent>
                </>
              )}
            </Right>
          </Content>
        </>
      )}
    </Wrap>
  );
};

export default CategoryResult;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  line-height: 2;
`;
