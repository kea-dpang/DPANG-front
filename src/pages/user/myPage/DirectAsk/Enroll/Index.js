import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import AskTitle from "./AskTitle";
import AskContent from "./AskContent";
import { useNavigate, useParams } from "react-router-dom";
import { DirectAskData } from "assets/data/user/DirectAskData";
import { FormProvider, useForm } from "react-hook-form";
import { GET_QnA, POST_Question, PUT_Question } from "@api/directAsk";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { useConfirmAlert } from "@components/SweetAlert";

const AskEnrollPage = () => {
  //////////////////////////////////
  const methods = useForm();
  const {
    handleSubmit,
    getValues,
    formState: { errors },
    control,
    reset,
    watch,
  } = methods;

  // 모든 필드의 값을 실시간으로 모니터링 -> 버튼 비활성화 위해
  const watchAllFields = watch();
  //////////////////////////////////

  let params = useParams().askId;
  const [detail, setDetail] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // alert
  const showConfirmAlert = useConfirmAlert();

  /* detail 값 서버로부터 가져오기 */
  useEffect(() => {
    // 문의 상세 조회
    if (params) {
      GET_QnA(params)
        .then((data) => {
          console.log("값:", data.data);
          setDetail(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // 문의 등록하기
      setDetail(undefined);
    }
  }, [params]);

  /* form 값 */
  useEffect(() => {
    // 문의 상세 조회 시 값 넣기
    if (detail) {
      reset({
        category: detail.category, // (form)detail 객체의 category 속성을 초기 값으로 설정
        askTitle: detail.title,
        askContent: detail.contents,
      });
    } else {
      // 문의 등록 시 값 초기화
      reset({
        category: "", // detail이 없는 경우, 초기 값을 빈 문자열로 설정 (새 글 작성할 때 필요)
        askTitle: "",
        askContent: "",
      });
    }
  }, [detail]);

  const onSubmit = (btnName, data) => {
    console.log(btnName);
    console.log("카테고리 값 확인:", data.category);
    console.log("제목 값 확인:", data.askTitle);
    console.log("내용 값 확인:", data.askContent);

    const dataArr = {
      category: data.category,
      askTitle: data.askTitle,
      askContent: data.askContent,
    };
    if (btnName === "edit") {
      PUT_Question(detail.qnaId, dataArr)
        .then((data) => {
          showConfirmAlert({
            title: "문의가 성공적으로 수정되었습니다.",
          });
          // window.location.reload();
        })
        .catch((error) => {
          alert("문의 수정이 실패하였습니다. 다시 시도해 주세요.");
        });
    } else {
      POST_Question(userId, dataArr) // 나중에 userId도 넘겨주기
        .then((data) => {
          console.log("답변 등록:", data);
          showConfirmAlert({
            title: "문의가 성공적으로 등록되었습니다.",
            navi: "/user/mypage/directAsk",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">1:1 문의</h1>
      </Title>
      <form>
        <FormProvider {...methods}>
          <Item>
            <h2>유형</h2>
            <Category control={control} detail={detail} />
          </Item>

          <Item>
            <h2>제목</h2>
            <AskTitle control={control} detail={detail} />
          </Item>

          {detail && detail.category == "상품" && (
            <Item>
              <h2>상품명</h2>
              <textarea
                cols="30"
                rows="10"
                className="cm-SRegular16"
                disabled={true}
                value={detail.itemName}
                style={{ height: "3.5rem" }}
              ></textarea>
            </Item>
          )}

          <Item>
            <h2>내용</h2>
            <AskContent control={control} detail={detail} />
          </Item>

          {/* 답변 */}
          {detail && detail.status === "답변 완료" && (
            <Item>
              <h2>답변</h2>
              <textarea
                cols="50"
                rows="10"
                className="cm-SRegular16"
                disabled={true}
                value={detail.answer}
              ></textarea>
            </Item>
          )}

          {/* 버튼 */}
          <Submit>
            {!params ? (
              // 문의 등록하기 페이지
              <SubmitBtn
                type="button"
                className="Btn_M_Navy"
                onClick={() => onSubmit("submit", watchAllFields)} // 버튼이 2개라서 onClick으로 대체하므로 type은 submit이 아님. 그리고 <form onSubmit={handleSubmit(onSubmit)}>도 삭제
                disabled={
                  !watchAllFields.category ||
                  !watchAllFields.askTitle ||
                  !watchAllFields.askContent
                }
              >
                문의 접수
              </SubmitBtn>
            ) : (
              // 문의 수정 페이지
              detail &&
              !detail.answer && (
                <SubmitBtn
                  type="button"
                  className="Btn_M_Navy"
                  onClick={() => onSubmit("edit", watchAllFields)}
                  disabled={
                    !watchAllFields.category ||
                    !watchAllFields.askTitle ||
                    !watchAllFields.askContent
                  }
                >
                  수정 완료
                </SubmitBtn>
              )
            )}
          </Submit>
        </FormProvider>
      </form>
    </Wrap>
  );
};

export default AskEnrollPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;

  border-bottom: 1px solid var(--black);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.44rem;

  position: relative;

  & h2 {
    width: 3rem;
  }
  & textarea {
    width: 61rem;
    min-height: 3rem;

    border-radius: 0.3125rem;
    border: 1px solid var(--dark-grey, #bcbcbc);
    background: var(--white, #fff);
    margin: 8px; // margin을 주고 싶은 경우
    padding: 1rem; // padding을 주고 싶은 경우
    box-sizing: border-box;

    &:focus {
      border-color: var(--dark-grey, #bcbcbc); // 클릭했을 때 테두리 색상
      outline: none; // 대부분의 브라우저에서 텍스트 필드에 자동으로 적용되는 아웃라인을 제거
    }
  }
`;

const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
const SubmitBtn = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "var(--semi-light-grey)" : "var(--navy)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
