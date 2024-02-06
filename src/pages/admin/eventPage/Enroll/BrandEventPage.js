import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import dayjs from "dayjs";
import EventDate from "./EventDate";
import EventImage from "./EventImage";
import InputText from "@adminPages/item/product/Enroll/InputText";
import { POST_Image } from "@api/image";
import { useNavigate } from "react-router-dom";
import { POST_BrandEvent } from "@api/event";
import SearchDropdown from "@components/SearchDropdown";
import { GET_BrandList } from "@api/Brand";

const Index = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    GET_BrandList()
      .then((data) => {
        console.log("brand : ", data.data.content);
        const brandData = data.data.content.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setBrand(brandData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [inputValue, setInputValue] = useState({
    discountRate: "",
    eventName: "",
    startDate: dayjs(),
    endDate: dayjs(),
    imagePath: "",
    sellerId: "",
  });
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      inputValue.eventName !== "" &&
      inputValue.discountRate !== "" &&
      inputValue.imagePath &&
      inputValue.startDate &&
      inputValue.endDate &&
      inputValue.sellerId !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.eventName,
    inputValue.discountRate,
    inputValue.imagePath,
    inputValue.startDate,
    inputValue.endDate,
    inputValue.sellerId,
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
  const handleEndChange = (date, details) => {
    setInputValue({ ...inputValue, endDate: date });
  };
  // 브랜드이름 변경 감지
  const handleBrandChange = (e) => {
    setInputValue({ ...inputValue, sellerId: e });
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
  // 등록 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 브랜드이름, 할인율 정보 저장
  const handleSubmit = () => {
    console.log("등록할게: ", inputValue);
    POST_BrandEvent(inputValue)
      .then((data) => {
        console.log("브랜드 이벤트 등록");
        navi(`/admin/event`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Wrap>
        {/* 상품 정보 입력 칸 */}
        <Table>
          {/* 이벤트 이름 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 이름</p>
            <InputText
              id={"eventName"}
              placeholder={"이벤트 이름을 입력해주세요"}
              onChange={handleNameChange}
            />{" "}
          </Row>
          {/* 이벤트 시작일 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 시작일</p>
            <EventDate
              label="이벤트 시작일"
              date={inputValue.startDate}
              onChange={handleStartChange}
            />
          </Row>
          {/* 이벤트 종료일 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 종료일</p>
            <EventDate
              label="이벤트 종료일"
              date={inputValue.endDate}
              onChange={handleEndChange}
            />
          </Row>
          {/* 브랜드 이름 */}
          <Row>
            <p className="cm-SBold16 col-Black">브랜드 이름</p>
            <SearchDropdown
              id="brand"
              options={brand}
              width={"100%"}
              onChange={handleBrandChange}
            />
          </Row>
          {/* 이벤트 할인율 */}
          <Row>
            <p className="cm-SBold16 col-Black">이벤트 할인율</p>
            <InputText
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
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
