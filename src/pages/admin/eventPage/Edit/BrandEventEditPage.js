import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import InputEdit from "@adminPages/item/brand/Edit/InputEdit";
import EventDate from "../Enroll/EventDate";
import EventImage from "../Enroll/EventImage";
import { GET_BrandEventInfo, PUT_BrandEvent } from "@api/event";
import { useNavigate } from "react-router-dom";
import { POST_Image } from "@api/image";

const Index = ({ eventId }) => {
  const dayjs = require("dayjs");
  const [storeData, setStoreData] = useState([]);
  const [inputValue, setInputValue] = useState({
    discountRate: "",
    eventName: "",
    startDate: dayjs(),
    endDate: dayjs(),
    sellerId: "",
    imagePath: "",
  });
  useEffect(() => {
    GET_BrandEventInfo(eventId)
      .then((data) => {
        console.log("Store data : ", data.data);
        setStoreData(data.data);
        setInputValue({
          discountRate: data.data.discountRate || "",
          eventName: data.data.eventName || "",
          sellerId: data.data.sellerId || "",
          imagePath: data.data.imagePath || "",
          startDate: dayjs(data.data.startDate) || dayjs(),
          endDate: dayjs(data.data.endDate) || dayjs(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      inputValue.discountRate !== "" &&
      inputValue.eventName !== "" &&
      // inputValue.sellerId !== "" &&
      inputValue.imagePath !== "" &&
      inputValue.startDate !== "" &&
      inputValue.endDate !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.discountRate,
    inputValue.eventName,
    inputValue.imagePath,
    // inputValue.sellerId,
    inputValue.startDate,
    inputValue.endDate,
  ]);

  // 이벤트 이름 변경 감지
  const handleNameChange = (e) => {
    setInputValue({ ...inputValue, eventName: e.target.value });
  };
  // 이벤트 시작일 변경 감지
  const handleStartChange = (date, details) => {
    setInputValue({ ...inputValue, startDate: date });
  };
  // 이벤트 종료일 변경 감지
  const handleEndChange = (date) => {
    setInputValue({ ...inputValue, endDate: date });
  };
  const handleBrandChange = (e) => {
    // setInputValue({ ...inputValue, eventName: e.target.value });
  };
  // 이벤트 할인율 변경 감지
  const handlePercentChange = (e) => {
    setInputValue({ ...inputValue, discountRate: e.target.value });
  };
  // 이벤트 이미지 관리
  const handleImageChange = (file) => {
    console.log("file: ", file);
    POST_Image(file)
      .then((data) => {
        console.log("사진 등록", data.data.uploadedFileUrl);
        setInputValue({ ...inputValue, imagePath: data.data.uploadedFileUrl });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageDelete = () => {
    setInputValue({ ...inputValue, imagePath: null });
  };
  // 수정 완료 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 상품코드, 할인율, 적용상품 정보 저장
  const handleSubmit = () => {
    console.log("수정할게: ", inputValue);
    PUT_BrandEvent(eventId, inputValue)
      .then((data) => {
        navi(`/admin/event`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {storeData && (
        <Wrap>
          {/* 상품 정보 수정칸 */}
          <Table>
            {/* 이벤트 이름 수정 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 이름</p>
              <InputEdit
                value={inputValue.eventName}
                id={"eventName"}
                placeholder={"이벤트 이름을 입력해주세요"}
                onChange={handleNameChange}
              />
            </Row>
            {/* 이벤트 시작일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 시작일</p>
              <EventDate
                label="이벤트 시작일"
                date={dayjs(inputValue.startDate)}
                onChange={handleStartChange}
              />
            </Row>
            {/* 이벤트 종료일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 종료일</p>
              <EventDate
                label="이벤트 종료일"
                date={dayjs(inputValue.endDate)}
                onChange={handleEndChange}
              />
            </Row>
            {/* 브랜드 이름 */}
            {/* <Row>
              <p className="cm-SBold16 col-Black">브랜드 이름</p>
              <InputEdit
                value={inputValue.sellerId}
                id={"sellerId"}
                placeholder={"브랜드 이름을 입력해주세요"}
                onChange={handleBrandChange}
              />
            </Row> */}
            {/* 이벤트 할인율 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 할인율</p>
              <InputEdit
                value={inputValue.discountRate}
                id={"discountRate"}
                placeholder={"이벤트 할인율을 입력해주세요."}
                onChange={handlePercentChange}
              />
            </Row>
            {/* 이벤트 내용(사진) */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 내용</p>
              <EventImage
                eventImage={inputValue.imagePath}
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
              수정완료
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
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
