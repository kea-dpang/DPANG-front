import styled from "styled-components";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "@styles/fonts.css";
import TempDetailData from "@data/user/ProductEventDetailData";
import InputEdit from "@adminPages/item/brand/Edit/InputEdit";
import EventDate from "../Enroll/EventDate";
import EventImage from "../Enroll/EventImage";

const Index = ({ eventId }) => {
  const [eventData, setEventData] = useState(null);
  // eventId가 인식되면 id를 통해 상품상세정보 저장 (eventData)
  useEffect(() => {
    const matchedData = TempDetailData.find(
      (data) => data.eventId === Number(eventId)
    );
    setEventData(matchedData);
  }, [eventId]);

  useEffect(() => {
    console.log(eventData);
  }, [eventData]);

  // 이벤트 이름 변경 감지
  const handleNameChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  };
  // 이벤트 시작일 변경 감지
  const handleStartChange = (date) => {
    setEventData((prevData) => ({
      ...prevData,
      startDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  // 이벤트 종료일 변경 감지
  const handleEndChange = (date) => {
    setEventData((prevData) => ({
      ...prevData,
      endDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  const handleBrandChange = (e) => {
    // TODO: 브랜드 이름 값 변경 코드
  };
  // 이벤트 할인율 변경 감지
  const handlePercentChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      discount: e.target.value,
    }));
  };
  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventData((prev) => ({ ...prev, eventBannerUrL: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  // 이미지 삭제 감지
  const handleImageDelete = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      eventBannerUrL: null,
    }));
  };
  // 수정 완료 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 상품코드, 할인율, 적용상품 정보 저장
  const handleSubmit = () => {
    // 이미지가 null값이면 수정 못하게 하기
    console.log("이벤트 이름: ", eventData.title);
    console.log("적용상품", eventData.eventItems);
    console.log("이벤트 할인율", eventData.discount);
    //setShowAlert(true); // Alert 보여주기
    alert("이벤트 수정 성공");
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {eventData && (
        <Wrap>
          {/* 상품 정보 수정칸 */}
          <Table>
            {/* 이벤트 이름 수정 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 이름</p>
              <InputEdit
                value={eventData.title}
                id={"eventname"}
                placeholder={"이벤트 이름을 입력해주세요"}
                onChange={handleNameChange}
              />
            </Row>
            {/* 이벤트 시작일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 시작일</p>
              <EventDate
                label="이벤트 시작일"
                date={dayjs(eventData.startDate)}
                onChange={handleStartChange}
              />
            </Row>
            {/* 이벤트 종료일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 종료일</p>
              <EventDate
                label="이벤트 종료일"
                date={dayjs(eventData.endDate)}
                onChange={handleEndChange}
              />
            </Row>
            {/* 브랜드 이름 */}
            <Row>
              <p className="cm-SBold16 col-Black">브랜드 이름</p>
              <InputEdit
                value={eventData.title}
                id={"brandname"}
                placeholder={"이벤트 이름을 입력해주세요"}
                onChange={handleNameChange}
              />
            </Row>
            {/* 이벤트 할인율 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 할인율</p>
              <InputEdit
                value={eventData.discount}
                id={"salepercent"}
                placeholder={"이벤트 할인율을 입력해주세요."}
                onChange={handlePercentChange}
              />
            </Row>
            {/* 이벤트 내용(사진) */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 내용</p>
              <EventImage
                eventImage={eventData.eventBannerUrL}
                handleImageDelete={handleImageDelete}
                handleImageChange={handleImageChange}
              />
            </Row>
          </Table>

          {/* 등록버튼 */}
          <Submit>
            <button type="submit" className="Btn_S_Navy" onClick={handleSubmit}>
              수정 완료
            </button>
          </Submit>
        </Wrap>
      )}
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
