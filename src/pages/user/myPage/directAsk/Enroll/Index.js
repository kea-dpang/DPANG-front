import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import AskTitle from "./AskTitle";
import AskContent from "./AskContent";
import { useLocation, useParams } from "react-router-dom";
import { DirectAskData } from "assets/data/user/DirectAskData";
import { FormProvider, useForm } from "react-hook-form";

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
  const location = useLocation();

  const [detail, setDetail] = useState();
  const [isEnrollPage, setIsEnrollPage] = useState(false); // '등록 페이지'인지 여부를 저장하는 상태

  /* detail 값 */
  useEffect(() => {
    const matchedData = DirectAskData.find((item) => item.askId === params); // DirectAskList에서 askId가 일치하는 데이터 찾기
    if (matchedData) {
      setDetail(matchedData); // 찾은 데이터를 detail 상태에 설정
    }

    // 클린업 함수
    return () => {
      setDetail(undefined);
    };
  }, [params]);

  /* enroll 값 */
  useEffect(() => {
    setIsEnrollPage(location.pathname.includes("enroll")); // 현재 위치가 'directask/enroll'인지 확인
  }, [location]);

  //////////////////////////////////
  /* form 값 */
  useEffect(() => {
    if (detail) {
      reset({
        category: detail.category, // detail 객체의 category 속성을 초기 값으로 설정
        askTitle: detail.title,
        askContent: detail.content,
      });
    } else {
      reset({
        category: "", // detail이 없는 경우, 초기 값을 빈 문자열로 설정 (새 글 작성할 때 필요)
        askTitle: "",
        askContent: "",
      });
    }
  }, [isEnrollPage, detail, reset]);

  const onSubmit = (data) => {
    console.log("카테고리 값 확인:", data.category);
    console.log("제목 값 확인:", data.askTitle);
    console.log("내용 값 확인:", data.askContent);
  };
  //////////////////////////////////

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">1:1 문의</h1>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Item>
            <p>유형</p>
            <Category control={control} detail={detail} />
          </Item>

          <Item>
            <p>제목</p>
            <AskTitle control={control} detail={detail} />
          </Item>

          <Item>
            <p>내용</p>
            <AskContent control={control} detail={detail} />
          </Item>

          {/* 답변 */}
          {detail && detail.askState === "답변 완료" && (
            <Item>
              <p>답변</p>
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
          {isEnrollPage ? (
            <Submit>
              <button
                type="submit"
                className="Btn_M_Navy"
                disabled={
                  // 버튼 비활성화
                  !watchAllFields.category ||
                  !watchAllFields.askTitle ||
                  !watchAllFields.askContent
                }
                style={
                  // 버튼 비활성화 스타일
                  !watchAllFields.category ||
                  !watchAllFields.askTitle ||
                  !watchAllFields.askContent
                    ? {
                        backgroundColor: "var(--semi-light-grey)",
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                문의접수
              </button>
            </Submit>
          ) : (
            detail &&
            detail.askState === "답변 대기" && (
              <Submit>
                <button
                  type="submit"
                  className="Btn_M_Navy"
                  disabled={
                    !watchAllFields.category ||
                    !watchAllFields.askTitle ||
                    !watchAllFields.askContent
                  }
                >
                  수정 완료
                </button>
              </Submit>
            )
          )}
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
