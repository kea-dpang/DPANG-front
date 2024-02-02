import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "@components/ProductCard/Index";
import { GET_ItemListUser } from "@api/Item";
import { useLocation } from "react-router-dom";

const EventProductPage = (props) => {
  const [itemList, setItemList] = useState([]);
  let location = useLocation();
  console.log("location:", location);
  const title = location.state ? location.state.title : "브랜드 특가";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    <>
      <Wrap>
        <Title className="cm-XLBold36">{title}</Title>
        <ItemWrap>
          {itemList.map((item) => (
            <Item key={item.itemId} value={item} />
          ))}
        </ItemWrap>
      </Wrap>
    </>
  );
};

export default EventProductPage;

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
