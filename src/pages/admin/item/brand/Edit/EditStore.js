import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@styles/fonts.css";
import InputEdit from "./InputEdit";
import EventDate from "@adminPages/eventPage/Enroll/EventDate";
import { useNavigate } from "react-router-dom";
import { GET_BrandInfo, PUT_Brand } from "@api/Brand";
import { useConfirmAlert } from "@components/SweetAlert";

const Index = ({ id }) => {
  const showConfirmAlert = useConfirmAlert();

  const dayjs = require("dayjs");
  const [storeData, setStoreData] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    sellerStaff: "",
    manager: "",
    expiryDate: dayjs(),
    note: "",
  });
  useEffect(() => {
    GET_BrandInfo(id)
      .then((data) => {
        console.log("Store data : ", data.data);
        setStoreData(data.data);
        setInputValue({
          name: data.data.name || "",
          phone: data.data.phone || "",
          sellerStaff: data.data.sellerStaff || "",
          manager: data.data.manager || "",
          expiryDate: dayjs(data.data.expiryDate) || dayjs(),
          note: data.data.note || "",
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

  // 수정 완료 버튼 : 판매처명, 판매처 연락처, 판매처 담당 직원, 담당자, 계약 종료일 정보 저장
  const handleSubmit = () => {
    PUT_Brand(id, inputValue)
      .then((data) => {
        showConfirmAlert({
          title: "판매처 정보가 수정되었습니다.",
          navi: `/admin/brand`,
        });
        console.log("수정 완료 : ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {Object.keys(storeData).length > 0 && (
        <Wrap>
          {/* 상품 정보 수정 칸 */}
          <Table>
            {/* 판매처명 등록 */}
            <Row>
              <p className="cm-SBold16 col-Black">판매처명</p>
              <InputEdit
                value={inputValue.name}
                id={"name"}
                placeholder={"판매처를 입력해주세요"}
                onChange={handleNameChange}
              />
            </Row>

            {/*판매처 연락처 등록*/}
            <Row>
              <p className="cm-SBold16 col-Black">판매처 연락처</p>
              <InputEdit
                value={inputValue.phone}
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
              <InputEdit
                value={inputValue.sellerStaff}
                id={"sellerStaff"}
                placeholder={"판매처 담당 직원"}
                onChange={handleEmployeeChange}
              />
              <p className="cm-SBold16 col-Black" style={{ width: "32.9rem" }}>
                담당자
              </p>
              <InputEdit
                value={inputValue.manager}
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
              <InputEdit
                value={inputValue.note}
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
              수정하기
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
