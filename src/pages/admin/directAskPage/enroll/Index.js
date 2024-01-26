import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { askManageData } from "../../../../assets/data/admin/AdminAskData";

const EnrollPage = () => {
  let params = useParams().askId;
  // const askData = askManageData.find(data => parseInt(params));
  // const [answer, setAnswer] = useState(askData.answer);
  // parseInt를 사용하여 params를 숫자로 변환하고 비교해야 합니다.
  const askData = askManageData.find((data) => data.id === parseInt(params));

  // askData가 존재하지 않을 수 있으므로 조건부 연산자를 사용합니다.
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (askData) {
      setAnswer(askData.answer);
      console.log("askData:", askData);
    }
  }, [askData]);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black"> 고객센터</Title>
      <Title className="cm-SBold18 col-Navy">1:1문의 답변</Title>
      <Main>
        <Option>
          <p>{askData.category}</p>
          <p>{askData.title}</p>
        </Option>
        <Option2>
          <p>{askData.date} </p>
          <p>|</p>
          <p>{askData.name}</p>
          <p>|</p>
          <p>{askData.email}</p>
        </Option2>
        <Item>
          <p className="cm-XLBold36 col-Navy">Q.</p>
          <textarea
            cols="50"
            rows="10"
            className="cm-SRegular16"
            disabled
            value={askData.content}
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
        <Item>
          <p className="cm-XLBold36 col-Navy">A.</p>
          <textarea
            cols="50"
            rows="10"
            className="cm-SRegular16"
            disabled={askData.state === "답변완료"}
            value={answer}
            onChange={handleAnswerChange}
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
      </Main>
      <Button>
        {askData.state === "답변대기" ? (
          <button className="Btn_S_Navy">등록</button>
        ) : (
          <button className="Btn_S_Navy">수정</button>
        )}
      </Button>
    </Wrap>
  );
};

export default EnrollPage;

const Wrap = styled.div`
  padding: 0 7.5rem 0 7.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: end; */
`;
const Title = styled.div`
  display: flex;
  padding: 2.125rem 0rem 0.9375rem 0;
`;
const Main = styled.div`
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
`;
const Option = styled.div`
  border-top: 1px solid black;
  /* border: 1px solid black; */
  padding: 1rem;

  display: flex;
  gap: 2rem;
`;
const Option2 = styled.div`
  border-top: 1px solid black;
  padding: 0.38rem;

  display: flex;
  gap: 3rem;
`;
const Item = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 1.12rem;
  textarea {
    width: 62rem;
  }
  textarea::placeholder {
    white-space: pre-line;
  }
`;
const Button = styled.div`
  padding-top: 2rem;
  display: flex;
  /* align-content: flex-end; */
  justify-content: flex-end;
`;
