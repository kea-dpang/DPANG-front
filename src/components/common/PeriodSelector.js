import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/elementStyle.scss";
import { useRecoilState } from "recoil";
import { periodAtom } from "../../recoil/user/PeriodSelectAtom";

const periodOptions = ["오늘", "7일", "1개월", "3개월", "1년"];

const PeriodSelector = () => {
  // 원하는 기간 로직
  const getFutureDate = (days) => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    const year = futureDate.getFullYear();
    const month = (futureDate.getMonth() + 1).toString().padStart(2, "0");
    const date = futureDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${date}`;
  };

  const [PeriodBtn, setPeriodBtn] = useState(null); // 스타일 위해
  const [startDate, setStartDate] = useState(getFutureDate(0));
  const [endDate, setEndDate] = useState(getFutureDate(0));

  // 리코일 상태 추가
  const [period, setPeriod] = useRecoilState(periodAtom);

  // 기간 버튼->날짜 변경 로직
  const handlePeriodBtn = (index) => {
    setPeriodBtn(index);
    setEndDate(getFutureDate(0));

    if (index === 0) {
      // 오늘
      setStartDate(getFutureDate(0));
    } else if (index === 1) {
      // 7일
      setStartDate(getFutureDate(-7));
    } else if (index === 2) {
      // 1개월
      setStartDate(getFutureDate(-30));
    } else if (index === 3) {
      // 3개월
      setStartDate(getFutureDate(-90));
    } else if (index === 4) {
      // 1년
      setStartDate(getFutureDate(-365));
    }
  };

  // 조회된 날짜
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("선택된 날짜:", startDate, "~", endDate);

    // 리코일 상태 업데이트
    setPeriod({ startDate, endDate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="cm-SBold16">조회 기간</h1>

      <Period>
        {periodOptions.map((option, index) => (
          <BtnItem
            key={index}
            type="button"
            className="cm_SRegular16"
            selected={PeriodBtn === index} // 스타일 props
            onClick={() => handlePeriodBtn(index)}
          >
            {option}
          </BtnItem>
        ))}
      </Period>

      <Calender
        onChange={(e) => {
          setPeriodBtn(null);
        }}
      >
        <input
          className="cm-SRegular16"
          type="date"
          id="startDate"
          name="start"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        ~
        <input
          className="cm-SRegular16"
          type="date"
          id="endDate"
          name="end"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Calender>

      <SubmitBtn type="submit" className="cm-SBold16">
        조회
      </SubmitBtn>
    </Form>
  );
};

export default PeriodSelector;

const Form = styled.form`
  background-color: var(--white);

  padding: 2.625rem 3.3125rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);

  display: flex;
  padding: 2.625rem 3.3125rem;
  align-items: center;
  /* gap: 1.5625rem; */
  justify-content: space-evenly;
  /* flex-wrap: nowrap; */
`;
const Period = styled.div``;
const BtnItem = styled.button`
  width: 5.3125rem;
  height: 2.25rem;

  border: 1px solid var(--semi-light-grey, #cfcfcf);
  color: ${(props) => (props.selected ? "var(--white)" : "var(--navy)")};
  background-color: ${(props) =>
    props.selected ? "var(--navy)" : "var(--white)"};

  &:hover {
    background-color: var(--navy);
    color: var(--white);
  }
`;
const Calender = styled.div`
  width: 24.3rem;
  height: 2.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubmitBtn = styled.button`
  background: var(--navy, #043277);
  color: var(--white);
  padding: 0.4375rem 2.3125rem;

  display: flex;
  align-items: center;
`;
