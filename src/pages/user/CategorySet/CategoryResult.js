import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterSideBar from "@userPages/Search/FilterSideBar";
import Item from "@components/ProductCard/Index";
import { GET_ItemListUser } from "@api/Item";
import { categoryFormat } from "assets/CustomName";

const CategoryResult = (props) => {
  console.log("query: ", props);
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    GET_ItemListUser()
      .then((data) => {
        setItemList(data.data); // API 응답으로 받은 데이터를 상태에 저장
        console.log("넘겨받은 아이템 리스트 데이터 : ", data);
      })
      .catch((error) => {
        console.error("아이템 리스트 가져오기 실패", error);
      });
  }, []);

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
            <FilterSideBar />
            <Right>
              {/* 검색 결과 개수 + 추천순, 최신순 등 정렬 */}
              <Section className="cm-XsRegular14">
                <div> 총 {itemList.length} 건</div>
                <OrderWrap>
                  <div> 추천순 </div>
                  <div> 판매순 </div>
                </OrderWrap>
              </Section>
              <ListSection>
                {itemList.map((item) => (
                  <Item key={item.itemId} value={item} />
                ))}
              </ListSection>
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
