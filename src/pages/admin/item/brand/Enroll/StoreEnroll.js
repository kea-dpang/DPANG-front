import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import InputText from "@adminPages/item/product/Enroll/InputText";
import dayjs from "dayjs";
import EventDate from "@adminPages/eventPage/Enroll/EventDate";
import { POST_Brand } from "@api/Brand";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    sellerStaff: "",
    manager: "",
    expiryDate: dayjs(),
    note: "",
  });
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      inputValue.name !== "" &&
      inputValue.phone !== "" &&
      inputValue.sellerStaff !== "" &&
      inputValue.manager !== "" &&
      inputValue.expiryDate !== "" &&
      inputValue.note !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.name,
    inputValue.phone,
    inputValue.note,
    inputValue.sellerStaff,
    inputValue.manager,
    inputValue.expiryDate,
  ]);

  // 판매처명 변경 감지
  const handleNameChange = (e) => {
    setInputValue({ ...inputValue, name: e.target.value });
  };
  // 판매처 연락처 변경 감지
  const handleNumberChange = (e) => {
    setInputValue({ ...inputValue, phone: e.target.value });
  };
  //판매처 담당 직원 변경 감지
  const handleEmployeeChange = (e) => {
    setInputValue({ ...inputValue, sellerStaff: e.target.value });
  };
  //담당자 변경 감지
  const handleDirectorChange = (e) => {
    setInputValue({ ...inputValue, manager: e.target.value });
  };
  // 계약 종료일 변경 감지
  const handleDateChange = (date, details) => {
    setInputValue({ ...inputValue, expiryDate: date });
  };
  const handlenoteChange = (e) => {
    setInputValue({ ...inputValue, note: e.target.value });
  };

  // 등록 버튼 : 판매처명, 판매처 연락처, 판매처 담당 직원,, 담당자, 계약 만료일 정보 저장
  const handleSubmit = () => {
    POST_Brand(inputValue)
      .then((data) => {
        console.log("브랜드 등록", data.data);
        navi(`/admin/brand`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Wrap>
        <Table>
          {/* 판매처명 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">판매처명</p>
            <InputText
              id={"name"}
              placeholder={"판매처를 입력해주세요"}
              onChange={handleNameChange}
            />
          </Row>

          {/*판매처 연락처 등록*/}
          <Row>
            <p className="cm-SBold16 col-Black">판매처 연락처</p>
            <InputText
              id={"phone"}
              placeholder={"판매처 연락처를 입력해주세요"}
              onChange={handleNumberChange}
            />
          </Row>

          {/*판매처 담당 직원, 담당자*/}
          <Row>
            <p className="cm-SBold16 col-Black" style={{ width: "32.9rem" }}>
              판매처 담당 직원
            </p>
            <InputText
              id={"sellerStaff"}
              placeholder={"판매처 담당 직원"}
              onChange={handleEmployeeChange}
            />
            <p className="cm-SBold16 col-Black" style={{ width: "32.9rem" }}>
              담당자
            </p>
            <InputText
              id={"manager"}
              placeholder={"자사 담당자"}
              onChange={handleDirectorChange}
            />
          </Row>

          {/* 계약 종료일 */}
          <Row>
            <p className="cm-SBold16 col-Black">계약 종료일</p>
            <EventDate
              label="계약 종료일"
              date={inputValue.expiryDate}
              onChange={handleDateChange}
            />
          </Row>

          {/* 비고 */}
          <Row>
            <p className="cm-SBold16 col-Black">비고</p>
            <InputText
              id={"note"}
              placeholder={"비고"}
              onChange={handlenoteChange}
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
            판매처 등록
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
