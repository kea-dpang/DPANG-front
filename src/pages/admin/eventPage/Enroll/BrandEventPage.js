import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import dayjs from "dayjs";
import EventTitle from "./EventTitle";
import EventDiscount from "./EventDiscount";
import EventDate from "./EventDate";
import EventImage from "./EventImage";
import EventBrandName from "./EventBrandName";

const Index = () => {
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단

  const [eventname, setEventName] = useState("");
  const [brandname, setBrandname] = useState("");
  const [salepercent, setPercent] = useState("");
  const [eventimage, setEventImage] = useState(null);
  const [eventstart, setEventStart] = useState(dayjs());
  const [eventend, setEventEnd] = useState(dayjs());
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      eventname !== "" &&
      salepercent !== "" &&
      eventimage &&
      eventstart &&
      eventend &&
      brandname !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [eventname, salepercent, eventimage, eventstart, eventend, brandname]);
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
  // 브랜드이름 변경 감지
  const handleBrandChange = (e) => {
    setBrandname(e.target.value);
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
  // 등록 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 브랜드이름, 할인율 정보 저장
  const handleSubmit = () => {
    console.log("이벤트 이름: ", eventname);
    console.log("브랜드 이름", brandname);
    console.log("이벤트 할인율", salepercent);
    console.log("이벤트 시작일: ", eventstart);
    console.log("이벤트 종료일: ", eventend);
    //setShowAlert(true); // Alert 보여주기
    alert("상품 등록 성공");
  };

  return (
    <>
      <Wrap>
        {/* 상품 정보 입력 칸 */}
        <Table>
          {/* 이벤트 이름 등록 */}
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
          {/* 브랜드 이름 */}
          <Row>
            <p className="cm-SBold16 col-Black">브랜드 이름</p>
            <EventBrandName onChange={handleBrandChange} />
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
    /* padding: 2rem; */
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 1rem;
`;
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
