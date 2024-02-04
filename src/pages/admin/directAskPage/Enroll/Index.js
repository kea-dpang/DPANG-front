import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { askManageData } from "../../../../assets/data/admin/AdminAskData";
import { GET_QnA, PUT_Answer } from "@api/directAsk";
import { useConfirmAlert, useErrorAlert } from "@components/SweetAlert";

/* 답변 등록 & 문의 조회 */
const EnrollPage = () => {
  let params = useParams().askId;
  const [askData, setAskData] = useState();

  /* alert창 */
  const showErrorAlert = useErrorAlert();
  const showConfirmAlert = useConfirmAlert();

  useEffect(() => {
    GET_QnA(params)
      .then((data) => {
        console.log("값:", data.data);
        setAskData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // askData가 존재하지 않을 수 있으므로 조건부 연산자를 사용(옵셔널 체이닝)
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = () => {
    PUT_Answer(params, answer)
      .then((data) => {
        showConfirmAlert({
          title: "답변이 성공적으로 등록되었습니다.",
        });
        // window.location.reload();
      })
      .catch((error) => {
        alert("답변 등록에 실패하였습니다. 다시 시도해 주세요.");
        showErrorAlert({
          title: "답변 등록에 실패하였습니다.",
          text: "다시 시도해 주세요.",
        });
      });
  };

  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black"> 고객센터</Title>
      <Title className="cm-SBold18 col-Navy">1:1문의 답변</Title>
      <Main>
        <Option>
          <p>[{askData?.category}]</p>
          <p>{askData?.title}</p>
        </Option>
        {askData && askData.category == "상품" && (
          <Option>
            <p>상품명</p>
            <p>{askData?.itemName} </p>
          </Option>
        )}
        <Option2>
          <p>{askData?.createdAt} </p>
          <p>|</p>
          <p>{askData?.user.name}</p>
          <p>|</p>
          <p>{askData?.user.email}</p>
        </Option2>
        <Item>
          <p className="cm-XLBold36 col-Navy">Q.</p>
          <textarea
            cols="50"
            rows="10"
            className="cm-SRegular16"
            disabled
            // value={askData?.contents}
            value={askData?.contents || ""}
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
        <Item>
          <p className="cm-XLBold36 col-Navy">A.</p>
          <textarea
            cols="50"
            rows="10"
            className="cm-SRegular16"
            disabled={askData?.status === "답변 완료"}
            value={askData?.answer || answer}
            onChange={handleAnswerChange}
            style={{ padding: "2rem" }}
          ></textarea>
        </Item>
      </Main>
      <Button>
        {askData?.status === "답변 대기" && (
          <button
            className="Btn_S_Navy"
            onClick={handleSubmit}
            disabled={!answer}
            style={
              !answer
                ? {
                    backgroundColor: "var(--semi-light-grey)",
                    cursor: "not-allowed",
                  }
                : {}
            }
          >
            등록
          </button>
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
  border-bottom: 1px solid black;
`;
const Option = styled.div`
  border-top: 1px solid black;
  padding: 1rem;

  display: flex;
  gap: 2rem;
`;
const Option2 = styled.div`
  border-top: 1px solid black;
  padding: 0.5rem 1rem;

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
  justify-content: flex-end;
`;
