import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "@components/ProductCard/Index";
import { GET_HotItemList } from "@api/Item";
import { useLocation } from "react-router-dom";

const BestProductPage = () => {
  let location = useLocation();
  console.log("location:", location);
  const title = location.state ? location.state.title : "베스트 상품";
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  const GetHotItemList = () => {
    GET_HotItemList()
      .then((data) => {
        console.log("넘겨받은 핫 아이템 리스트 데이터 : ", data.data);
        setItemList(data.data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        // console.error("아이템 리스트 가져오기 실패", error);
      });
  };
  useEffect(() => {
    GetHotItemList();
  }, []);

  return (
    <>
      {itemList.length > 0 && (
        <Wrap>
          <Title className="cm-XLBold36"> {title} </Title>
          <ItemWrap>
            {itemList.map((item) => (
              <Item key={item.id} value={item} />
            ))}
          </ItemWrap>
        </Wrap>
      )}
    </>
  );
};

export default BestProductPage;

const Wrap = styled.div`
  display: flex;
  // padding: 1.9375rem 15.9375rem;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  padding: 5rem 0rem;
`;
const ItemWrap = styled.div`
  width: 70rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 3.0625rem;
`;
