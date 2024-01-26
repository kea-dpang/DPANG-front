import styled from "styled-components";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import EventDataList from "../../../assets/data/user/ProductEventDetailData";
import EventList from "./EventList";

// 사용자 - 상품 이벤트 리스트 확인 페이지
const ProductEventList = () => {
  const navi = useNavigate();

  const handleNavClick = () => {
    navi("/user/event/brand");
  };

  return (
    <>
      <Wrap>
        {/* 상품 이벤트 & 브랜드 이벤트 선택 버튼 */}
        <ProductBrandTab className="cm-SRegular18 col-White">
          <Nav color="var(--navy)"> 상품 이벤트</Nav>
          <Nav color="var(--semi-light-grey)" onClick={() => handleNavClick()}>
            {" "}
            브랜드 이벤트
          </Nav>
        </ProductBrandTab>

        {/* 이벤트 리스트 나열하는 부분 */}
        <ListSection>
          {EventDataList.filter((item) => item.kind === "상품").map(
            (filteredItem, index) => (
              <EventList key={index} data={filteredItem} />
            )
          )}
        </ListSection>
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
const ListSection = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0rem 15.9375rem;
  flex-direction: row; // 가로로 배치
  flex-wrap: wrap; // 너비 초과 시 아래로 내려감    align-items: center;
  justify-content: center;
  gap: 1.19rem;
  align-items: center;
`;
