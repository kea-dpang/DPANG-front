import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "@components/ProductCard/Index";
import { GET_ItemFilterListUser } from "@api/Item";

const NewProductPage = () => {
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    GET_ItemFilterListUser()
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
      {itemList.length > 0 && (
        <Wrap>
          <Title className="cm-XLBold36"> 주목할 만한 신상 👀 </Title>
          <ItemWrap>
            {itemList.map((item) => (
              <Item key={item.itemId} value={item} />
            ))}
          </ItemWrap>
        </Wrap>
      )}
    </>
  );
};

export default NewProductPage;

const Wrap = styled.div`
  display: flex;
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
