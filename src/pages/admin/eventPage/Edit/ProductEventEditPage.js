import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import InputEdit from "@adminPages/item/brand/Edit/InputEdit";
import { GET_ItemEventInfo } from "@api/event";
import EventImage from "../Enroll/EventImage";
import { POST_Image } from "@api/image";
import EventDate from "../Enroll/EventDate";
import ProductList from "../Enroll/ProductList";
import ProductCodeInput from "../Enroll/ProductCodeInput";

const Index = ({ eventId }) => {
  console.log("이벤트아이디: ", eventId);
  const dayjs = require("dayjs");
  const [inputValue, setInputValue] = useState({
    discountRate: "",
    eventName: "",
    startDate: dayjs(),
    endDate: dayjs(),
    imagePath: "",
  });
  useEffect(() => {
    GET_ItemEventInfo(eventId)
      .then((data) => {
        console.log("상품 이벤트 상세조회 data : ", data.data);
        setInputValue({
          discountRate: data.data.discountRate || "",
          eventName: data.data.eventName || "",
          imagePath: data.data.imagePath || "",
          startDate: dayjs(data.data.startDate) || dayjs(),
          endDate: dayjs(data.data.endDate) || dayjs(),
          targetItems: data.data.targetItems || [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("inputValue: ", inputValue.targetItems);
  }, [inputValue]);
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      inputValue.discountRate !== "" &&
      inputValue.eventName !== "" &&
      inputValue.imagePath !== "" &&
      inputValue.startDate !== "" &&
      inputValue.endDate !== "" &&
      inputValue.target.length > 0
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.discountRate,
    inputValue.eventName,
    inputValue.imagePath,
    inputValue.target,
    inputValue.startDate,
    inputValue.endDate,
  ]);

  // 이벤트 이름 변경 감지
  const handleNameChange = (e) => {
    setInputValue((prevData) => ({
      ...prevData,
      eventName: e.target.value,
    }));
  };
  // 이벤트 시작일 변경 감지
  const handleStartChange = (date) => {
    setInputValue((prevData) => ({
      ...prevData,
      startDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  // 이벤트 종료일 변경 감지
  const handleEndChange = (date) => {
    setInputValue((prevData) => ({
      ...prevData,
      endDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  // 상품 추가, 삭제
  const handleAddProduct = (product) => {
    setInputValue({
      ...inputValue,
      targetItems: [...inputValue.targetItems, product],
    });
  };
  const handleProductDelete = (productToDelete) => {
    setInputValue((prevState) => ({
      ...prevState,
      targetItems: prevState.targetItems.filter(
        (product) => product !== productToDelete
      ),
    }));
  };
  // 이벤트 할인율 변경 감지
  const handlePercentChange = (e) => {
    setInputValue((prevData) => ({
      ...prevData,
      discountRate: e.target.value,
    }));
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
  // 수정 완료 버튼
  const handleSubmit = () => {
    // 이미지가 null값이면 수정 못하게 하기
    console.log("상품 이벤트 수정할게: ", inputValue);
  };

  return (
    <>
      {inputValue && (
        <Wrap>
          {/* 상품 정보 수정칸 */}
          <Table>
            {/* 이벤트 이름 수정 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 이름</p>
              <InputEdit
                value={inputValue.itemName}
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
            {/* 대상 상품 코드 */}
            <Row>
              <p className="cm-SBold16 col-Black">대상 상품 코드</p>
              <ProductCodeInput onAddProduct={handleAddProduct} />
            </Row>
            {/* 이벤트 적용 상품 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 적용 상품</p>
              <ProductList
                productList={inputValue.targetItems}
                onProductDelete={handleProductDelete}
              />
            </Row>
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
