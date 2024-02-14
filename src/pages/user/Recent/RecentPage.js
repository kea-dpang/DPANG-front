import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "@components/ProductCard/Index";

const RecentPage = () => {
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");
    setItemList(watched);
  }, []);
  useEffect(() => {
    console.log(itemList);
  }, [itemList]);

  return (
    <>
      <Wrap>
        <Title className="cm-XLBold36"> 최근 본 상품 </Title>
        {itemList.length > 0 ? (
          <ItemWrap>
            {itemList.map((item) => (
              <Item key={item.id} value={item} />
            ))}
          </ItemWrap>
        ) : (
          <NoContent>
            <p className="cm-MRegular20 col-DarkGrey">
              최근 조회한 상품이 없습니다.
            </p>
          </NoContent>
        )}
      </Wrap>
    </>
  );
};

export default RecentPage;

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
const NoContent = styled.div`
  background: var(--light-grey);
  width: 66rem;
  padding: 15rem 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
