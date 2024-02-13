import { React, useEffect, useState } from "react";
import styled from "styled-components";
import RecentWatchedItem from "./RecentWatchedItem";
import { Link } from "react-router-dom";

const RecentWatched = () => {
  const [watchedItems, setWatchedItems] = useState([]);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");
    setWatchedItems(watched.slice(0, 6));
  }, []);

  return (
    <Wrap>
      <PageName className="cm-MBold24 col-Black"> 최근 본 상품 </PageName>
      <Section>
        {watchedItems.length > 0 ? (
          <>
            {/* 최근 본 상품 카드 나열 */}
            <Itemwrap>
              {watchedItems.map((item, index) => (
                <RecentWatchedItem key={index} item={item} />
              ))}
            </Itemwrap>
            <Nav className="col-DarkGrey" to={`/user/recent`}>
              더보기{" >"}
            </Nav>
          </>
        ) : (
          <NoContent>
            <p className="cm-MRegular20 col-DarkGrey">
              최근 조회한 상품이 없습니다.
            </p>
          </NoContent>
        )}
      </Section>
    </Wrap>
  );
};

export default RecentWatched;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 8rem;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Itemwrap = styled.div`
  display: flex;
  width: 80rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 8rem;
  flex-direction: row; // 가로로 배치
  flex-wrap: wrap; // 너비 초과 시 아래로 내려감
  justify-content: start;
  align-items: center;
`;
const Nav = styled(Link)`
  cursor: pointer;
`;
const NoContent = styled.div`
  width: 66rem;
  padding: 5rem 15rem;
  box-sizing: border-box;
  margin-left: 11rem;
  background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
