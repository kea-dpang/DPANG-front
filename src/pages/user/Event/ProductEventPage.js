import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventList from "./EventList";
import { GET_ProductEventListUser } from "@api/event";

// 사용자 - 상품 이벤트 리스트 확인 페이지
const ProductEventList = () => {
  const navi = useNavigate();
  const handleNavClick = () => {
    navi("/user/event/brand");
  };
  const [eventDataList, setEventDataList] = useState([]);
  useEffect(() => {
    GET_ProductEventListUser()
      .then((data) => {
        console.log("사용자 상품 이벤트 리스트 조회 : ", data.content);
        const list = data.content;
        const ProceedingList = list.filter(
          (item) => item.eventStatus === "PROCEEDING"
        );
        const EndList = list.filter((item) => item.eventStatus === "END");
        const WaitingList = list.filter(
          (item) => item.eventStatus === "WAITING"
        );

        setEventDataList({ ProceedingList, EndList, WaitingList });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrap>
        {/* 상품 이벤트 & 브랜드 이벤트 선택 버튼 */}
        <ProductBrandTab className="cm-SRegular18 col-White">
          <Nav color="var(--navy)"> 상품 이벤트</Nav>
          <Nav color="var(--semi-light-grey)" onClick={() => handleNavClick()}>
            브랜드 이벤트
          </Nav>
        </ProductBrandTab>
        {/* 진행중인 이벤트 */}
        <StatusTitle className="cm-SBold18 col-Navy"> 진행 중 </StatusTitle>
        {eventDataList.ProceedingList &&
        eventDataList.ProceedingList.length > 0 ? (
          <>
            <ListSection>
              {eventDataList.ProceedingList.map((item) => (
                <EventList key={item.id} data={item} />
              ))}
            </ListSection>
          </>
        ) : (
          <PlaceholderWrap className="cm-SRegular18 col-DarkGrey">
            아직 진행 중인 이벤트가 없어요. 새로운 이벤트를 준비 중이니
            기대해주세요!
          </PlaceholderWrap>
        )}
        {/* 대기중인 이벤트 */}
        <StatusTitle className="cm-SBold18 col-Orange">진행 예정</StatusTitle>
        {eventDataList.WaitingList && eventDataList.WaitingList.length > 0 ? (
          <>
            <ListSection>
              {eventDataList.WaitingList.map((item) => (
                <EventList key={item.id} data={item} />
              ))}
            </ListSection>
          </>
        ) : (
          <PlaceholderWrap className="cm-SRegular18 col-DarkGrey">
            아직 진행 예정인 이벤트가 없어요. 더 흥미로운 이벤트로 곧
            찾아뵐게요!
          </PlaceholderWrap>
        )}
        {/* 종료된 이벤트 */}
        <StatusTitle className="cm-SBold18 col-DarkGrey">종료</StatusTitle>
        {eventDataList.EndList && eventDataList.EndList.length > 0 ? (
          <>
            <ListSection>
              {eventDataList.EndList.map((item) => (
                <EventList key={item.id} data={item} />
              ))}
            </ListSection>
          </>
        ) : (
          <PlaceholderWrap className="cm-SRegular18 col-DarkGrey">
            종료된 이벤트가 없어요!
          </PlaceholderWrap>
        )}
      </Wrap>
    </>
  );
};

export default ProductEventList;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProductBrandTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2.75rem 15.9375rem;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  padding: 1.5rem 13.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;

  // 상품 이벤트 or 브랜드 이벤트 선택
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const StatusTitle = styled.div`
  padding: 0rem 18rem;
`;
const PlaceholderWrap = styled.div`
  padding: 2rem 20rem;
  box-sizing: border-box;
  margin: 1rem 0rem;
  // background-color: var(--light-grey);
`;
const ListSection = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0rem 15.9375rem;
  flex-direction: row; // 가로로 배치
  flex-wrap: wrap; // 너비 초과 시 아래로 내려감    align-items: center;
  justify-content: start;
  gap: 1.19rem;
  align-items: center;
`;
