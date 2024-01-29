import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import dayjs from "dayjs";
import EventTitle from "./EventTitle";
import EventDiscount from "./EventDiscount";
import EventDate from "./EventDate";
import ProductCodeInput from "./ProductCodeInput";
import ProductList from "./ProductList";
import EventImage from "./EventImage";

const Index = () => {
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [eventname, setEventName] = useState("");
  const [productList, setProductList] = useState([]);
  const [salepercent, setPercent] = useState("");
  const [eventimage, setEventImage] = useState(null);
  const [eventstart, setEventStart] = useState(dayjs());
  const [eventend, setEventEnd] = useState(dayjs()); // 기본값은 오늘날짜
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      eventname !== "" &&
      salepercent !== "" &&
      eventimage &&
      eventstart &&
      eventend &&
      productList.length > 0
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [eventname, salepercent, eventimage, eventstart, eventend, productList]);

  // 이벤트 이름 변경 감지
  const handleNameChange = (e) => {
    setEventName(e.target.value);
  };
  // 이벤트 시작일 변경 감지
  const handleStartChange = (date, details) => {
    setEventStart(date);
  };
  // 이벤트 종료일 변경 감지
  const handleEndChange = (date, details) => {
    setEventEnd(date);
  };
  // 상품 추가, 삭제
  const handleAddProduct = (product) => {
    setProductList([...productList, product]);
  };
  const handleProductDelete = (productToDelete) => {
    setProductList(
      productList.filter((product) => product !== productToDelete)
    );
  };
  // 이벤트 할인율 변경 감지
  const handlePercentChange = (e) => {
    setPercent(e.target.value);
  };
  // 이벤트 이미지 관리
  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleImageDelete = () => {
    setEventImage(null);
  };
  const handleSubmit = () => {
    alert("상품 등록 성공");
  };

  return (
    <>
      <Wrap>
        <Table>
          {/* 이벤트 이름 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 이름</p>
            <EventTitle onChange={handleNameChange} />
          </Row>
          {/* 이벤트 시작일 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 시작일</p>
            <EventDate
              label="이벤트 시작일"
              date={eventstart}
              onChange={handleStartChange}
            />
          </Row>
          {/* 이벤트 종료일 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 종료일</p>
            <EventDate
              label="이벤트 종료일"
              date={eventend}
              onChange={handleEndChange}
            />
          </Row>
          {/* 대상 상품 코드 */}
          <Row>
            <p className="cm-SBold16 col-Black">대상 상품 코드</p>
            <ProductCodeInput onAddProduct={handleAddProduct} />
          </Row>
          {/* 이벤트 적용 상품 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 적용 상품</p>
            <ProductList
              productList={productList}
              onProductDelete={handleProductDelete}
            />
          </Row>
          {/* 이벤트 할인율 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 할인율</p>
            <EventDiscount onChange={handlePercentChange} />
          </Row>
          {/* 이벤트 내용(사진) */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 내용</p>
            <EventImage
              eventImage={eventimage}
              handleImageDelete={handleImageDelete}
              handleImageChange={handleImageChange}
            />
          </Row>
        </Table>

        {/* 등록버튼 */}
        <Submit>
          <button
            onClick={handleSubmit}
            type="submit"
            className="Btn_S_Navy"
            disabled={!isFormValid}
            style={
              !isFormValid
                ? {
                    backgroundColor: "var(--semi-light-grey)",
                    cursor: "not-allowed",
                  }
                : {}
            }
          >
            이벤트 등록
          </button>
        </Submit>
      </Wrap>
    </>
  );
};

export default Index;
const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 1rem 7.5rem;
`;
const Row = styled.div`
  border-top: 1px solid var(--black);
  &:last-child {
    border-bottom: 1px solid var(--black);
  }
  display: flex;
  p {
    background: var(--light-grey, #f4f4f4);
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
