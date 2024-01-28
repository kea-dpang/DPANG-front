import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import InputText from "@adminPages/item/product/Enroll/InputText";
import dayjs from "dayjs";
import EventDate from "@adminPages/eventPage/Enroll/EventDate";

const Index = () => {
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [storename, setStoreName] = useState("");
  const [storenumber, setStoreNumber] = useState("");
  const [storeemployee, setStoreEmployee] = useState("");
  const [storedirector, setStoreDirector] = useState("");
  const [finishdate, setFinishDate] = useState(dayjs());
  const [etc, setEtc] = useState("");
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      storename !== "" &&
      storenumber !== "" &&
      storeemployee !== "" &&
      storedirector !== "" &&
      finishdate !== "" &&
      etc !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [storename, storenumber, etc, storeemployee, storedirector, finishdate]);

  // 판매처명 변경 감지
  const handleNameChange = (e) => {
    setStoreName(e.target.value);
  };
  // 판매처 연락처 변경 감지
  const handleNumberChange = (e) => {
    setStoreNumber(e.target.value);
  };
  //판매처 담당 직원 변경 감지
  const handleEmployeeChange = (e) => {
    setStoreEmployee(e.target.value);
  };
  //담당자 변경 감지
  const handleDirectorChange = (e) => {
    setStoreDirector(e.target.value);
  };
  // 계약 종료일 변경 감지
  const handleDateChange = (date, details) => {
    setFinishDate(date);
    console.log(date);
  };
  const handleEtcChange = (e) => {
    setEtc(e.target.value);
  };

  // 등록 버튼 : 판매처명, 판매처 연락처, 판매처 담당 직원,, 담당자, 계약 만료일 정보 저장
  const handleSubmit = () => {
    console.log("판매처명: ", storename);
    console.log("판매처 연락처", storenumber);
    console.log("판매처 담당 직원", storeemployee);
    console.log("담당자", storedirector);
    console.log("계약 만료일", finishdate);
  };

  return (
    <>
      <Wrap>
        <Table>
          {/* 판매처명 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">판매처명</p>
            <InputText
              id={"storename"}
              placeholder={"판매처를 입력해주세요"}
              onChange={handleNameChange}
            />
          </Row>

          {/*판매처 연락처 등록*/}
          <Row>
            <p className="cm-SBold16 col-Black">판매처 연락처</p>
            <InputText
              id={"storenumber"}
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
              id={"storeemployee"}
              placeholder={"판매처 담당 직원"}
              onChange={handleEmployeeChange}
            />
            <p className="cm-SBold16 col-Black" style={{ width: "32.9rem" }}>
              담당자
            </p>
            <InputText
              id={"storedirector"}
              placeholder={"자사 담당자"}
              onChange={handleDirectorChange}
            />
          </Row>

          {/* 계약 종료일 */}
          <Row>
            <p className="cm-SBold16 col-Black">계약 종료일</p>
            <EventDate
              label="계약 종료일"
              date={finishdate}
              onChange={handleDateChange}
            />
          </Row>

          {/* 비고 */}
          <Row>
            <p className="cm-SBold16 col-Black">비고</p>
            <InputText
              id={"etc"}
              placeholder={"비고"}
              onChange={handleEtcChange}
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
